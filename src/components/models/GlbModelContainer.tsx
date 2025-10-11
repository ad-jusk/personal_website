import { Box, Flex } from "@chakra-ui/react";
import { ReactElement, useCallback, useEffect, useRef, useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { loadGLTFModel } from "@utils/loadGLTFModel";
import { GlbSpinner } from "./GlbSpinner";
import { PiMouseLeftClickFill, PiMouseRightClickFill, PiMouseScrollBold } from "react-icons/pi";

const easeOutCirc = (x: number): number => {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
};

export const GlbModelContainer = (): ReactElement => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isShowControls, setShowControls] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  const handleWindowResize = useCallback(() => {
    const { current: container } = containerRef;
    const { current: renderer } = rendererRef;
    if (container && renderer) {
      renderer.setSize(container.clientWidth, container.clientHeight);
    }
  }, []);

  useEffect(() => {
    const { current: container } = containerRef;
    if (!container) {
      return;
    }
    const width = container.clientWidth;
    const height = container.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const target = new THREE.Vector3(0, 2, 0);
    const initialCameraPosition = new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      150 * Math.cos(0.2 * Math.PI)
    );
    const scale = height * 0.005 + 6;
    const camera = new THREE.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);
    camera.position.copy(initialCameraPosition);
    camera.lookAt(target);

    const ambientLight = new THREE.AmbientLight(0xcccccc, 2.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xdddddd, Math.PI);
    const initialDirLightPosition = new THREE.Vector3(0, 10, 0);
    directionalLight.position.copy(initialDirLightPosition);
    directionalLight.lookAt(target);
    directionalLight.castShadow = true;
    directionalLight.shadow.bias = -0.001;
    directionalLight.shadow.normalBias = 0.02;
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.target = target;

    let req: number = 0;
    let frame: number = 0;
    const animate = () => {
      req = requestAnimationFrame(animate);
      frame = frame <= 100 ? frame + 1 : frame;
      if (frame <= 100) {
        const p = initialCameraPosition;
        const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;
        camera.position.y = 10;
        camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
        camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
        camera.lookAt(target);
      } else {
        controls.update();
      }
      renderer.render(scene, camera);
    };

    loadGLTFModel("./models/lowpoly_house.glb", true, {
      receiveShadow: true,
      castShadow: true,
    }).then((gltf) => {
      scene.add(gltf);
      animate();
      setLoading(false);
    });

    return () => {
      cancelAnimationFrame(req);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [handleWindowResize]);

  return (
    <Box
      ref={containerRef}
      mx="auto"
      mb={"50px"}
      w={[200, 400, 600]}
      h={[200, 400, 600]}
      pos={"relative"}
      onMouseEnter={(e) => setShowControls(true)}
      onMouseLeave={(e) => setShowControls(false)}
    >
      {isLoading && <GlbSpinner />}
      {!isLoading && isShowControls && (
        <Flex pos={"absolute"} left={0} bottom={0} columnGap={3}>
          <Flex align={"center"}>
            <PiMouseLeftClickFill size={24} /> move
          </Flex>
          <Flex align={"center"}>
            <PiMouseRightClickFill size={24} /> pan
          </Flex>
          <Flex align={"center"}>
            <PiMouseScrollBold size={24} /> zoom
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

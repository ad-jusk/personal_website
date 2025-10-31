import { Box, Flex } from "@chakra-ui/react";
import { ReactElement, useCallback, useEffect, useRef, useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { loadGLTFModel } from "@utils/loadGLTFModel";
import { GlbSpinner } from "./GlbSpinner";
import { PiMouseLeftClickFill, PiMouseRightClickFill, PiMouseScrollBold } from "react-icons/pi";
import { useLocation } from "react-router-dom";

const easeOutCirc = (x: number): number => {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
};

export const GlbModelContainer = (): ReactElement => {
  const location = useLocation();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isShowControls, setShowControls] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const modelRef = useRef<THREE.Group<THREE.Object3DEventMap> | null>(null);
  const frameRef = useRef<number>(0);

  const pathnameToModel = new Map<string, string>([
    ["/", "lowpoly_house.glb"],
    ["/experience", "lowpoly_desk.glb"],
    ["/skills", "lowpoly_house.glb"],
    ["/contact", "lowpoly_phone.glb"],
  ]);

  const handleWindowResize = useCallback(() => {
    const { current: container } = containerRef;
    const { current: renderer } = rendererRef;
    if (container && renderer) {
      renderer.setSize(container.clientWidth, container.clientHeight);
    }
  }, []);

  // INIT SCENE ON MOUNT
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
      50,
      150 * Math.cos(0.2 * Math.PI)
    );
    const scale = height * 0.005 + 6;
    const camera = new THREE.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);
    camera.position.copy(initialCameraPosition);
    camera.lookAt(target);

    const ambientLight = new THREE.AmbientLight(0xcccccc, 2.5);
    scene.add(ambientLight);

    const directionalLightTop = new THREE.DirectionalLight(0xdddddd, Math.PI);
    const initialDirLightTopPosition = new THREE.Vector3(0, 10, 0);
    directionalLightTop.position.copy(initialDirLightTopPosition);
    directionalLightTop.lookAt(target);
    directionalLightTop.castShadow = true;
    directionalLightTop.shadow.bias = -0.001;
    directionalLightTop.shadow.normalBias = 0.02;
    scene.add(directionalLightTop);

    sceneRef.current = scene;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.target = target;

    let req: number = 0;
    const animate = () => {
      const frame = frameRef.current;
      req = requestAnimationFrame(animate);
      if (frame == 0) {
        controls.reset();
      }
      frameRef.current = frame <= 100 ? frame + 1 : frame;
      if (frame <= 100) {
        const p = initialCameraPosition;
        const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;
        camera.position.y = p.y;
        camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
        camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
        camera.lookAt(target);
      } else {
        controls.update();
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(req);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  // LOAD MODELS WHEN PATHNAME CHANGES
  useEffect(() => {
    const scene = sceneRef.current;
    const model = modelRef.current;
    if (!scene) {
      return;
    }
    scene.remove(model as THREE.Object3D);
    modelRef.current = null;

    setLoading(true);
    loadGLTFModel(`./models/${pathnameToModel.get(location.pathname)}`, true, {
      receiveShadow: true,
      castShadow: true,
    }).then((gltf) => {
      scene.add(gltf);
      modelRef.current = gltf;
      frameRef.current = 0;
      setLoading(false);
    });
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [handleWindowResize]);

  return (
    <>
      <Box height={"55px"} />
      <Box
        ref={containerRef}
        mx="auto"
        mb={"50px"}
        w={[200, 400, 450]}
        h={[200, 400, 450]}
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
    </>
  );
};

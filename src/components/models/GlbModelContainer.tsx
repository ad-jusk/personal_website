import { Box } from "@chakra-ui/react";
import { ReactElement, useCallback, useEffect, useRef, useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { loadGLTFModel } from "@utils/loadGLTFModel";
import { GlbSpinner } from "./GlbSpinner";

const easeOutCirc = (x: number): number => {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
};

export const GlbModelContainer = (): ReactElement => {
  const [isLoading, setLoading] = useState<boolean>(true);
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
    renderer.setClearColor(0xff0000);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const target = new THREE.Vector3(-0.5, 1.2, 0);
    const initialCameraPosition = new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    );

    const scale = height * 0.005 + 4.8;
    const camera = new THREE.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);
    camera.position.copy(initialCameraPosition);
    camera.lookAt(target);

    const ambientLight = new THREE.AmbientLight(0xcccccc, Math.PI);
    scene.add(ambientLight);

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

    loadGLTFModel("./models/lowpoly_well.glb", true, {
      receiveShadow: false,
      castShadow: false,
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
      pt={"55px"}
      mb={"55px"}
      w={[240, 480, 620]}
      h={[240, 480, 620]}
      pos={"relative"}
    >
      {isLoading && <GlbSpinner />}
    </Box>
  );
};

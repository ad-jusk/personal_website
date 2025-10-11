import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import * as THREE from "three";

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderConfig({ type: "js" });
dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");

export const loadGLTFModel = (
  path: string,
  isModelCompressed: boolean = true,
  options = { receiveShadow: true, castShadow: true }
): Promise<THREE.Group<THREE.Object3DEventMap>> => {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { receiveShadow, castShadow } = options;
    const loader = new GLTFLoader();
    if (isModelCompressed) {
      loader.setDRACOLoader(dracoLoader);
    }
    loader.load(
      path,
      (gltf) => {
        const model = gltf.scene;
        model.name = path;
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);
        model.receiveShadow = receiveShadow;
        model.castShadow = castShadow;
        model.traverse((child) => {
          if (child.isObject3D) {
            child.receiveShadow = receiveShadow;
            child.castShadow = castShadow;
          }
        });
        resolve(model);
      },
      undefined,
      (error) => reject(error)
    );
  });
};

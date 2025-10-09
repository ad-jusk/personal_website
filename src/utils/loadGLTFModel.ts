import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { Object3DEventMap } from "three/src/core/Object3D";
import { Group } from "three/src/Three.Core";

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderConfig({ type: "js" });
dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");

export const loadGLTFModel = (
  path: string,
  isModelCompressed: boolean = true,
  options = { receiveShadow: true, castShadow: true }
): Promise<Group<Object3DEventMap>> => {
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
        model.position.y = 0;
        model.position.x = 0;
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

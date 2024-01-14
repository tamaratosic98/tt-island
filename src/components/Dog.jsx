import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import scene from "../assets/3d/dog.glb";

const Dog = ({ currentAnimation, ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="RootNode_(gltf_orientation_matrix)_0"
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <group name="RootNode_(model_correction_matrix)_1">
                  <group
                    name="d2a6bc8fe88e4cbca4db3d181738fe46fbx_2"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="_3">
                      <group name="RootNode_4">
                        <group name="RootNode0_10">
                          <group name="skeletal3_12">
                            <group name="0_13">
                              <group name="_14">
                                <group name="GLTF_created_0">
                                  <primitive
                                    object={nodes.GLTF_created_0_rootJoint}
                                  />
                                  <skinnedMesh
                                    name="Object_207"
                                    geometry={nodes.Object_207.geometry}
                                    material={materials.material_0}
                                    skeleton={nodes.Object_207.skeleton}
                                  />
                                  <group name="_206_correction">
                                    <group name="_206" />
                                  </group>
                                </group>
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Dog;

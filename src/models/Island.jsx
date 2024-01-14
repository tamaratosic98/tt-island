/* eslint-disable react/no-unknown-property */
import { a } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

import { useFrame, useThree } from "@react-three/fiber";
// import islandScene from "../assets/3d/island.glb";
import newIslandScene from "../assets/3d/newIsland.glb";

const Island = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const lastX = useRef(0);
  const islandRef = useRef();
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;
  const { gl, viewport } = useThree();
  // const { nodes, materials } = useGLTF(islandScene);
  const { nodes, materials } = useGLTF(newIslandScene);

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    // Depending on the device, we need to use different properties to get the mouse position
    lastX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;

      islandRef.current.rotation.y += delta * Math.PI * 0.01; // Math.PI because of the rotation of the circle

      lastX.current = clientX;
      rotationSpeed.current = delta * Math.PI * 0.01;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      if (!isRotating) {
        setIsRotating(true);
      }

      rotationSpeed.current = 0.0125;
      islandRef.current.rotation.y += Math.PI * 0.01;
    } else if (e.key === "ArrowRight") {
      if (!isRotating) {
        setIsRotating(true);
      }

      rotationSpeed.current = -0.0125;
      islandRef.current.rotation.y -= Math.PI * 0.01;
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;

    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerMove, handlePointerUp]);

  useEffect(() => {
    setCurrentStage(1);
  }, []);

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = islandRef.current.rotation.y;

      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 1.3 && normalizedRotation <= 1.8:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 3 && normalizedRotation <= 3.5:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  return (
    <a.group ref={islandRef} {...props} dispose={null} isRotating={true}>
      <a.group scale={0.01} isRotating={true}>
        <a.group
          position={[-42.281, -1.801, 11.779]}
          rotation={[0, -0.185, 0]}
          isRotating={true}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_Bridge_Mat001_0.geometry}
            material={materials["SF_Bridge_Mat.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_Roof_Final_0.geometry}
            material={materials.SF_Roof_Final}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_Roof_Final_0_1.geometry}
            material={materials.SF_Roof_Final}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_Roof_Final_0_2.geometry}
            material={materials.SF_Roof_Final}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_Roof_Final_0_3.geometry}
            material={materials.SF_Roof_Final}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_Rocks_Mat_0.geometry}
            material={materials.SF_Rocks_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_Windows_Mat_0.geometry}
            material={materials.SF_Windows_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_Windows_Mat_0_1.geometry}
            material={materials.SF_Windows_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_Windows_Mat_0_2.geometry}
            material={materials.SF_Windows_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_Bush_Mat_0.geometry}
            material={materials.SF_Bush_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_TreeWood_Mat_0.geometry}
            material={materials.SF_TreeWood_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_TreeWood_Mat_0_1.geometry}
            material={materials.SF_TreeWood_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_TreeLeaf_Mat_0.geometry}
            material={materials.SF_TreeLeaf_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_HouseSupport_Mat_0.geometry}
            material={materials.SF_HouseSupport_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_HouseJoins_Mat_0.geometry}
            material={materials.SF_HouseJoins_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_Chimney_Mat_0.geometry}
            material={materials.SF_Chimney_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_CutRock_Mat_0.geometry}
            material={materials.SF_CutRock_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_Stalagmites_Mat_0.geometry}
            material={materials.SF_Stalagmites_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_WoodTex_Mat_0.geometry}
            material={materials.SF_WoodTex_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_PlasterTex_Mat_0.geometry}
            material={materials.SF_PlasterTex_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_StoneBrick_Mat_0.geometry}
            material={materials.SF_StoneBrick_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_Island_Mat_0.geometry}
            material={materials.SF_Island_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_LampGlass_Mat_0.geometry}
            material={materials.SF_LampGlass_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_Lamp_Mat_0.geometry}
            material={materials.SF_Lamp_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_Candle_Mat_0.geometry}
            material={materials.SF_Candle_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_Grass_Mat_0.geometry}
            material={materials.SF_Grass_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_Rail_Mat_0.geometry}
            material={materials.SF_Rail_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_GrassCards_Mat_0.geometry}
            material={materials.SF_GrassCards_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_GrassCards_Mat_0_1.geometry}
            material={materials.SF_GrassCards_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_GrassCards_Mat_0_2.geometry}
            material={materials.SF_GrassCards_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_GrassCards_Mat_0_3.geometry}
            material={materials.SF_GrassCards_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_Sack_Mat_0.geometry}
            material={materials.SF_Sack_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_MineCart_Mat_0.geometry}
            material={materials.SF_MineCart_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_Bridge_Mat_0.geometry}
            material={materials.SF_Bridge_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_Door_Mat_0.geometry}
            material={materials.SF_Door_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_Water_Mat_0.geometry}
            material={materials.SF_Water_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_Final_Water001_0.geometry}
            material={materials["Final_Water.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_Final_Rocks2_Mat_0.geometry}
            material={materials.Final_Rocks2_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_Black_0.geometry}
            material={materials.Black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_ButterFly_Mat_0.geometry}
            material={materials.SF_ButterFly_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Final_Bridge1_SF_Lillypad_Mat_0.geometry}
            material={materials.SF_Lillypad_Mat}
          />
        </a.group>
      </a.group>
    </a.group>
  );
};

export default Island;

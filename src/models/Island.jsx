/* eslint-disable react/no-unknown-property */
import { a } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

import { useFrame, useThree } from "@react-three/fiber";
import islandScene from "../assets/3d/island.glb";

const Island = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const lastX = useRef(0);
  const islandRef = useRef();
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);

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
        islandRef.current.rotation.y += Math.PI * 0.01;
      }
    } else if (e.key === "ArrowRight") {
      if (!isRotating) {
        setIsRotating(true);
        islandRef.current.rotation.y -= Math.PI * 0.01;
      }
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
          console.log("tami 4");
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          console.log("tami 3");
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          console.log("tami 3");
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          console.log("tami 1");
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  return (
    <a.group ref={islandRef} {...props}>
      <a.group rotation={[-Math.PI / 2, 0, 0]}>
        <a.group rotation={[Math.PI / 2, 0, 0]}>
          <a.group position={[427.36, 440.756, 782.083]}>
            <mesh
              geometry={nodes.Material1_3.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Material1_4.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Material1_5.geometry}
              material={materials.material}
            />
          </a.group>
          <mesh
            geometry={nodes.Material1.geometry}
            material={materials.height1}
            position={[579.782, -394.361, 281.43]}
          />
          <mesh
            geometry={nodes.Material1_1.geometry}
            material={materials.height2}
            position={[579.782, -394.361, 281.43]}
          />
          <mesh
            geometry={nodes.Material1_2.geometry}
            material={materials.material_1}
            position={[579.782, -394.361, 281.43]}
          />
        </a.group>
      </a.group>
    </a.group>
  );
};

export default Island;

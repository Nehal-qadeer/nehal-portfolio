"use client";

import { useRef, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useSandboxStore } from "@/hooks/useSandboxStore";
import { NeuralVisionDevice } from "./NeuralVisionDevice";
import { PartCallouts3D } from "./PartCallouts3D";

function CameraController() {
  const { cameraPreset } = useSandboxStore();
  const { camera } = useThree();

  useEffect(() => {
    let targetPos: [number, number, number] = [0, 0, 8.5];
    if (cameraPreset === "front") targetPos = [0, 0, 7.0];
    if (cameraPreset === "iso") targetPos = [4.5, 3.2, 7.5];
    if (cameraPreset === "core") targetPos = [1.8, 0.8, 5.0];
    if (cameraPreset === "top") targetPos = [0, 8.0, 2.5];

    camera.position.set(...targetPos);
    camera.lookAt(0, 0, 0);
  }, [cameraPreset, camera]);

  return null;
}

function StudioLighting() {
  const { theme } = useSandboxStore();
  const isLight = theme === "light";

  return (
    <>
      <ambientLight intensity={isLight ? 0.9 : 0.45} />
      <directionalLight
        position={[6, 8, 7]}
        intensity={isLight ? 2.4 : 1.8}
        color={isLight ? "#FFFFFF" : "#FFF7ED"}
      />
      <directionalLight
        position={[-6, -4, -5]}
        intensity={isLight ? 1.2 : 0.8}
        color={isLight ? "#93C5FD" : "#6FE3D9"}
      />
      <pointLight
        position={[0, 0, 4]}
        intensity={isLight ? 1.8 : 2.5}
        color={isLight ? "#F59E0B" : "#E8A33D"}
      />
    </>
  );
}

export default function SpatialSandboxScene() {
  const mouse = useMousePosition();
  const { theme } = useSandboxStore();
  const isLight = theme === "light";

  const bgColor = isLight ? "#F4F6F9" : "#0D1420";

  return (
    <Canvas
      camera={{ position: [4.2, 2.8, 7.8], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0 h-full w-full pointer-events-auto"
    >
      <color attach="background" args={[bgColor]} />
      <fog attach="fog" args={[bgColor, 7, 18]} />
      
      <StudioLighting />
      <CameraController />
      
      <NeuralVisionDevice pointer={mouse} />
      <PartCallouts3D />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.65}
        dampingFactor={0.06}
        maxPolarAngle={Math.PI * 0.75}
        minPolarAngle={Math.PI * 0.25}
      />
    </Canvas>
  );
}

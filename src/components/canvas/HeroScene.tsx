"use client";

import { Canvas } from "@react-three/fiber";
import { useMousePosition } from "@/hooks/useMousePosition";
import { ScanObject } from "./ScanObject";

export default function HeroScene() {
  const mouse = useMousePosition();

  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <color attach="background" args={["#0D1420"]} />
      <fog attach="fog" args={["#0D1420", 6, 13]} />
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 3, 5]} intensity={12} color="#E8A33D" />
      <pointLight position={[-4, -2, -3]} intensity={8} color="#6FE3D9" />
      <ScanObject mouse={mouse} />
    </Canvas>
  );
}

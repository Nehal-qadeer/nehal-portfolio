"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

interface KeyProps {
  char: string;
  position: [number, number, number];
  subLabel?: string;
  activeColor?: string;
}

function SingleMechanicalKey({ char, position, subLabel, activeColor = "#E5A93C" }: KeyProps) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const currentY = useRef(0);
  const targetY = useRef(0);

  // Keycap geometry (Cherry Profile-like beveled box)
  const keycapGeo = useMemo(() => new THREE.BoxGeometry(0.88, 0.55, 0.88), []);
  const switchHousingGeo = useMemo(() => new THREE.BoxGeometry(0.92, 0.25, 0.92), []);
  const stemGeo = useMemo(() => new THREE.CylinderGeometry(0.12, 0.12, 0.4, 12), []);

  useFrame((_, delta) => {
    targetY.current = hovered ? -0.22 : 0;
    // Smooth mechanical spring-damper easing
    currentY.current += (targetY.current - currentY.current) * Math.min(delta * 22, 1);

    if (meshRef.current) {
      meshRef.current.position.y = position[1] + currentY.current;
    }
  });

  return (
    <group position={[position[0], 0, position[2]]}>
      {/* Fixed Switch Housing Base (Matte Charcoal #141A22) */}
      <mesh position={[0, position[1] - 0.25, 0]} geometry={switchHousingGeo}>
        <meshStandardMaterial color="#141A22" roughness={0.7} metalness={0.2} />
      </mesh>

      {/* Mechanical Switch Stem (Amber Stem #E5A93C) */}
      <mesh position={[0, position[1] - 0.05, 0]} geometry={stemGeo}>
        <meshStandardMaterial
          color={activeColor}
          emissive={activeColor}
          emissiveIntensity={hovered ? 0.9 : 0.2}
          roughness={0.3}
        />
      </mesh>

      {/* Floating Depressible Keycap */}
      <group
        ref={meshRef}
        position={[0, position[1], 0]}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
        onPointerDown={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerUp={() => setHovered(false)}
      >
        {/* Keycap Body */}
        <mesh geometry={keycapGeo}>
          <meshStandardMaterial
            color={hovered ? "#2A3644" : "#1F2833"}
            roughness={0.45}
            metalness={0.3}
            emissive={activeColor}
            emissiveIntensity={hovered ? 0.45 : 0.02}
          />
        </mesh>

        {/* Top Legend Character */}
        <Text
          position={[0, 0.29, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          fontSize={0.36}
          color={hovered ? "#FFFFFF" : "#F4F4F5"}
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/ibmplexmono/v19/-F6qfjptA6DpRPYDp7_catq-tPfU.woff"
        >
          {char}
        </Text>

        {/* Subtle Sub-label */}
        {subLabel && (
          <Text
            position={[0, 0.29, 0.26]}
            rotation={[-Math.PI / 2, 0, 0]}
            fontSize={0.11}
            color={hovered ? activeColor : "#71717A"}
            anchorX="center"
            anchorY="middle"
          >
            {subLabel}
          </Text>
        )}
      </group>
    </group>
  );
}

const WORD_LAYOUTS: Record<string, { word: string; sub: string; color: string }[]> = {
  all: [
    { word: "PYTHON", sub: "CORE", color: "#E5A93C" },
    { word: "VISION", sub: "OPENVINO", color: "#45A29E" },
    { word: "AUTOMATE", sub: "PIPELINE", color: "#E5A93C" }
  ],
  python: [
    { word: "PYTHON", sub: "CORE", color: "#E5A93C" },
    { word: "PYTORCH", sub: "MODEL", color: "#E5A93C" },
    { word: "OPENCV", sub: "FRAME", color: "#45A29E" }
  ],
  vision: [
    { word: "VISION", sub: "AI_CV", color: "#45A29E" },
    { word: "OPENVINO", sub: "-30%", color: "#E5A93C" },
    { word: "VERIFY", sub: "99.4%", color: "#45A29E" }
  ],
  automate: [
    { word: "AUTOMATE", sub: "FLOW", color: "#E5A93C" },
    { word: "SCRAPING", sub: "SELENIUM", color: "#45A29E" },
    { word: "POSTGRES", sub: "3.4K", color: "#E5A93C" }
  ]
};

function KeyboardMatrix({ mode }: { mode: keyof typeof WORD_LAYOUTS }) {
  const groupRef = useRef<THREE.Group>(null);
  const rows = WORD_LAYOUTS[mode] ?? WORD_LAYOUTS["all"] ?? [];

  useFrame((state) => {
    if (groupRef.current) {
      // Subtle organic floating tilt
      const t = state.clock.getElapsedTime();
      groupRef.current.rotation.x = 0.55 + Math.sin(t * 0.8) * 0.02;
      groupRef.current.rotation.y = -0.18 + Math.cos(t * 0.6) * 0.02;
      groupRef.current.rotation.z = Math.sin(t * 0.5) * 0.01;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.1, 0]} rotation={[0.55, -0.18, 0]}>
      {rows.map((rowItem, rIdx) => {
        const chars = rowItem.word.split("");
        const totalW = chars.length * 1.02;
        const startX = -totalW / 2 + 0.51;
        const zPos = (rIdx - (rows.length - 1) / 2) * 1.05;

        return (
          <group key={`${rowItem.word}-${rIdx}`}>
            {chars.map((char, cIdx) => (
              <SingleMechanicalKey
                key={`${rowItem.word}-${cIdx}`}
                char={char}
                position={[startX + cIdx * 1.02, 0, zPos]}
                subLabel={cIdx === 0 ? rowItem.sub : undefined}
                activeColor={rowItem.color}
              />
            ))}
          </group>
        );
      })}
    </group>
  );
}

export function MechanicalKeyGrid3D() {
  const [activePreset, setActivePreset] = useState<keyof typeof WORD_LAYOUTS>("all");

  return (
    <div className="w-full h-80 sm:h-96 md:h-[420px] rounded-2xl border border-charcoal bg-charcoal/40 p-4 backdrop-blur-xl shadow-2xl relative select-none flex flex-col justify-between">
      {/* Top Switcher Pills */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-amber uppercase tracking-wider font-semibold">
          <span className="h-2 w-2 rounded-full bg-amber animate-pulse" />
          Tactile 3D Key Matrix
        </div>

        <div className="flex items-center gap-1 rounded-lg border border-charcoal bg-graphite/90 p-1">
          {(["all", "python", "vision", "automate"] as const).map((preset) => (
            <button
              key={preset}
              onClick={() => setActivePreset(preset)}
              className={`px-2.5 py-0.5 rounded font-mono text-[10px] uppercase font-semibold transition-all ${
                activePreset === preset
                  ? "bg-amber text-graphite shadow-sm"
                  : "text-ash hover:text-bone"
              }`}
            >
              {preset}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="w-full flex-1 relative cursor-pointer">
        <Canvas
          camera={{ position: [0, 2.8, 6.2], fov: 42 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
          className="!w-full !h-full"
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[4, 8, 5]} intensity={1.5} color="#FFFFFF" />
          <directionalLight position={[-4, -2, -3]} intensity={0.8} color="#E5A93C" />
          <pointLight position={[0, 3, 2]} intensity={1.4} color="#45A29E" />

          <KeyboardMatrix mode={activePreset} />
        </Canvas>
      </div>

      {/* Bottom Footer Hint */}
      <div className="flex items-center justify-between font-mono text-[10px] text-ash-dark z-10 pt-1 border-t border-charcoal/60">
        <span>Hover / Tap Keys to Depress Switch</span>
        <span className="text-amber">Cherry MX Stem Physics</span>
      </div>
    </div>
  );
}

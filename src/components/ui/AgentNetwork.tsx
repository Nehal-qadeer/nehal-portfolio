"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Line } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "@/context/ThemeContext";

interface NodeData {
  id: string;
  label: string;
  position: [number, number, number];
  role: "signal" | "teal";
  target: string;
}

const NODES_CONFIG: NodeData[] = [
  { id: "planner", label: "Planner", position: [-1.8, 1.1, 0], role: "signal", target: "#project-rag" },
  { id: "retriever", label: "Retriever", position: [0, 1.6, 0.4], role: "signal", target: "#project-rag" },
  { id: "verifier", label: "Verifier", position: [1.8, 0.9, 0], role: "signal", target: "#project-rag" },
  { id: "synthesizer", label: "Synthesizer", position: [1.2, -0.9, 0.3], role: "signal", target: "#project-rag" },
  { id: "vision", label: "Vision", position: [-1.4, -1.0, 0.2], role: "teal", target: "#project-thesis" },
  { id: "automation", label: "Automation", position: [0, -1.7, -0.3], role: "teal", target: "#project-automation" },
];

const EDGES: [string, string][] = [
  ["planner", "retriever"],
  ["retriever", "verifier"],
  ["verifier", "synthesizer"],
  ["synthesizer", "planner"],
  ["vision", "planner"],
  ["vision", "retriever"],
  ["automation", "synthesizer"],
  ["automation", "vision"],
];

function NodeMesh({
  label,
  position,
  color,
  target,
}: {
  label: string;
  position: [number, number, number];
  color: string;
  target: string;
}) {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "auto";
    }
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered]);

  const handleClick = (e: any) => {
    e.stopPropagation();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <group position={position}>
      <mesh
        scale={hovered ? 1.25 : 1}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
        onClick={handleClick}
      >
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.35}
          roughness={0.25}
          metalness={0.15}
        />
      </mesh>
      <Html position={[0, 0.34, 0]} center distanceFactor={7}>
        <div
          onClick={handleClick}
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "11px",
            color: "var(--ink)",
            backgroundColor: "var(--surface)",
            padding: "2px 6px",
            border: "1px solid var(--line-strong)",
            borderRadius: "6px",
            cursor: "pointer",
            whiteSpace: "nowrap",
            boxShadow: "var(--shadow-card)",
            userSelect: "none",
          }}
        >
          {label}
        </div>
      </Html>
    </group>
  );
}

function DataPacket({
  from,
  to,
  offset,
  color,
}: {
  from: [number, number, number];
  to: [number, number, number];
  offset: number;
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = ((clock.getElapsedTime() + offset) % 2.4) / 2.4;
    meshRef.current.position.x = from[0] + (to[0] - from[0]) * t;
    meshRef.current.position.y = from[1] + (to[1] - from[1]) * t;
    meshRef.current.position.z = from[2] + (to[2] - from[2]) * t;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.05, 16, 16]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

function NetworkScene({
  signalColor,
  tealColor,
  amberColor,
  edgeColor,
}: {
  signalColor: string;
  tealColor: string;
  amberColor: string;
  edgeColor: string;
}) {
  const nodeMap = useMemo(() => {
    const map = new Map<string, NodeData>();
    NODES_CONFIG.forEach((n) => map.set(n.id, n));
    return map;
  }, []);

  const edgeData = useMemo(() => {
    return EDGES.map(([srcId, dstId], i) => {
      const src = nodeMap.get(srcId)!;
      const dst = nodeMap.get(dstId)!;
      const offset = (i * 0.37 + 0.15) % 2.4;
      return {
        id: `${srcId}-${dstId}`,
        from: src.position,
        to: dst.position,
        offset,
      };
    });
  }, [nodeMap]);

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 4, 5]} intensity={0.6} />

      {/* Render Edges */}
      {edgeData.map((edge) => (
        <Line
          key={`edge-${edge.id}`}
          points={[edge.from, edge.to]}
          color={edgeColor}
          transparent
          opacity={0.6}
          lineWidth={1}
        />
      ))}

      {/* Render Data Packets */}
      {edgeData.map((edge) => (
        <DataPacket
          key={`packet-${edge.id}`}
          from={edge.from}
          to={edge.to}
          offset={edge.offset}
          color={amberColor}
        />
      ))}

      {/* Render Nodes */}
      {NODES_CONFIG.map((node) => (
        <NodeMesh
          key={node.id}
          label={node.label}
          position={node.position}
          color={node.role === "signal" ? signalColor : tealColor}
          target={node.target}
        />
      ))}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        autoRotate
        autoRotateSpeed={0.6}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(2 * Math.PI) / 3}
      />
    </>
  );
}

export default function AgentNetwork() {
  const { theme } = useTheme();
  const [isFallback, setIsFallback] = useState(false);

  const signalColor = theme === "dark" ? "#5EEAD4" : "#0F766E";
  const tealColor = theme === "dark" ? "#7DD3FC" : "#0369A1";
  const amberColor = theme === "dark" ? "#FBBF24" : "#B45309";
  const edgeColor = theme === "dark" ? "#4B5563" : "#CBD5E1";

  useEffect(() => {
    const checkState = () => {
      const isMobile = window.innerWidth < 768;
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setIsFallback(isMobile || prefersReduced);
    };

    checkState();
    window.addEventListener("resize", checkState);
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    mql.addEventListener?.("change", checkState);

    return () => {
      window.removeEventListener("resize", checkState);
      mql.removeEventListener?.("change", checkState);
    };
  }, []);

  const handleScroll = (target: string) => {
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full rounded-2xl border border-line bg-surface p-5 sm:p-6 shadow-card select-none">
      {/* Card Header */}
      <div className="border-b border-line pb-3 mb-2 flex items-center justify-between">
        <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
          INTERACTIVE ILLUSTRATION · DRAG TO EXPLORE
        </span>
        <span className="w-2 h-2 rounded-full bg-signal animate-pulse" />
      </div>

      {/* Canvas or Fallback SVG */}
      <div className="relative h-[380px] w-full flex items-center justify-center">
        {isFallback ? (
          <svg
            viewBox="0 0 400 320"
            className="w-full h-full max-h-[380px]"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Edges */}
            <g stroke={edgeColor} strokeWidth="1.5" strokeOpacity="0.7">
              <line x1="60" y1="80" x2="200" y2="45" />
              <line x1="200" y1="45" x2="340" y2="90" />
              <line x1="340" y1="90" x2="295" y2="210" />
              <line x1="295" y1="210" x2="60" y2="80" />
              <line x1="90" y1="220" x2="60" y2="80" />
              <line x1="90" y1="220" x2="200" y2="45" />
              <line x1="200" y1="270" x2="295" y2="210" />
              <line x1="200" y1="270" x2="90" y2="220" />
            </g>

            {/* Nodes */}
            {[
              { label: "Planner", x: 60, y: 80, color: signalColor, target: "#project-rag" },
              { label: "Retriever", x: 200, y: 45, color: signalColor, target: "#project-rag" },
              { label: "Verifier", x: 340, y: 90, color: signalColor, target: "#project-rag" },
              { label: "Synthesizer", x: 295, y: 210, color: signalColor, target: "#project-rag" },
              { label: "Vision", x: 90, y: 220, color: tealColor, target: "#project-thesis" },
              { label: "Automation", x: 200, y: 270, color: tealColor, target: "#project-automation" },
            ].map((node) => (
              <g
                key={node.label}
                className="cursor-pointer group"
                onClick={() => handleScroll(node.target)}
              >
                <circle cx={node.x} cy={node.y} r="14" fill={node.color} />
                <rect
                  x={node.x - 30}
                  y={node.y - 28}
                  width="60"
                  height="16"
                  rx="4"
                  fill="var(--surface)"
                  stroke="var(--line-strong)"
                  strokeWidth="1"
                />
                <text
                  x={node.x}
                  y={node.y - 16}
                  textAnchor="middle"
                  fill="var(--ink)"
                  fontFamily="var(--font-mono), monospace"
                  fontSize="10"
                  fontWeight="600"
                >
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
        ) : (
          <Canvas
            camera={{ position: [0, 0, 6], fov: 45 }}
            dpr={[1, 2]}
            gl={{ alpha: true }}
            className="w-full h-full"
          >
            <NetworkScene
              signalColor={signalColor}
              tealColor={tealColor}
              amberColor={amberColor}
              edgeColor={edgeColor}
            />
          </Canvas>
        )}
      </div>

      {/* Caption under canvas */}
      <p className="font-body text-[13px] text-muted text-center mt-3">
        A simplified view of how my systems fit together: four RAG agents, computer vision and automation. Click a node to see the project.
      </p>
    </div>
  );
}
"use client";

import { useState, useRef } from "react";

export function SchematicPipelineSVG() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [activeNode, setActiveNode] = useState<string | null>("DEPLOY");
  const wrapRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setOffset({ x: x * 14, y: y * 12 });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: "transform 0.18s ease-out"
      }}
      className="relative w-full select-none cursor-pointer"
    >
      <svg
        viewBox="0 0 400 220"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto filter drop-shadow-[0_8px_24px_rgba(22,35,61,0.08)]"
        role="img"
        aria-label="Diagram of an automation pipeline: scrape, clean, deploy, verify, notify"
      >
        {/* Background circuit paths */}
        <path d="M40 60 H140" stroke="#A6B6C9" strokeWidth="1.5" fill="none" />
        <path d="M40 60 H140" stroke="#2B6CB0" strokeWidth="2" fill="none" className="animate-flow-dash" />
        
        <path d="M180 60 H280" stroke="#A6B6C9" strokeWidth="1.5" fill="none" />
        <path d="M180 60 H280" stroke="#2B6CB0" strokeWidth="2" fill="none" className="animate-flow-dash" />
        
        <path d="M60 60 V150 H140" stroke="#A6B6C9" strokeWidth="1.5" fill="none" />
        <path d="M260 60 V150 H340" stroke="#A6B6C9" strokeWidth="1.5" fill="none" />
        
        <path d="M140 150 H260" stroke="#A6B6C9" strokeWidth="1.5" fill="none" />
        <path d="M140 150 H260" stroke="#2F9E8F" strokeWidth="2" fill="none" className="animate-flow-dash" />

        {/* Node 1: SCRAPE */}
        <g onClick={() => setActiveNode("SCRAPE")}>
          <rect
            x="10"
            y="40"
            width="60"
            height="40"
            rx="4"
            fill="#FFFFFF"
            stroke={activeNode === "SCRAPE" ? "#2B6CB0" : "#16233D"}
            strokeWidth={activeNode === "SCRAPE" ? "2.2" : "1.4"}
            className="transition-all"
          />
          <text
            x="40"
            y="64"
            textAnchor="middle"
            fontFamily="var(--font-data), monospace"
            fontSize="9.5"
            fill="#16233D"
            fontWeight="600"
            letterSpacing="0.03em"
          >
            SCRAPE
          </text>
        </g>

        {/* Node 2: CLEAN */}
        <g onClick={() => setActiveNode("CLEAN")}>
          <rect
            x="150"
            y="40"
            width="60"
            height="40"
            rx="4"
            fill="#FFFFFF"
            stroke={activeNode === "CLEAN" ? "#2F9E8F" : "#16233D"}
            strokeWidth={activeNode === "CLEAN" ? "2.2" : "1.4"}
            className="transition-all"
          />
          <text
            x="180"
            y="64"
            textAnchor="middle"
            fontFamily="var(--font-data), monospace"
            fontSize="9.5"
            fill="#4A5A76"
            fontWeight="600"
            letterSpacing="0.03em"
          >
            CLEAN
          </text>
        </g>

        {/* Node 3: DEPLOY */}
        <g onClick={() => setActiveNode("DEPLOY")}>
          <rect
            x="290"
            y="40"
            width="60"
            height="40"
            rx="4"
            fill="#FFFFFF"
            stroke={activeNode === "DEPLOY" ? "#2B6CB0" : "#16233D"}
            strokeWidth={activeNode === "DEPLOY" ? "2.4" : "1.4"}
            className="transition-all"
          />
          <text
            x="320"
            y="64"
            textAnchor="middle"
            fontFamily="var(--font-data), monospace"
            fontSize="9.5"
            fill="#2B6CB0"
            fontWeight="700"
            letterSpacing="0.03em"
          >
            DEPLOY
          </text>
        </g>

        {/* Node 4: VERIFY (YOLOv8 + OpenVINO) */}
        <g onClick={() => setActiveNode("VERIFY")}>
          <rect
            x="110"
            y="130"
            width="60"
            height="40"
            rx="4"
            fill="#FFFFFF"
            stroke={activeNode === "VERIFY" ? "#2F9E8F" : "#16233D"}
            strokeWidth={activeNode === "VERIFY" ? "2.2" : "1.4"}
            className="transition-all"
          />
          <text
            x="140"
            y="154"
            textAnchor="middle"
            fontFamily="var(--font-data), monospace"
            fontSize="9.5"
            fill="#4A5A76"
            fontWeight="600"
            letterSpacing="0.03em"
          >
            VERIFY
          </text>
        </g>

        {/* Node 5: NOTIFY */}
        <g onClick={() => setActiveNode("NOTIFY")}>
          <rect
            x="230"
            y="130"
            width="60"
            height="40"
            rx="4"
            fill="#FFFFFF"
            stroke={activeNode === "NOTIFY" ? "#E8A33D" : "#16233D"}
            strokeWidth={activeNode === "NOTIFY" ? "2.2" : "1.4"}
            className="transition-all"
          />
          <text
            x="260"
            y="154"
            textAnchor="middle"
            fontFamily="var(--font-data), monospace"
            fontSize="9.5"
            fill="#4A5A76"
            fontWeight="600"
            letterSpacing="0.03em"
          >
            NOTIFY
          </text>
        </g>

        {/* Telemetry Status Marker */}
        <circle cx="320" cy="26" r="3.5" fill="#E8A33D" className="animate-pulse" />
        <text
          x="330"
          y="29"
          fontFamily="var(--font-data), monospace"
          fontSize="9.5"
          fill="#4A5A76"
          letterSpacing="0.03em"
        >
          99.9% uptime
        </text>
      </svg>
    </div>
  );
}

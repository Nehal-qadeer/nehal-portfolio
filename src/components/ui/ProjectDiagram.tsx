"use client";

import React from "react";
import { useReducedMotion } from "framer-motion";

export type DiagramType = "rag" | "thesis" | "roombuilder" | "automation" | "satellite";

interface ProjectDiagramProps {
  type: DiagramType;
  className?: string;
}

export function ProjectDiagram({ type, className = "" }: ProjectDiagramProps) {
  const shouldReduceMotion = useReducedMotion();

  // Helper for arrow marker definition
  const defs = (idPrefix: string) => (
    <defs>
      <marker
        id={`${idPrefix}-arrow`}
        viewBox="0 0 10 10"
        refX="6"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--line-strong)" />
      </marker>
      <marker
        id={`${idPrefix}-arrow-active`}
        viewBox="0 0 10 10"
        refX="6"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--signal)" />
      </marker>
      <pattern
        id={`${idPrefix}-dots`}
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="2" cy="2" r="1" fill="var(--grid)" />
      </pattern>
    </defs>
  );

  const dashClass = shouldReduceMotion ? "" : "animate-flow-dash";
  const containerClass = `w-full h-auto min-h-[160px] md:min-h-[220px] p-6 rounded-xl border border-line bg-surface-2 relative overflow-hidden flex items-center justify-center ${className}`;

  // Render RAG Architecture Diagram
  if (type === "rag") {
    return (
      <div
        role="img"
        aria-label="Multi-Agent RAG architecture flow: Documents pass through Presidio PII removal into Vector Index, then processed across Query Planner, Retriever, Verifier, and Synthesizer with audit logging into a cited answer."
        className={containerClass}
      >
        {/* Desktop View (>= 640px) */}
        <svg
          viewBox="0 0 920 480"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto hidden sm:block select-none"
        >
          {defs("rag-d")}
          <rect width="100%" height="100%" fill="url(#rag-d-dots)" opacity="0.6" />

          {/* Row 1: Ingestion to Agents */}
          {/* Node 1: Documents */}
          <g transform="translate(30, 110)">
            <rect width="110" height="54" rx="10" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.5" />
            <text x="55" y="32" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-data)" fontSize="13" fontWeight="600">Documents</text>
          </g>

          <line x1="140" y1="137" x2="175" y2="137" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="6 6" className={dashClass} markerEnd="url(#rag-d-arrow-active)" />

          {/* Node 2: Presidio */}
          <g transform="translate(180, 110)">
            <rect width="125" height="54" rx="10" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.5" />
            <text x="62" y="27" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-data)" fontSize="13" fontWeight="600">Presidio</text>
            <text x="62" y="43" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-data)" fontSize="10.5">PII removed</text>
          </g>

          <line x1="305" y1="137" x2="340" y2="137" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="6 6" className={dashClass} markerEnd="url(#rag-d-arrow-active)" />

          {/* Node 3: Index */}
          <g transform="translate(345, 110)">
            <rect width="135" height="54" rx="10" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.5" />
            <text x="67" y="27" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-data)" fontSize="13" fontWeight="600">Vector Index</text>
            <text x="67" y="43" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-data)" fontSize="10.5">BM25 + vectors</text>
          </g>

          <line x1="480" y1="137" x2="520" y2="137" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="6 6" className={dashClass} markerEnd="url(#rag-d-arrow-active)" />

          {/* Node 4: Planner (Highlight) */}
          <g transform="translate(525, 110)">
            <rect width="115" height="54" rx="10" fill="var(--surface)" stroke="var(--signal)" strokeWidth="1.8" />
            <text x="57" y="27" textAnchor="middle" fill="var(--signal)" fontFamily="var(--font-data)" fontSize="13" fontWeight="700">Planner</text>
            <text x="57" y="43" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-data)" fontSize="10">Decompose</text>
          </g>

          <line x1="640" y1="137" x2="675" y2="137" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="6 6" className={dashClass} markerEnd="url(#rag-d-arrow-active)" />

          {/* Node 5: Retriever (Highlight) */}
          <g transform="translate(680, 110)">
            <rect width="115" height="54" rx="10" fill="var(--surface)" stroke="var(--signal)" strokeWidth="1.8" />
            <text x="57" y="27" textAnchor="middle" fill="var(--signal)" fontFamily="var(--font-data)" fontSize="13" fontWeight="700">Retriever</text>
            <text x="57" y="43" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-data)" fontSize="10">Hybrid Search</text>
          </g>

          {/* Turn Down to Row 2 */}
          <path d="M 737 164 L 737 235 L 680 235" fill="none" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="6 6" className={dashClass} markerEnd="url(#rag-d-arrow-active)" />

          {/* Node 6: Verifier (Highlight) */}
          <g transform="translate(525, 208)">
            <rect width="145" height="54" rx="10" fill="var(--surface)" stroke="var(--signal)" strokeWidth="1.8" />
            <text x="72" y="27" textAnchor="middle" fill="var(--signal)" fontFamily="var(--font-data)" fontSize="13" fontWeight="700">Verifier</text>
            <text x="72" y="43" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-data)" fontSize="10.5">NLI Claim Check</text>
          </g>

          <line x1="525" y1="235" x2="480" y2="235" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="6 6" className={dashClass} markerEnd="url(#rag-d-arrow-active)" />

          {/* Node 7: Synthesizer (Highlight) */}
          <g transform="translate(325, 208)">
            <rect width="145" height="54" rx="10" fill="var(--surface)" stroke="var(--signal)" strokeWidth="1.8" />
            <text x="72" y="27" textAnchor="middle" fill="var(--signal)" fontFamily="var(--font-data)" fontSize="13" fontWeight="700">Synthesizer</text>
            <text x="72" y="43" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-data)" fontSize="10.5">Citation Engine</text>
          </g>

          <line x1="325" y1="235" x2="275" y2="235" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="6 6" className={dashClass} markerEnd="url(#rag-d-arrow-active)" />

          {/* Node 8: Cited Answer */}
          <g transform="translate(130, 208)">
            <rect width="135" height="54" rx="10" fill="var(--signal-dim)" stroke="var(--signal)" strokeWidth="1.8" />
            <text x="67" y="27" textAnchor="middle" fill="var(--signal)" fontFamily="var(--font-data)" fontSize="13" fontWeight="700">Cited answer</text>
            <text x="67" y="43" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-data)" fontSize="10.5">94.5% Faithful</text>
          </g>

          {/* Extra Node: Audit Log connected below Synthesizer */}
          <path d="M 397 262 L 397 325" fill="none" stroke="var(--line-strong)" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#rag-d-arrow)" />
          <g transform="translate(305, 325)">
            <rect width="185" height="52" rx="10" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.5" />
            <text x="92" y="25" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-data)" fontSize="13" fontWeight="600">Audit log</text>
            <text x="92" y="41" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-data)" fontSize="10.5">SHA-256 ledger (Art. 12)</text>
          </g>
        </svg>

        {/* Mobile View (< 640px) */}
        <svg
          viewBox="0 0 320 480"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto sm:hidden select-none"
        >
          {defs("rag-m")}
          <rect width="100%" height="100%" fill="url(#rag-m-dots)" opacity="0.6" />
          {[
            { label: "Documents", sub: "", y: 15, hl: false },
            { label: "Presidio", sub: "PII removed", y: 70, hl: false },
            { label: "Vector Index", sub: "BM25 + vectors", y: 125, hl: false },
            { label: "Planner → Retriever", sub: "Decompose & Search", y: 180, hl: true },
            { label: "Verifier", sub: "Check claims", y: 235, hl: true },
            { label: "Synthesizer", sub: "Citations", y: 290, hl: true },
            { label: "Cited answer", sub: "94.5% Faithfulness", y: 345, hl: true },
            { label: "Audit log", sub: "SHA-256 chain", y: 405, hl: false },
          ].map((item, idx, arr) => (
            <g key={item.label} transform={`translate(45, ${item.y})`}>
              <rect width="230" height="42" rx="8" fill="var(--surface)" stroke={item.hl ? "var(--signal)" : "var(--line-strong)"} strokeWidth={item.hl ? "1.8" : "1.2"} />
              <text x="115" y={item.sub ? 20 : 25} textAnchor="middle" fill={item.hl ? "var(--signal)" : "var(--ink)"} fontFamily="var(--font-data)" fontSize="13" fontWeight={item.hl ? "700" : "600"}>{item.label}</text>
              {item.sub && <text x="115" y="34" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-data)" fontSize="9.5">{item.sub}</text>}
              {idx < arr.length - 1 && (
                <line x1="115" y1="42" x2="115" y2={idx === 6 ? 60 : 54} stroke={idx < 6 ? "var(--signal)" : "var(--line-strong)"} strokeWidth="1.4" strokeDasharray={idx < 6 ? "4 4" : "3 3"} markerEnd={idx < 6 ? "url(#rag-m-arrow-active)" : "url(#rag-m-arrow)"} />
              )}
            </g>
          ))}
        </svg>
      </div>
    );
  }

  // Render Thesis Architecture Diagram
  if (type === "thesis") {
    return (
      <div
        role="img"
        aria-label="Master's Thesis CV Game architecture: Webcam video frames feed into custom YOLOv8 model, quantized via OpenVINO for CPU inference, driving PyQt6 accessible game and displaying large visual labels."
        className={containerClass}
      >
        <svg
          viewBox="0 0 920 480"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto hidden sm:block select-none"
        >
          {defs("thesis-d")}
          <rect width="100%" height="100%" fill="url(#thesis-d-dots)" opacity="0.6" />

          {/* Metric Chip (Top Right) */}
          <g transform="translate(730, 25)">
            <rect width="155" height="32" rx="8" fill="var(--signal-dim)" stroke="var(--signal)" strokeWidth="1.2" />
            <text x="77" y="20" textAnchor="middle" fill="var(--signal)" fontFamily="var(--font-data)" fontSize="11" fontWeight="700">25+ FPS · no GPU</text>
          </g>

          {/* Flow */}
          {/* Node 1: Webcam */}
          <g transform="translate(40, 200)">
            <rect width="130" height="60" rx="10" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.5" />
            <text x="65" y="35" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-data)" fontSize="13" fontWeight="600">Webcam</text>
          </g>

          <line x1="170" y1="230" x2="220" y2="230" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="6 6" className={dashClass} markerEnd="url(#thesis-d-arrow-active)" />

          {/* Node 2: YOLOv8 (Highlight) */}
          <g transform="translate(225, 200)">
            <rect width="145" height="60" rx="10" fill="var(--surface)" stroke="var(--signal)" strokeWidth="1.8" />
            <text x="72" y="30" textAnchor="middle" fill="var(--signal)" fontFamily="var(--font-data)" fontSize="13" fontWeight="700">YOLOv8</text>
            <text x="72" y="47" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-data)" fontSize="10.5">custom model</text>
          </g>

          <line x1="370" y1="230" x2="420" y2="230" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="6 6" className={dashClass} markerEnd="url(#thesis-d-arrow-active)" />

          {/* Node 3: OpenVINO (Highlight) */}
          <g transform="translate(425, 200)">
            <rect width="155" height="60" rx="10" fill="var(--surface)" stroke="var(--signal)" strokeWidth="1.8" />
            <text x="77" y="30" textAnchor="middle" fill="var(--signal)" fontFamily="var(--font-data)" fontSize="13" fontWeight="700">OpenVINO</text>
            <text x="77" y="47" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-data)" fontSize="10.5">CPU inference</text>
          </g>

          <line x1="580" y1="230" x2="630" y2="230" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="6 6" className={dashClass} markerEnd="url(#thesis-d-arrow-active)" />

          {/* Node 4: PyQt6 game */}
          <g transform="translate(635, 200)">
            <rect width="125" height="60" rx="10" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.5" />
            <text x="62" y="35" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-data)" fontSize="13" fontWeight="600">PyQt6 game</text>
          </g>

          <line x1="760" y1="230" x2="795" y2="230" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="6 6" className={dashClass} markerEnd="url(#thesis-d-arrow-active)" />

          {/* Node 5: Large label */}
          <g transform="translate(800, 200)">
            <rect width="105" height="60" rx="10" fill="var(--signal-dim)" stroke="var(--signal)" strokeWidth="1.5" />
            <text x="52" y="30" textAnchor="middle" fill="var(--signal)" fontFamily="var(--font-data)" fontSize="13" fontWeight="700">Large label</text>
            <text x="52" y="47" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-data)" fontSize="11">&ldquo;Cup&rdquo;</text>
          </g>
        </svg>

        {/* Mobile View */}
        <svg
          viewBox="0 0 320 420"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto sm:hidden select-none"
        >
          {defs("thesis-m")}
          <rect width="100%" height="100%" fill="url(#thesis-m-dots)" opacity="0.6" />
          <g transform="translate(170, 15)">
            <rect width="130" height="28" rx="6" fill="var(--signal-dim)" stroke="var(--signal)" strokeWidth="1" />
            <text x="65" y="18" textAnchor="middle" fill="var(--signal)" fontFamily="var(--font-data)" fontSize="10" fontWeight="700">25+ FPS · no GPU</text>
          </g>
          {[
            { label: "Webcam", sub: "Live Camera Stream", y: 55, hl: false },
            { label: "YOLOv8", sub: "Custom model", y: 130, hl: true },
            { label: "OpenVINO", sub: "CPU inference", y: 205, hl: true },
            { label: "PyQt6 game", sub: "Interactive UI", y: 280, hl: false },
            { label: 'Large label / "Cup"', sub: "Visual Reinforcement", y: 355, hl: true },
          ].map((item, idx, arr) => (
            <g key={item.label} transform={`translate(45, ${item.y})`}>
              <rect width="230" height="48" rx="8" fill="var(--surface)" stroke={item.hl ? "var(--signal)" : "var(--line-strong)"} strokeWidth={item.hl ? "1.8" : "1.2"} />
              <text x="115" y="24" textAnchor="middle" fill={item.hl ? "var(--signal)" : "var(--ink)"} fontFamily="var(--font-data)" fontSize="13" fontWeight={item.hl ? "700" : "600"}>{item.label}</text>
              <text x="115" y="38" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-data)" fontSize="10">{item.sub}</text>
              {idx < arr.length - 1 && (
                <line x1="115" y1="48" x2="115" y2={74} stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#thesis-m-arrow-active)" />
              )}
            </g>
          ))}
        </svg>
      </div>
    );
  }

  // Render Room Builder Architecture Diagram
  if (type === "roombuilder") {
    return (
      <div
        role="img"
        aria-label="Virtual Room Builder architecture: Photo scanned by Gemini Vision connects to FastAPI and PostgreSQL; FastAPI powers React 60 FPS Canvas coordinate engine with Web Speech native audio pronunciation."
        className={containerClass}
      >
        <svg
          viewBox="0 0 920 480"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto hidden sm:block select-none"
        >
          {defs("room-d")}
          <rect width="100%" height="100%" fill="url(#room-d-dots)" opacity="0.6" />

          {/* Metric Chip */}
          <g transform="translate(740, 25)">
            <rect width="140" height="32" rx="8" fill="var(--signal-dim)" stroke="var(--signal)" strokeWidth="1.2" />
            <text x="70" y="20" textAnchor="middle" fill="var(--signal)" fontFamily="var(--font-data)" fontSize="11" fontWeight="700">15/15 tests</text>
          </g>

          {/* Row 1: Multimodal Vision Ingestion */}
          <g transform="translate(50, 110)">
            <rect width="120" height="56" rx="10" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.5" />
            <text x="60" y="34" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-data)" fontSize="13" fontWeight="600">Photo</text>
          </g>

          <line x1="170" y1="138" x2="225" y2="138" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="6 6" className={dashClass} markerEnd="url(#room-d-arrow-active)" />

          <g transform="translate(230, 110)">
            <rect width="165" height="56" rx="10" fill="var(--surface)" stroke="var(--signal)" strokeWidth="1.8" />
            <text x="82" y="34" textAnchor="middle" fill="var(--signal)" fontFamily="var(--font-data)" fontSize="13" fontWeight="700">Gemini Vision</text>
          </g>

          <line x1="395" y1="138" x2="455" y2="138" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="6 6" className={dashClass} markerEnd="url(#room-d-arrow-active)" />

          <g transform="translate(460, 110)">
            <rect width="135" height="56" rx="10" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.5" />
            <text x="67" y="34" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-data)" fontSize="13" fontWeight="600">FastAPI</text>
          </g>

          <line x1="595" y1="138" x2="665" y2="138" stroke="var(--line-strong)" strokeWidth="1.5" markerEnd="url(#room-d-arrow)" />

          <g transform="translate(670, 110)">
            <rect width="150" height="56" rx="10" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.5" />
            <text x="75" y="34" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-data)" fontSize="13" fontWeight="600">PostgreSQL</text>
          </g>

          {/* Connection from FastAPI down to Row 2 */}
          <path d="M 527 166 L 527 250" fill="none" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="6 6" className={dashClass} markerEnd="url(#room-d-arrow-active)" />

          {/* Row 2: Interactive Game & Canvas */}
          <g transform="translate(460, 250)">
            <rect width="135" height="56" rx="10" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.5" />
            <text x="67" y="34" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-data)" fontSize="13" fontWeight="600">FastAPI</text>
          </g>

          <line x1="460" y1="278" x2="395" y2="278" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="6 6" className={dashClass} markerEnd="url(#room-d-arrow-active)" />

          <g transform="translate(205, 250)">
            <rect width="185" height="56" rx="10" fill="var(--surface)" stroke="var(--signal)" strokeWidth="1.8" />
            <text x="92" y="28" textAnchor="middle" fill="var(--signal)" fontFamily="var(--font-data)" fontSize="13" fontWeight="700">React canvas</text>
            <text x="92" y="44" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-data)" fontSize="10.5">60 FPS Coordinate Engine</text>
          </g>

          <line x1="205" y1="278" x2="155" y2="278" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="6 6" className={dashClass} markerEnd="url(#room-d-arrow-active)" />

          <g transform="translate(10, 250)">
            <rect width="140" height="56" rx="10" fill="var(--signal-dim)" stroke="var(--signal)" strokeWidth="1.5" />
            <text x="70" y="28" textAnchor="middle" fill="var(--signal)" fontFamily="var(--font-data)" fontSize="13" fontWeight="700">Web Speech</text>
            <text x="70" y="44" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-data)" fontSize="10.5">pronunciation</text>
          </g>
        </svg>

        {/* Mobile View */}
        <svg
          viewBox="0 0 320 440"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto sm:hidden select-none"
        >
          {defs("room-m")}
          <rect width="100%" height="100%" fill="url(#room-m-dots)" opacity="0.6" />
          <g transform="translate(180, 12)">
            <rect width="120" height="26" rx="6" fill="var(--signal-dim)" stroke="var(--signal)" strokeWidth="1" />
            <text x="60" y="17" textAnchor="middle" fill="var(--signal)" fontFamily="var(--font-data)" fontSize="10" fontWeight="700">15/15 tests</text>
          </g>
          {[
            { label: "Photo", sub: "Physical Object Scan", y: 50, hl: false },
            { label: "Gemini Vision", sub: "Multimodal Classification", y: 115, hl: true },
            { label: "FastAPI + PostgreSQL", sub: "API & Data Persistence", y: 180, hl: false },
            { label: "React canvas / 60 FPS", sub: "Spatial Grid Placement", y: 245, hl: true },
            { label: "Web Speech / pronunciation", sub: "Audio Feedback", y: 310, hl: true },
          ].map((item, idx, arr) => (
            <g key={item.label} transform={`translate(35, ${item.y})`}>
              <rect width="250" height="46" rx="8" fill="var(--surface)" stroke={item.hl ? "var(--signal)" : "var(--line-strong)"} strokeWidth={item.hl ? "1.8" : "1.2"} />
              <text x="125" y="22" textAnchor="middle" fill={item.hl ? "var(--signal)" : "var(--ink)"} fontFamily="var(--font-data)" fontSize="13" fontWeight={item.hl ? "700" : "600"}>{item.label}</text>
              <text x="125" y="37" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-data)" fontSize="9.5">{item.sub}</text>
              {idx < arr.length - 1 && (
                <line x1="125" y1="46" x2="125" y2="64" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#room-m-arrow-active)" />
              )}
            </g>
          ))}
        </svg>
      </div>
    );
  }

  // Render Automation & Data Pipelines Diagram
  if (type === "automation") {
    return (
      <div
        role="img"
        aria-label="Workflow Automation and Data Pipelines architecture: Websites harvested via scheduled Selenium and Apify scrapers, validated with Make.com JSON, loaded into PostgreSQL; and OAuth Forms integrated across Sheets, Calendar, and Gmail via Zapier."
        className={containerClass}
      >
        <svg
          viewBox="0 0 920 480"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto hidden sm:block select-none"
        >
          {defs("auto-d")}
          <rect width="100%" height="100%" fill="url(#auto-d-dots)" opacity="0.6" />

          {/* Metric Chip */}
          <g transform="translate(740, 25)">
            <rect width="140" height="32" rx="8" fill="var(--signal-dim)" stroke="var(--signal)" strokeWidth="1.2" />
            <text x="70" y="20" textAnchor="middle" fill="var(--signal)" fontFamily="var(--font-data)" fontSize="11" fontWeight="700">40 h → 1 h</text>
          </g>

          {/* Row 1: Scraping Engine */}
          <g transform="translate(30, 110)">
            <rect width="110" height="56" rx="10" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.5" />
            <text x="55" y="34" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-data)" fontSize="13" fontWeight="600">Websites</text>
          </g>

          <line x1="140" y1="138" x2="190" y2="138" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="6 6" className={dashClass} markerEnd="url(#auto-d-arrow-active)" />

          <g transform="translate(195, 110)">
            <rect width="175" height="56" rx="10" fill="var(--surface)" stroke="var(--signal)" strokeWidth="1.8" />
            <text x="87" y="28" textAnchor="middle" fill="var(--signal)" fontFamily="var(--font-data)" fontSize="13" fontWeight="700">Selenium + Apify</text>
            <text x="87" y="44" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-data)" fontSize="10.5">scheduled cloud runs</text>
          </g>

          <line x1="370" y1="138" x2="420" y2="138" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="6 6" className={dashClass} markerEnd="url(#auto-d-arrow-active)" />

          <g transform="translate(425, 110)">
            <rect width="165" height="56" rx="10" fill="var(--surface)" stroke="var(--signal)" strokeWidth="1.8" />
            <text x="82" y="28" textAnchor="middle" fill="var(--signal)" fontFamily="var(--font-data)" fontSize="13" fontWeight="700">Make.com</text>
            <text x="82" y="44" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-data)" fontSize="10.5">JSON validation</text>
          </g>

          <line x1="590" y1="138" x2="635" y2="138" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="6 6" className={dashClass} markerEnd="url(#auto-d-arrow-active)" />

          <g transform="translate(640, 110)">
            <rect width="125" height="56" rx="10" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.5" />
            <text x="62" y="34" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-data)" fontSize="13" fontWeight="600">PostgreSQL</text>
          </g>

          <line x1="765" y1="138" x2="805" y2="138" stroke="var(--line-strong)" strokeWidth="1.5" markerEnd="url(#auto-d-arrow)" />

          <g transform="translate(810, 110)">
            <rect width="95" height="56" rx="10" fill="var(--signal-dim)" stroke="var(--signal)" strokeWidth="1.5" />
            <text x="47" y="34" textAnchor="middle" fill="var(--signal)" fontFamily="var(--font-data)" fontSize="13" fontWeight="700">CSV / CRM</text>
          </g>

          {/* Row 2: Workflow Automation */}
          <g transform="translate(50, 260)">
            <rect width="120" height="56" rx="10" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.5" />
            <text x="60" y="34" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-data)" fontSize="13" fontWeight="600">Forms</text>
          </g>

          <line x1="170" y1="288" x2="225" y2="288" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="6 6" className={dashClass} markerEnd="url(#auto-d-arrow-active)" />

          <g transform="translate(230, 260)">
            <rect width="120" height="56" rx="10" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.5" />
            <text x="60" y="34" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-data)" fontSize="13" fontWeight="600">Sheets</text>
          </g>

          <line x1="350" y1="288" x2="405" y2="288" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="6 6" className={dashClass} markerEnd="url(#auto-d-arrow-active)" />

          <g transform="translate(410, 260)">
            <rect width="130" height="56" rx="10" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.5" />
            <text x="65" y="34" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-data)" fontSize="13" fontWeight="600">Calendar</text>
          </g>

          <line x1="540" y1="288" x2="600" y2="288" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="6 6" className={dashClass} markerEnd="url(#auto-d-arrow-active)" />

          <g transform="translate(605, 260)">
            <rect width="200" height="56" rx="10" fill="var(--surface)" stroke="var(--signal)" strokeWidth="1.8" />
            <text x="100" y="28" textAnchor="middle" fill="var(--signal)" fontFamily="var(--font-data)" fontSize="13" fontWeight="700">Gmail</text>
            <text x="100" y="44" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-data)" fontSize="10.5">Zapier + OAuth</text>
          </g>
        </svg>

        {/* Mobile View */}
        <svg
          viewBox="0 0 320 440"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto sm:hidden select-none"
        >
          {defs("auto-m")}
          <rect width="100%" height="100%" fill="url(#auto-m-dots)" opacity="0.6" />
          <g transform="translate(180, 10)">
            <rect width="120" height="26" rx="6" fill="var(--signal-dim)" stroke="var(--signal)" strokeWidth="1" />
            <text x="60" y="17" textAnchor="middle" fill="var(--signal)" fontFamily="var(--font-data)" fontSize="10" fontWeight="700">40 h → 1 h</text>
          </g>
          {[
            { label: "Websites", sub: "Source Targets", y: 48, hl: false },
            { label: "Selenium + Apify", sub: "Scheduled cloud runs", y: 112, hl: true },
            { label: "Make.com", sub: "JSON validation", y: 176, hl: true },
            { label: "PostgreSQL → CSV / CRM", sub: "Relational storage", y: 240, hl: false },
            { label: "Forms → Sheets → Calendar", sub: "Lead Intake & Meeting Setup", y: 304, hl: false },
            { label: "Gmail / Zapier + OAuth", sub: "Automated Dispatch", y: 368, hl: true },
          ].map((item, idx, arr) => (
            <g key={item.label} transform={`translate(30, ${item.y})`}>
              <rect width="260" height="44" rx="8" fill="var(--surface)" stroke={item.hl ? "var(--signal)" : "var(--line-strong)"} strokeWidth={item.hl ? "1.8" : "1.2"} />
              <text x="130" y="22" textAnchor="middle" fill={item.hl ? "var(--signal)" : "var(--ink)"} fontFamily="var(--font-data)" fontSize="13" fontWeight={item.hl ? "700" : "600"}>{item.label}</text>
              <text x="130" y="36" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-data)" fontSize="9.5">{item.sub}</text>
              {idx < arr.length - 1 && (
                <line x1="130" y1="44" x2="130" y2="62" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#auto-m-arrow-active)" />
              )}
            </g>
          ))}
        </svg>
      </div>
    );
  }

  // Render Satellite Tracking System Diagram
  if (type === "satellite") {
    return (
      <div
        role="img"
        aria-label="Satellite Tracking System architecture: Orbital satellite data cached in Redis for fast access, queried via Express REST API with MongoDB persistent telemetry, visualized in real-time React and Google Maps UI."
        className={containerClass}
      >
        <svg
          viewBox="0 0 920 480"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto hidden sm:block select-none"
        >
          {defs("sat-d")}
          <rect width="100%" height="100%" fill="url(#sat-d-dots)" opacity="0.6" />

          {/* Main Flow */}
          <g transform="translate(40, 160)">
            <rect width="145" height="58" rx="10" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.5" />
            <text x="72" y="35" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-data)" fontSize="13" fontWeight="600">Satellite data</text>
          </g>

          <line x1="185" y1="189" x2="245" y2="189" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="6 6" className={dashClass} markerEnd="url(#sat-d-arrow-active)" />

          <g transform="translate(250, 160)">
            <rect width="165" height="58" rx="10" fill="var(--surface)" stroke="var(--signal)" strokeWidth="1.8" />
            <text x="82" y="28" textAnchor="middle" fill="var(--signal)" fontFamily="var(--font-data)" fontSize="13" fontWeight="700">Redis</text>
            <text x="82" y="45" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-data)" fontSize="10.5">latest positions</text>
          </g>

          <line x1="415" y1="189" x2="480" y2="189" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="6 6" className={dashClass} markerEnd="url(#sat-d-arrow-active)" />

          <g transform="translate(485, 160)">
            <rect width="145" height="58" rx="10" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.5" />
            <text x="72" y="35" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-data)" fontSize="13" fontWeight="600">Express API</text>
          </g>

          <line x1="630" y1="189" x2="690" y2="189" stroke="var(--signal)" strokeWidth="1.5" strokeDasharray="6 6" className={dashClass} markerEnd="url(#sat-d-arrow-active)" />

          <g transform="translate(695, 160)">
            <rect width="185" height="58" rx="10" fill="var(--surface)" stroke="var(--signal)" strokeWidth="1.8" />
            <text x="92" y="35" textAnchor="middle" fill="var(--signal)" fontFamily="var(--font-data)" fontSize="13" fontWeight="700">React + Google Maps</text>
          </g>

          {/* Connected MongoDB below Express API */}
          <path d="M 557 218 L 557 285" fill="none" stroke="var(--line-strong)" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#sat-d-arrow)" />
          <g transform="translate(485, 285)">
            <rect width="145" height="54" rx="10" fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.5" />
            <text x="72" y="28" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-data)" fontSize="13" fontWeight="600">MongoDB</text>
            <text x="72" y="43" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-data)" fontSize="10.5">Telemetry Archive</text>
          </g>
        </svg>

        {/* Mobile View */}
        <svg
          viewBox="0 0 320 400"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto sm:hidden select-none"
        >
          {defs("sat-m")}
          <rect width="100%" height="100%" fill="url(#sat-m-dots)" opacity="0.6" />
          {[
            { label: "Satellite data", sub: "Orbital telemetry", y: 25, hl: false },
            { label: "Redis / latest positions", sub: "In-memory caching", y: 95, hl: true },
            { label: "Express API", sub: "REST endpoints", y: 165, hl: false },
            { label: "React + Google Maps", sub: "Real-time mapping", y: 235, hl: true },
            { label: "MongoDB", sub: "Connected telemetry archive", y: 315, hl: false },
          ].map((item, idx, arr) => (
            <g key={item.label} transform={`translate(35, ${item.y})`}>
              <rect width="250" height="46" rx="8" fill="var(--surface)" stroke={item.hl ? "var(--signal)" : "var(--line-strong)"} strokeWidth={item.hl ? "1.8" : "1.2"} />
              <text x="125" y="22" textAnchor="middle" fill={item.hl ? "var(--signal)" : "var(--ink)"} fontFamily="var(--font-data)" fontSize="13" fontWeight={item.hl ? "700" : "600"}>{item.label}</text>
              <text x="125" y="37" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-data)" fontSize="9.5">{item.sub}</text>
              {idx < arr.length - 1 && (
                <line x1="125" y1="46" x2="125" y2="68" stroke={idx < 3 ? "var(--signal)" : "var(--line-strong)"} strokeWidth="1.5" strokeDasharray={idx < 3 ? "4 4" : "3 3"} markerEnd={idx < 3 ? "url(#sat-m-arrow-active)" : "url(#sat-m-arrow)"} />
              )}
            </g>
          ))}
        </svg>
      </div>
    );
  }

  return null;
}
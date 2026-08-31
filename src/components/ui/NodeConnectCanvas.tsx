"use client";

import { useState, useRef, useEffect } from "react";
import { profile } from "@/data/profile";
import { Mail, Check, Copy, Sparkles, Send, Cable, Linkedin, Github } from "lucide-react";

export function NodeConnectCanvas() {
  const [connected, setConnected] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [wireEnd, setWireEnd] = useState({ x: 120, y: 160 });

  const containerRef = useRef<HTMLDivElement>(null);
  const sourceRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || connected || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setWireEnd({ x, y });

    // Check proximity to target socket
    if (targetRef.current) {
      const targetRect = targetRef.current.getBoundingClientRect();
      const targetX = targetRect.left - rect.left + targetRect.width / 2;
      const targetY = targetRect.top - rect.top + targetRect.height / 2;
      const dist = Math.hypot(x - targetX, y - targetY);

      if (dist < 55) {
        setConnected(true);
        setIsDragging(false);
        setWireEnd({ x: targetX, y: targetY });
      }
    }
  };

  const handlePointerUp = () => {
    if (!connected) {
      setIsDragging(false);
      setWireEnd({ x: 140, y: 160 });
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className="w-full rounded-2xl border border-cyan/20 bg-surface/90 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1F2833_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 max-w-xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 font-data text-xs text-cyan mb-3">
          <Cable size={13} />
          INTERACTIVE CONNECTION BUS
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
          Connect directly with Nehal
        </h2>
        <p className="mt-2 font-body text-sm text-text-muted">
          Drag the <strong className="text-cyan">Message Node</strong> into the <strong className="text-white">Receptor Socket</strong> to establish direct connection.
        </p>
      </div>

      {/* Interactive Circuit Wiring Field */}
      <div className="relative z-10 my-8 h-64 sm:h-72 rounded-xl border border-line bg-obsidian/80 relative flex items-center justify-between px-6 sm:px-14 select-none">
        {/* SVG Bezier Wire */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <path
            d={`M 110 135 C ${connected ? 250 : wireEnd.x} 135, ${connected ? 320 : wireEnd.x} ${connected ? 135 : wireEnd.y}, ${connected ? "calc(100% - 130px)" : wireEnd.x} ${connected ? 135 : wireEnd.y}`}
            fill="none"
            stroke={connected ? "#66FCF1" : isDragging ? "#45A29E" : "rgba(102, 252, 241, 0.4)"}
            strokeWidth={connected ? "3.5" : "2.5"}
            strokeDasharray={connected ? "none" : "5,5"}
            className={connected ? "shadow-cyan filter drop-shadow-[0_0_8px_#66FCF1]" : ""}
          />
        </svg>

        {/* Left Node: Source */}
        <div
          ref={sourceRef}
          onPointerDown={handlePointerDown}
          className={`cursor-grab active:cursor-grabbing flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
            connected
              ? "border-cyan bg-cyan/15 text-white"
              : isDragging
                ? "border-cyan scale-105 bg-surface-raised ring-2 ring-cyan"
                : "border-line bg-surface hover:border-cyan text-text-muted"
          }`}
        >
          <div className="h-12 w-12 rounded-full bg-obsidian border-2 border-cyan flex items-center justify-center text-cyan shadow-cyan-sm">
            <Mail size={20} />
          </div>
          <span className="font-data text-xs font-semibold text-white">MESSAGE NODE</span>
          <span className="font-data text-[10px] text-cyan">
            {connected ? "✦ WIRE LOCKED" : "✦ DRAG TO CONNECT"}
          </span>
        </div>

        {/* Right Node: Receptor Target */}
        <div
          ref={targetRef}
          onClick={() => setConnected(true)}
          className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all cursor-pointer ${
            connected
              ? "border-cyan bg-cyan/20 ring-4 ring-cyan/30 text-white shadow-cyan"
              : "border-dashed border-cyan/40 bg-surface/80 hover:border-cyan hover:bg-surface-raised"
          }`}
        >
          <div className="h-12 w-12 rounded-full bg-obsidian border-2 border-cyan flex items-center justify-center text-cyan relative">
            <Sparkles size={20} className={connected ? "animate-spin text-cyan" : ""} />
            {connected && (
              <span className="absolute inset-0 rounded-full bg-cyan/30 animate-ping" />
            )}
          </div>
          <span className="font-data text-xs font-semibold text-white">NEHAL QADEER</span>
          <span className={`font-data text-[10px] ${connected ? "text-cyan font-bold" : "text-text-faint"}`}>
            {connected ? "✔ LINK ESTABLISHED" : "RECEPTOR SOCKET"}
          </span>
        </div>
      </div>

      {/* Action Tray upon connection */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-2">
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}?subject=Collaboration%20/%20Engineering%20Role%20Inquiry`}
            className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 font-body text-sm font-bold transition-all shadow-lg ${
              connected
                ? "bg-cyan text-obsidian shadow-cyan hover:scale-105 active:scale-95"
                : "bg-surface-raised text-white border border-line hover:border-cyan"
            }`}
          >
            <Send size={15} />
            Send Email Directly ({profile.email})
          </a>

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-4 py-3 font-body text-sm font-medium text-white hover:border-cyan hover:text-cyan transition-colors"
          >
            {copied ? <Check size={15} className="text-cyan" /> : <Copy size={15} />}
            {copied ? "Copied to Clipboard!" : "Copy Email"}
          </button>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl border border-line bg-surface hover:border-cyan hover:text-cyan text-text-muted transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl border border-line bg-surface hover:border-cyan hover:text-cyan text-text-muted transition-colors"
            title="GitHub"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}

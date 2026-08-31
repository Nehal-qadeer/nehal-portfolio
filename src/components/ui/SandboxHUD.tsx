"use client";

import { useSandboxStore, type SimulationMode } from "@/hooks/useSandboxStore";
import { 
  Cpu, 
  Database, 
  Workflow, 
  Play, 
  Sun, 
  Moon, 
  Zap, 
  Activity,
  Maximize2,
  Minimize2
} from "lucide-react";
import { useState } from "react";

export function SandboxHUD() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    mode,
    setMode,
    theme,
    toggleTheme,
    streamSpeed,
    setStreamSpeed,
    recordsHarvested,
    inferenceLatency,
    cvConfidence,
    triggerBurst
  } = useSandboxStore();

  const isLight = theme === "light";

  const MODES: { id: SimulationMode; label: string; icon: typeof Cpu; desc: string }[] = [
    { id: "cv_vision", label: "Computer Vision & OpenVINO", icon: Cpu, desc: "Object Verification & Inference Scanner" },
    { id: "data_pipeline", label: "Scraping & PostgreSQL", icon: Database, desc: "Multi-Platform Selenium / Apify Ingestion" },
    { id: "workflow_automation", label: "Zapier & Webhook Flow", icon: Workflow, desc: "Multi-App Google Workspace / OAuth Pipeline" }
  ];

  return (
    <aside
      aria-label="Interactive Pipeline & Vision Simulator"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto"
    >
      {/* Top Floating Status Pill */}
      <div
        className={`flex items-center gap-3 rounded-full border px-4 py-1.5 backdrop-blur-md transition-colors ${
          isLight
            ? "border-slate-300 bg-white/95 text-slate-700 shadow-sm"
            : "border-line bg-panel/90 text-text shadow-lg"
        }`}
      >
        <span className="flex items-center gap-1.5 font-data text-[10px] tracking-wider text-signal font-semibold">
          <span className="h-2 w-2 rounded-full bg-signal animate-pulse" />
          PIPELINE SIMULATOR
        </span>
        <span className="text-line">|</span>
        <span className="font-data text-[10px] tabular text-verify font-medium">
          {mode === "cv_vision"
            ? `${inferenceLatency}ms · ${cvConfidence}%`
            : mode === "data_pipeline"
              ? `${recordsHarvested.toLocaleString()} RECS`
              : "4-APP SYNC"}
        </span>
        <span className="text-line">|</span>
        <button
          onClick={toggleTheme}
          className="flex items-center gap-1 text-xs text-text-muted hover:text-signal transition-colors"
          title="Toggle Light / Dark Mode"
        >
          {isLight ? <Moon size={14} /> : <Sun size={14} />}
          <span className="font-data text-[10px] font-medium uppercase">
            {isLight ? "Dark" : "Light"}
          </span>
        </button>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="ml-1 text-text-muted hover:text-text"
          title={collapsed ? "Expand Controls" : "Collapse Controls"}
        >
          {collapsed ? <Maximize2 size={13} /> : <Minimize2 size={13} />}
        </button>
      </div>

      {/* Main Control Panel */}
      {!collapsed && (
        <div
          className={`w-80 sm:w-96 rounded-xl border p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 ${
            isLight
              ? "border-slate-300 bg-white/95 text-slate-800"
              : "border-line bg-panel/90 text-text"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-line pb-3">
            <div className="flex items-center gap-2">
              <Activity size={15} className="text-signal" />
              <span className="font-display text-sm font-semibold tracking-wide">
                Live Simulation Matrix
              </span>
            </div>
            <button
              onClick={triggerBurst}
              className="inline-flex items-center gap-1 rounded bg-signal px-2.5 py-1 font-data text-[10px] font-semibold text-ink transition-transform hover:scale-105 active:scale-95"
            >
              <Play size={10} />
              Run Pipeline
            </button>
          </div>

          {/* 1. Mode Selectors */}
          <div className="mt-3 space-y-1.5">
            <span className="font-data text-[10px] text-text-faint tracking-widest uppercase block mb-1">
              Select Architecture Mode
            </span>
            {MODES.map((m) => {
              const Icon = m.icon;
              const active = mode === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setMode(m.id)}
                  className={`w-full flex items-center gap-3 p-2.5 rounded-lg border text-left transition-all ${
                    active
                      ? "border-signal bg-signal/15 text-signal font-medium shadow-sm"
                      : isLight
                        ? "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300"
                        : "border-line bg-ink/70 text-text-muted hover:border-slate-600"
                  }`}
                >
                  <Icon size={16} className={active ? "text-signal" : "text-text-muted"} />
                  <div className="flex-1 min-w-0">
                    <div className="font-display text-xs font-semibold">{m.label}</div>
                    <div className="font-data text-[10px] text-text-faint truncate">{m.desc}</div>
                  </div>
                  {active && <span className="h-2 w-2 rounded-full bg-signal shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* 2. Speed Controller & Metrics */}
          <div className="mt-3 pt-3 border-t border-line flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Zap size={13} className="text-signal" />
              <span className="font-data text-[10px] text-text-faint uppercase">Speed:</span>
              {[1, 2, 4].map((speed) => (
                <button
                  key={speed}
                  onClick={() => setStreamSpeed(speed)}
                  className={`px-2 py-0.5 rounded font-data text-[10px] transition-colors ${
                    streamSpeed === speed
                      ? "bg-signal text-ink font-bold"
                      : isLight
                        ? "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        : "bg-ink text-text-muted hover:bg-panel-raised"
                  }`}
                >
                  {speed}x
                </button>
              ))}
            </div>

            <span className="font-data text-[10px] text-text-faint">
              Move cursor to scan
            </span>
          </div>
        </div>
      )}
    </aside>
  );
}

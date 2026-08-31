"use client";

import { useSandboxStore, type RenderMode, type CameraPreset } from "@/hooks/useSandboxStore";
import { 
  Sliders, 
  Layers, 
  Eye, 
  Sun, 
  Moon, 
  RotateCw, 
  Compass, 
  Radio, 
  Scan,
  Maximize2,
  Minimize2
} from "lucide-react";
import { useState } from "react";

export function SandboxHUD() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    explosionProgress,
    setExplosionProgress,
    renderMode,
    setRenderMode,
    cameraPreset,
    setCameraPreset,
    activeComponent,
    setActiveComponent,
    theme,
    toggleTheme,
    laserScanActive,
    setLaserScanActive,
    autoRotate,
    toggleAutoRotate,
    telemetry
  } = useSandboxStore();

  const isLight = theme === "light";

  const MODES: { id: RenderMode; label: string; icon: typeof Layers }[] = [
    { id: "standard", label: "Standard", icon: Eye },
    { id: "exploded", label: "Exploded", icon: Layers },
    { id: "xray", label: "X-Ray", icon: Scan },
    { id: "lidar", label: "LiDAR", icon: Radio }
  ];

  const PRESETS: { id: CameraPreset; label: string }[] = [
    { id: "iso", label: "Isometric" },
    { id: "front", label: "Front Lens" },
    { id: "core", label: "TPU Core" },
    { id: "top", label: "Top Gimbal" }
  ];

  const COMPONENTS = [
    { id: "optics", label: "Optics" },
    { id: "radiator", label: "Cryo-Fins" },
    { id: "core", label: "TPU Die" },
    { id: "chassis", label: "Chassis" }
  ];

  return (
    <aside
      aria-label="3D Spatial Sandbox Control Panel"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto"
    >
      {/* Mini Telemetry Status Bar */}
      <div
        className={`flex items-center gap-3 rounded-full border px-4 py-1.5 backdrop-blur-md transition-colors ${
          isLight
            ? "border-slate-300 bg-white/90 text-slate-700 shadow-sm"
            : "border-line bg-panel/90 text-text shadow-lg"
        }`}
      >
        <span className="flex items-center gap-1.5 font-data text-[10px] tracking-wider text-signal font-semibold">
          <span className="h-2 w-2 rounded-full bg-signal animate-pulse" />
          SPATIAL SANDBOX · LEVEL 4
        </span>
        <span className="text-line">|</span>
        <span className="font-data text-[10px] tracking-widest text-text-faint">
          DISP: {telemetry.displacementMm}mm
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

      {/* Main Interactive Control Dock */}
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
              <Sliders size={15} className="text-signal" />
              <span className="font-display text-sm font-semibold tracking-wide">
                Hardware Disassembly Matrix
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={toggleAutoRotate}
                className={`rounded px-2 py-0.5 font-data text-[10px] uppercase transition-colors ${
                  autoRotate
                    ? "bg-signal/20 text-signal border border-signal/40"
                    : isLight
                      ? "bg-slate-100 text-slate-600"
                      : "bg-ink text-text-muted"
                }`}
                title="Toggle Auto Spin"
              >
                <RotateCw size={10} className="inline mr-1" />
                Spin
              </button>
              <button
                onClick={() => setLaserScanActive(!laserScanActive)}
                className={`rounded px-2 py-0.5 font-data text-[10px] uppercase transition-colors ${
                  laserScanActive
                    ? "bg-verify/20 text-verify border border-verify/40"
                    : isLight
                      ? "bg-slate-100 text-slate-600"
                      : "bg-ink text-text-muted"
                }`}
                title="Toggle Laser Sweep"
              >
                Laser
              </button>
            </div>
          </div>

          {/* 1. Exploded Disassembly Slider */}
          <div className="mt-3">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-data text-[11px] text-text-muted tracking-wider uppercase">
                Assembly Explosion
              </span>
              <span className="font-data text-xs font-semibold text-signal tabular">
                {Math.round(explosionProgress * 100)}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={explosionProgress}
              onChange={(e) => setExplosionProgress(parseFloat(e.target.value), true)}
              className="w-full h-1.5 bg-line rounded-lg appearance-none cursor-pointer accent-signal"
            />
            <div className="flex justify-between font-data text-[9px] text-text-faint mt-1">
              <span>ASSEMBLED</span>
              <span>INSPECTION</span>
              <span>FULLY EXPLODED</span>
            </div>
          </div>

          {/* 2. Visual Render Mode Chips */}
          <div className="mt-4">
            <span className="font-data text-[10px] text-text-faint tracking-widest uppercase block mb-1.5">
              Exploration Mode
            </span>
            <div className="grid grid-cols-4 gap-1.5">
              {MODES.map((m) => {
                const Icon = m.icon;
                const active = renderMode === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setRenderMode(m.id)}
                    className={`flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-md border text-center transition-all ${
                      active
                        ? "border-signal bg-signal/15 text-signal font-semibold"
                        : isLight
                          ? "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300"
                          : "border-line bg-ink/70 text-text-muted hover:border-slate-600"
                    }`}
                  >
                    <Icon size={14} />
                    <span className="font-data text-[10px]">{m.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Component Focus Pills */}
          <div className="mt-3">
            <span className="font-data text-[10px] text-text-faint tracking-widest uppercase block mb-1.5">
              Highlight Sub-Assembly
            </span>
            <div className="flex flex-wrap gap-1.5">
              {COMPONENTS.map((c) => {
                const active = activeComponent === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveComponent(active ? null : c.id)}
                    className={`rounded-full px-2.5 py-0.5 font-data text-[10px] transition-all border ${
                      active
                        ? "border-signal bg-signal text-ink font-semibold"
                        : isLight
                          ? "border-slate-200 bg-slate-100 text-slate-700 hover:border-signal"
                          : "border-line bg-ink text-text-muted hover:border-signal"
                    }`}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Camera Angle Presets */}
          <div className="mt-3 pt-3 border-t border-line">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-data text-[10px] text-text-faint tracking-widest uppercase flex items-center gap-1">
                <Compass size={11} /> Perspective
              </span>
              <span className="font-data text-[9px] text-text-faint">Drag canvas to orbit</span>
            </div>
            <div className="grid grid-cols-4 gap-1">
              {PRESETS.map((p) => {
                const active = cameraPreset === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setCameraPreset(p.id)}
                    className={`py-1 rounded text-center font-data text-[10px] border transition-all ${
                      active
                        ? "border-signal bg-signal/20 text-signal font-semibold"
                        : isLight
                          ? "border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-900"
                          : "border-line bg-ink/60 text-text-muted hover:text-text"
                    }`}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}

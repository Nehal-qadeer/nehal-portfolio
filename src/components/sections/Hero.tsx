"use client";

import { profile } from "@/data/profile";
import { useSandboxStore } from "@/hooks/useSandboxStore";
import { Sparkles, Move3d, Layers } from "lucide-react";

export function Hero() {
  const { setExplosionProgress, setRenderMode, setCameraPreset } = useSandboxStore();

  return (
    <section id="top" className="relative flex min-h-screen items-end overflow-hidden pointer-events-none">
      <div className="relative z-10 w-full px-6 pb-20 pt-40 md:px-10 lg:pl-24">
        <div className="max-w-2xl rounded-2xl border border-line/60 bg-panel/75 p-8 shadow-2xl backdrop-blur-xl pointer-events-auto">
          {/* Status badge */}
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-verify/30 bg-verify/10 px-3 py-1 font-data text-xs tracking-widest text-verify">
              <span className="h-2 w-2 rounded-full bg-verify animate-pulse" />
              SYSTEM · VERIFIED
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-signal/30 bg-signal/10 px-3 py-1 font-data text-[11px] tracking-wider text-signal font-medium">
              <Sparkles size={12} />
              SPATIAL SANDBOX (LEVEL 4)
            </div>
          </div>

          <h1 className="font-display text-display-1 font-medium text-text leading-tight">
            {profile.name}
          </h1>

          <p className="mt-2 font-data text-sm tracking-wide text-signal font-semibold">
            {profile.role}
          </p>

          <p className="mt-4 font-body text-base text-text-muted md:text-lg leading-relaxed">
            {profile.summary}
          </p>

          {/* Quick 3D Exploration Actions */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => {
                setExplosionProgress(0.85, true);
                setRenderMode("exploded");
                setCameraPreset("iso");
              }}
              className="inline-flex items-center gap-2 rounded-lg bg-signal px-4 py-2 font-body text-xs font-semibold text-ink transition-transform hover:scale-105 active:scale-95"
            >
              <Layers size={14} />
              Explode 3D Assembly
            </button>
            <button
              onClick={() => {
                setRenderMode("xray");
                setCameraPreset("core");
              }}
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-panel-raised/80 px-4 py-2 font-body text-xs font-medium text-text hover:border-signal hover:text-signal transition-colors"
            >
              <Move3d size={14} />
              X-Ray Inspect TPU
            </button>
            <span className="font-data text-[11px] text-text-faint ml-2 hidden sm:inline">
              ← Drag 3D canvas or scroll to explode
            </span>
          </div>

          {/* Telemetry Metrics */}
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-line/80 pt-6">
            {profile.readouts.map((readout) => (
              <div key={readout.label}>
                <div className="font-data text-xl md:text-2xl font-bold tabular text-signal">
                  {readout.value}
                </div>
                <div className="mt-1 font-body text-[11px] text-text-faint leading-snug">
                  {readout.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

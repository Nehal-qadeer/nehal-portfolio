"use client";

import { profile } from "@/data/profile";
import { useSandboxStore } from "@/hooks/useSandboxStore";
import { Cpu, Database, Workflow, CheckCircle2, Briefcase, MapPin, Globe } from "lucide-react";

export function Hero() {
  const { setMode } = useSandboxStore();

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pointer-events-none py-28 md:py-36">
      <div className="relative z-10 w-full px-6 md:px-10 lg:pl-24">
        <div className="max-w-3xl rounded-2xl border border-line/70 bg-panel/85 p-8 md:p-12 shadow-2xl backdrop-blur-xl pointer-events-auto">
          {/* Status badge: Available for Hire */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-verify/30 bg-verify/10 px-3.5 py-1.5 font-data text-xs tracking-wider text-verify font-semibold">
              <span className="h-2 w-2 rounded-full bg-verify animate-pulse" />
              AVAILABLE FOR HIRE · JUNIOR & FULL-TIME ROLES
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-line bg-panel-raised/80 px-3 py-1.5 font-data text-xs text-text-faint">
              <MapPin size={13} className="text-signal" />
              Mannheim / Germany · Remote EU
            </div>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-text tracking-tight leading-tight">
            {profile.name}
          </h1>

          <div className="mt-2 font-display text-xl sm:text-2xl text-signal font-semibold">
            {profile.role}
          </div>

          {/* Explicit Target Roles for Hiring Managers / Recruiters */}
          <div className="mt-5 rounded-xl border border-line/80 bg-panel-raised/60 p-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-text mb-2.5">
              <Briefcase size={14} className="text-signal" />
              <span className="font-data tracking-wider uppercase text-signal">Target Roles & Specializations:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.hiringRoles.map((role) => (
                <span
                  key={role}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-ink/70 px-3 py-1 font-body text-xs font-medium text-text hover:border-signal transition-colors"
                >
                  <CheckCircle2 size={12} className="text-verify" />
                  {role}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-5 font-body text-base text-text-muted md:text-lg leading-relaxed">
            {profile.summary}
          </p>

          {/* Interactive Simulation Switchers */}
          <div className="mt-6 border-t border-line/80 pt-6">
            <span className="font-data text-[11px] text-text-faint tracking-widest uppercase block mb-3">
              Interactive System Simulators (Click to Test):
            </span>
            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={() => setMode("cv_vision")}
                className="inline-flex items-center gap-2 rounded-lg bg-signal px-4 py-2 font-body text-xs font-semibold text-ink transition-transform hover:scale-105 active:scale-95 shadow-md shadow-signal/20"
              >
                <Cpu size={14} />
                Test CV & OpenVINO Scanner
              </button>
              <button
                onClick={() => setMode("data_pipeline")}
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-panel-raised/80 px-4 py-2 font-body text-xs font-medium text-text hover:border-signal hover:text-signal transition-colors"
              >
                <Database size={14} />
                Test Scraping & Postgres Flow
              </button>
              <button
                onClick={() => setMode("workflow_automation")}
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-panel-raised/80 px-4 py-2 font-body text-xs font-medium text-text hover:border-signal hover:text-signal transition-colors"
              >
                <Workflow size={14} />
                Test Zapier Automation
              </button>
            </div>
          </div>

          {/* Key Metrics Readouts */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-line/80 pt-6">
            {profile.readouts.map((readout) => (
              <div key={readout.label} className="rounded-lg border border-line/50 bg-ink/40 p-3">
                <div className="font-data text-xl md:text-2xl font-bold tabular text-signal">
                  {readout.value}
                </div>
                <div className="mt-1 font-body text-xs text-text-faint leading-snug">
                  {readout.label} · <span className="text-text-muted">{readout.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

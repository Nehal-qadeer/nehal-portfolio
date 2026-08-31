"use client";

import { profile } from "@/data/profile";
import { InteractiveTerminal } from "@/components/ui/InteractiveTerminal";
import { CheckCircle2, Briefcase, MapPin, ArrowRight, Mail, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 md:px-10 lg:pl-24">
      <div className="w-full max-w-6xl grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        {/* Left Column: Bio & Hiring Roles */}
        <div className="space-y-6">
          {/* Status badge */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-verify/30 bg-verify/10 px-3.5 py-1.5 font-data text-xs tracking-wider text-verify font-semibold">
              <span className="h-2 w-2 rounded-full bg-verify animate-pulse" />
              OPEN FOR JUNIOR & FULL-TIME ROLES
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-line bg-panel-raised/80 px-3 py-1.5 font-data text-xs text-text-faint">
              <MapPin size={12} className="text-signal" />
              Mannheim, Germany · Remote EU
            </div>
          </div>

          <div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text tracking-tight leading-[1.08]">
              {profile.name}
            </h1>
            <p className="mt-2 font-display text-xl sm:text-2xl font-semibold text-signal">
              {profile.role}
            </p>
          </div>

          <p className="font-body text-base sm:text-lg text-text-muted leading-relaxed max-w-xl">
            {profile.summary}
          </p>

          {/* Hiring Roles Chips */}
          <div className="rounded-xl border border-line/80 bg-panel/70 p-4 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-semibold text-signal mb-2.5">
              <Briefcase size={14} />
              <span className="font-data tracking-wider uppercase">Roles I Can Be Hired As:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.hiringRoles.map((role) => (
                <span
                  key={role}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-ink/80 px-2.5 py-1 font-body text-xs font-medium text-text hover:border-signal transition-colors"
                >
                  <CheckCircle2 size={12} className="text-verify" />
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-signal px-6 py-3 font-body text-sm font-semibold text-ink transition-all hover:scale-105 active:scale-95 shadow-lg shadow-signal/20"
            >
              <Mail size={15} />
              Get in Touch
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel-raised/80 px-5 py-3 font-body text-sm font-medium text-text hover:border-signal hover:text-signal transition-colors"
            >
              View Projects
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3 border-t border-line/70 pt-6">
            {profile.readouts.map((readout) => (
              <div key={readout.label}>
                <div className="font-data text-lg sm:text-xl font-bold text-signal tabular">
                  {readout.value}
                </div>
                <div className="mt-0.5 font-body text-[11px] text-text-faint leading-snug">
                  {readout.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Live Interactive Pipeline Terminal */}
        <div className="w-full">
          <InteractiveTerminal />
        </div>
      </div>
    </section>
  );
}

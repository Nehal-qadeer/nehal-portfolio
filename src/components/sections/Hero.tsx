"use client";

import { SuspendedAnchor3D } from "@/components/canvas/SuspendedAnchor3D";
import { profile } from "@/data/profile";
import { CheckCircle2, Briefcase, MapPin, ArrowRight, Mail, Sparkles, Terminal } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center justify-center px-6 pt-32 pb-16 md:px-10 lg:pl-24 max-w-6xl mx-auto">
      <div className="w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        {/* Left Column: Headline, Bio & Target Roles */}
        <div className="space-y-6">
          {/* Status badge */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1.5 font-data text-xs tracking-wider text-cyan font-semibold">
              <span className="h-2 w-2 rounded-full bg-cyan animate-pulse" />
              AVAILABLE FOR JUNIOR & FULL-TIME ROLES
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 font-data text-xs text-text-faint">
              <MapPin size={12} className="text-cyan" />
              Mannheim, Germany · Remote EU
            </div>
          </div>

          <div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              Nehal Qadeer — Architecting AI Inference Pipelines & Automation Systems.
            </h1>
          </div>

          <p className="font-body text-base sm:text-lg text-text-muted leading-relaxed max-w-xl">
            Applied Computer Science M.Sc. graduate from SRH Heidelberg. I design high-throughput Python scraping engines, optimize Computer Vision inference (-30% latency via OpenVINO), and engineer resilient production workflows.
          </p>

          {/* Hiring Roles Badges */}
          <div className="rounded-2xl border border-line bg-surface/90 p-5 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan mb-3">
              <Briefcase size={14} />
              <span className="font-data tracking-wider uppercase">Open to Hire As:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.hiringRoles.map((role) => (
                <span
                  key={role}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-obsidian px-3 py-1 font-body text-xs font-medium text-white hover:border-cyan transition-colors"
                >
                  <CheckCircle2 size={12} className="text-cyan" />
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan px-7 py-3.5 font-body text-sm font-bold text-obsidian transition-all hover:scale-105 active:scale-95 shadow-cyan"
            >
              <Mail size={15} />
              Connect with Nehal
            </a>
            <Link
              href="/story"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-5 py-3.5 font-body text-sm font-medium text-white hover:border-cyan hover:text-cyan transition-colors"
            >
              The Story & Philosophy
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Right Column: Hero 3D Physical Suspended Anchor */}
        <div className="w-full flex flex-col items-center justify-center relative">
          <div className="w-full rounded-2xl border border-cyan/20 bg-surface/40 p-4 backdrop-blur-md shadow-2xl relative">
            <SuspendedAnchor3D />
          </div>
        </div>
      </div>
    </section>
  );
}

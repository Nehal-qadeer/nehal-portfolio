"use client";

import Image from "next/image";
import { MechanicalKeyGrid3D } from "@/components/canvas/MechanicalKeyGrid3D";
import { profile } from "@/data/profile";
import { CheckCircle2, Briefcase, MapPin, ArrowRight, Terminal, Sparkles, Gamepad2 } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center justify-center px-6 pt-32 pb-16 md:px-10 lg:pl-24 max-w-6xl mx-auto z-10">
      <div className="w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        {/* Left Column: Bio, Portrait & Target Roles */}
        <div className="space-y-6">
          {/* Status badge */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1.5 font-mono text-xs tracking-wider text-amber font-semibold">
              <span className="h-2 w-2 rounded-full bg-amber animate-pulse" />
              AVAILABLE FOR JUNIOR & FULL-TIME ROLES
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-charcoal bg-charcoal/80 px-3 py-1.5 font-mono text-xs text-ash">
              <MapPin size={12} className="text-amber" />
              Mannheim, Germany · Remote EU
            </div>
          </div>

          <div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-bone tracking-tight leading-[1.06]">
              Nehal Qadeer. Architecting AI Inference Pipelines & Automation Systems.
            </h1>
          </div>

          <p className="font-body text-base sm:text-lg text-ash leading-relaxed max-w-xl">
            Applied Computer Science M.Sc. graduate from SRH Heidelberg. I design high-throughput Python scraping engines, optimize Computer Vision inference (25+ FPS via Intel OpenVINO on CPU), and engineer resilient production workflows.
          </p>

          {/* Profile Portrait Card with Cyber Reticle */}
          <div className="flex items-center gap-5 rounded-2xl border border-charcoal bg-charcoal/70 p-4 backdrop-blur-xl max-w-md">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-amber/40 bg-graphite group">
              <Image
                src="/images/nehal-portrait.jpg"
                alt="Portrait of Nehal Qadeer"
                fill
                sizes="80px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              {/* Corner Reticles */}
              <span className="absolute left-1 top-1 h-2 w-2 border-l border-t border-amber" />
              <span className="absolute right-1 top-1 h-2 w-2 border-r border-t border-amber" />
              <span className="absolute bottom-1 left-1 h-2 w-2 border-b border-l border-amber" />
              <span className="absolute bottom-1 right-1 h-2 w-2 border-b border-r border-amber" />
            </div>

            <div className="space-y-1">
              <div className="font-display text-base font-bold text-bone flex items-center gap-1.5">
                Nehal Qadeer
                <span className="text-amber text-xs font-mono">· M.Sc. CS</span>
              </div>
              <p className="font-mono text-xs text-ash">AI & Automation Engineer</p>
              <p className="font-mono text-[11px] text-amber">SRH Heidelberg (2025) · Grade 2.2</p>
            </div>
          </div>

          {/* Hiring Roles Badges */}
          <div className="rounded-2xl border border-charcoal bg-charcoal/80 p-5 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber mb-3">
              <Briefcase size={14} />
              <span className="font-mono tracking-wider uppercase">Open to Hire As:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.hiringRoles.map((role) => (
                <span
                  key={role}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-charcoal bg-graphite px-3 py-1 font-body text-xs font-medium text-bone hover:border-amber transition-colors"
                >
                  <CheckCircle2 size={12} className="text-amber" />
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#thesis"
              className="inline-flex items-center gap-2 rounded-xl bg-amber px-6 py-3.5 font-mono text-xs font-bold text-graphite transition-all hover:scale-105 active:scale-95 shadow-amber"
            >
              <Gamepad2 size={14} />
              View Thesis Game
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-charcoal bg-charcoal/90 px-5 py-3.5 font-mono text-xs font-medium text-bone hover:border-amber hover:text-amber transition-colors"
            >
              <Terminal size={14} />
              Open CLI Contact
            </a>
            <Link
              href="/story"
              className="inline-flex items-center gap-2 rounded-xl border border-charcoal bg-charcoal/90 px-5 py-3.5 font-body text-sm font-medium text-ash hover:border-amber hover:text-bone transition-colors"
            >
              The Story & Philosophy
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Right Column: 3D Mechanical Keyboard Grid */}
        <div className="w-full flex flex-col items-center justify-center">
          <MechanicalKeyGrid3D />
        </div>
      </div>
    </section>
  );
}

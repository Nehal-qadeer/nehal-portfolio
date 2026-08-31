"use client";

import Image from "next/image";
import { profile } from "@/data/profile";
import { Sparkles, Globe, GraduationCap, MapPin, CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="border-t border-line/60 px-6 py-24 md:px-10 lg:pl-24">
      <div className="max-w-6xl mx-auto rounded-2xl border border-line/80 bg-panel/85 p-8 md:p-12 shadow-2xl backdrop-blur-xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,18rem)_1fr] items-center">
          {/* Portrait Card */}
          <div className="relative mx-auto w-full max-w-xs lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-panel-raised shadow-xl group">
              <Image
                src="/images/headshot.jpg"
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="(min-width: 1024px) 18rem, 80vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                priority={false}
              />
              {/* Corner brackets */}
              <span className="absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-signal" />
              <span className="absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-signal" />
              <span className="absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-signal" />
              <span className="absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-signal" />
            </div>

            <div className="mt-3 flex items-center justify-between font-data text-xs text-text-faint">
              <span className="flex items-center gap-1">
                <MapPin size={11} className="text-signal" /> Mannheim, DE
              </span>
              <span className="text-verify font-semibold">M.Sc. 2025</span>
            </div>
          </div>

          {/* Concise Bio Content */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-signal" />
              <span className="font-data text-xs tracking-widest text-signal font-semibold uppercase">
                Background & Expertise
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text leading-tight">
              {profile.tagline}
            </h2>

            <p className="font-body text-base sm:text-lg text-text-muted leading-relaxed">
              M.Sc. graduate in <strong className="text-text">Applied Computer Science</strong> from <strong className="text-text">SRH Hochschule Heidelberg (Grade: 2.2)</strong>. I specialize in building end-to-end Python automations, optimizing Computer Vision models for production inference (-30% latency via Intel OpenVINO), and engineering scalable cloud scraping pipelines.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-2 font-body text-sm">
              <div className="flex items-start gap-2.5 rounded-xl border border-line bg-panel-raised/60 p-3.5">
                <CheckCircle2 size={16} className="text-verify shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-text font-medium">Production Diagnostics & SQL</strong>
                  <span className="text-text-muted text-xs">Analyzed server logs, Linux CLI, and complex PostgreSQL/MySQL queries.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-xl border border-line bg-panel-raised/60 p-3.5">
                <CheckCircle2 size={16} className="text-verify shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-text font-medium">Agile Sprint & QA Release</strong>
                  <span className="text-text-muted text-xs">Authored API specifications, defined UAC, and validated software release builds.</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="flex flex-wrap gap-3 pt-2 font-data text-xs">
              <span className="flex items-center gap-1.5 rounded-lg border border-line bg-ink/70 px-3 py-1.5 text-text">
                <Globe size={13} className="text-signal" />
                <strong>English:</strong> Full Professional Working Proficiency
              </span>
              <span className="flex items-center gap-1.5 rounded-lg border border-line bg-ink/70 px-3 py-1.5 text-text">
                <Globe size={13} className="text-signal" />
                <strong>German:</strong> A2 (Actively Improving)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

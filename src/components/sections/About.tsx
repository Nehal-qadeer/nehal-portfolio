"use client";

import Image from "next/image";
import { profile } from "@/data/profile";
import { useSandboxStore } from "@/hooks/useSandboxStore";
import { Globe, GraduationCap, Code2, Sparkles } from "lucide-react";

export function About() {
  const { setMode } = useSandboxStore();

  return (
    <section id="about" className="border-t border-line/60 px-6 py-28 md:px-10 lg:pl-24">
      <div className="rounded-2xl border border-line/60 bg-panel/85 p-8 md:p-12 shadow-2xl backdrop-blur-xl">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-20 items-center">
          <div className="relative mx-auto w-full max-w-xs lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line bg-panel-raised shadow-inner">
              <Image
                src="/images/headshot.jpg"
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="(min-width: 1024px) 20rem, 80vw"
                className="object-cover grayscale [filter:contrast(1.05)] hover:grayscale-0 transition-all duration-500"
                priority={false}
              />
              {/* corner brackets */}
              <span className="absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-signal" />
              <span className="absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-signal" />
              <span className="absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-signal" />
              <span className="absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-signal" />
            </div>
            <div className="mt-4 flex items-center justify-between font-data text-[11px] tracking-widest text-text-faint">
              <span>{profile.location.toUpperCase()}</span>
              <span className="text-verify font-semibold">M.SC. APPLIED CS (2025)</span>
            </div>
          </div>

          <div className="max-w-2xl">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-signal" />
              <p className="font-data text-xs tracking-widest text-signal font-semibold">ABOUT NEHAL QADEER</p>
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-text leading-tight">
              {profile.tagline}
            </h2>

            <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-text-muted md:text-lg">
              <p>
                Applied Computer Science M.Sc. graduate from <strong className="text-text">SRH Hochschule Heidelberg (2025, Grade: 2.2)</strong> with hands-on experience spanning Computer Vision (PyTorch, OpenCV, Intel OpenVINO), end-to-end Python automation, RESTful API integrations (Apify, webhooks), and database architectures.
              </p>
              <p>
                Experienced in building production-ready scraping engines, workflow automations (Zapier, Make.com), and optimized deep-learning verification pipelines. Strong software engineering foundation in Python 3, C++, OOP, Linux CLI, and SQL diagnostics, combined with proven Agile/Scrum project coordination and QA release validation across cross-functional engineering teams.
              </p>

              {/* Language proficiencies */}
              <div className="pt-2 flex flex-wrap items-center gap-3 font-data text-xs">
                <span className="flex items-center gap-1.5 rounded-lg border border-line bg-panel-raised px-3 py-1.5 text-text">
                  <Globe size={13} className="text-signal" />
                  <strong>English:</strong> Full Professional Working Proficiency
                </span>
                <span className="flex items-center gap-1.5 rounded-lg border border-line bg-panel-raised px-3 py-1.5 text-text">
                  <Globe size={13} className="text-signal" />
                  <strong>German:</strong> A2 (Actively Improving)
                </span>
              </div>

              {/* Simulation triggers */}
              <div className="pt-3 flex flex-wrap gap-2.5">
                <button
                  onClick={() => setMode("cv_vision")}
                  className="rounded-lg border border-signal/40 bg-signal/10 px-3.5 py-1.5 font-data text-xs text-signal hover:bg-signal hover:text-ink font-medium transition-all"
                >
                  Simulate OpenVINO CV Scanner ↗
                </button>
                <button
                  onClick={() => setMode("data_pipeline")}
                  className="rounded-lg border border-line bg-panel-raised px-3.5 py-1.5 font-data text-xs text-text hover:border-signal hover:text-signal transition-colors"
                >
                  Simulate 2K–4K Scraping Pipeline ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

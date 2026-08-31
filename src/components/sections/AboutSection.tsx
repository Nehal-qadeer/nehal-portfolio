"use client";

import { Sparkles, MapPin, GraduationCap, Code2, Globe } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 border-t border-line relative overflow-hidden">
      <div className="max-w-[1040px] mx-auto px-6 md:px-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal font-semibold mb-3">
          <span className="w-4 h-px bg-signal" />
          01 — About
        </div>

        <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink mb-8 tracking-tight">
          Built to connect the pieces
        </h2>

        <div className="grid md:grid-cols-[2fr_1fr] gap-10 items-start">
          {/* Bio Paragraphs */}
          <div className="space-y-4 font-body text-base text-ink-soft leading-relaxed">
            <p>
              I graduated with an M.Sc. in Applied Computer Science from <strong className="text-ink font-semibold">SRH Hochschule Heidelberg (Grade 2.2)</strong>, where my Master&apos;s Thesis was an accessible <strong className="text-ink font-semibold">Object Detection Game for Hearing-Impaired Children</strong> — utilizing custom YOLOv8 models, quantized via <strong className="text-signal font-semibold">Intel OpenVINO for 25+ FPS on standard CPU laptops</strong> without a GPU, and wrapped in a responsive PyQt6 interface.
            </p>
            <p>
              Since then, I have focused on high-throughput backend services and automations: deploying Python Selenium scrapers as cloud <strong className="text-ink font-semibold">Apify Actors</strong>, processing payloads through <strong className="text-ink font-semibold">Make.com JSON pipelines</strong>, and syncing relational <strong className="text-ink font-semibold">PostgreSQL</strong> databases.
            </p>
            <p>
              Prior to my Master&apos;s, I spent three years in technical support and agile coordination roles — reading server logs over the Linux CLI, running structured SQL queries against production databases, and validating release acceptance criteria. That foundation is why I engineer systems that hold up reliably in production, outside the notebook.
            </p>
          </div>

          {/* Quick Factbox */}
          <dl className="rounded-xl border border-line bg-surface p-6 font-mono text-xs shadow-blueprint space-y-3.5">
            <div>
              <dt className="text-ink-soft text-[11px] uppercase tracking-wider">Focus</dt>
              <dd className="font-semibold text-ink text-sm mt-0.5">AI/CV · Automation · Backend</dd>
            </div>
            <div className="border-t border-line/60 pt-3">
              <dt className="text-ink-soft text-[11px] uppercase tracking-wider">Education</dt>
              <dd className="font-semibold text-ink text-sm mt-0.5">M.Sc. Applied CS (2025)</dd>
            </div>
            <div className="border-t border-line/60 pt-3">
              <dt className="text-ink-soft text-[11px] uppercase tracking-wider">Based in</dt>
              <dd className="font-semibold text-ink text-sm mt-0.5">Mannheim, Germany</dd>
            </div>
            <div className="border-t border-line/60 pt-3">
              <dt className="text-ink-soft text-[11px] uppercase tracking-wider">Languages</dt>
              <dd className="font-semibold text-ink text-sm mt-0.5">English (Full Pro) · German (A2)</dd>
            </div>
            <div className="border-t border-line/60 pt-3">
              <dt className="text-ink-soft text-[11px] uppercase tracking-wider">Status</dt>
              <dd className="font-semibold text-teal text-sm mt-0.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-teal animate-pulse-blip" />
                Open to opportunities
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

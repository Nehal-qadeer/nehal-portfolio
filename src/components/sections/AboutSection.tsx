"use client";

import { motion } from "framer-motion";
import { Sparkles, MapPin, GraduationCap, Code2, Globe } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 border-t border-line relative overflow-hidden">
      <div className="max-w-[1040px] mx-auto px-6 md:px-10">
        {/* Eyebrow & Heading with soft fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal font-semibold mb-3">
            <span className="w-4 h-px bg-signal" />
            01 · About
          </div>

          <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink mb-8 tracking-tight">
            Built to connect the pieces
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[2fr_1fr] gap-10 items-start">
          {/* Bio Paragraphs */}
          <div className="space-y-4 font-body text-base text-ink-soft leading-relaxed">
            <p>
              I&apos;m an AI and automation engineer with an M.Sc. in Applied Computer Science from SRH Hochschule Heidelberg (Grade 2.2, 2025). I build GenAI applications, AI agents and automated workflows in Python, and connect them to real systems through REST APIs, JSON and webhooks.
            </p>
            <p>
              My Master&apos;s thesis was an object detection game for hearing-impaired children: a custom YOLOv8 model, optimized with Intel OpenVINO to run at 25+ FPS on ordinary laptop CPUs. Since then I&apos;ve built a multi-agent RAG assistant for regulated environments, a language-learning app with Google Gemini Vision, and data pipelines that load thousands of records per run.
            </p>
            <p>
              Before moving into AI, I spent two years in customer support and a year leading a development team. That taught me to build things people actually use. I&apos;m currently a Teleoperation &amp; Data Labeling Intern at Sereact, collecting training data for robot learning.
            </p>
          </div>

          {/* Quick Factbox */}
          <dl className="rounded-xl border border-line bg-surface p-6 font-mono text-xs shadow-blueprint space-y-3.5">
            <div>
              <dt className="text-ink-soft text-[11px] uppercase tracking-wider">Focus</dt>
              <dd className="font-semibold text-ink text-sm mt-0.5">AI · Automation · Computer Vision</dd>
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
              <dd className="font-semibold text-ink text-sm mt-0.5">English (full professional) · German (A1, learning)</dd>
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

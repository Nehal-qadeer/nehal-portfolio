"use client";

import React, { useRef } from "react";
import { motion, useScroll, useReducedMotion } from "framer-motion";
import { useSkillFilter } from "@/context/SkillFilterContext";

export function ExperienceEducation() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { isHighlighted } = useSkillFilter();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 50%"],
  });

  return (
    <>
      {/* Experience Section */}
      <section
        id="experience"
        ref={sectionRef}
        className="py-20 border-t border-line relative overflow-hidden"
      >
        <div className="max-w-[1040px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal font-semibold mb-3">
            <span className="w-4 h-px bg-signal" />
            04 · Experience
          </div>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink mb-12 tracking-tight">
            Where I&apos;ve worked
          </h2>

          {/* Timeline Wrapper */}
          <div className="relative pl-8 md:pl-10 space-y-12">
            {/* Background vertical line (2px, --line) */}
            <div className="absolute left-[11px] md:left-[11px] top-2 bottom-2 w-[2px] bg-line" />

            {/* Scroll-filling animated line (2px, --signal) */}
            <motion.div
              style={{
                scaleY: shouldReduceMotion ? 1 : scrollYProgress,
                transformOrigin: "top",
              }}
              className="absolute left-[11px] md:left-[11px] top-2 bottom-2 w-[2px] bg-signal"
            />

            {/* Entry 1: Sereact */}
            <div
              id="exp-sereact"
              style={{
                opacity: isHighlighted("exp-sereact") ? 1 : 0.35,
                transition: "opacity 200ms ease",
              }}
              className="relative group"
            >
              {/* Node Marker: 12px circle with pulsing ring for Sereact */}
              <div className="absolute -left-[27px] md:left-[-35px] top-1.5 w-3 h-3 rounded-full bg-teal border-2 border-white flex items-center justify-center">
                {!shouldReduceMotion && (
                  <motion.span
                    animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                    className="absolute -inset-0.5 rounded-full border border-teal"
                  />
                )}
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span className="text-signal font-semibold">Oct 2026 – Present</span>
                  <span className="rounded bg-teal px-2 py-0.5 font-mono text-[10px] font-bold text-white uppercase tracking-wider">
                    CURRENT
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-ink">
                  Teleoperation &amp; Data Labeling Intern · Sereact GmbH (Robotics AI), Stuttgart
                </h3>

                <ul className="space-y-1.5 font-body text-sm text-ink-soft list-disc pl-4 leading-relaxed">
                  <li>
                    Record robot imitation-learning demonstrations via teleoperation and quality-check each episode before it is used for AI model training.
                  </li>
                  <li>
                    Debug Python and Bash data-collection scripts, isolate edge cases and write structured incident reports for the engineering team.
                  </li>
                </ul>
              </div>
            </div>

            {/* Entry 2: ZELLE */}
            <div
              id="exp-zelle"
              style={{
                opacity: isHighlighted("exp-zelle") ? 1 : 0.35,
                transition: "opacity 200ms ease",
              }}
              className="relative group"
            >
              {/* Node Marker: 12px circle */}
              <div className="absolute -left-[27px] md:left-[-35px] top-1.5 w-3 h-3 rounded-full bg-signal border-2 border-white" />

              <div className="space-y-2">
                <span className="font-mono text-xs text-signal font-semibold block">
                  Oct 2022 – Nov 2023
                </span>

                <h3 className="font-display font-bold text-lg text-ink">
                  Project Manager · ZELLE Solutions, Karachi (hybrid)
                </h3>

                <ul className="space-y-1.5 font-body text-sm text-ink-soft list-disc pl-4 leading-relaxed">
                  <li>
                    Led a cross-functional team of 7 developers and UI/UX designers through Agile/Scrum delivery, from requirements to deployment.
                  </li>
                  <li>
                    Ran stand-ups and stakeholder meetings, refined requirements into user stories and maintained the backlog.
                  </li>
                  <li>
                    Wrote REST API documentation and coordinated release QA against acceptance criteria.
                  </li>
                </ul>

                <p className="font-body text-sm text-ink-soft pt-1">
                  Earlier at ZELLE: Brand Development Executive (May 2022 – Oct 2022), analyzing user behavior data and campaign performance.
                </p>
              </div>
            </div>

            {/* Entry 3: Breakthru */}
            <div
              id="exp-breakthru"
              style={{
                opacity: isHighlighted("exp-breakthru") ? 1 : 0.35,
                transition: "opacity 200ms ease",
              }}
              className="relative group"
            >
              {/* Node Marker: 12px circle */}
              <div className="absolute -left-[27px] md:left-[-35px] top-1.5 w-3 h-3 rounded-full bg-signal border-2 border-white" />

              <div className="space-y-2">
                <span className="font-mono text-xs text-signal font-semibold block">
                  Jun 2020 – Oct 2022
                </span>

                <h3 className="font-display font-bold text-lg text-ink">
                  Customer Support Representative · Breakthru (ApexChat), Karachi
                </h3>

                <ul className="space-y-1.5 font-body text-sm text-ink-soft list-disc pl-4 leading-relaxed">
                  <li>
                    Supported a global base of 3,000+ customers, handling 350–450 interactions per 7.5-hour shift across 3–4 parallel live chats.
                  </li>
                  <li>
                    Worked to daily KPI targets (response time, handling time, quality scores) and documented every case in the eCRM system.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 border-t border-line relative overflow-hidden">
        <div className="max-w-[1040px] mx-auto px-6 md:px-10 space-y-10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal font-semibold mb-3">
              <span className="w-4 h-px bg-signal" />
              05 · Education
            </div>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink tracking-tight">
              Academic background
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Master's Card */}
            <div className="rounded-xl border border-line bg-surface p-6 shadow-blueprint space-y-3 transition-all hover:shadow-blueprint-lg hover:-translate-y-0.5">
              <span className="inline-block rounded bg-signal-dim px-2.5 py-1 font-mono text-xs font-semibold text-signal">
                Grade 2.2
              </span>
              <h3 className="font-display font-bold text-lg text-ink">
                M.Sc. Applied Computer Science
              </h3>
              <div className="font-mono text-xs text-ink-soft">
                SRH Hochschule Heidelberg · 2023 – 2025 · Heidelberg, Germany
              </div>
              <p className="font-body text-sm text-ink-soft">
                Focus: Distributed Systems, Software Engineering, Cloud Architectures.
              </p>
              <div className="border-t border-line pt-3 font-body text-xs text-ink-soft">
                <strong className="text-ink">Thesis:</strong> Object Detection Game for Hearing-Impaired Children, AI visual tool utilizing custom YOLOv8, Intel OpenVINO (25+ FPS CPU optimization), and PyQt6.
              </div>
            </div>

            {/* Bachelor's Card */}
            <div className="rounded-xl border border-line bg-surface p-6 shadow-blueprint space-y-3 transition-all hover:shadow-blueprint-lg hover:-translate-y-0.5">
              <span className="inline-block rounded bg-signal-dim px-2.5 py-1 font-mono text-xs font-semibold text-signal">
                Grade 2.65
              </span>
              <h3 className="font-display font-bold text-lg text-ink">
                B.Sc. Computer Science
              </h3>
              <div className="font-mono text-xs text-ink-soft">
                IQRA University · 2015 – 2019 · Karachi, Pakistan
              </div>
              <p className="font-body text-sm text-ink-soft">
                Core coursework: Algorithms, Data Structures, object-oriented programming (Python, basics of C#), Relational Database Systems.
              </p>
            </div>
          </div>

          {/* Languages Row */}
          <div className="flex flex-wrap gap-10 pt-2 border-t border-line">
            <div>
              <span className="font-display font-bold text-base text-ink block">English</span>
              <span className="font-mono text-xs text-ink-soft">Full professional working proficiency</span>
            </div>
            <div>
              <span className="font-display font-bold text-base text-ink block">German</span>
              <span className="font-mono text-xs text-ink-soft">A1, currently learning</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

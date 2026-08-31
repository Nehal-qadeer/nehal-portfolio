"use client";

import { MapPin, GraduationCap, Briefcase, Globe, Check } from "lucide-react";

export function ExperienceEducation() {
  const experiences = [
    {
      period: "Feb 2023 – Nov 2023",
      role: "Software Project Coordinator / Agile Specialist",
      org: "Zelle Solutions",
      points: [
        "Tracked sprint backlogs, REST API specifications, and release cycles across Scrum sprints.",
        "Documented backend API interfaces and user acceptance criteria so devs and product owners stayed aligned.",
        "Tested release builds against QA criteria to maintain high software stability and zero regressions."
      ]
    },
    {
      period: "Jun 2020 – Oct 2022",
      role: "Technical Support & Backend Operations Specialist",
      org: "Breakthru (Blazeo / ApexChat)",
      points: [
        "Troubleshot backend crashes by reading server logs and diagnosing failing HTTP requests over the Linux CLI.",
        "Ran structured SQL queries against staging and production databases to verify transaction data integrity.",
        "Collaborated with core engineering to reproduce bugs, test edge cases, and validate hotfix patches."
      ]
    }
  ];

  return (
    <>
      {/* Experience Section */}
      <section id="experience" className="py-20 border-t border-line relative overflow-hidden">
        <div className="max-w-[1040px] mx-auto px-6 md:px-10">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal font-semibold mb-3">
            <span className="w-4 h-px bg-signal" />
            04 — Experience
          </div>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink mb-10 tracking-tight">
            Where I&apos;ve worked
          </h2>

          {/* Timeline */}
          <div className="relative pl-7 border-l border-line-strong space-y-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Node marker */}
                <div className="absolute -left-[34px] top-1.5 w-3 h-3 rounded-full bg-surface border-2 border-signal transition-transform group-hover:scale-125" />

                <div className="space-y-1.5">
                  <span className="font-mono text-xs text-signal font-semibold">
                    {exp.period}
                  </span>
                  <h3 className="font-display font-bold text-lg text-ink">
                    {exp.role}
                  </h3>
                  <div className="font-body text-sm font-medium text-ink-soft">
                    {exp.org}
                  </div>
                  <ul className="pt-2 space-y-1.5 font-body text-sm text-ink-soft list-disc pl-4 leading-relaxed">
                    {exp.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 border-t border-line relative overflow-hidden">
        <div className="max-w-[1040px] mx-auto px-6 md:px-10 space-y-10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal font-semibold mb-3">
              <span className="w-4 h-px bg-signal" />
              05 — Education
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
                <strong className="text-ink">Thesis:</strong> Object Detection Game for Hearing-Impaired Children — AI visual tool utilizing custom YOLOv8, Intel OpenVINO (25+ FPS CPU optimization), and PyQt6.
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
                Core coursework: Algorithms, Data Structures, Object-Oriented Programming (C++ & Python), Relational Database Systems.
              </p>
            </div>
          </div>

          {/* Languages Row */}
          <div className="flex flex-wrap gap-10 pt-2 border-t border-line">
            <div>
              <span className="font-display font-bold text-base text-ink block">English</span>
              <span className="font-mono text-xs text-ink-soft">Full Professional Working Proficiency</span>
            </div>
            <div>
              <span className="font-display font-bold text-base text-ink block">German</span>
              <span className="font-mono text-xs text-ink-soft">A2 — Actively Improving</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

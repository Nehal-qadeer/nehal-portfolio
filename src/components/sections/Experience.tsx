"use client";

import { experience } from "@/data/experience";
import { Sparkles, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20 md:px-10 lg:pl-24 max-w-6xl mx-auto space-y-8">
      <div className="border-b border-line pb-6">
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-cyan" />
          <span className="font-data text-xs tracking-widest text-cyan font-semibold uppercase">
            Work History & Operations
          </span>
        </div>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-white">
          Professional Experience
        </h2>
      </div>

      <div className="space-y-8">
        {experience.map((entry) => (
          <div
            key={entry.role}
            className="rounded-2xl border border-line bg-surface/80 p-6 sm:p-8 backdrop-blur-xl transition-all hover:border-cyan/50 hover:shadow-cyan-sm grid md:grid-cols-[11rem_1fr] gap-6 items-start"
          >
            {/* Timeline info */}
            <div className="space-y-1 border-b md:border-b-0 md:border-r border-line/60 pb-3 md:pb-0 md:pr-6">
              <span className="font-data text-xs font-bold text-cyan tabular">
                {entry.period}
              </span>
              <div className="font-display text-sm font-semibold text-text-muted">
                {entry.org}
              </div>
            </div>

            {/* Role details */}
            <div className="space-y-3">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  {entry.role}
                </h3>
                <p className="font-body text-xs sm:text-sm font-medium text-cyan/90">
                  {entry.focus}
                </p>
              </div>

              <ul className="space-y-2 pt-1">
                {entry.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 font-body text-xs sm:text-sm text-text-muted leading-relaxed">
                    <CheckCircle2 size={15} className="text-cyan shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

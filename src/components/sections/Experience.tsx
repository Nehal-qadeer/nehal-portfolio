"use client";

import { experience } from "@/data/experience";
import { Sparkles, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20 md:px-10 lg:pl-24 max-w-6xl mx-auto space-y-8">
      <div className="border-b border-charcoal pb-6">
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-amber" />
          <span className="font-mono text-xs tracking-widest text-amber font-semibold uppercase">
            Work History & Operations
          </span>
        </div>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-bone">
          Professional Experience
        </h2>
      </div>

      <div className="space-y-8">
        {experience.map((entry) => (
          <div
            key={entry.role}
            className="rounded-2xl border border-charcoal bg-charcoal/80 p-6 sm:p-8 backdrop-blur-xl transition-all hover:border-amber/50 hover:shadow-amber-sm grid md:grid-cols-[11rem_1fr] gap-6 items-start"
          >
            {/* Timeline info */}
            <div className="space-y-1 border-b md:border-b-0 md:border-r border-charcoal pb-3 md:pb-0 md:pr-6">
              <span className="font-mono text-xs font-bold text-amber tabular">
                {entry.period}
              </span>
              <div className="font-display text-sm font-semibold text-ash">
                {entry.org}
              </div>
            </div>

            {/* Role details */}
            <div className="space-y-3">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-bone">
                  {entry.role}
                </h3>
                <p className="font-body text-xs sm:text-sm font-medium text-amber/90">
                  {entry.focus}
                </p>
              </div>

              <ul className="space-y-2 pt-1">
                {entry.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 font-body text-xs sm:text-sm text-ash leading-relaxed">
                    <CheckCircle2 size={15} className="text-amber shrink-0 mt-0.5" />
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

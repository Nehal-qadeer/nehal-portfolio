"use client";

import { experience } from "@/data/experience";
import { Briefcase, Sparkles, CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="border-t border-line/60 px-6 py-24 md:px-10 lg:pl-24">
      <div className="max-w-6xl mx-auto rounded-2xl border border-line/80 bg-panel/85 p-8 md:p-12 shadow-2xl backdrop-blur-xl space-y-10">
        <div className="border-b border-line pb-6">
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-signal" />
            <span className="font-data text-xs tracking-widest text-signal font-semibold uppercase">
              Work History & Experience
            </span>
          </div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-text">
            Professional Trajectory
          </h2>
        </div>

        <div className="space-y-10">
          {experience.map((entry, idx) => (
            <div
              key={entry.role}
              className="grid grid-cols-[3.5rem_1px_1fr] gap-x-6 last:pb-0 md:grid-cols-[9rem_1px_1fr] md:gap-x-8"
            >
              <div className="pt-1 font-data text-xs tabular text-text-faint font-medium">
                {entry.period}
              </div>

              <div className="relative flex justify-center">
                <div className="w-px flex-1 bg-line" />
                <span className="absolute top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-signal ring-4 ring-signal/20" />
              </div>

              <div className="space-y-2 pb-6">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-text">
                    {entry.role}
                  </h3>
                  <span className="rounded-full bg-panel-raised border border-line px-2.5 py-0.5 font-data text-xs text-signal font-medium">
                    {entry.org}
                  </span>
                </div>
                <p className="font-body text-xs sm:text-sm font-medium text-verify">
                  {entry.focus}
                </p>
                <ul className="mt-3 space-y-2">
                  {entry.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 font-body text-xs sm:text-sm text-text-muted leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-signal shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

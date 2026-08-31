"use client";

import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="border-t border-line/60 px-6 py-28 md:px-10 lg:pl-24">
      <div className="rounded-2xl border border-line/60 bg-panel/80 p-8 md:p-12 shadow-2xl backdrop-blur-xl">
        <div className="border-b border-line pb-6">
          <span className="font-data text-xs tracking-widest text-signal font-semibold">ACADEMIC FOUNDATION</span>
          <h2 className="mt-2 font-display text-display-2 font-medium text-text">Education</h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {education.map((entry) => (
            <div
              key={entry.degree}
              className="rounded-xl border border-line/80 bg-panel-raised/70 p-8 backdrop-blur-md transition-all hover:border-signal"
            >
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-data text-xs tracking-widest text-text-faint">{entry.period}</p>
                <span className="rounded-full bg-verify/15 border border-verify/30 px-2.5 py-0.5 font-data text-xs font-semibold tabular text-verify">
                  GRADE {entry.grade}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-medium text-text">{entry.degree}</h3>
              <p className="mt-1 font-body text-sm font-medium text-signal">{entry.school}</p>
              <p className="mt-3 font-body text-sm leading-relaxed text-text-muted">{entry.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

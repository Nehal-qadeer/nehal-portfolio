"use client";

import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="border-t border-line/60 px-6 py-28 md:px-10 lg:pl-24">
      <div className="rounded-2xl border border-line/60 bg-panel/80 p-8 md:p-12 shadow-2xl backdrop-blur-xl">
        <div className="border-b border-line pb-6">
          <span className="font-data text-xs tracking-widest text-signal font-semibold">CAREER TRAJECTORY</span>
          <h2 className="mt-2 font-display text-display-2 font-medium text-text">How I got here</h2>
        </div>

        <div className="mt-12 space-y-0">
          {experience.map((entry) => (
            <div
              key={entry.role}
              className="grid grid-cols-[4.5rem_1px_1fr] gap-x-6 pb-12 last:pb-0 md:grid-cols-[9rem_1px_1fr] md:gap-x-10"
            >
              <div className="pt-1 font-data text-xs tabular text-text-faint">{entry.period}</div>

              <div className="relative flex justify-center">
                <div className="w-px flex-1 bg-line" />
                <span className="absolute top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-signal ring-4 ring-signal/20" />
              </div>

              <div>
                <h3 className="font-display text-xl font-medium text-text md:text-2xl">
                  {entry.role}
                </h3>
                <p className="mt-1 font-body text-sm font-medium text-signal">
                  {entry.org} · <span className="text-text-muted">{entry.focus}</span>
                </p>
                <ul className="mt-4 max-w-2xl space-y-2">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 font-body text-sm leading-relaxed text-text-muted md:text-base">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-verify shrink-0" />
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

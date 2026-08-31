"use client";

import { stackGroups } from "@/data/stack";

export function Stack() {
  return (
    <section id="stack" className="border-t border-line/60 px-6 py-28 md:px-10 lg:pl-24">
      <div className="rounded-2xl border border-line/60 bg-panel/80 p-8 md:p-12 shadow-2xl backdrop-blur-xl">
        <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between border-b border-line pb-6">
          <div>
            <span className="font-data text-xs tracking-widest text-signal font-semibold">SKILLS & CAPABILITIES</span>
            <h2 className="mt-2 font-display text-display-2 font-medium text-text">What I actually reach for</h2>
          </div>
          <p className="font-data text-xs tracking-widest text-text-faint">
            {stackGroups.reduce((n, g) => n + g.items.length, 0)} TOOLS · 6 DOMAINS
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-xl border border-line/80 bg-panel-raised/70 p-6 backdrop-blur-md transition-all hover:border-signal hover:shadow-lg"
            >
              <div className="flex items-center justify-between border-b border-line/60 pb-3">
                <p className="font-data text-[11px] font-semibold tracking-wider text-signal">
                  {group.label.toUpperCase()}
                </p>
                <span className="font-data text-[10px] text-text-faint">
                  {group.items.length} items
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 font-body text-sm text-text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-verify" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { stackGroups } from "@/data/stack";
import { Sparkles, Code2, Cpu, Database, Workflow, CheckCircle } from "lucide-react";

export function Stack() {
  const [selectedGroup, setSelectedGroup] = useState<string>("All");

  const filteredGroups =
    selectedGroup === "All"
      ? stackGroups
      : stackGroups.filter((g) => g.label === selectedGroup);

  return (
    <section id="stack" className="border-t border-line/60 px-6 py-24 md:px-10 lg:pl-24">
      <div className="max-w-6xl mx-auto rounded-2xl border border-line/80 bg-panel/85 p-8 md:p-12 shadow-2xl backdrop-blur-xl space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-line pb-6">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-signal" />
              <span className="font-data text-xs tracking-widest text-signal font-semibold uppercase">
                Technical Capabilities
              </span>
            </div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-text">
              Tech Stack & Tooling
            </h2>
          </div>
          <p className="font-data text-xs tracking-widest text-text-faint">
            {stackGroups.reduce((n, g) => n + g.items.length, 0)} TOOLS & PRACTICES
          </p>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedGroup("All")}
            className={`rounded-lg px-3 py-1.5 font-data text-xs font-semibold transition-all ${
              selectedGroup === "All"
                ? "bg-signal text-ink shadow-md"
                : "border border-line bg-panel-raised text-text-muted hover:border-signal hover:text-text"
            }`}
          >
            All Skills
          </button>
          {stackGroups.map((g) => (
            <button
              key={g.label}
              onClick={() => setSelectedGroup(g.label)}
              className={`rounded-lg px-3 py-1.5 font-data text-xs font-medium transition-all ${
                selectedGroup === g.label
                  ? "bg-signal text-ink shadow-md font-semibold"
                  : "border border-line bg-panel-raised text-text-muted hover:border-signal hover:text-text"
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-xl border border-line/80 bg-panel-raised/70 p-6 backdrop-blur-md transition-all hover:border-signal/80 hover:shadow-lg"
            >
              <div className="flex items-center justify-between border-b border-line/60 pb-3">
                <span className="font-data text-xs font-bold tracking-wider text-signal uppercase">
                  {group.label}
                </span>
                <span className="font-data text-[10px] text-text-faint">
                  {group.items.length} items
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 font-body text-xs sm:text-sm text-text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-verify shrink-0" />
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

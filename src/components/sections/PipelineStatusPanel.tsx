"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";

interface SkillItem {
  name: string;
  pct: number;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export function PipelineStatusPanel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories: SkillCategory[] = [
    {
      title: "AI & Computer Vision",
      skills: [
        { name: "Ultralytics YOLOv8", pct: 90 },
        { name: "Intel OpenVINO (CPU Quantization)", pct: 88 },
        { name: "PyTorch & Deep Learning", pct: 85 },
        { name: "OpenCV & Video Streams", pct: 84 },
        { name: "AI-Assisted Dev (Claude Code, Cursor)", pct: 90 }
      ]
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Python 3 (FastAPI, Flask, asyncio)", pct: 92 },
        { name: "RESTful APIs & Webhooks", pct: 88 },
        { name: "PostgreSQL / MySQL", pct: 82 },
        { name: "Pytest (Unit & Integration)", pct: 80 }
      ]
    },
    {
      title: "Automation & Ingestion",
      skills: [
        { name: "Make.com Scenarios", pct: 88 },
        { name: "Apify Actors & REST API", pct: 85 },
        { name: "Selenium WebDriver", pct: 84 },
        { name: "Zapier Multi-Step OAuth Zaps", pct: 82 }
      ]
    },
    {
      title: "Infra, Caching & Tools",
      skills: [
        { name: "Docker Containerization", pct: 85 },
        { name: "Linux CLI & Bash Scripting", pct: 90 },
        { name: "Redis Distributed Caching", pct: 80 },
        { name: "Git & CI/CD Pipelines", pct: 85 }
      ]
    }
  ];

  return (
    <section id="stack" className="py-20 border-t border-line relative overflow-hidden">
      {/* Decorative Dots */}
      <span className="absolute top-16 right-[8%] w-1.5 h-1.5 rounded-full bg-teal shadow-[0_0_0_3px_rgba(47,158,143,0.15)] animate-pulse" />
      <span className="absolute bottom-12 left-[6%] w-1.5 h-1.5 rounded-full bg-amber shadow-[0_0_0_3px_rgba(232,163,61,0.15)] animate-pulse" />

      <div className="max-w-[1040px] mx-auto px-6 md:px-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal font-semibold mb-3">
          <span className="w-4 h-px bg-signal" />
          02 — Stack
        </div>

        <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink mb-8 tracking-tight">
          Pipeline status
        </h2>

        {/* Status Panel Box */}
        <div className="rounded-xl border border-line bg-surface overflow-hidden shadow-blueprint">
          {/* Panel Top Header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-line font-mono text-xs text-ink-soft bg-surface">
            <span className="font-medium text-ink flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse-blip" />
              build: skills.pipeline
            </span>
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber" />
              <span className="w-2 h-2 rounded-full bg-teal" />
              <span className="w-2 h-2 rounded-full bg-signal" />
            </div>
          </div>

          {/* 4 Skill Categories Grid */}
          <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-line">
            {/* Column Left (Col 1 & 2) */}
            <div className="divide-y divide-line">
              <div className="p-6 space-y-4">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-teal">
                  {categories[0]!.title}
                </h3>
                <div className="space-y-3.5">
                  {categories[0]!.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-body font-medium text-ink flex items-center gap-1.5">
                          {skill.name}
                          <Check size={12} className="text-teal stroke-[2.5]" />
                        </span>
                        <span className="font-mono text-ink-soft text-[11px] tabular">
                          {skill.pct}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-signal-dim rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-signal to-teal rounded-full transition-all duration-1000 ease-out"
                          style={{ width: mounted ? `${skill.pct}%` : "0%" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-teal">
                  {categories[1]!.title}
                </h3>
                <div className="space-y-3.5">
                  {categories[1]!.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-body font-medium text-ink flex items-center gap-1.5">
                          {skill.name}
                          <Check size={12} className="text-teal stroke-[2.5]" />
                        </span>
                        <span className="font-mono text-ink-soft text-[11px] tabular">
                          {skill.pct}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-signal-dim rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-signal to-teal rounded-full transition-all duration-1000 ease-out"
                          style={{ width: mounted ? `${skill.pct}%` : "0%" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column Right (Col 3 & 4) */}
            <div className="divide-y divide-line">
              <div className="p-6 space-y-4">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-teal">
                  {categories[2]!.title}
                </h3>
                <div className="space-y-3.5">
                  {categories[2]!.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-body font-medium text-ink flex items-center gap-1.5">
                          {skill.name}
                          <Check size={12} className="text-teal stroke-[2.5]" />
                        </span>
                        <span className="font-mono text-ink-soft text-[11px] tabular">
                          {skill.pct}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-signal-dim rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-signal to-teal rounded-full transition-all duration-1000 ease-out"
                          style={{ width: mounted ? `${skill.pct}%` : "0%" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-teal">
                  {categories[3]!.title}
                </h3>
                <div className="space-y-3.5">
                  {categories[3]!.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-body font-medium text-ink flex items-center gap-1.5">
                          {skill.name}
                          <Check size={12} className="text-teal stroke-[2.5]" />
                        </span>
                        <span className="font-mono text-ink-soft text-[11px] tabular">
                          {skill.pct}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-signal-dim rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-signal to-teal rounded-full transition-all duration-1000 ease-out"
                          style={{ width: mounted ? `${skill.pct}%` : "0%" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Panel Footer */}
          <div className="flex items-center justify-between px-5 py-3 border-t border-line font-mono text-xs text-ink-soft bg-signal-dim/50">
            <span className="flex items-center gap-1.5 text-teal font-semibold">
              <span className="w-2 h-2 rounded-full bg-teal" />
              17/17 checks passed
            </span>
            <span>build passing · status: production-ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}

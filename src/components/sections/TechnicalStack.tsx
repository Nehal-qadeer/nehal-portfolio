"use client";

import { useState } from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";

export function TechnicalStack() {
  const groups = [
    {
      category: "Languages & Core",
      skills: ["Python 3", "C++", "JavaScript", "OOP Principles", "Data Structures & Algorithms"]
    },
    {
      category: "AI/ML & Computer Vision",
      skills: ["PyTorch", "OpenCV", "Intel OpenVINO (Inference & Quantization)", "Model Training & Evaluation", "Neural Verification Pipelines"]
    },
    {
      category: "Automation & Integrations",
      skills: ["Apify REST API & Custom Actors", "Zapier (Multi-Step Zaps)", "Make.com Scenarios", "Selenium WebDriver", "Webhooks & JSON Payloads", "RESTful API Design"]
    },
    {
      category: "Full-Stack, Data & Infrastructure",
      skills: ["Node.js", "React", "Redis (Distributed Caching)", "PostgreSQL", "MySQL", "Docker Containerization", "Linux CLI / Bash", "Git / GitHub"]
    },
    {
      category: "Methodologies & QA",
      skills: ["Agile / Scrum Ceremonies", "Sprint Planning & Backlog", "User Acceptance Criteria (UAC)", "QA Release Validation", "Incident Diagnostics & Root Cause Analysis"]
    },
    {
      category: "AI-Assisted Engineering",
      skills: ["Claude Code", "Cursor IDE", "Agentic Workflow Orchestration", "Prompt Engineering"]
    }
  ];

  return (
    <section id="stack" className="px-6 py-20 md:px-10 lg:pl-24 max-w-6xl mx-auto space-y-8">
      <div className="border-b border-line pb-6">
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-cyan" />
          <span className="font-data text-xs tracking-widest text-cyan font-semibold uppercase">
            Technical Architecture
          </span>
        </div>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-white">
          Languages, Tooling & Infrastructure
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-line bg-surface/80 p-6 backdrop-blur-xl transition-all hover:border-cyan/50 hover:shadow-cyan-sm space-y-4"
          >
            <h3 className="font-data text-xs font-bold tracking-wider text-cyan uppercase border-b border-line/60 pb-3">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 font-body text-xs sm:text-sm text-text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

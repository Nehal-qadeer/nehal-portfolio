import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/profile";
import { ArrowLeft, Sparkles, MapPin, Mail, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Engine Behind the Automation — Nehal Qadeer",
  description:
    "The story behind the automation: navigating relocation to Germany, forging resilience, and engineering deep learning inference and data pipelines."
};

export default function StoryPage() {
  const timelineMilestones = [
    {
      index: "01",
      title: "B.Sc. CS Foundation",
      institution: "IQRA University · Grade 2.65",
      period: "2015 — 2019",
      location: "Pakistan",
      summary:
        "Rigorous foundation in computer science core principles: algorithms, data structures, object-oriented programming (C++ / Python), and relational database systems.",
      tags: ["Algorithms", "Data Structures", "OOP", "Database Systems"]
    },
    {
      index: "02",
      title: "Relocation & Cultural Adaptation",
      institution: "Stuttgart, Germany",
      period: "2023",
      location: "Germany",
      summary:
        "Relocated to Germany. Navigating the complex transitions of settling in a new country, mastering language fundamentals, and turning early friction into relentless engineering grit.",
      tags: ["Relocation", "Resilience", "Cross-Cultural Adaptation"]
    },
    {
      index: "03",
      title: "M.Sc. Computer Vision & Production Systems",
      institution: "SRH Hochschule Heidelberg · Grade 2.2",
      period: "2023 — 2025",
      location: "Mannheim / Heidelberg",
      summary:
        "Master of Science degree focusing on distributed systems and cloud architectures. Engineered Master's Thesis: an interactive Object Detection Game for Hearing-Impaired Children using YOLOv8 optimized via Intel OpenVINO for 25+ FPS on standard CPUs.",
      tags: ["Computer Vision", "Intel OpenVINO", "YOLOv8", "PyQt6", "Grade 2.2"]
    },
    {
      index: "04",
      title: "Production Automation & Cloud Pipelines",
      institution: "Independent Systems & Deployments",
      period: "2025 — 2026",
      location: "Mannheim, Germany",
      summary:
        "Architecting high-throughput cloud scraping engines (2,000–4,000 records/run), automated Make.com & PostgreSQL storage pipelines, and multi-app Zapier workflow automations.",
      tags: ["Apify Actors", "Selenium", "PostgreSQL", "Zapier", "REST APIs"]
    }
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 md:px-10 max-w-[1040px] mx-auto space-y-16">
      {/* Top Breadcrumb */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-ink-soft hover:text-signal transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Engineering Portfolio
        </Link>
      </div>

      {/* Main Narrative Hero */}
      <div className="space-y-6 max-w-3xl">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal font-semibold">
          <span className="w-4 h-px bg-signal" />
          The Journey & Philosophy
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink tracking-tight leading-[1.06]">
          The Engine Behind the Automation.
        </h1>

        {/* Narrative Box */}
        <div className="rounded-xl border border-line bg-surface p-8 sm:p-10 shadow-blueprint space-y-5">
          <blockquote className="font-body text-base sm:text-lg text-ink leading-relaxed space-y-4">
            <p>
              &ldquo;The best systems are built under pressure. Relocating to Germany and establishing my base in Mannheim meant navigating complex transitions. Adapting to a new country was exactly like architecting my first data pipelines: every early project was an uphill battle.&rdquo;
            </p>
            <p className="text-ink-soft">
              &ldquo;That friction is where I learned to build systems that hold up outside a notebook. The relentless troubleshooting it took to navigate those first six months is the exact same mindset I apply to deep learning inference and automation engineering today. <strong className="text-signal font-semibold">I don&apos;t just write code; I engineer resilience.</strong>&rdquo;
            </p>
          </blockquote>

          <div className="flex items-center justify-between pt-5 border-t border-line font-mono text-xs text-ink-soft">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse-blip" />
              Nehal Qadeer
            </span>
            <span className="text-signal">Mannheim, Germany</span>
          </div>
        </div>
      </div>

      {/* Vertical Line Timeline */}
      <div className="space-y-8 pt-4">
        <div className="border-b border-line pb-4">
          <span className="font-mono text-xs tracking-widest text-signal font-semibold uppercase">
            Milestone Trajectory
          </span>
          <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-ink">
            Timeline of Evolution
          </h2>
        </div>

        <div className="relative border-l border-line-strong ml-4 sm:ml-6 space-y-10 pl-6 sm:pl-8">
          {timelineMilestones.map((milestone) => (
            <div key={milestone.index} className="relative group">
              {/* Marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-signal bg-surface transition-transform group-hover:scale-125" />

              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
                  <span className="font-bold text-signal">
                    {milestone.index}. {milestone.period}
                  </span>
                  <span className="text-line-strong">·</span>
                  <span className="text-ink-soft flex items-center gap-1">
                    <MapPin size={11} className="text-teal" />
                    {milestone.location}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-ink">
                  {milestone.title}
                </h3>
                <p className="font-mono text-xs font-medium text-signal">
                  {milestone.institution}
                </p>

                <p className="font-body text-sm text-ink-soft leading-relaxed max-w-2xl pt-0.5">
                  {milestone.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {milestone.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-signal-dim px-2 py-0.5 font-mono text-[10.5px] text-signal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

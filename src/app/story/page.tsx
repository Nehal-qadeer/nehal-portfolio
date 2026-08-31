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
        "Master of Science degree focusing on distributed systems and cloud architectures. Engineered Master's Thesis: an end-to-end computer vision verification pipeline quantized via Intel OpenVINO for a 30% inference speedup.",
      tags: ["Computer Vision", "Intel OpenVINO", "PyTorch", "Docker", "Grade 2.2"]
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
    <div className="min-h-screen bg-graphite text-bone pt-28 pb-20 px-6 md:px-10 lg:pl-24 max-w-5xl mx-auto space-y-16">
      {/* Top Breadcrumb */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-ash hover:text-amber transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Engineering & Profile
        </Link>
      </div>

      {/* Main Narrative Hero */}
      <div className="space-y-6 max-w-3xl">
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-amber" />
          <span className="font-mono text-xs tracking-widest text-amber font-semibold uppercase">
            The Journey & Philosophy
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-bone tracking-tight leading-[1.06]">
          The Engine Behind the Automation.
        </h1>

        {/* The Exact Core Narrative Block */}
        <div className="rounded-2xl border border-charcoal bg-charcoal/80 p-8 sm:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden space-y-6">
          <blockquote className="font-body text-base sm:text-lg lg:text-xl text-bone leading-relaxed space-y-5">
            <p>
              &ldquo;The best systems are built under pressure. Relocating to Germany and establishing my base in Mannheim meant navigating complex transitions. Adapting to a new country was exactly like architecting my first data pipelines: every early project was an uphill battle.&rdquo;
            </p>
            <p className="text-ash">
              &ldquo;That friction is where I learned to build systems that hold up outside a notebook. The relentless troubleshooting it took to navigate those first six months is the exact same mindset I apply to deep learning inference and automation engineering today. <strong className="text-amber font-semibold">I don&apos;t just write code; I engineer resilience.</strong>&rdquo;
            </p>
          </blockquote>

          <div className="flex items-center justify-between pt-6 border-t border-charcoal font-mono text-xs text-ash-dark">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber" />
              Nehal Qadeer
            </span>
            <span className="text-amber">Mannheim, Germany</span>
          </div>
        </div>
      </div>

      {/* Text & Layout-Driven Minimalist Vertical Timeline */}
      <div className="space-y-10 pt-4">
        <div className="border-b border-charcoal pb-6">
          <span className="font-mono text-xs tracking-widest text-amber font-semibold uppercase">
            Milestone Trajectory
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-bone">
            Timeline of Evolution
          </h2>
        </div>

        {/* Vertical Line Timeline */}
        <div className="relative border-l border-charcoal/80 ml-4 sm:ml-6 space-y-12 pl-6 sm:pl-10">
          {timelineMilestones.map((milestone) => (
            <div key={milestone.index} className="relative group">
              {/* Timeline Marker Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-amber bg-graphite transition-transform group-hover:scale-125" />

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs font-bold text-amber">
                    {milestone.index}. {milestone.period}
                  </span>
                  <span className="font-mono text-xs text-ash-dark">·</span>
                  <span className="font-mono text-xs text-ash flex items-center gap-1">
                    <MapPin size={11} className="text-amber" />
                    {milestone.location}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-bone">
                  {milestone.title}
                </h3>
                <p className="font-mono text-xs font-semibold text-amber/90">
                  {milestone.institution}
                </p>

                <p className="font-body text-sm sm:text-base text-ash leading-relaxed max-w-2xl pt-1">
                  {milestone.summary}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {milestone.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-charcoal bg-charcoal/60 px-2.5 py-1 font-mono text-[11px] text-ash"
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

      {/* Editorial Principles */}
      <div className="grid sm:grid-cols-3 gap-6 pt-4">
        <div className="rounded-2xl border border-charcoal bg-charcoal/60 p-6 space-y-3">
          <span className="font-mono text-xs text-amber font-bold">PRINCIPLE 01</span>
          <h4 className="font-display text-lg font-bold text-bone">Outside the Notebook</h4>
          <p className="font-body text-xs sm:text-sm text-ash leading-relaxed">
            I engineer models and automations to survive real-world network latency, API rate limits, and unformatted inputs.
          </p>
        </div>

        <div className="rounded-2xl border border-charcoal bg-charcoal/60 p-6 space-y-3">
          <span className="font-mono text-xs text-amber font-bold">PRINCIPLE 02</span>
          <h4 className="font-display text-lg font-bold text-bone">Friction as Fuel</h4>
          <p className="font-body text-xs sm:text-sm text-ash leading-relaxed">
            Relocating taught me that every early failure is simply diagnostic data guiding the next optimization.
          </p>
        </div>

        <div className="rounded-2xl border border-charcoal bg-charcoal/60 p-6 space-y-3">
          <span className="font-mono text-xs text-amber font-bold">PRINCIPLE 03</span>
          <h4 className="font-display text-lg font-bold text-bone">Systems Plumbing</h4>
          <p className="font-body text-xs sm:text-sm text-ash leading-relaxed">
            Connecting deep learning inference to relational databases and automated webhooks with 100% data integrity.
          </p>
        </div>
      </div>

      {/* Bottom Connect CTA */}
      <div className="rounded-2xl border border-charcoal bg-charcoal/80 p-8 sm:p-12 text-center space-y-6 backdrop-blur-xl">
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-bone">
          Let&apos;s Build Resilient Systems Together
        </h2>
        <p className="font-body text-base text-ash max-w-xl mx-auto">
          Currently open to <strong className="text-bone">Junior & Full-Time AI & Automation, Python Developer, and QA Engineering</strong> roles across Germany and remote in the EU.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-xl bg-amber px-7 py-3.5 font-mono text-xs font-bold text-graphite shadow-amber hover:scale-105 transition-all"
          >
            <Mail size={15} />
            Email {profile.email}
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-charcoal bg-charcoal px-6 py-3.5 font-body text-sm font-medium text-bone hover:border-amber transition-colors"
          >
            View Engineering Systems
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/profile";
import { ArrowLeft, Sparkles, MapPin, CheckCircle2, Compass, Shield, Zap, Globe, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "The Journey & Philosophy — Nehal Qadeer",
  description:
    "The story behind the automation: from relocation and cultural adaptation to engineering deep learning inference pipelines and resilient systems in Germany."
};

export default function StoryPage() {
  const milestones = [
    {
      stage: "STAGE 01",
      location: "Pakistan",
      period: "2015 — 2019",
      title: "B.Sc. Computer Science Foundation",
      school: "IQRA University · Grade 2.65",
      description:
        "Built core foundations in data structures, algorithms, object-oriented programming (C++ / Python), and relational database systems.",
      tags: ["Algorithms", "Data Structures", "OOP", "Database Design"]
    },
    {
      stage: "STAGE 02",
      location: "Stuttgart, Germany",
      period: "2023",
      title: "Relocation & Cultural Adaptation",
      school: "The Crucible of Growth",
      description:
        "Relocated from Pakistan to Germany. Navigating the intense friction of settling in a new country, mastering language fundamentals, and turning early obstacles into relentless engineering grit.",
      tags: ["Relocation", "Resilience", "Cross-Cultural Adaptation", "Grit"]
    },
    {
      stage: "STAGE 03",
      location: "Mannheim & Heidelberg, Germany",
      period: "2023 — 2025",
      title: "M.Sc. Applied Computer Science & Thesis",
      school: "SRH Hochschule Heidelberg · Grade 2.2",
      description:
        "Master's degree focused on distributed systems and cloud architectures. Engineered the Master's Thesis: an end-to-end computer vision verification pipeline quantized through Intel OpenVINO for a 30% inference speedup.",
      tags: ["Computer Vision", "Intel OpenVINO", "PyTorch", "Docker", "Grade 2.2"]
    },
    {
      stage: "STAGE 04",
      location: "Mannheim, Germany",
      period: "2025 — 2026",
      title: "Production Automation & AI Pipelines",
      school: "Independent Systems & Client Deployments",
      description:
        "Architecting high-throughput cloud scraping engines (2,000–4,000 records/run), automated Make.com & PostgreSQL storage pipelines, and multi-app Zapier workflow automations.",
      tags: ["Apify Actors", "Selenium", "PostgreSQL", "Zapier", "REST APIs"]
    }
  ];

  const pillars = [
    {
      title: "Built Outside the Notebook",
      icon: Shield,
      desc: "Anyone can run code in a demo. I build systems that withstand messy network payloads, dynamic page rendering, and real-world failure states."
    },
    {
      title: "Friction as Fuel",
      icon: Zap,
      desc: "Every complex pipeline is an uphill climb on the first run. The discipline learned through relocation is applied to troubleshooting until systems run autonomously."
    },
    {
      title: "Systems Over Silos",
      icon: Compass,
      desc: "Plumbing matters. Connecting CV models, REST APIs, and database schemas with bulletproof data integrity is what turns prototypes into production assets."
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian text-text pt-28 pb-20 px-6 md:px-10 lg:pl-24 max-w-6xl mx-auto space-y-16">
      {/* Top Breadcrumb */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-data text-xs text-text-muted hover:text-cyan transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Engineering & Profile
        </Link>
      </div>

      {/* Main Narrative Hero */}
      <div className="space-y-6 max-w-3xl">
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-cyan" />
          <span className="font-data text-xs tracking-widest text-cyan font-semibold uppercase">
            The Journey & Philosophy
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
          The Engine Behind the Automation
        </h1>

        {/* The Exact Core Narrative Block */}
        <div className="rounded-2xl border border-cyan/30 bg-surface/90 p-8 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden space-y-6">
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan/5 rounded-full blur-3xl pointer-events-none" />

          <blockquote className="font-body text-base sm:text-lg lg:text-xl text-white leading-relaxed space-y-5">
            <p>
              &ldquo;The best systems are built under pressure. In 2023, I relocated from Pakistan to Germany, landing first in Stuttgart before establishing my base in Mannheim. Adapting to a new country was exactly like architecting my first complex data pipelines: every early project was an uphill battle, and nothing worked perfectly on the first run.&rdquo;
            </p>
            <p className="text-text-muted">
              &ldquo;That friction is where I learned to build systems that hold up outside a notebook. The relentless troubleshooting it took to navigate those first six months is the exact same mindset I apply to deep learning inference and automation engineering today. <strong className="text-cyan font-semibold">I don&apos;t just write code; I engineer resilience.</strong>&rdquo;
            </p>
          </blockquote>

          <div className="flex items-center gap-3 pt-4 border-t border-line font-data text-xs text-text-faint">
            <span className="h-2 w-2 rounded-full bg-cyan" />
            <span>Nehal Qadeer · Mannheim, Germany</span>
          </div>
        </div>
      </div>

      {/* Interactive Milestone Timeline */}
      <div className="space-y-10">
        <div className="border-b border-line pb-6">
          <span className="font-data text-xs tracking-widest text-cyan font-semibold uppercase">
            Evolution of an Engineer
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-white">
            Milestone Timeline
          </h2>
        </div>

        <div className="space-y-8">
          {milestones.map((m, idx) => (
            <div
              key={m.stage}
              className="rounded-2xl border border-line bg-surface/80 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan/50 hover:shadow-cyan-sm grid md:grid-cols-[12rem_1fr] gap-6 items-start"
            >
              {/* Stage & Location */}
              <div className="space-y-1 border-b md:border-b-0 md:border-r border-line/60 pb-4 md:pb-0 md:pr-6">
                <span className="font-data text-[11px] font-bold text-cyan tracking-widest">
                  {m.stage}
                </span>
                <div className="font-display text-lg font-bold text-white flex items-center gap-1.5">
                  <MapPin size={15} className="text-cyan" />
                  {m.location}
                </div>
                <div className="font-data text-xs text-text-faint tabular">{m.period}</div>
              </div>

              {/* Description & Tags */}
              <div className="space-y-3">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    {m.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm font-medium text-cyan/90">
                    {m.school}
                  </p>
                </div>

                <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
                  {m.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {m.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-line bg-obsidian/70 px-2.5 py-1 font-data text-[11px] text-text-muted"
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

      {/* Engineering Philosophy Pillars */}
      <div className="space-y-8">
        <div className="border-b border-line pb-6">
          <span className="font-data text-xs tracking-widest text-cyan font-semibold uppercase">
            Core Values
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-white">
            Engineering Principles
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl border border-line bg-surface/80 p-6 backdrop-blur-xl space-y-4 hover:border-cyan/40 transition-all"
              >
                <div className="h-10 w-10 rounded-xl bg-obsidian border border-cyan/30 flex items-center justify-center text-cyan">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{pillar.title}</h3>
                <p className="font-body text-sm text-text-muted leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Connect CTA */}
      <div className="rounded-2xl border border-cyan/30 bg-surface/90 p-8 sm:p-12 text-center space-y-6 backdrop-blur-xl">
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
          Let&apos;s Build Resilient Systems Together
        </h2>
        <p className="font-body text-base text-text-muted max-w-xl mx-auto">
          Currently open to <strong className="text-white">Junior & Full-Time AI & Automation, Python Developer, and QA Engineering</strong> roles across Germany and remote in the EU.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-xl bg-cyan px-7 py-3.5 font-body text-sm font-bold text-obsidian shadow-cyan hover:scale-105 transition-all"
          >
            <Mail size={16} />
            Email {profile.email}
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-6 py-3.5 font-body text-sm font-medium text-white hover:border-cyan transition-colors"
          >
            View Engineering Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Sparkles, CheckCircle2, ArrowUpRight, Search, Layers, Cpu, Database, Workflow, ShieldCheck } from "lucide-react";

interface SkillItem {
  name: string;
  category: string;
  badge: string;
  projectProof: string;
  projectLink: string;
  impact: string;
}

export function InteractiveSkillExplorer() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const categories = [
    "All",
    "AI & Computer Vision",
    "Python & Automation",
    "Databases & Cloud",
    "QA & Agile"
  ];

  const skills: SkillItem[] = [
    {
      name: "Ultralytics YOLOv8",
      category: "AI & Computer Vision",
      badge: "Deep Learning / CV",
      projectProof: "🎮 Object Detection Game (Master's Thesis)",
      projectLink: "#projects",
      impact: "Trained custom object detection models for real-time visual learning."
    },
    {
      name: "Intel OpenVINO Toolkit",
      category: "AI & Computer Vision",
      badge: "Inference Quantization",
      projectProof: "🎮 Object Detection Game (Master's Thesis)",
      projectLink: "#projects",
      impact: "Optimized YOLOv8 runtime to achieve smooth 25+ FPS on standard CPU laptops."
    },
    {
      name: "PyQt6 & OpenCV",
      category: "AI & Computer Vision",
      badge: "Desktop GUI & Video Streams",
      projectProof: "🎮 Object Detection Game (Master's Thesis)",
      projectLink: "#projects",
      impact: "Engineered accessible desktop interface with instant large-font visual labels."
    },
    {
      name: "PyTorch",
      category: "AI & Computer Vision",
      badge: "Model Engineering",
      projectProof: "AI-Driven Object Verification System",
      projectLink: "#projects",
      impact: "Model training, transfer learning, and evaluation for computer vision pipelines."
    },
    {
      name: "Selenium WebDriver",
      category: "Python & Automation",
      badge: "Dynamic Web Automation",
      projectProof: "Booking.com Dynamic Scraper & Apify Actors",
      projectLink: "#projects",
      impact: "Automated browser workflows with dynamic pagination and anti-bot mitigation."
    },
    {
      name: "Apify REST API & Custom Actors",
      category: "Python & Automation",
      badge: "Cloud Scraping",
      projectProof: "Multi-Platform Scraping & Ingestion Engine",
      projectLink: "#projects",
      impact: "Containerized cloud scrapers harvesting 2,000–4,000 records per scheduled run."
    },
    {
      name: "Make.com & Zapier",
      category: "Python & Automation",
      badge: "Multi-App Workflows",
      projectProof: "Application Tracker & Enterprise Pipelines",
      projectLink: "#projects",
      impact: "Architected 4-app multi-account OAuth sync: Forms ➔ Sheets ➔ Calendar ➔ Gmail."
    },
    {
      name: "Python 3 & FastAPI",
      category: "Python & Automation",
      badge: "Backend Engineering",
      projectProof: "Enterprise Workflow Automation Suite",
      projectLink: "#projects",
      impact: "Built asynchronous REST APIs and backend data processing scripts."
    },
    {
      name: "PostgreSQL & MySQL",
      category: "Databases & Cloud",
      badge: "Relational Data Storage",
      projectProof: "Multi-Platform Scraping & Staging Databases",
      projectLink: "#projects",
      impact: "Structured schema design, JSON payload validation, and SQL query optimizations."
    },
    {
      name: "Redis Distributed Caching",
      category: "Databases & Cloud",
      badge: "Real-Time State & Cache",
      projectProof: "Satellite Tracking System",
      projectLink: "#projects",
      impact: "Implemented low-latency cache layer between Node.js backend and React client."
    },
    {
      name: "Docker Containerization",
      category: "Databases & Cloud",
      badge: "DevOps & Deployment",
      projectProof: "CV Model Verification & Microservices",
      projectLink: "#projects",
      impact: "Containerized Python CV inference pipelines for reproducible one-command deployment."
    },
    {
      name: "Linux CLI & Server Diagnostics",
      category: "Databases & Cloud",
      badge: "Systems Administration",
      projectProof: "Breakthru Backend Operations",
      projectLink: "#experience",
      impact: "Inspected server logs, diagnosed failing HTTP requests, and verified database state."
    },
    {
      name: "Agile & Scrum Ceremonies",
      category: "QA & Agile",
      badge: "Project Coordination",
      projectProof: "Zelle Solutions Agile Sprints",
      projectLink: "#experience",
      impact: "Managed sprint backlogs, REST API specifications, and cross-functional deliverables."
    },
    {
      name: "QA Release Validation",
      category: "QA & Agile",
      badge: "Software Quality",
      projectProof: "Zelle Solutions & Breakthru QA",
      projectLink: "#experience",
      impact: "Tested release builds against user acceptance criteria to ensure zero regressions."
    }
  ];

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="stack" className="py-20 border-t border-line relative overflow-hidden">
      <div className="max-w-[1040px] mx-auto px-6 md:px-10 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal font-semibold mb-3">
              <span className="w-4 h-px bg-signal" />
              02 — Skills & Project Proof
            </div>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink tracking-tight">
              Interactive Capabilities Hub
            </h2>
          </div>
          <p className="font-body text-sm text-ink-soft max-w-md">
            Every technical skill tied directly to a deployed project or production architecture.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full border transition-all ${
                selectedCategory === cat
                  ? "bg-signal text-white border-signal shadow-sm font-semibold"
                  : "bg-surface text-ink-soft border-line hover:border-line-strong hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => {
            const isSelected = selectedSkill?.name === skill.name;
            return (
              <div
                key={skill.name}
                onClick={() => setSelectedSkill(isSelected ? null : skill)}
                className={`rounded-xl border p-5 transition-all cursor-pointer bg-surface flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? "border-signal ring-2 ring-signal/20 shadow-blueprint-lg -translate-y-0.5"
                    : "border-line hover:border-signal/60 hover:shadow-blueprint hover:-translate-y-0.5"
                }`}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="rounded bg-signal-dim px-2 py-0.5 font-mono text-[10px] font-semibold text-signal">
                      {skill.badge}
                    </span>
                    <span className="font-mono text-[10px] text-teal font-semibold">
                      Applied
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-ink">
                    {skill.name}
                  </h3>

                  <p className="font-body text-xs text-ink-soft leading-relaxed">
                    {skill.impact}
                  </p>
                </div>

                {/* Where Applied Link */}
                <div className="border-t border-line/60 pt-3">
                  <a
                    href={skill.projectLink}
                    className="inline-flex items-center gap-1 font-mono text-[11px] text-signal font-semibold hover:underline"
                  >
                    <span>Proof: {skill.projectProof}</span>
                    <ArrowUpRight size={11} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Skill Quick Spotlight Banner */}
        {selectedSkill && (
          <div className="rounded-xl border border-signal bg-signal-dim/40 p-5 space-y-2 animate-fadeIn font-body text-xs text-ink">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-signal flex items-center gap-1.5">
                <Sparkles size={13} className="text-amber" />
                {selectedSkill.name} · Deep Dive
              </span>
              <button
                onClick={() => setSelectedSkill(null)}
                className="font-mono text-[10px] text-ink-soft hover:text-ink"
              >
                Close
              </button>
            </div>
            <p className="text-ink-soft text-sm leading-relaxed">
              <strong className="text-ink">{selectedSkill.name}</strong> was directly leveraged in <strong className="text-signal">{selectedSkill.projectProof}</strong>: {selectedSkill.impact}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

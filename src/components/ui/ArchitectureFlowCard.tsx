"use client";

import { useState } from "react";
import { Camera, Cpu, Monitor, Zap, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export function ArchitectureFlowCard() {
  const [activeStage, setActiveStage] = useState(1);

  const stages = [
    {
      id: 0,
      number: "01",
      icon: Camera,
      title: "Data & Video Ingestion",
      subtitle: "Webcam stream or web scrapers",
      tech: "OpenCV · Selenium · Apify",
      details:
        "Captures real-time camera frames or harvests dynamic web data across multiple SaaS platforms with anti-bot handling."
    },
    {
      id: 1,
      number: "02",
      icon: Cpu,
      title: "AI Neural Inference",
      subtitle: "25+ FPS on standard CPU",
      tech: "Ultralytics YOLOv8 · Intel OpenVINO",
      details:
        "Processes incoming streams in real-time. Quantized through OpenVINO to run at 25+ FPS on standard student laptops without a dedicated GPU."
    },
    {
      id: 2,
      number: "03",
      icon: Monitor,
      title: "Visual UI & Database Sync",
      subtitle: "Large visual labels & storage",
      tech: "PyQt6 · PostgreSQL · Redis",
      details:
        "Displays large-font visual game feedback for hearing-impaired learners and validates JSON records into PostgreSQL."
    },
    {
      id: 3,
      number: "04",
      icon: Zap,
      title: "Cloud Automations",
      subtitle: "Event triggers & notifications",
      tech: "Make.com · Zapier · REST APIs",
      details:
        "Triggers automated downstream workflows: multi-app email digests, calendar invites, and live webhook integrations."
    }
  ];

  return (
    <div className="w-full rounded-2xl border border-line bg-surface p-6 shadow-blueprint space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-line pb-4 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-teal animate-pulse-blip" />
          <span className="font-bold text-ink uppercase tracking-wider">
            How My Systems Work
          </span>
        </div>
        <span className="text-ink-soft text-[11px]">End-to-End Pipeline</span>
      </div>

      {/* 4 Clear Step Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {stages.map((stage) => {
          const Icon = stage.icon;
          const isActive = activeStage === stage.id;
          return (
            <div
              key={stage.id}
              onClick={() => setActiveStage(stage.id)}
              className={`p-4 rounded-xl border transition-all cursor-pointer text-left space-y-2 select-none ${
                isActive
                  ? "border-signal bg-signal-dim/50 shadow-sm ring-1 ring-signal/30"
                  : "border-line bg-bg hover:border-line-strong hover:bg-surface"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-bold text-signal">
                  STAGE {stage.number}
                </span>
                <Icon
                  size={16}
                  className={isActive ? "text-signal" : "text-ink-soft"}
                />
              </div>

              <div>
                <h4 className="font-display font-bold text-sm text-ink leading-tight">
                  {stage.title}
                </h4>
                <p className="font-mono text-[11px] text-ink-soft mt-0.5">
                  {stage.subtitle}
                </p>
              </div>

              <div className="font-mono text-[10px] text-teal font-semibold pt-1">
                {stage.tech}
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Stage Explanatory Box */}
      <div className="rounded-xl border border-line bg-bg p-4 space-y-1.5 font-body text-xs text-ink-soft">
        <div className="font-mono text-[11px] font-bold text-signal flex items-center gap-1.5">
          <CheckCircle2 size={13} className="text-teal" />
          <span>Stage {stages[activeStage]!.number} Breakdown:</span>
        </div>
        <p className="leading-relaxed">{stages[activeStage]!.details}</p>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between pt-1 border-t border-line/60 font-mono text-[10px] text-ink-soft">
        <span>Click any stage above to inspect</span>
        <span className="text-teal font-semibold">Production Architecture</span>
      </div>
    </div>
  );
}

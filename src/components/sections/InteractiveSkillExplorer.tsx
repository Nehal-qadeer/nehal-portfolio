"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useSkillFilter, SKILL_MAPPING } from "@/context/SkillFilterContext";

interface SkillGroup {
  title: string;
  chips: string[];
}

const GROUPS: SkillGroup[] = [
  {
    title: "AI & GenAI",
    chips: [
      "Multi-Agent RAG",
      "LLM Integration",
      "Prompt Engineering",
      "RAG Evaluation (RAGAS)",
      "Google Gemini API",
      "PII Redaction (Presidio)",
    ],
  },
  {
    title: "Computer Vision",
    chips: ["YOLOv8", "Intel OpenVINO", "OpenCV", "PyQt6", "PyTorch"],
  },
  {
    title: "Python & APIs",
    chips: ["Python", "FastAPI", "REST APIs", "JSON & Webhooks", "SQLAlchemy", "Pytest"],
  },
  {
    title: "Automation & Data",
    chips: ["Make.com", "Zapier", "Apify", "Selenium", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Tools & Ways of Working",
    chips: [
      "Docker",
      "Git & GitHub",
      "Linux / Bash",
      "Agile/Scrum",
      "Requirements & User Stories",
      "Release QA",
    ],
  },
];

interface ResultItem {
  id: string;
  type: "PROJECT" | "EXPERIENCE";
  title: string;
  description: string;
}

const RESULT_METADATA: Record<string, ResultItem> = {
  "project-rag": {
    id: "project-rag",
    type: "PROJECT",
    title: "Multi-Agent RAG System",
    description:
      "Autonomous 4-agent RAG engine with Presidio PII pseudonymization, AES-256-GCM cryptographic shredding, and EU AI Act record-keeping.",
  },
  "project-thesis": {
    id: "project-thesis",
    type: "PROJECT",
    title: "Object Detection Game (Master's Thesis)",
    description:
      "Interactive educational tool using YOLOv8 & Intel OpenVINO to bridge the communication gap through visual recognition.",
  },
  "project-roombuilder": {
    id: "project-roombuilder",
    type: "PROJECT",
    title: "Virtual Room Builder",
    description:
      "Spatial room construction web application combining a 60 FPS HTML5 Canvas coordinate engine with Google Gemini Multimodal Vision AI.",
  },
  "project-automation": {
    id: "project-automation",
    type: "PROJECT",
    title: "Workflow Automation & Data Pipelines",
    description:
      "Python and Selenium scrapers deployed as scheduled Apify Actors that collect 2,000 to 4,000 records per run.",
  },
  "project-satellite": {
    id: "project-satellite",
    type: "PROJECT",
    title: "Satellite Tracking System",
    description:
      "Full-stack application displaying live orbital telemetry with Google Maps API and TLE prediction math.",
  },
  "exp-sereact": {
    id: "exp-sereact",
    type: "EXPERIENCE",
    title: "Sereact · Teleoperation & Data Labeling Intern",
    description:
      "Record robot imitation-learning demonstrations via teleoperation and quality-check AI training episodes.",
  },
  "exp-zelle": {
    id: "exp-zelle",
    type: "EXPERIENCE",
    title: "ZELLE Solutions · Project Manager",
    description:
      "Led a cross-functional team of 7 developers and UI/UX designers through Agile/Scrum delivery.",
  },
};

export function InteractiveSkillExplorer() {
  const { selectedSkill, setSelectedSkill, toggleSkill } = useSkillFilter();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedSkill) {
      const timer = setTimeout(() => {
        panelRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [selectedSkill]);

  const handleNavigate = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (!el) return;

    const navOffset = 80;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    el.classList.remove("flash-highlight");
    // force reflow
    void el.offsetWidth;
    el.classList.add("flash-highlight");

    setTimeout(() => {
      el.classList.remove("flash-highlight");
    }, 1300);
  };

  const matchingTargetIds = selectedSkill ? SKILL_MAPPING[selectedSkill] || [] : [];
  const matchingItems = matchingTargetIds
    .map((id) => RESULT_METADATA[id])
    .filter((item): item is ResultItem => Boolean(item));

  return (
    <section id="stack" className="py-20 border-t border-line relative overflow-hidden">
      <div className="max-w-[1040px] mx-auto px-6 md:px-10">
        {/* Eyebrow & Heading with soft fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "0px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal font-semibold mb-3">
            <span className="w-4 h-px bg-signal" />
            02 · SKILLS &amp; PROJECT PROOF
          </div>

          <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink tracking-tight">
            What I work with
          </h2>
          <p className="mt-2 font-body text-sm text-ink-soft mb-8">
            Click a skill to highlight the projects and roles where I used it.
          </p>
        </motion.div>

        {/* 5-Group Grid: 5th card gets lg:col-span-2 at >=1024px */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GROUPS.map((group, idx) => (
            <div
              key={group.title}
              className={`bg-surface border border-line rounded-2xl p-6 shadow-card space-y-3.5 transition-all duration-200 ${
                idx === 4 ? "lg:col-span-2" : ""
              }`}
            >
              <h3 className="font-mono text-xs uppercase text-signal font-semibold tracking-wider">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.chips.map((chip) => {
                  const isSelected = selectedSkill === chip;
                  return (
                    <button
                      key={chip}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => toggleSkill(chip)}
                      className={`font-mono text-xs rounded-full border px-3 py-1.5 transition-all duration-200 ${
                        isSelected
                          ? "bg-signal text-signal-ink border-signal font-semibold shadow-sm"
                          : "bg-surface-2 text-ink-soft border-line hover:border-signal hover:text-signal"
                      }`}
                    >
                      {chip}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Skill Results Panel directly under the skills grid */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden mt-6"
            >
              <div
                ref={panelRef}
                role="region"
                aria-live="polite"
                aria-label="Projects and roles that use the selected skill"
                className="rounded-[16px] border border-line bg-surface-2 p-[20px] shadow-card space-y-4"
              >
                {/* Header Row */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-ink-soft">
                    <span>Where I used</span>
                    <span className="inline-flex items-center rounded-md bg-signal-dim px-2.5 py-1 font-mono text-xs font-semibold text-signal border border-signal/20">
                      {selectedSkill}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedSkill(null)}
                    className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg border border-line bg-surface text-ink hover:border-line-strong hover:text-signal font-mono text-xs transition-colors shadow-sm"
                  >
                    <X size={14} />
                    Clear
                  </button>
                </div>

                {/* Compact Result Cards Grid with cross-fade on skill change */}
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedSkill}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15, ease: "easeInOut" }}
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
                    >
                      {matchingItems.map((item) => (
                        <div
                          key={item.id}
                          className="rounded-[12px] border border-line bg-surface p-[16px] hover:border-signal transition-colors flex flex-col justify-between gap-3 group"
                        >
                          <div className="space-y-1.5">
                            <div className="font-mono text-[11px] text-muted tracking-wider uppercase font-semibold">
                              {item.type}
                            </div>
                            <h4 className="font-display font-semibold text-[16px] text-ink leading-snug">
                              {item.title}
                            </h4>
                            <p
                              className="font-body text-sm text-ink-soft truncate"
                              title={item.description}
                            >
                              {item.description}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleNavigate(item.id)}
                            className="inline-flex items-center gap-1 text-signal font-mono text-xs font-semibold hover:underline w-fit pt-1 text-left"
                          >
                            {item.type === "EXPERIENCE" ? "View role →" : "View project →"}
                          </button>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

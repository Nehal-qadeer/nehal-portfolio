"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSkillFilter } from "@/context/SkillFilterContext";

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

export function InteractiveSkillExplorer() {
  const { selectedSkill, toggleSkill } = useSkillFilter();

  return (
    <section id="stack" className="py-20 border-t border-line relative overflow-hidden">
      <div className="max-w-[1040px] mx-auto px-6 md:px-10">
        {/* Eyebrow & Heading with soft fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
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

        {/* 5-Group Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GROUPS.map((group) => (
            <div
              key={group.title}
              className="bg-surface border border-line rounded-xl p-5 shadow-blueprint space-y-3"
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
                      onClick={() => toggleSkill(chip)}
                      className={`font-body text-[13px] rounded-full border px-2.5 py-1 transition-all duration-200 ${
                        isSelected
                          ? "bg-signal text-white border-signal"
                          : "bg-signal-dim text-ink border-line hover:border-signal"
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
      </div>
    </section>
  );
}

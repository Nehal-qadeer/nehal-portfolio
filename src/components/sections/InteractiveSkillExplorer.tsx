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
      </div>
    </section>
  );
}
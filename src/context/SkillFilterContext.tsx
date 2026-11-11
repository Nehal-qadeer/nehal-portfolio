"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export const SKILL_MAPPING: Record<string, string[]> = {
  "Multi-Agent RAG": ["project-rag"],
  "RAG Evaluation (RAGAS)": ["project-rag"],
  "PII Redaction (Presidio)": ["project-rag"],
  "LLM Integration": ["project-rag", "project-roombuilder"],
  "Prompt Engineering": ["project-rag", "project-roombuilder"],
  "Google Gemini API": ["project-roombuilder"],
  "YOLOv8": ["project-thesis"],
  "Intel OpenVINO": ["project-thesis"],
  "OpenCV": ["project-thesis"],
  "PyQt6": ["project-thesis"],
  "PyTorch": ["project-thesis"],
  "Python": ["project-rag", "project-thesis", "project-roombuilder", "project-automation", "exp-sereact"],
  "FastAPI": ["project-rag", "project-roombuilder"],
  "REST APIs": ["project-rag", "project-roombuilder", "project-automation", "project-satellite"],
  "JSON & Webhooks": ["project-rag", "project-roombuilder", "project-automation", "project-satellite"],
  "SQLAlchemy": ["project-roombuilder"],
  "Pytest": ["project-roombuilder"],
  "Make.com": ["project-automation"],
  "Zapier": ["project-automation"],
  "Apify": ["project-automation"],
  "Selenium": ["project-automation"],
  "PostgreSQL": ["project-roombuilder", "project-automation"],
  "MongoDB": ["project-satellite"],
  "Redis": ["project-satellite"],
  "Docker": ["project-rag"],
  "Git & GitHub": ["project-rag", "project-thesis", "project-roombuilder", "project-automation", "project-satellite"],
  "Linux / Bash": ["exp-sereact"],
  "Agile/Scrum": ["exp-zelle"],
  "Requirements & User Stories": ["exp-zelle"],
  "Release QA": ["exp-zelle"],
};

interface SkillFilterContextType {
  selectedSkill: string | null;
  setSelectedSkill: (skill: string | null) => void;
  toggleSkill: (skill: string) => void;
  isHighlighted: (id: string) => boolean;
}

const SkillFilterContext = createContext<SkillFilterContextType>({
  selectedSkill: null,
  setSelectedSkill: () => {},
  toggleSkill: () => {},
  isHighlighted: () => true,
});

export function SkillFilterProvider({ children }: { children: ReactNode }) {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const toggleSkill = (skill: string) => {
    setSelectedSkill((prev) => (prev === skill ? null : skill));
  };

  const isHighlighted = (id: string): boolean => {
    if (!selectedSkill) return true;
    const targets = SKILL_MAPPING[selectedSkill];
    return targets ? targets.includes(id) : false;
  };

  return (
    <SkillFilterContext.Provider
      value={{
        selectedSkill,
        setSelectedSkill,
        toggleSkill,
        isHighlighted,
      }}
    >
      {children}
    </SkillFilterContext.Provider>
  );
}

export function useSkillFilter() {
  return useContext(SkillFilterContext);
}

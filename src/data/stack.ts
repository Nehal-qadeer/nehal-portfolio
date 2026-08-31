export interface StackGroup {
  label: string;
  items: string[];
}

export const stackGroups: StackGroup[] = [
  {
    label: "Languages & core",
    items: ["Python 3", "C++", "OOP", "Data Structures & Algorithms"]
  },
  {
    label: "AI / computer vision",
    items: ["PyTorch", "OpenCV", "Intel OpenVINO", "Model training & evaluation"]
  },
  {
    label: "Automation & integration",
    items: ["Apify REST API", "Zapier", "Make.com", "Selenium WebDriver", "Webhooks", "REST API design"]
  },
  {
    label: "Data & infrastructure",
    items: ["PostgreSQL", "MySQL", "Docker", "Linux CLI", "Git / GitHub"]
  },
  {
    label: "AI-assisted tooling",
    items: ["Claude Code", "Cursor IDE", "Agentic workflow orchestration", "Prompt engineering"]
  },
  {
    label: "Process & QA",
    items: ["Agile / Scrum", "Sprint planning", "UAC definition", "QA validation", "Incident diagnostics"]
  }
];

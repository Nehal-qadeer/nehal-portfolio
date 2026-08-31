export interface StackGroup {
  label: string;
  items: string[];
}

export const stackGroups: StackGroup[] = [
  {
    label: "Languages & Core",
    items: [
      "Python 3",
      "C++",
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms",
      "Clean Code Principles"
    ]
  },
  {
    label: "AI/ML & Computer Vision",
    items: [
      "PyTorch",
      "OpenCV",
      "Intel OpenVINO (Inference & Model Optimization)",
      "Deep Learning Model Training & Evaluation",
      "Neural Network Verification Pipelines"
    ]
  },
  {
    label: "Automation & Integrations",
    items: [
      "Apify REST API & Custom Actors",
      "Zapier (Multi-Step Zaps, Inline Formulas)",
      "Make.com Scenarios",
      "Selenium WebDriver & ChromeDriver",
      "JSON Payloads & Schema Validation",
      "Webhooks & RESTful API Design"
    ]
  },
  {
    label: "Data & Infrastructure",
    items: [
      "PostgreSQL",
      "MySQL",
      "Structured Query Optimization",
      "Docker & Containerization",
      "Linux CLI / Bash",
      "Git / GitHub Version Control"
    ]
  },
  {
    label: "Agentic & AI-Assisted Tools",
    items: [
      "Claude Code",
      "Cursor IDE",
      "Agentic Workflow Orchestration",
      "Advanced Prompt Engineering"
    ]
  },
  {
    label: "Methodologies & QA",
    items: [
      "Agile / Scrum Ceremonies",
      "Sprint Planning",
      "Technical API Specifications",
      "User Acceptance Criteria (UAC)",
      "QA Release Validation",
      "Incident Diagnostics & Root Cause Analysis"
    ]
  }
];

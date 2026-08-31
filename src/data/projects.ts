export interface Project {
  slug: string;
  title: string;
  period: string;
  durationBadge: string;
  category: string;
  stack: string[];
  summary: string;
  highlights: string[];
  metrics: { label: string; value: string };
  repos: { label: string; url: string }[];
  visual: "scan" | "network" | "flow";
}

export const projects: Project[] = [
  {
    slug: "object-verification",
    title: "AI-Driven Object Verification System",
    period: "May 2025 — Nov 2025",
    durationBadge: "Master's Thesis · 6 Months",
    category: "Computer Vision & Model Optimization",
    stack: ["Python", "PyTorch", "OpenCV", "Intel OpenVINO", "Docker", "PyCharm"],
    summary:
      "End-to-end computer vision verification pipeline. Preprocesses image streams via OpenCV, trains PyTorch deep learning models, and cuts latency by 30% through Intel OpenVINO runtime quantization.",
    highlights: [
      "Built full preprocessing and training pipeline in PyCharm using OpenCV & PyTorch.",
      "Optimized inference runtime with Intel OpenVINO for a 30% latency reduction.",
      "Containerized preprocessing + serving into lightweight, portable Docker containers."
    ],
    metrics: { label: "Inference Speedup", value: "-30% Latency" },
    repos: [],
    visual: "scan"
  },
  {
    slug: "scraping-engine",
    title: "Multi-Platform Scraping & Ingestion Engine",
    period: "2025 — 2026",
    durationBadge: "Independent Production System",
    category: "Python Automation & Cloud Data Pipelines",
    stack: ["Python", "Selenium WebDriver", "Apify REST API", "Make.com", "PostgreSQL"],
    summary:
      "High-volume data harvesting infrastructure. Deploys custom Python Selenium scrapers as cloud Apify Actors with Make.com JSON validation, ingesting 2,000–4,000 normalized commercial records per run into PostgreSQL.",
    highlights: [
      "Deployed custom Python scrapers as cloud Apify Actors running on scheduled cron intervals.",
      "Engineered Make.com scenarios with JSON transformation logic to parse, clean, and validate payloads.",
      "Wired automated storage directly into PostgreSQL relational databases to power analytical dashboards."
    ],
    metrics: { label: "Harvest Velocity", value: "2K–4K Records / Run" },
    repos: [
      { label: "Booking.com Dynamic Scraper", url: "https://github.com/Nehal-qadeer/Booking-Automation-Selenium" },
      { label: "Lead-Gen Business Extractor", url: "https://github.com/Nehal-qadeer/Yell-Business-Data-Extractor" }
    ],
    visual: "network"
  },
  {
    slug: "application-tracker",
    title: "Multi-App Workflow Automation — Application Tracker",
    period: "2026",
    durationBadge: "No-Code / Pro-Code Automation",
    category: "Workflow Automation & API Integration",
    stack: ["Zapier", "Google Workspace APIs", "Webhooks", "OAuth 2.0", "Gmail API"],
    summary:
      "Seamless 4-app automation pipeline. Ingests Google Form submissions into Google Sheets, schedules Google Calendar follow-ups, and dispatches personalized Gmail notifications with zero manual handling.",
    highlights: [
      "Architected a 4-step Zapier flow: Google Forms → Sheets → Calendar → Gmail, fully automated.",
      "Authored custom inline transformation formulas mapping multi-variable payload fields.",
      "Configured multi-account OAuth authentication with end-to-end data integrity validation."
    ],
    metrics: { label: "Manual Effort Saved", value: "100% Automated" },
    repos: [],
    visual: "flow"
  }
];

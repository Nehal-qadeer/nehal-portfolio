export interface Project {
  slug: string;
  title: string;
  period: string;
  stack: string[];
  summary: string;
  bullets: string[];
  /** Public code proof. Empty when the work is thesis/client IP and not publicly repo'd. */
  repos: { label: string; url: string }[];
  /** Which generative visual to render for this card. */
  visual: "scan" | "network" | "flow" | "orbit";
}

export const projects: Project[] = [
  {
    slug: "object-verification",
    title: "AI-Driven Object Verification System",
    period: "Master's Thesis · 2024 — 2025",
    stack: ["Python", "PyTorch", "OpenCV", "Intel OpenVINO", "Docker"],
    summary:
      "An end-to-end computer vision verification pipeline — image preprocessing through trained inference, optimized and containerized for real deployment rather than a notebook demo.",
    bullets: [
      "Built the full pipeline in PyCharm: OpenCV preprocessing feeding PyTorch model training and evaluation.",
      "Converted and ran inference through Intel OpenVINO, cutting inference latency by 30%.",
      "Containerized preprocessing + serving into a portable Docker runtime."
    ],
    repos: [],
    visual: "scan"
  },
  {
    slug: "scraping-engine",
    title: "Multi-Platform Scraping & Ingestion Engine",
    period: "2026",
    stack: ["Python", "Selenium", "Apify REST API", "Make.com", "PostgreSQL"],
    summary:
      "Cloud-deployed scrapers on scheduled intervals, with Make.com handling transform/validation logic before data lands in Postgres for reporting.",
    bullets: [
      "Deployed custom Python scrapers as Apify Actors pulling live data on scheduled intervals.",
      "Built Make.com scenarios with JSON transform logic to clean and validate raw payloads.",
      "Wired storage directly into PostgreSQL to power analytics dashboards."
    ],
    repos: [
      { label: "Booking.com scraper", url: "https://github.com/Nehal-qadeer/Booking-Automation-Selenium" },
      { label: "Lead-gen extractor", url: "https://github.com/Nehal-qadeer/Yell-Business-Data-Extractor" }
    ],
    visual: "network"
  },
  {
    slug: "application-tracker",
    title: "Multi-App Workflow Automation — Application Tracker",
    period: "2026",
    stack: ["Zapier", "Google Workspace API", "Webhooks", "OAuth"],
    summary:
      "A 4-step Zapier workflow that turns a Google Form into a fully tracked pipeline — sheet row, calendar follow-up, and a personalized Gmail nudge, with zero manual handling.",
    bullets: [
      "Architected a 4-app Zapier flow: Form → Sheets → Calendar → Gmail, fully automated.",
      "Wrote inline transformation formulas mapping multi-variable payload fields.",
      "Configured multi-account OAuth and validated data integrity across every API touchpoint."
    ],
    repos: [],
    visual: "flow"
  },
  {
    slug: "satellite-tracking",
    title: "Satellite Tracking System",
    period: "Systems / Full-Stack",
    stack: ["Node.js", "Vite", "React", "Redis"],
    summary:
      "A full-stack real-time tracking system — Redis handling live state between a Node backend and a Vite/React frontend. The systems-integration half of the portfolio, not just the ML half.",
    bullets: [
      "Backend service tracking live positional data with Redis as the shared state/cache layer.",
      "Vite + React frontend consuming live updates without polling the backend directly.",
      "Structured as a proper client/server split rather than a monolith — built to scale past a demo."
    ],
    repos: [{ label: "Repository", url: "https://github.com/Nehal-qadeer/satellite-trackingsystem" }],
    visual: "orbit"
  }
];

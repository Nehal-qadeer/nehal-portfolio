export interface Project {
  slug: string;
  title: string;
  period: string;
  category: string;
  stack: string[];
  summary: string;
  bullets: string[];
  /** Public code proof. Empty when the work is thesis/client IP and not publicly repo'd. */
  repos: { label: string; url: string }[];
  /** Which interactive simulation to run */
  visual: "scan" | "network" | "flow";
}

export const projects: Project[] = [
  {
    slug: "object-verification",
    title: "AI-Driven Object Verification System",
    period: "Master's Thesis Project · 2024 — 2025",
    category: "Computer Vision & Model Optimization",
    stack: ["Python", "PyTorch", "OpenCV", "Intel OpenVINO", "Docker", "PyCharm"],
    summary:
      "Engineered an end-to-end computer vision verification pipeline in PyCharm, handling image preprocessing with OpenCV and deep-learning model training with PyTorch, optimized for high-speed inference.",
    bullets: [
      "Engineered an end-to-end computer vision verification pipeline in PyCharm, handling image preprocessing with OpenCV and deep-learning model training with PyTorch.",
      "Optimized model inference by 30% through conversion and runtime execution with the Intel OpenVINO toolkit.",
      "Containerized the inference pipeline (data preprocessing + model serving runtime) into lightweight Docker containers for portable deployment."
    ],
    repos: [],
    visual: "scan"
  },
  {
    slug: "scraping-engine",
    title: "Multi-Platform Automated Scraping & Ingestion Engine",
    period: "End-to-End Automation & Data Integration · 2026",
    category: "Python Automation & Cloud Data Pipelines",
    stack: ["Python", "Selenium WebDriver", "Apify REST API", "Make.com", "PostgreSQL"],
    summary:
      "Architected cloud-deployed scraping and lead-generation pipelines using Python and Selenium, running automated Make.com transformations into PostgreSQL.",
    bullets: [
      "Developed custom Python web scrapers deployed as cloud Apify Actors, utilizing Apify REST APIs to extract live dynamic data on scheduled intervals.",
      "Constructed Make.com scenarios with JSON transformation logic to parse, clean, and validate raw payload responses.",
      "Integrated automated data storage directly into PostgreSQL relational databases to power analytical dashboards and reporting pipelines."
    ],
    repos: [
      { label: "Booking.com Dynamic Scraper", url: "https://github.com/Nehal-qadeer/Booking-Automation-Selenium" },
      { label: "Lead-Gen Business Extractor", url: "https://github.com/Nehal-qadeer/Yell-Business-Data-Extractor" }
    ],
    visual: "network"
  },
  {
    slug: "application-tracker",
    title: "Multi-App Workflow Automation — Application Tracker",
    period: "No-Code / Pro-Code Process Automation · 2026",
    category: "Workflow Automation & API Integration",
    stack: ["Zapier", "Google Workspace APIs", "Webhooks", "OAuth 2.0", "Gmail API"],
    summary:
      "Architected and deployed a 4-step multi-app Zapier workflow automating candidate and client tracking with dynamic Google Sheets recording, Calendar scheduling, and personalized Gmail alerts.",
    bullets: [
      "Architected and deployed a 4-step multi-app Zapier workflow automating candidate and client tracking: dynamically records Google Form inputs into Google Sheets, schedules Google Calendar follow-ups, and triggers personalized Gmail notifications.",
      "Implemented custom Zapier inline transformation formulas and mapped multi-variable payload fields (company, role, links, follow-up deadlines).",
      "Configured multi-account OAuth authentication and validated end-to-end data integrity across all API touchpoints."
    ],
    repos: [],
    visual: "flow"
  }
];

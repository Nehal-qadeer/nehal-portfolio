export interface ExperienceEntry {
  role: string;
  org: string;
  period: string;
  focus: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Freelance Automation & Data Engineer",
    org: "Self-Employed · Remote",
    period: "2025 — 2026",
    focus: "Independent / client projects",
    bullets: [
      "Built multi-stage scraping and lead-generation pipelines in Python + Selenium, harvesting 2,000–4,000 commercial records per run across North America.",
      "Automated pagination, JS rendering, and link extraction to remove manual data entry; output normalized straight into CRM-ready CSV/JSON.",
      "Built a dynamic Booking.com scraper for real-time pricing and rating capture, feeding competitive pricing models.",
      "Ran data cleansing, validation, and schema mapping in Jupyter before handoff."
    ]
  },
  {
    role: "Software Project Coordinator / Agile Specialist",
    org: "Zelle Solutions",
    period: "Feb 2023 — Nov 2023",
    focus: "Agile sprints & API specifications",
    bullets: [
      "Ran Agile/Scrum ceremonies and owned sprint backlogs covering REST API specs and release cycles.",
      "Wrote backend API interface docs and defined user-acceptance criteria bridging product and engineering.",
      "Executed QA validation on release builds against functional criteria, catching regressions pre-deploy."
    ]
  },
  {
    role: "Technical Support & Backend Operations Specialist",
    org: "Breakthru (Blazeo / ApexChat)",
    period: "Jun 2020 — Oct 2022",
    focus: "Production diagnostics & SQL verification",
    bullets: [
      "Diagnosed production incidents via server logs, HTTP payloads, and Linux CLI — cutting MTTR significantly.",
      "Wrote and ran complex PostgreSQL/MySQL queries across staging and prod to isolate data-flow defects.",
      "Reproduced defects and validated hotfixes directly with core engineering before deployment."
    ]
  }
];

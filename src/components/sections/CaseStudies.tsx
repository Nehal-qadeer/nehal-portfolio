"use client";

import { ExternalLink, CheckCircle2, Code2, Sparkles, Database, Workflow, Shield } from "lucide-react";

export function CaseStudies() {
  const caseStudies = [
    {
      id: "scraping-engine",
      title: "Multi-Platform Scraping & Ingestion Engine",
      badge: "Production Data Architecture",
      role: "Python Automation & Cloud Pipelines",
      metric: "2K–4K Records",
      metricDesc: "Harvested per Run",
      icon: Database,
      summary:
        "High-throughput automated data harvesting infrastructure. Deploys custom Python Selenium scrapers as cloud Apify Actors with automated cron triggers, Make.com JSON validation, and direct PostgreSQL relational database storage.",
      highlights: [
        "Deployed custom Python Selenium scrapers as cloud Apify Actors with dynamic pagination & anti-bot bypass.",
        "Engineered Make.com scenarios with JSON transformation logic to parse, clean, and validate payloads.",
        "Wired storage directly into PostgreSQL relational databases to power analytical dashboards."
      ],
      stack: ["Python 3", "Selenium WebDriver", "Apify REST API", "Make.com", "PostgreSQL", "Jupyter"],
      repos: [
        { label: "Booking.com Dynamic Scraper", url: "https://github.com/Nehal-qadeer/Booking-Automation-Selenium" },
        { label: "Lead-Gen Business Extractor", url: "https://github.com/Nehal-qadeer/Yell-Business-Data-Extractor" }
      ]
    },
    {
      id: "automation-satellite",
      title: "Application Tracker Automation & Satellite Tracking System",
      badge: "Full-Stack Caching & Process Flow",
      role: "Systems Integration & Real-Time State",
      metric: "Real-Time / 100%",
      metricDesc: "Automated & Redis Cached",
      icon: Workflow,
      summary:
        "Dual systems engineering: A 4-step multi-app Zapier workflow with OAuth webhooks (Forms ➔ Sheets ➔ Calendar ➔ Gmail) combined with a full-stack real-time Satellite Tracking system leveraging Node.js, React, and Redis as the distributed state and cache layer.",
      highlights: [
        "Architected 4-app Zapier automation pipeline: Google Forms ➔ Sheets ➔ Calendar ➔ Gmail with inline formula mapping.",
        "Configured multi-account OAuth authentication with end-to-end data integrity validation.",
        "Built full-stack real-time tracking architecture using Redis as the shared caching/state layer between Node.js backend and React client."
      ],
      stack: ["Zapier", "OAuth 2.0", "Google Workspace APIs", "Node.js", "React", "Redis"],
      repos: [
        { label: "Satellite Tracking System", url: "https://github.com/Nehal-qadeer/satellite-trackingsystem" }
      ]
    }
  ];

  return (
    <section id="work" className="px-6 py-16 md:px-10 lg:pl-24 max-w-6xl mx-auto space-y-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-charcoal pb-6">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-amber" />
            <span className="font-mono text-xs tracking-widest text-amber font-semibold uppercase">
              Production Systems & Pipelines
            </span>
          </div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-bone">
            Selected Cloud & Automation Architectures
          </h2>
        </div>
        <p className="font-body text-sm text-ash max-w-md">
          Production systems holding up outside a notebook: cloud scraping, multi-app workflows, and distributed data caching.
        </p>
      </div>

      {/* Case Study Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudies.map((study) => {
          const Icon = study.icon;
          return (
            <article
              key={study.id}
              className="rounded-2xl border border-charcoal bg-charcoal/80 p-8 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-amber/60 hover:shadow-amber-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-5">
                {/* Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full bg-amber/15 border border-amber/30 px-3 py-1 font-mono text-xs font-semibold text-amber flex items-center gap-1.5">
                    <Icon size={13} />
                    {study.badge}
                  </span>

                  <div className="flex items-center gap-1.5 rounded-lg border border-charcoal bg-graphite px-2.5 py-1 font-mono text-xs">
                    <span className="text-amber font-bold tabular">{study.metric}</span>
                    <span className="text-ash-dark">{study.metricDesc}</span>
                  </div>
                </div>

                {/* Title & Summary */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-bone">
                    {study.title}
                  </h3>
                  <p className="mt-3 font-body text-sm text-ash leading-relaxed">
                    {study.summary}
                  </p>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 pt-1">
                  {study.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 font-body text-xs sm:text-sm text-ash">
                      <CheckCircle2 size={15} className="text-amber shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Tech Stack & Links */}
              <div className="space-y-4 border-t border-charcoal/80 pt-5">
                <div className="flex flex-wrap gap-1.5">
                  {study.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-charcoal bg-graphite px-2 py-0.5 font-mono text-[10px] text-ash"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div>
                  {study.repos.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {study.repos.map((repo) => (
                        <a
                          key={repo.url}
                          href={repo.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg border border-amber/40 bg-amber/10 px-3 py-1.5 font-mono text-xs font-semibold text-amber hover:bg-amber hover:text-graphite transition-all"
                        >
                          <Code2 size={13} />
                          {repo.label}
                          <ExternalLink size={11} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

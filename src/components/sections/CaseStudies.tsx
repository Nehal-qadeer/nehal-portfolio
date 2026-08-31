"use client";

import { ExternalLink, CheckCircle2, Code2, Sparkles } from "lucide-react";

export function CaseStudies() {
  const caseStudies = [
    {
      id: "object-verification",
      title: "AI-Driven Object Verification System",
      badge: "Master's Thesis · 6 Months",
      role: "Computer Vision & Model Optimization",
      metric: "-30% Latency",
      metricDesc: "Intel OpenVINO Speedup",
      summary:
        "End-to-end computer vision verification pipeline engineered in PyCharm. Preprocesses incoming video streams via OpenCV, trains custom deep learning models with PyTorch, and optimizes deployment latency by 30% through Intel OpenVINO runtime quantization.",
      highlights: [
        "Architected end-to-end computer vision pipeline (OpenCV preprocessing ➔ PyTorch model training & evaluation).",
        "Quantized and converted neural models through Intel OpenVINO toolkit, achieving a 30% inference speedup.",
        "Containerized preprocessing and model serving into lightweight, portable Docker runtimes."
      ],
      stack: ["Python", "PyTorch", "OpenCV", "Intel OpenVINO", "Docker", "PyCharm"],
      repos: []
    },
    {
      id: "scraping-engine",
      title: "Multi-Platform Scraping & Ingestion Engine",
      badge: "Production Data Architecture",
      role: "Python Automation & Cloud Pipelines",
      metric: "2K–4K Records",
      metricDesc: "Harvested per Run",
      summary:
        "High-throughput automated data harvesting infrastructure. Deploys custom Python Selenium scrapers as cloud Apify Actors with automated cron triggers, Make.com JSON validation, and direct PostgreSQL relational database storage.",
      highlights: [
        "Deployed custom Python Selenium scrapers as cloud Apify Actors with dynamic pagination & anti-bot bypass.",
        "Engineered Make.com scenarios with JSON transformation logic to parse, clean, and validate payloads.",
        "Wired storage directly into PostgreSQL relational databases to power analytical dashboards."
      ],
      stack: ["Python", "Selenium WebDriver", "Apify REST API", "Make.com", "PostgreSQL"],
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
    <section id="work" className="px-6 py-20 md:px-10 lg:pl-24 max-w-6xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-charcoal pb-6">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-amber" />
            <span className="font-mono text-xs tracking-widest text-amber font-semibold uppercase">
              Selected Case Studies
            </span>
          </div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-bone">
            Production Implementations
          </h2>
        </div>
        <p className="font-body text-sm text-ash max-w-md">
          Production systems holding up outside a notebook: deep learning inference optimization, cloud scraping, and distributed data caching.
        </p>
      </div>

      {/* Case Study Cards */}
      <div className="grid grid-cols-1 gap-8">
        {caseStudies.map((study) => (
          <article
            key={study.id}
            className="rounded-2xl border border-charcoal bg-charcoal/80 p-8 sm:p-10 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-amber/60 hover:shadow-amber-sm space-y-6"
          >
            {/* Card Header Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-amber/15 border border-amber/30 px-3 py-1 font-mono text-xs font-semibold text-amber">
                  {study.badge}
                </span>
                <span className="rounded-full bg-graphite border border-charcoal px-3 py-1 font-mono text-xs text-ash">
                  {study.role}
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-lg border border-charcoal bg-graphite px-3 py-1 font-mono text-xs">
                <span className="text-amber font-bold tabular">{study.metric}</span>
                <span className="text-ash-dark">{study.metricDesc}</span>
              </div>
            </div>

            {/* Title & Summary */}
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-bone">
                {study.title}
              </h3>
              <p className="mt-3 font-body text-base text-ash leading-relaxed">
                {study.summary}
              </p>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-2.5 pt-2">
              {study.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 font-body text-sm text-ash">
                  <CheckCircle2 size={16} className="text-amber shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* Footer Tech Stack & Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-charcoal/80 pt-6">
              <div className="flex flex-wrap gap-2">
                {study.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-charcoal bg-graphite px-3 py-1 font-mono text-xs text-ash"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div>
                {study.repos.length > 0 ? (
                  <div className="flex flex-wrap gap-3">
                    {study.repos.map((repo) => (
                      <a
                        key={repo.url}
                        href={repo.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-amber/40 bg-amber/10 px-4 py-2 font-mono text-xs font-semibold text-amber hover:bg-amber hover:text-graphite transition-all"
                      >
                        <Code2 size={14} />
                        {repo.label}
                        <ExternalLink size={12} />
                      </a>
                    ))}
                  </div>
                ) : (
                  <span className="font-mono text-[11px] text-ash-dark tracking-wider">
                    PROPRIETARY / MASTER&apos;S THESIS ARCHITECTURE
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

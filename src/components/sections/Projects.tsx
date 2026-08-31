"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { ExternalLink, Sparkles, CheckCircle2, Play, Code2 } from "lucide-react";

export function Projects() {
  const [activeSimulation, setActiveSimulation] = useState<string | null>(null);

  const triggerSim = (slug: string) => {
    setActiveSimulation(slug);
    setTimeout(() => {
      setActiveSimulation(null);
    }, 2500);
  };

  return (
    <section id="work" className="border-t border-line/60 px-6 py-24 md:px-10 lg:pl-24">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-line pb-6">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-signal" />
              <span className="font-data text-xs tracking-widest text-signal font-semibold uppercase">
                Featured Engineering Systems
              </span>
            </div>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-text">
              Key Projects & Pipelines
            </h2>
          </div>
          <p className="font-body text-sm text-text-muted max-w-md">
            Production-grade implementations spanning computer vision inference optimization, high-scale data scraping, and multi-app automations.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-10">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="rounded-2xl border border-line/80 bg-panel/85 p-6 sm:p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-signal/70 hover:shadow-2xl grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center"
            >
              {/* Left Column: Details */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-signal/15 border border-signal/30 px-3 py-1 font-data text-xs font-semibold text-signal">
                    {project.durationBadge}
                  </span>
                  <span className="rounded-full bg-panel-raised border border-line px-3 py-1 font-data text-xs text-text-faint">
                    {project.period}
                  </span>
                  <span className="rounded-full bg-verify/10 border border-verify/30 px-3 py-1 font-data text-xs text-verify font-medium">
                    {project.metrics.value}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-text">
                  {project.title}
                </h3>

                <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
                  {project.summary}
                </p>

                <ul className="space-y-2 pt-1">
                  {project.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 font-body text-xs sm:text-sm text-text-muted">
                      <CheckCircle2 size={15} className="text-verify shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-line bg-ink/70 px-2.5 py-1 font-data text-[11px] text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Repos & Proofs */}
                <div className="pt-2">
                  {project.repos.length > 0 ? (
                    <div className="flex flex-wrap gap-3">
                      {project.repos.map((repo) => (
                        <a
                          key={repo.url}
                          href={repo.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-signal/40 bg-signal/10 px-3.5 py-2 font-body text-xs font-semibold text-signal hover:bg-signal hover:text-ink transition-all"
                        >
                          <Code2 size={14} />
                          {repo.label}
                          <ExternalLink size={12} />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <span className="font-data text-[11px] text-text-faint tracking-wider">
                      CLIENT / MASTER&apos;S THESIS IP · NO PUBLIC REPO
                    </span>
                  )}
                </div>
              </div>

              {/* Right Column: Interactive Diagram / Visual Preview */}
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-line bg-panel-raised shadow-inner relative group flex items-center justify-center">
                <ProjectVisual variant={project.visual} />

                {/* Live simulation overlay trigger */}
                <div className="absolute inset-0 bg-ink/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4">
                  <button
                    onClick={() => triggerSim(project.slug)}
                    className="inline-flex items-center gap-2 rounded-xl bg-signal px-5 py-2.5 font-body text-xs font-bold text-ink shadow-lg transition-transform hover:scale-105 active:scale-95"
                  >
                    <Play size={14} />
                    {activeSimulation === project.slug ? "Executing Simulation..." : "Simulate Flow"}
                  </button>
                  <span className="font-data text-[10px] text-text-muted">
                    {project.category}
                  </span>
                </div>

                {activeSimulation === project.slug && (
                  <div className="absolute bottom-3 inset-x-3 rounded bg-ink/90 border border-verify p-2 font-data text-xs text-verify text-center animate-pulse">
                    ✔ Simulation active: verifying pipeline nodes...
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

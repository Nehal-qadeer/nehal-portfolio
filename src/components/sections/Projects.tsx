"use client";

import { projects } from "@/data/projects";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { useSandboxStore } from "@/hooks/useSandboxStore";
import { Cpu, Database, Workflow, Play, ExternalLink } from "lucide-react";

export function Projects() {
  const { setMode, triggerBurst } = useSandboxStore();

  const handleSimulate = (slug: string) => {
    if (slug === "object-verification") {
      setMode("cv_vision");
    } else if (slug === "scraping-engine") {
      setMode("data_pipeline");
    } else {
      setMode("workflow_automation");
    }
    triggerBurst();
  };

  return (
    <section id="work" className="border-t border-line/60 px-6 py-28 md:px-10 lg:pl-24">
      <div className="rounded-2xl border border-line/60 bg-panel/85 p-8 md:p-12 shadow-2xl backdrop-blur-xl">
        <div className="border-b border-line pb-6">
          <span className="font-data text-xs tracking-widest text-signal font-semibold">ENGINEERING PROJECTS</span>
          <h2 className="mt-2 font-display text-display-2 font-bold text-text">Selected Systems & Pipelines</h2>
          <p className="mt-4 max-w-prose font-body text-text-muted">
            Three key engineering accomplishments: deep learning computer vision model optimization (OpenVINO), high-throughput cloud scraping pipelines (Selenium & Apify), and multi-app workflow automation (Zapier & OAuth).
          </p>
        </div>

        <div className="mt-8 divide-y divide-line/70">
          {projects.map((project) => (
            <article key={project.slug} className="grid lg:grid-cols-2 gap-8 py-12 first:pt-4 last:pb-0 items-center">
              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-line bg-panel-raised shadow-md relative group">
                <ProjectVisual variant={project.visual} />
                <button
                  onClick={() => handleSimulate(project.slug)}
                  className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-lg bg-signal/90 hover:bg-signal px-3 py-1.5 font-data text-xs font-semibold text-ink shadow-lg transition-transform group-hover:scale-105 active:scale-95"
                >
                  <Play size={12} />
                  Run Live Simulation
                </button>
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex items-center justify-between">
                  <p className="font-data text-xs tracking-widest text-text-faint">{project.period}</p>
                  <span className="rounded-full bg-verify/10 border border-verify/30 px-2.5 py-0.5 font-data text-[10px] text-verify font-medium">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="mt-3 font-display text-2xl font-bold text-text md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-prose font-body text-text-muted">{project.summary}</p>

                <ul className="mt-5 space-y-2">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 font-body text-sm leading-relaxed text-text-muted">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-signal shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-line bg-panel-raised px-2.5 py-1 font-data text-[10px] text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  {project.repos.length > 0 ? (
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      {project.repos.map((repo) => (
                        <a
                          key={repo.url}
                          href={repo.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 border-b border-signal/40 font-body text-sm font-medium text-signal transition-colors duration-300 hover:border-signal"
                        >
                          <ExternalLink size={13} />
                          {repo.label}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="font-data text-[11px] tracking-widest text-text-faint">
                      MASTER&apos;S THESIS / CLIENT IP — NO PUBLIC REPO
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

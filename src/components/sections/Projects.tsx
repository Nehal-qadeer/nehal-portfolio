"use client";

import { projects } from "@/data/projects";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { useSandboxStore } from "@/hooks/useSandboxStore";
import { Layers, Move3d } from "lucide-react";

export function Projects() {
  const { setActiveComponent, setExplosionProgress, setRenderMode, setCameraPreset } = useSandboxStore();

  const handleInspect = (slug: string) => {
    setExplosionProgress(0.85, true);
    if (slug === "object-verification") {
      setActiveComponent("optics");
      setRenderMode("exploded");
      setCameraPreset("front");
    } else if (slug === "scraping-engine") {
      setActiveComponent("core");
      setRenderMode("xray");
      setCameraPreset("core");
    } else if (slug === "satellite-tracking") {
      setActiveComponent("chassis");
      setRenderMode("lidar");
      setCameraPreset("iso");
    } else {
      setActiveComponent("radiator");
      setRenderMode("standard");
      setCameraPreset("top");
    }
  };

  return (
    <section id="work" className="border-t border-line/60 px-6 py-28 md:px-10 lg:pl-24">
      <div className="rounded-2xl border border-line/60 bg-panel/80 p-8 md:p-12 shadow-2xl backdrop-blur-xl">
        <div className="border-b border-line pb-6">
          <span className="font-data text-xs tracking-widest text-signal font-semibold">ENGINEERING PORTFOLIO</span>
          <h2 className="mt-2 font-display text-display-2 font-medium text-text">Selected work</h2>
          <p className="mt-4 max-w-prose font-body text-text-muted">
            Four production systems: optimizing computer vision inference with OpenVINO, building cloud scraping pipelines,
            multi-app workflow automation, and real-time distributed state tracking.
          </p>
        </div>

        <div className="mt-8 divide-y divide-line/70">
          {projects.map((project) => (
            <article key={project.slug} className="grid lg:grid-cols-2 gap-8 py-12 first:pt-4 last:pb-0 items-center">
              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-line bg-panel-raised shadow-md">
                <ProjectVisual variant={project.visual} />
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex items-center justify-between">
                  <p className="font-data text-xs tracking-widest text-text-faint">{project.period}</p>
                  <button
                    onClick={() => handleInspect(project.slug)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-signal/40 bg-signal/10 px-3 py-1 font-data text-[10px] text-signal font-medium hover:bg-signal hover:text-ink transition-all"
                  >
                    <Move3d size={12} />
                    Inspect in 3D
                  </button>
                </div>
                
                <h3 className="mt-3 font-display text-2xl font-medium text-text md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-prose font-body text-text-muted">{project.summary}</p>

                <ul className="mt-5 space-y-2">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 font-body text-sm leading-relaxed text-text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-signal shrink-0" />
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
                          className="border-b border-signal/40 font-body text-sm text-signal transition-colors duration-300 hover:border-signal"
                        >
                          {repo.label} ↗
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="font-data text-[11px] tracking-widest text-text-faint">
                      PRIVATE / CLIENT WORK — NO PUBLIC REPO
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

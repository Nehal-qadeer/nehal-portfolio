import { projects } from "@/data/projects";
import { ProjectVisual } from "@/components/ui/ProjectVisual";

export function Projects() {
  return (
    <section id="work" className="border-t border-line">
      <div className="px-6 py-28 md:px-10 lg:pl-24">
        <h2 className="font-display text-display-2 font-medium text-text">Selected work</h2>
        <p className="mt-4 max-w-prose font-body text-text-muted">
          Four systems, four different problems: verifying what a model sees, keeping scrapers
          fed, wiring apps together without touching them by hand, and tracking something that
          moves in real time.
        </p>
      </div>

      <div className="divide-y divide-line border-t border-line">
        {projects.map((project) => (
          <article key={project.slug} className="grid lg:grid-cols-2">
            <div className="aspect-[4/3] lg:aspect-auto">
              <ProjectVisual variant={project.visual} />
            </div>

            <div className="flex flex-col justify-center px-6 py-14 md:px-10 lg:px-14">
              <p className="font-data text-xs tracking-widest text-text-faint">{project.period}</p>
              <h3 className="mt-3 font-display text-2xl font-medium text-text md:text-3xl">
                {project.title}
              </h3>
              <p className="mt-4 max-w-prose font-body text-text-muted">{project.summary}</p>

              <ul className="mt-6 space-y-2">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="font-body text-sm leading-relaxed text-text-muted">
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-data text-[11px] text-text-faint">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="mt-8">
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
                        {repo.label}
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
    </section>
  );
}

import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="border-t border-line px-6 py-28 md:px-10 lg:pl-24">
      <h2 className="font-display text-display-2 font-medium text-text">How I got here</h2>

      <div className="mt-16 space-y-0">
        {experience.map((entry) => (
          <div
            key={entry.role}
            className="grid grid-cols-[3.5rem_1px_1fr] gap-x-6 pb-14 last:pb-0 md:grid-cols-[8rem_1px_1fr] md:gap-x-10"
          >
            <div className="pt-1 font-data text-xs tabular text-text-faint">{entry.period}</div>

            <div className="relative flex justify-center">
              <div className="w-px flex-1 bg-line" />
              <span className="absolute top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-signal" />
            </div>

            <div>
              <h3 className="font-display text-xl font-medium text-text md:text-2xl">
                {entry.role}
              </h3>
              <p className="mt-1 font-body text-sm text-text-muted">
                {entry.org} · {entry.focus}
              </p>
              <ul className="mt-4 max-w-2xl space-y-2">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="font-body text-sm leading-relaxed text-text-muted md:text-base">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

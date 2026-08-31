import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="border-t border-line px-6 py-28 md:px-10 lg:pl-24">
      <h2 className="font-display text-display-2 font-medium text-text">Education</h2>

      <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2">
        {education.map((entry) => (
          <div key={entry.degree} className="bg-ink p-8">
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-data text-xs tracking-widest text-text-faint">{entry.period}</p>
              <p className="font-data text-xs tabular text-verify">GRADE {entry.grade}</p>
            </div>
            <h3 className="mt-4 font-display text-xl font-medium text-text">{entry.degree}</h3>
            <p className="mt-1 font-body text-sm text-text-muted">{entry.school}</p>
            <p className="mt-4 font-body text-sm leading-relaxed text-text-muted">{entry.focus}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

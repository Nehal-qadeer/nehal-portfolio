import { stackGroups } from "@/data/stack";

export function Stack() {
  return (
    <section id="stack" className="border-t border-line px-6 py-28 md:px-10 lg:pl-24">
      <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
        <h2 className="font-display text-display-2 font-medium text-text">What I actually reach for</h2>
        <p className="font-data text-xs tracking-widest text-text-faint">
          {stackGroups.reduce((n, g) => n + g.items.length, 0)} TOOLS · 6 DOMAINS
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {stackGroups.map((group) => (
          <div key={group.label} className="bg-ink p-7">
            <p className="font-data text-[11px] tracking-widest text-signal">
              {group.label.toUpperCase()}
            </p>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="font-body text-sm text-text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

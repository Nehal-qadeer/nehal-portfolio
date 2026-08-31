import { CanvasWrapper } from "@/components/canvas/CanvasWrapper";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-end overflow-hidden bg-ink">
      <CanvasWrapper />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

      <div className="relative z-10 w-full px-6 pb-24 pt-40 md:px-10 lg:pl-24">
        <div className="mb-6 flex items-center gap-3 font-data text-xs tracking-widest text-verify">
          <span className="h-1.5 w-1.5 rounded-full bg-verify" />
          SYSTEM · VERIFIED
        </div>

        <h1 className="font-display text-display-1 font-medium text-text">
          {profile.name}
        </h1>

        <p className="mt-4 max-w-xl font-body text-lg text-text-muted md:text-xl">
          {profile.summary}
        </p>

        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-6">
          {profile.readouts.map((readout) => (
            <div key={readout.label}>
              <div className="font-data text-2xl tabular text-signal">{readout.value}</div>
              <div className="mt-1 font-body text-xs text-text-faint">
                {readout.label} · {readout.unit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

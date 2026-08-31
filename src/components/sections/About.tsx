import Image from "next/image";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="border-t border-line px-6 py-28 md:px-10 lg:pl-24">
      <div className="grid gap-16 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-24">
        <div className="relative mx-auto w-full max-w-xs lg:mx-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-line bg-panel">
            <Image
              src="/images/headshot.jpg"
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="(min-width: 1024px) 22rem, 80vw"
              className="object-cover grayscale [filter:contrast(1.05)]"
              priority={false}
            />
            {/* corner brackets — verification-frame motif, matches hero scan object */}
            <span className="absolute left-3 top-3 h-5 w-5 border-l border-t border-signal/70" />
            <span className="absolute right-3 top-3 h-5 w-5 border-r border-t border-signal/70" />
            <span className="absolute bottom-3 left-3 h-5 w-5 border-b border-l border-signal/70" />
            <span className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-signal/70" />
          </div>
          <div className="mt-4 flex items-center justify-between font-data text-[11px] tracking-widest text-text-faint">
            <span>MANNHEIM, DE</span>
            <span className="text-verify">MATCH · 99.2%</span>
          </div>
        </div>

        <div className="max-w-2xl">
          <p className="font-data text-xs tracking-widest text-text-faint">ABOUT</p>
          <h2 className="mt-4 font-display text-display-2 font-medium text-text">
            {profile.tagline}
          </h2>

          <div className="mt-8 space-y-5 font-body text-base leading-relaxed text-text-muted md:text-lg">
            <p>
              I finished an M.Sc. in Applied Computer Science at SRH Heidelberg in 2025, but the
              interesting part happened around the degree, not just in it: production incident
              diagnostics on live databases, sprint coordination between product and engineering,
              and — most recently — building the computer vision and automation systems that
              turned all of that into a specialty.
            </p>
            <p>
              My thesis pushed a full CV pipeline through Intel OpenVINO for a 30% inference
              speedup, and the same instinct for making things actually run in production —
              not just in a notebook — shows up in the scraping engines and workflow automations
              I build now. I like systems that talk to each other correctly the first time.
            </p>
            <p>
              English fluent, German at A2 and climbing. Based in Mannheim, open to remote and
              on-site work across the EU.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

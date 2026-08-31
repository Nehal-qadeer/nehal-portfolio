"use client";

import Image from "next/image";
import { profile } from "@/data/profile";
import { useSandboxStore } from "@/hooks/useSandboxStore";

export function About() {
  const { setActiveComponent } = useSandboxStore();

  return (
    <section id="about" className="border-t border-line/60 px-6 py-28 md:px-10 lg:pl-24">
      <div className="rounded-2xl border border-line/60 bg-panel/80 p-8 md:p-12 shadow-2xl backdrop-blur-xl">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-20 items-center">
          <div className="relative mx-auto w-full max-w-xs lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line bg-panel-raised shadow-inner">
              <Image
                src="/images/headshot.jpg"
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="(min-width: 1024px) 20rem, 80vw"
                className="object-cover grayscale [filter:contrast(1.05)] hover:grayscale-0 transition-all duration-500"
                priority={false}
              />
              {/* corner brackets */}
              <span className="absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-signal" />
              <span className="absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-signal" />
              <span className="absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-signal" />
              <span className="absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-signal" />
            </div>
            <div className="mt-4 flex items-center justify-between font-data text-[11px] tracking-widest text-text-faint">
              <span>{profile.location.toUpperCase()}</span>
              <span className="text-verify font-semibold">MATCH · 99.2%</span>
            </div>
          </div>

          <div className="max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              <p className="font-data text-xs tracking-widest text-signal font-semibold">PROFILE & FOCUS</p>
            </div>
            <h2 className="mt-4 font-display text-display-2 font-medium text-text leading-tight">
              {profile.tagline}
            </h2>

            <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-text-muted md:text-lg">
              <p>
                I finished an M.Sc. in Applied Computer Science at SRH Heidelberg in 2025, specializing in
                computer vision optimization, distributed backends, and autonomous data pipelines that run reliably in production.
              </p>
              <p>
                My thesis pushed a full CV pipeline through Intel OpenVINO for a 30% inference speedup.
                I engineer systems that connect seamlessly across computer vision models, cloud databases, and multi-stage workflow automations.
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveComponent("optics")}
                  className="rounded-md border border-line bg-panel-raised px-3 py-1 font-data text-xs text-text hover:border-signal hover:text-signal transition-colors"
                >
                  Inspect Optical Pipeline ↗
                </button>
                <button
                  onClick={() => setActiveComponent("core")}
                  className="rounded-md border border-line bg-panel-raised px-3 py-1 font-data text-xs text-text hover:border-signal hover:text-signal transition-colors"
                >
                  Inspect OpenVINO TPU ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

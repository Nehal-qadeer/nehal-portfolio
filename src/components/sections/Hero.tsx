import dynamic from "next/dynamic";
import Image from "next/image";
import { profile } from "@/data/profile";
import { MapPin, ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { DotPattern } from "@/components/magicui/DotPattern";

const AgentNetwork = dynamic(() => import("@/components/ui/AgentNetwork"), {
  ssr: false,
  loading: () => (
    <div className="w-full rounded-2xl border border-line bg-surface p-6 shadow-blueprint h-[460px] flex items-center justify-center">
      <div className="font-mono text-xs text-signal animate-pulse">Loading Agent Network...</div>
    </div>
  ),
});

export function Hero() {
  return (
    <header className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      {/* Background Dot Pattern */}
      <DotPattern className="opacity-35" />

      {/* Technical Blueprint Crosshairs & Coordinates */}
      <span className="crosshair top-6 left-6 md:top-8 md:left-10" />
      <span className="coord top-4 left-12 md:top-6 md:left-16">
        49.4875°N 8.4660°E · MANNHEIM_DE
      </span>

      <div className="max-w-[1040px] mx-auto px-6 md:px-10 relative">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-center">
          {/* Left Column: Bio & Identity */}
          <div className="space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-teal bg-teal/10 border border-teal/30 px-3 py-1 rounded-full tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse-blip" />
              OPEN TO AI &amp; AUTOMATION ROLES · GERMANY / REMOTE EU
            </div>

            <div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight leading-[1.04]">
                Nehal Qadeer
              </h1>
              <div className="mt-2 font-mono text-sm sm:text-base text-signal font-medium flex items-center gap-1.5 min-h-[24px]">
                <span>AI &amp; Automation Engineer · Python · GenAI</span>
                <span className="inline-block w-2 h-4 bg-signal animate-cursor-blink" />
              </div>
            </div>

            <p className="font-body text-base text-ink-soft leading-relaxed max-w-xl">
              M.Sc. Applied Computer Science graduate (SRH Heidelberg, 2025). I build GenAI applications, AI agents and automations in Python: a multi-agent RAG assistant for regulated environments, real-time computer vision that runs at 25+ FPS on ordinary laptop CPUs, and data pipelines that load thousands of records per run.
            </p>

            {/* High-Resolution Portrait Card */}
            <div className="flex items-center gap-4 rounded-xl border border-line bg-surface p-3.5 shadow-blueprint max-w-sm">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-line-strong bg-bg group">
                <Image
                  src="/images/nehal-portrait.jpg"
                  alt="Portrait of Nehal Qadeer"
                  fill
                  sizes="64px"
                  className="object-cover"
                  priority
                />
                {/* Micro Reticles */}
                <span className="absolute top-0.5 left-0.5 w-1.5 h-1.5 border-l border-t border-signal" />
                <span className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 border-r border-b border-signal" />
              </div>

              <div className="space-y-0.5 text-xs font-mono">
                <div className="font-bold text-ink flex items-center gap-1">
                  Nehal Qadeer
                  <span className="text-teal font-normal text-[10px]">· Grade 2.2</span>
                </div>
                <div className="text-ink-soft text-[11px]">M.Sc. Applied CS · 2025</div>
                <div className="text-signal text-[10px] flex items-center gap-1">
                  <MapPin size={10} /> Mannheim, Germany
                </div>
              </div>
            </div>

            {/* Action CTA Row */}
            <div className="flex flex-wrap items-center gap-3 pt-1 font-mono text-xs">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded bg-ink px-5 py-3 text-bg font-semibold transition-all hover:bg-signal hover:shadow-glow hover:-translate-y-0.5"
              >
                View projects
                <ArrowRight size={13} />
              </a>

              <a
                href="/Nehal_Qadeer_CV.pdf"
                download
                className="inline-flex items-center gap-1.5 rounded border border-ink px-4 py-3 text-ink font-medium hover:border-signal hover:text-signal hover:-translate-y-0.5 transition-all"
              >
                <Download size={14} />
                Download CV
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded border border-ink px-4 py-3 text-ink font-medium hover:border-signal hover:text-signal hover:-translate-y-0.5 transition-all"
              >
                <Mail size={13} />
                Get in touch
              </a>

              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded border border-line-strong px-3.5 py-3 text-ink-soft hover:border-signal hover:text-signal transition-all"
              >
                <Github size={13} />
                GitHub
              </a>

              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded border border-line-strong px-3.5 py-3 text-ink-soft hover:border-signal hover:text-signal transition-all"
              >
                <Linkedin size={13} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column: 3D Agent Network */}
          <div className="w-full flex items-center justify-center">
            <AgentNetwork />
          </div>
        </div>
      </div>
    </header>
  );
}

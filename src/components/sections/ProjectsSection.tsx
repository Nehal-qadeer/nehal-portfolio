"use client";

import { useState } from "react";
import { ExternalLink, Code2, Sparkles, Gamepad2, Eye, Terminal, CheckCircle2, RefreshCw } from "lucide-react";

export function ProjectsSection() {
  const [isSimulating, setIsSimulating] = useState(false);
  const [detectedObj, setDetectedObj] = useState<{ name: string; conf: number; fps: number; latency: string }>({
    name: "LAPTOP",
    conf: 99.2,
    fps: 28.4,
    latency: "11.6ms"
  });

  const sampleObjects = [
    { name: "LAPTOP", conf: 99.2, fps: 28.4, latency: "11.6ms" },
    { name: "NOTEBOOK", conf: 98.7, fps: 29.1, latency: "10.8ms" },
    { name: "COFFEE MUG", conf: 99.5, fps: 27.8, latency: "12.1ms" },
    { name: "BACKPACK", conf: 97.9, fps: 28.2, latency: "11.4ms" },
    { name: "WALL CLOCK", conf: 99.0, fps: 29.5, latency: "10.5ms" }
  ];

  const handleSimulate = () => {
    setIsSimulating(true);
    setTimeout(() => {
      const next = sampleObjects[Math.floor(Math.random() * sampleObjects.length)]!;
      setDetectedObj(next);
      setIsSimulating(false);
    }, 500);
  };

  return (
    <section id="projects" className="py-20 border-t border-line relative overflow-hidden">
      {/* Decorative Dots */}
      <span className="absolute top-20 left-[4%] w-1.5 h-1.5 rounded-full bg-teal shadow-[0_0_0_3px_rgba(47,158,143,0.15)] animate-pulse" />
      <span className="absolute bottom-16 right-[7%] w-1.5 h-1.5 rounded-full bg-signal shadow-[0_0_0_3px_rgba(43,108,176,0.15)] animate-pulse" />

      <div className="max-w-[1040px] mx-auto px-6 md:px-10 space-y-12">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal font-semibold mb-3">
            <span className="w-4 h-px bg-signal" />
            03 — Projects
          </div>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink tracking-tight">
            Things I&apos;ve shipped
          </h2>
        </div>

        {/* FEATURED: Master's Thesis Project Spotlight Card */}
        <div className="rounded-xl border border-line-strong bg-surface p-7 sm:p-10 shadow-blueprint-lg relative overflow-hidden space-y-8">
          {/* Top Line Gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-signal via-teal to-amber" />

          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-5">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 rounded bg-signal-dim px-2.5 py-1 font-mono text-xs font-semibold text-signal">
                <Gamepad2 size={13} />
                MASTER&apos;S THESIS PROJECT · SRH HEIDELBERG
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink mt-2">
                🎮 Object Detection Game for Hearing-Impaired Children
              </h3>
              <p className="font-body text-sm sm:text-base text-signal font-medium">
                An interactive educational tool using AI to bridge the communication gap through visual recognition.
              </p>
            </div>

            <div className="font-mono text-xs text-right">
              <span className="inline-block rounded border border-teal/40 bg-teal/10 px-3 py-1.5 text-teal font-bold text-sm tabular">
                25+ FPS on CPU
              </span>
              <div className="text-[11px] text-ink-soft mt-0.5">Intel OpenVINO Quantized</div>
            </div>
          </div>

          {/* Project Purpose Statement */}
          <div className="rounded-lg border border-line bg-bg p-5 space-y-2">
            <div className="font-mono text-xs font-bold text-ink uppercase flex items-center gap-2">
              <Sparkles size={14} className="text-amber" />
              Project Purpose
            </div>
            <p className="font-body text-sm text-ink-soft leading-relaxed">
              This project was developed to help children with hearing impairments learn and identify objects in their surroundings through an engaging <strong className="text-ink font-semibold">&quot;Detection Game.&quot;</strong> Unlike standard detection tools, this is built as an interactive game where the AI scans the live webcam feed, identifies objects based on trained neural models, and displays the names in a large, easy-to-read font to provide immediate visual reinforcement for users who cannot rely on audio cues.
            </p>
          </div>

          {/* Technical Features & Live Mini Simulator */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Technical Features & Game Loop */}
            <div className="space-y-4 font-body text-sm text-ink-soft">
              <div className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
                Technical Highlights
              </div>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-teal shrink-0 mt-0.5" />
                  <span><strong className="text-ink">Live Detection:</strong> Real-time object recognition using custom YOLOv8 model.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-teal shrink-0 mt-0.5" />
                  <span><strong className="text-ink">CPU Optimized:</strong> Integrated with Intel OpenVINO Toolkit to ensure 25+ FPS on standard laptops without a GPU.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-teal shrink-0 mt-0.5" />
                  <span><strong className="text-ink">Interactive UI:</strong> Accessible desktop interface built with PyQt6 and OpenCV.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-teal shrink-0 mt-0.5" />
                  <span><strong className="text-ink">Visual Reinforcement:</strong> Instant large labels upon detection for visual-first learning.</span>
                </li>
              </ul>

              {/* Step-by-step game loop */}
              <div className="pt-2">
                <div className="font-mono text-[11px] font-bold text-ink uppercase mb-2">How the Game Works:</div>
                <div className="space-y-1.5 font-mono text-xs text-ink-soft">
                  <div><strong className="text-signal">Step 1:</strong> Child points camera at surrounding object.</div>
                  <div><strong className="text-signal">Step 2:</strong> AI detects object from trained neural library.</div>
                  <div><strong className="text-signal">Step 3:</strong> Game &quot;captures&quot; object & displays name in large font.</div>
                </div>
              </div>
            </div>

            {/* Right: Live Interactive Mini Viewport */}
            <div className="rounded-xl border border-line bg-ink p-5 space-y-3 shadow-lg select-none text-white">
              <div className="flex items-center justify-between border-b border-white/15 pb-2.5 font-mono text-xs">
                <span className="flex items-center gap-1.5 text-amber font-semibold">
                  <Eye size={13} />
                  PyQt6 Viewport
                </span>
                <span className="text-[11px] text-white/70">YOLOv8 + OpenVINO</span>
              </div>

              {/* Viewport Screen */}
              <div className="aspect-[16/10] rounded-lg bg-[#0F1829] border border-white/10 relative flex flex-col items-center justify-center p-4">
                {/* Laser scan line */}
                <div className="absolute inset-x-0 top-1/2 h-0.5 bg-teal shadow-[0_0_8px_rgba(47,158,143,0.8)]" />

                <div className="text-center space-y-1.5 z-10">
                  <div className="inline-block rounded-md bg-amber px-5 py-1.5 text-ink font-display text-xl sm:text-2xl font-bold tracking-wide shadow-md">
                    {detectedObj.name}
                  </div>
                  <div className="font-mono text-[11px] text-white/70 flex items-center justify-center gap-2">
                    <span className="text-teal font-semibold">{detectedObj.fps} FPS</span>
                    <span>·</span>
                    <span>{detectedObj.latency}</span>
                    <span>·</span>
                    <span className="text-amber">{detectedObj.conf}% Conf</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={handleSimulate}
                  disabled={isSimulating}
                  className="inline-flex items-center gap-1.5 rounded bg-teal px-3.5 py-1.5 font-mono text-xs font-bold text-white hover:bg-teal/90 transition-all active:scale-95 disabled:opacity-50"
                >
                  <RefreshCw size={12} className={isSimulating ? "animate-spin" : ""} />
                  {isSimulating ? "Detecting..." : "Simulate Detection"}
                </button>
                <span className="font-mono text-[10px] text-white/60">Real-Time CPU Inference</span>
              </div>
            </div>
          </div>

          {/* Repo Architecture & Command */}
          <div className="border-t border-line pt-5 grid sm:grid-cols-2 gap-4 font-mono text-xs">
            <div>
              <span className="font-bold text-ink block mb-1">Architecture:</span>
              <div className="text-ink-soft space-y-0.5 text-[11px]">
                <div><strong className="text-signal">/Object-Detector :</strong> Core CV logic & inference pipeline</div>
                <div><strong className="text-signal">/frontend :</strong> Accessible desktop UI in PyQt6</div>
                <div><strong className="text-signal">/models :</strong> Trained YOLOv8 weights & OpenVINO IR files</div>
              </div>
            </div>

            <div>
              <span className="font-bold text-ink block mb-1">Requirements & Command:</span>
              <div className="rounded border border-line bg-bg p-2.5 text-signal select-all text-[11px]">
                <code>pip install opencv-python ultralytics openvino pyqt6</code>
              </div>
            </div>
          </div>

          {/* Tag Row */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-line/60">
            {["Python 3.10+", "Ultralytics YOLOv8", "Intel OpenVINO Toolkit", "PyQt6", "OpenCV", "25+ FPS CPU Optimization"].map((t) => (
              <span key={t} className="rounded bg-signal-dim px-2.5 py-1 font-mono text-[11px] text-signal font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Additional Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Project 2: Scraping & Ingestion */}
          <article className="rounded-xl border border-line bg-surface p-7 shadow-blueprint relative overflow-hidden transition-all duration-300 hover:border-signal hover:-translate-y-1 hover:shadow-blueprint-lg flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs font-semibold text-signal uppercase tracking-wider">
                  Production Data Pipeline
                </span>
                <span className="font-mono text-xs text-ink-soft">2025–26</span>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl text-ink">
                  Multi-Platform Scraping & Ingestion Engine
                </h3>
                <p className="mt-2.5 font-body text-sm text-ink-soft leading-relaxed">
                  Python and Selenium scrapers deployed as cloud Apify Actors with dynamic pagination and anti-bot bypass. Automated Make.com JSON validation transforms messy payloads before direct ingestion into PostgreSQL relational databases.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href="https://github.com/Nehal-qadeer/Booking-Automation-Selenium"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1 font-mono text-xs text-signal hover:underline font-semibold"
                >
                  <Code2 size={12} />
                  Booking.com Scraper
                  <ExternalLink size={10} />
                </a>
                <span className="text-line-strong">·</span>
                <a
                  href="https://github.com/Nehal-qadeer/Yell-Business-Data-Extractor"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1 font-mono text-xs text-signal hover:underline font-semibold"
                >
                  <Code2 size={12} />
                  Lead-Gen Extractor
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-line">
              {["Python 3", "Selenium", "Apify API", "Make.com", "PostgreSQL", "JSON"].map((tag) => (
                <span key={tag} className="rounded bg-signal-dim px-2 py-0.5 font-mono text-[10.5px] text-signal">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Project 3: Automated Multi-Tier Tracker & Satellite Tracker */}
          <article className="rounded-xl border border-line bg-surface p-7 shadow-blueprint relative overflow-hidden transition-all duration-300 hover:border-signal hover:-translate-y-1 hover:shadow-blueprint-lg flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs font-semibold text-signal uppercase tracking-wider">
                  Full-Stack Caching & Automation
                </span>
                <span className="font-mono text-xs text-ink-soft">2026</span>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl text-ink">
                  Application Tracker & Satellite Tracking System
                </h3>
                <p className="mt-2.5 font-body text-sm text-ink-soft leading-relaxed">
                  Dual systems: A 4-step Zapier automation with OAuth webhooks (Forms ➔ Sheets ➔ Calendar ➔ Gmail) combined with a full-stack real-time Satellite Tracker built in Node.js, React, and Redis as the shared distributed state and caching layer.
                </p>
              </div>

              <div className="pt-1">
                <a
                  href="https://github.com/Nehal-qadeer/satellite-trackingsystem"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1 font-mono text-xs text-signal hover:underline font-semibold"
                >
                  <Code2 size={12} />
                  Satellite Tracking System Repo
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-line">
              {["Zapier", "OAuth 2.0", "Node.js", "React", "Redis", "Google APIs"].map((tag) => (
                <span key={tag} className="rounded bg-signal-dim px-2 py-0.5 font-mono text-[10.5px] text-signal">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

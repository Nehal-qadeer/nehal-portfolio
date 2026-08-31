"use client";

import { useState, useEffect } from "react";
import { Play, Pause, ArrowRight, RotateCcw, Sparkles, CheckCircle2, Cpu, Camera, Database, Zap, Check } from "lucide-react";

export function MorphingPipelineVisualizer() {
  const [currentStage, setCurrentStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const stages = [
    {
      id: 0,
      number: "01",
      name: "Raw Input Stream",
      short: "Ingestion",
      icon: Camera,
      badgeColor: "bg-ink-soft/15 text-ink-soft border-ink-soft/30",
      formTitle: "Raw Pixel & Web Data Matrix",
      formType: "UNSTRUCTURED_PAYLOAD",
      tech: "OpenCV Camera Stream · Selenium Scraper",
      description: "Raw webcam frames and unstructured dynamic web HTML entering the pipeline.",
      telemetry: { state: "RAW_INGEST", latency: "1.2ms", throughput: "60 FPS Video / 4K Scrapes" }
    },
    {
      id: 1,
      number: "02",
      name: "Neural Tensor Inference",
      short: "AI Inference",
      icon: Cpu,
      badgeColor: "bg-signal/15 text-signal border-signal/30",
      formTitle: "Quantized Neural Bounding Box",
      formType: "YOLOV8_OPENVINO_TENSOR",
      tech: "Ultralytics YOLOv8 · Intel OpenVINO",
      description: "Neural network detects objects in real-time, quantized to run at 25+ FPS on standard CPU.",
      telemetry: { state: "NEURAL_INFER", latency: "11.6ms", throughput: "28.4 FPS on CPU" }
    },
    {
      id: 2,
      number: "03",
      name: "Visual Entity & Schema",
      short: "Formatting",
      icon: Database,
      badgeColor: "bg-teal/15 text-teal border-teal/30",
      formTitle: "Accessible Large Label & Clean JSON",
      formType: "STRUCTURED_ENTITY",
      tech: "PyQt6 GUI · PostgreSQL Relational DB",
      description: "Morphs into large-font visual reinforcement for hearing-impaired learners and clean relational rows.",
      telemetry: { state: "SCHEMA_VALIDATED", latency: "4.1ms", throughput: "100% Data Integrity" }
    },
    {
      id: 3,
      number: "04",
      name: "Final Product & Automation",
      short: "Final Product",
      icon: Zap,
      badgeColor: "bg-amber/15 text-amber border-amber/30",
      formTitle: "🎮 Interactive Game & Cloud Actions",
      formType: "PRODUCTION_OUTCOME",
      tech: "Educational Game Loop · Make.com · Zapier",
      description: "The complete working product: instant game visual capture for the child & automated cloud sync.",
      telemetry: { state: "PRODUCTION_READY", latency: "Instantaneous", throughput: "Zero Regression" }
    }
  ];

  // Auto-play loop
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % stages.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isPlaying, stages.length]);

  const active = stages[currentStage]!;

  return (
    <div className="w-full rounded-2xl border border-line bg-surface p-5 sm:p-6 shadow-blueprint space-y-6 select-none">
      {/* Top Header with Interactive Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-teal animate-pulse-blip" />
          <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
            Live Metamorphosis Pipeline
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-[11px] font-semibold transition-all ${
              isPlaying
                ? "bg-signal-dim text-signal hover:bg-signal hover:text-white"
                : "bg-ink text-bg hover:bg-signal"
            }`}
          >
            {isPlaying ? <Pause size={12} /> : <Play size={12} />}
            {isPlaying ? "Auto Flowing" : "Paused"}
          </button>

          <button
            onClick={() => setCurrentStage((prev) => (prev + 1) % stages.length)}
            className="rounded border border-line bg-bg px-2.5 py-1 text-[11px] text-ink-soft hover:border-signal hover:text-signal transition-colors flex items-center gap-1"
          >
            Step Next <ArrowRight size={11} />
          </button>
        </div>
      </div>

      {/* 4-Stage Progress Track with Connecting Dashed Circuit */}
      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-0.5 bg-line-strong hidden sm:block" />
        <div
          className="absolute top-1/2 left-6 -translate-y-1/2 h-0.5 bg-gradient-to-r from-signal via-teal to-amber transition-all duration-700 hidden sm:block"
          style={{ width: `${(currentStage / (stages.length - 1)) * 88}%` }}
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 relative z-10">
          {stages.map((stage) => {
            const isCurrent = currentStage === stage.id;
            const isPassed = currentStage >= stage.id;
            const Icon = stage.icon;
            return (
              <button
                key={stage.id}
                onClick={() => {
                  setCurrentStage(stage.id);
                  setIsPlaying(false);
                }}
                className={`p-2.5 rounded-xl border text-left transition-all relative flex flex-col justify-between space-y-1.5 ${
                  isCurrent
                    ? "border-signal bg-signal-dim/80 ring-2 ring-signal/30 shadow-sm"
                    : isPassed
                    ? "border-line bg-surface hover:border-line-strong"
                    : "border-line/60 bg-bg opacity-75 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center font-mono text-[10px] font-bold ${
                    isCurrent ? "bg-signal text-white" : isPassed ? "bg-teal text-white" : "bg-line text-ink-soft"
                  }`}>
                    {stage.number}
                  </span>
                  <Icon size={14} className={isCurrent ? "text-signal" : "text-ink-soft"} />
                </div>
                <div className="font-display text-xs font-bold text-ink leading-tight">
                  {stage.short}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Central Transformation Chamber (Form Metamorphosis Box) */}
      <div className="rounded-xl border-2 border-dashed border-line-strong bg-bg p-5 sm:p-6 space-y-4 relative overflow-hidden transition-all">
        {/* Stage Badge & Form Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
          <div className="flex items-center gap-2">
            <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-bold ${active.badgeColor}`}>
              STAGE {active.number} FORM
            </span>
            <h4 className="font-display font-bold text-sm sm:text-base text-ink">
              {active.formTitle}
            </h4>
          </div>

          <span className="font-mono text-[11px] text-teal font-semibold">
            {active.tech}
          </span>
        </div>

        {/* Dynamic Morphing Item Representation */}
        <div className="min-h-[130px] flex items-center justify-center p-3 rounded-lg bg-surface border border-line shadow-inner relative overflow-hidden">
          {/* Stage 0 Form: Raw Matrix / Unstructured Video Frame */}
          {currentStage === 0 && (
            <div className="w-full flex flex-col items-center justify-center space-y-2 text-center animate-fadeIn">
              <div className="font-mono text-[11px] text-ink-soft bg-bg border border-line px-3 py-1.5 rounded font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>RAW_STREAM: [1920x1080x3 RGB_BUFFER]</span>
              </div>
              <div className="font-mono text-[10px] text-ink-soft/70 select-none tracking-widest">
                01001100 01000001 01010000 01010100 01001111 01010000
              </div>
              <span className="font-mono text-[10px] text-signal font-semibold">
                Capturing webcam feed &amp; extracting pixel tensors...
              </span>
            </div>
          )}

          {/* Stage 1 Form: Neural Tensor / YOLOv8 Reticle */}
          {currentStage === 1 && (
            <div className="w-full flex flex-col items-center justify-center space-y-2 text-center animate-fadeIn">
              <div className="border-2 border-signal bg-signal-dim/60 px-6 py-2 rounded-lg relative shadow-sm">
                <span className="absolute -top-2.5 left-2 bg-signal text-white font-mono text-[9px] px-1.5 py-0.5 rounded font-bold">
                  YOLOv8 + OPENVINO
                </span>
                <div className="font-display text-lg font-bold text-ink flex items-center gap-2">
                  <span>DETECTED: LAPTOP</span>
                  <span className="text-teal font-mono text-xs">99.2% Conf</span>
                </div>
              </div>
              <div className="font-mono text-[10px] text-ink-soft flex items-center gap-2">
                <span className="text-signal font-bold">Quantized INT8</span>
                <span>·</span>
                <span className="text-teal font-bold">28.4 FPS (CPU Laptop)</span>
                <span>·</span>
                <span>Latency: 11.6ms</span>
              </div>
            </div>
          )}

          {/* Stage 2 Form: Clean Visual Educational Label & Structured JSON */}
          {currentStage === 2 && (
            <div className="w-full flex flex-col items-center justify-center space-y-2 text-center animate-fadeIn">
              <div className="inline-block rounded-xl bg-amber px-8 py-2.5 shadow-md">
                <span className="font-display text-2xl font-black text-ink tracking-wider">
                  LAPTOP
                </span>
              </div>
              <div className="font-mono text-[10px] text-ink-soft bg-bg px-3 py-1 rounded border border-line">
                <code>{`{ "object": "LAPTOP", "confidence": 0.992, "ui": "PyQt6_Accessible", "db": "PostgreSQL" }`}</code>
              </div>
            </div>
          )}

          {/* Stage 3 Form: Final Working Product */}
          {currentStage === 3 && (
            <div className="w-full flex flex-col items-center justify-center space-y-2 text-center animate-fadeIn">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <div className="rounded-lg bg-teal px-4 py-2 text-white font-display text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm">
                  <Check size={14} className="stroke-[3]" />
                  🎮 Object Captured for Child
                </div>
                <div className="rounded-lg bg-signal px-4 py-2 text-white font-mono text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                  <Zap size={13} />
                  Cloud Automation Fired
                </div>
              </div>
              <p className="font-mono text-[10px] text-teal font-semibold">
                ✔ Immediate educational visual reinforcement delivered &amp; database synced!
              </p>
            </div>
          )}
        </div>

        {/* Narrative Explanation */}
        <p className="font-body text-xs text-ink-soft leading-relaxed">
          {active.description}
        </p>

        {/* Telemetry Status Strip */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-line/60 font-mono text-[10px] text-ink-soft">
          <div className="flex items-center gap-3">
            <span>State: <strong className="text-ink">{active.telemetry.state}</strong></span>
            <span>·</span>
            <span>Latency: <strong className="text-signal">{active.telemetry.latency}</strong></span>
          </div>
          <span className="text-teal font-semibold">{active.telemetry.throughput}</span>
        </div>
      </div>
    </div>
  );
}

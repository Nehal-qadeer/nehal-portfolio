"use client";

import { useState } from "react";
import { Gamepad2, Cpu, Eye, CheckCircle2, Sparkles, Terminal, Play, FolderCode, Layers, RefreshCw } from "lucide-react";

export function ThesisGameSpotlight() {
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [detectedObject, setDetectedObject] = useState<{ name: string; conf: number; fps: number; latency: string } | null>({
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

  const handleSimulateDetection = () => {
    setIsSimulating(true);
    setTimeout(() => {
      const nextObj = sampleObjects[Math.floor(Math.random() * sampleObjects.length)]!;
      setDetectedObject(nextObj);
      setIsSimulating(false);
    }, 600);
  };

  const steps = [
    {
      step: "01",
      title: "Point Webcam at Surroundings",
      desc: "The child points the camera at an everyday physical object in their environment."
    },
    {
      step: "02",
      title: "YOLOv8 + OpenVINO AI Inference",
      desc: "The AI recognizes the target in real-time from trained neural weights, optimized for 25+ FPS on standard CPU laptops without requiring a GPU."
    },
    {
      step: "03",
      title: "Visual Capture & Large Font Label",
      desc: "The game 'captures' the object and displays the name in a large, easy-to-read font to provide immediate visual reinforcement for users who cannot rely on audio cues."
    }
  ];

  return (
    <section id="thesis" className="px-6 py-20 md:px-10 lg:pl-24 max-w-6xl mx-auto space-y-10">
      {/* Header Banner */}
      <div className="rounded-2xl border border-amber/30 bg-charcoal/80 p-8 sm:p-12 shadow-2xl backdrop-blur-xl space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-charcoal pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-amber/15 border border-amber/30 px-3 py-1 font-mono text-xs font-bold text-amber flex items-center gap-1.5">
                <Gamepad2 size={14} />
                MASTER&apos;S THESIS SPOTLIGHT
              </span>
              <span className="font-mono text-xs text-ash-dark">SRH Hochschule Heidelberg</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-bone leading-tight">
              🎮 Object Detection Game for Hearing-Impaired Children
            </h2>
            <p className="font-body text-base sm:text-lg text-amber font-medium">
              An interactive educational tool using AI to bridge the communication gap through visual recognition.
            </p>
          </div>

          <div className="flex flex-col items-end gap-1 font-mono text-xs">
            <span className="rounded-lg border border-amber/40 bg-graphite px-4 py-2 text-amber font-bold text-base tabular shadow-amber-sm">
              25+ FPS on CPU
            </span>
            <span className="text-ash-dark">Intel OpenVINO Quantized</span>
          </div>
        </div>

        {/* Project Purpose Statement */}
        <div className="rounded-xl border border-charcoal bg-graphite/90 p-6 space-y-3">
          <h3 className="font-mono text-xs font-bold text-amber uppercase flex items-center gap-2">
            <Sparkles size={14} />
            Project Purpose & Human Impact
          </h3>
          <p className="font-body text-base text-ash leading-relaxed">
            This project was developed to help children with hearing impairments learn and identify objects in their surroundings through an engaging <strong className="text-bone font-semibold">&quot;Detection Game.&quot;</strong> Unlike standard detection tools, this game scans the live environment using a webcam, identifies objects based on trained neural models, and displays the names clearly on the screen to provide visual reinforcement for users who cannot rely on audio cues.
          </p>
        </div>

        {/* Grid: Interactive Game Simulator & 3-Step Flow */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
          {/* Left Column: Interactive Game Simulator Preview */}
          <div className="rounded-xl border border-charcoal bg-graphite p-5 space-y-4 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-charcoal pb-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 font-mono text-xs text-bone font-semibold">
                  PyQt6 Game Viewport
                </span>
              </div>

              <span className="font-mono text-[11px] text-amber font-semibold flex items-center gap-1">
                <Eye size={12} />
                LIVE WEBCAM STREAM
              </span>
            </div>

            {/* Simulated Webcam View with Reticle */}
            <div className="aspect-[16/10] rounded-lg border border-charcoal/80 bg-[#12161F] relative flex flex-col items-center justify-center p-6 select-none group">
              {/* Corner Reticle Brackets */}
              <span className="absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-amber" />
              <span className="absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-amber" />
              <span className="absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-amber" />
              <span className="absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-amber" />

              {/* Laser scanline */}
              <div className={`absolute inset-x-0 h-0.5 bg-amber/80 shadow-amber ${isSimulating ? "animate-pulse" : "top-1/2"}`} />

              {/* Large easy-to-read visual text label (Core Feature for hearing-impaired learners) */}
              <div className="text-center space-y-2 relative z-10">
                <div className="inline-block rounded-lg bg-amber px-6 py-2 shadow-2xl">
                  <span className="font-display text-2xl sm:text-3xl font-extrabold text-graphite tracking-wide">
                    {detectedObject?.name}
                  </span>
                </div>
                <div className="font-mono text-xs text-ash flex items-center justify-center gap-3">
                  <span className="text-amber">Confidence: {detectedObject?.conf}%</span>
                  <span>·</span>
                  <span className="text-ice">Latency: {detectedObject?.latency}</span>
                  <span>·</span>
                  <span className="text-bone">{detectedObject?.fps} FPS (CPU)</span>
                </div>
              </div>

              {/* Interactive Reticle Bounding Box */}
              <div className="absolute inset-x-12 inset-y-10 border border-dashed border-amber/50 rounded-lg pointer-events-none" />
            </div>

            {/* Test Detection Trigger Button */}
            <div className="flex items-center justify-between pt-1">
              <button
                onClick={handleSimulateDetection}
                disabled={isSimulating}
                className="inline-flex items-center gap-2 rounded-lg bg-amber px-4 py-2 font-mono text-xs font-bold text-graphite hover:bg-amber/90 transition-transform active:scale-95 shadow-amber disabled:opacity-50"
              >
                <RefreshCw size={13} className={isSimulating ? "animate-spin" : ""} />
                {isSimulating ? "Inference Running..." : "Simulate Object Detection"}
              </button>

              <span className="font-mono text-[10px] text-ash-dark">
                Ultralytics YOLOv8 + Intel OpenVINO
              </span>
            </div>
          </div>

          {/* Right Column: 3-Step Game Loop */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs font-bold text-amber uppercase tracking-wider">
              How the Game Works (Step-by-Step)
            </h3>

            <div className="space-y-3">
              {steps.map((s, idx) => (
                <div
                  key={s.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    activeStep === idx
                      ? "border-amber bg-charcoal ring-1 ring-amber/40 shadow-sm"
                      : "border-charcoal bg-graphite/80 hover:border-charcoal-light"
                  }`}
                >
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-amber">
                    <span>STEP {s.step}</span>
                    <span className="text-ash-dark">·</span>
                    <span className="text-bone">{s.title}</span>
                  </div>
                  <p className="mt-1.5 font-body text-xs sm:text-sm text-ash leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-2">
              <span className="block font-mono text-[10px] text-ash-dark uppercase tracking-widest mb-2">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {["Python 3.10+", "Ultralytics YOLOv8", "Intel OpenVINO Toolkit", "PyQt6 & OpenCV"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-charcoal bg-graphite px-2.5 py-1 font-mono text-[11px] text-bone"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Repository Architecture & Install Command */}
        <div className="border-t border-charcoal pt-6 grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-bone flex items-center gap-1.5">
              <FolderCode size={14} className="text-amber" />
              Repository Structure
            </span>
            <ul className="font-mono text-xs text-ash space-y-1.5">
              <li><strong className="text-amber">/Object-Detector :</strong> Core CV logic & YOLOv8/OpenVINO inference</li>
              <li><strong className="text-amber">/frontend :</strong> Accessible desktop interface built with PyQt6</li>
              <li><strong className="text-amber">/models :</strong> Trained YOLOv8 weights and OpenVINO IR files</li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs font-bold text-bone flex items-center gap-1.5">
              <Terminal size={14} className="text-amber" />
              Requirements & Installation
            </span>
            <div className="rounded-lg border border-charcoal bg-graphite p-3 font-mono text-xs text-amber select-all">
              <code>pip install opencv-python ultralytics openvino pyqt6</code>
            </div>
            <p className="font-mono text-[10px] text-ash-dark">
              Engineered for seamless CPU execution on standard student laptops.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

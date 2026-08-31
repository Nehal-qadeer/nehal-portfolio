"use client";

import { useEffect, useRef } from "react";
import { useSandboxStore } from "@/hooks/useSandboxStore";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  stage: number;
  progress: number;
  speed: number;
}

interface CVTarget {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  confidence: number;
  latency: string;
}

export default function IntelligentPipelineCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: 0, targetY: 0, active: false });
  const { mode, theme, streamSpeed, isStreaming } = useSandboxStore();

  const isLight = theme === "light";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      mouseRef.current.active = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        mouseRef.current.targetX = e.touches[0].clientX;
        mouseRef.current.targetY = e.touches[0].clientY;
        mouseRef.current.active = true;
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    // Initial particles
    const particles: Particle[] = [];
    const count = 45;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1,
        color: isLight ? "#2563EB" : "#6FE3D9",
        stage: Math.floor(Math.random() * 4),
        progress: Math.random(),
        speed: (Math.random() * 0.004 + 0.002) * streamSpeed
      });
    }

    // Static CV targets across space
    const cvTargets: CVTarget[] = [
      { x: 0.2, y: 0.28, w: 140, h: 90, label: "OPENCV_CONTOUR · PREPROCESSED", confidence: 99.4, latency: "11.2ms" },
      { x: 0.72, y: 0.22, w: 160, h: 110, label: "OPENVINO_IR · QUANTIZED INT8", confidence: 98.8, latency: "14.2ms (-30%)" },
      { x: 0.8, y: 0.68, w: 150, h: 100, label: "PYTORCH_TENSOR · SERVED", confidence: 99.1, latency: "13.5ms" },
      { x: 0.25, y: 0.75, w: 180, h: 95, label: "DATA_EXTRACTION · 3.4K RECS", confidence: 100, latency: "NOMINAL" }
    ];

    let t = 0;

    const render = () => {
      t += 0.016 * streamSpeed;

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.12;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.12;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle ambient background grid
      const gridSize = 48;
      ctx.strokeStyle = isLight ? "rgba(15, 23, 42, 0.035)" : "rgba(237, 241, 247, 0.03)";
      ctx.lineWidth = 1;

      ctx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // =========================================================================
      // MODE 1: COMPUTER VISION & OPENVINO SCANNER
      // =========================================================================
      if (mode === "cv_vision") {
        // Draw interactive cursor tracking bounding reticle
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;

        if (mouseRef.current.active && mx > 0 && my > 0) {
          const boxSize = 130 + Math.sin(t * 3) * 6;
          const half = boxSize / 2;

          // Scanning frame corners
          ctx.strokeStyle = isLight ? "#D97706" : "#E8A33D";
          ctx.lineWidth = 2;

          const corner = 22;
          ctx.beginPath();
          // Top Left
          ctx.moveTo(mx - half, my - half + corner);
          ctx.lineTo(mx - half, my - half);
          ctx.lineTo(mx - half + corner, my - half);
          // Top Right
          ctx.moveTo(mx + half - corner, my - half);
          ctx.lineTo(mx + half, my - half);
          ctx.lineTo(mx + half, my - half + corner);
          // Bottom Left
          ctx.moveTo(mx - half, my + half - corner);
          ctx.lineTo(mx - half, my + half);
          ctx.lineTo(mx - half + corner, my + half);
          // Bottom Right
          ctx.moveTo(mx + half - corner, my + half);
          ctx.lineTo(mx + half, my + half);
          ctx.lineTo(mx + half, my + half - corner);
          ctx.stroke();

          // Laser sweep bar across box
          const scanY = my - half + ((Math.sin(t * 4) + 1) / 2) * boxSize;
          ctx.strokeStyle = isLight ? "rgba(37, 99, 235, 0.75)" : "rgba(111, 227, 217, 0.8)";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(mx - half + 4, scanY);
          ctx.lineTo(mx + half - 4, scanY);
          ctx.stroke();

          // Reticle telemetry label
          ctx.fillStyle = isLight ? "#2563EB" : "#6FE3D9";
          ctx.font = "10px monospace";
          ctx.fillText(`CV_TRACK: [${Math.round(mx)}, ${Math.round(my)}]`, mx - half, my - half - 10);
          ctx.fillStyle = isLight ? "#D97706" : "#E8A33D";
          ctx.fillText("OPENVINO: -30% LATENCY · 99.4% CONF", mx - half, my + half + 18);
        }

        // Draw Fixed Neural Vision Targets
        cvTargets.forEach((target, i) => {
          const tx = target.x * width;
          const ty = target.y * height;
          const pulse = Math.sin(t * 2 + i) * 0.15 + 0.85;

          ctx.strokeStyle = isLight ? "rgba(37, 99, 235, 0.25)" : "rgba(111, 227, 217, 0.3)";
          ctx.lineWidth = 1;
          ctx.strokeRect(tx - target.w / 2, ty - target.h / 2, target.w, target.h);

          // Diagonal connection line to mouse
          if (mouseRef.current.active) {
            const dist = Math.hypot(mx - tx, my - ty);
            if (dist < 380) {
              const alpha = (1 - dist / 380) * 0.4;
              ctx.strokeStyle = isLight ? `rgba(217, 119, 6, ${alpha})` : `rgba(232, 163, 61, ${alpha})`;
              ctx.setLineDash([4, 4]);
              ctx.beginPath();
              ctx.moveTo(tx, ty);
              ctx.lineTo(mx, my);
              ctx.stroke();
              ctx.setLineDash([]);
            }
          }

          // Target labels
          ctx.fillStyle = isLight ? "rgba(15, 23, 42, 0.7)" : "rgba(237, 241, 247, 0.6)";
          ctx.font = "9px monospace";
          ctx.fillText(target.label, tx - target.w / 2 + 6, ty - target.h / 2 + 16);
          ctx.fillStyle = isLight ? "#D97706" : "#E8A33D";
          ctx.fillText(`CONF: ${target.confidence}% · ${target.latency}`, tx - target.w / 2 + 6, ty + target.h / 2 - 8);
        });
      }

      // =========================================================================
      // MODE 2: CLOUD SCRAPING & POSTGRES PIPELINE
      // =========================================================================
      if (mode === "data_pipeline") {
        // Draw 4 pipeline nodes horizontally or dynamically positioned
        const nodes = [
          { label: "1. PYTHON SELENIUM", sub: "Dynamic Scraping Engine", x: width * 0.18, y: height * 0.45 },
          { label: "2. APIFY ACTORS", sub: "Cloud Scheduled Dispatch", x: width * 0.38, y: height * 0.45 },
          { label: "3. MAKE.COM PARSER", sub: "JSON Payload Transform", x: width * 0.62, y: height * 0.45 },
          { label: "4. POSTGRESQL DB", sub: "2K–4K Normalized Rows", x: width * 0.82, y: height * 0.45 }
        ];

        // Draw bezier links between nodes
        for (let i = 0; i < nodes.length - 1; i++) {
          const n1 = nodes[i]!;
          const n2 = nodes[i + 1]!;

          ctx.strokeStyle = isLight ? "rgba(37, 99, 235, 0.3)" : "rgba(111, 227, 217, 0.3)";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.bezierCurveTo((n1.x + n2.x) / 2, n1.y - 40, (n1.x + n2.x) / 2, n2.y + 40, n2.x, n2.y);
          ctx.stroke();

          // Animated flowing data pulses along the curve
          const pulseProgress = (t * 0.8 + i * 0.33) % 1;
          const px = (1 - pulseProgress) * n1.x + pulseProgress * n2.x;
          const py =
            Math.pow(1 - pulseProgress, 2) * n1.y +
            2 * (1 - pulseProgress) * pulseProgress * (n1.y - 40) +
            Math.pow(pulseProgress, 2) * n2.y;

          ctx.fillStyle = isLight ? "#D97706" : "#E8A33D";
          ctx.beginPath();
          ctx.arc(px, py, 4, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw Node Boxes
        nodes.forEach((n) => {
          ctx.fillStyle = isLight ? "rgba(255, 255, 255, 0.9)" : "rgba(20, 28, 43, 0.85)";
          ctx.strokeStyle = isLight ? "rgba(217, 119, 6, 0.5)" : "rgba(232, 163, 61, 0.5)";
          ctx.lineWidth = 1.5;

          const nw = 170;
          const nh = 64;
          ctx.fillRect(n.x - nw / 2, n.y - nh / 2, nw, nh);
          ctx.strokeRect(n.x - nw / 2, n.y - nh / 2, nw, nh);

          ctx.fillStyle = isLight ? "#0F172A" : "#EDF1F7";
          ctx.font = "bold 10px monospace";
          ctx.fillText(n.label, n.x - nw / 2 + 10, n.y - 8);

          ctx.fillStyle = isLight ? "#64748B" : "#8C99AF";
          ctx.font = "9px sans-serif";
          ctx.fillText(n.sub, n.x - nw / 2 + 10, n.y + 14);
        });
      }

      // =========================================================================
      // MODE 3: MULTI-APP WORKFLOW & WEBHOOK AUTOMATION
      // =========================================================================
      if (mode === "workflow_automation") {
        const steps = [
          { label: "TRIGGER", tech: "Google Forms", x: width * 0.2, y: height * 0.4 },
          { label: "WEBHOOK / OAUTH", tech: "Zapier Engine", x: width * 0.4, y: height * 0.4 },
          { label: "SYNC", tech: "Google Sheets", x: width * 0.6, y: height * 0.32 },
          { label: "SCHEDULE", tech: "Google Calendar", x: width * 0.6, y: height * 0.48 },
          { label: "DISPATCH", tech: "Gmail Alerts", x: width * 0.82, y: height * 0.4 }
        ];

        // Connect branches
        ctx.strokeStyle = isLight ? "rgba(13, 148, 136, 0.4)" : "rgba(111, 227, 217, 0.4)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(steps[0]!.x, steps[0]!.y);
        ctx.lineTo(steps[1]!.x, steps[1]!.y);
        ctx.lineTo(steps[2]!.x, steps[2]!.y);
        ctx.lineTo(steps[4]!.x, steps[4]!.y);
        ctx.moveTo(steps[1]!.x, steps[1]!.y);
        ctx.lineTo(steps[3]!.x, steps[3]!.y);
        ctx.lineTo(steps[4]!.x, steps[4]!.y);
        ctx.stroke();

        steps.forEach((s) => {
          ctx.fillStyle = isLight ? "#FFFFFF" : "#141C2B";
          ctx.strokeStyle = isLight ? "#0D9488" : "#6FE3D9";
          ctx.lineWidth = 1.5;

          const sw = 140;
          const sh = 50;
          ctx.fillRect(s.x - sw / 2, s.y - sh / 2, sw, sh);
          ctx.strokeRect(s.x - sw / 2, s.y - sh / 2, sw, sh);

          ctx.fillStyle = isLight ? "#0D9488" : "#6FE3D9";
          ctx.font = "bold 9px monospace";
          ctx.fillText(s.label, s.x - sw / 2 + 10, s.y - 6);

          ctx.fillStyle = isLight ? "#0F172A" : "#EDF1F7";
          ctx.font = "10px sans-serif";
          ctx.fillText(s.tech, s.x - sw / 2 + 10, s.y + 12);
        });
      }

      // 4. Update and render background particle nodes
      if (isStreaming) {
        particles.forEach((p) => {
          p.x += p.vx * streamSpeed;
          p.y += p.vy * streamSpeed;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          ctx.fillStyle = isLight ? "rgba(37, 99, 235, 0.45)" : "rgba(111, 227, 217, 0.5)";
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [mode, theme, streamSpeed, isStreaming, isLight]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none"
    />
  );
}

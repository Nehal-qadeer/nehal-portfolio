"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export function GeekyMatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    window.addEventListener("resize", handleResize);

    // Particles / Tensor Nodes
    const nodes: Node[] = [];
    const count = Math.min(38, Math.floor(width / 35));
    const colors = ["rgba(229, 169, 60, 0.4)", "rgba(69, 162, 158, 0.35)", "rgba(244, 244, 245, 0.25)"];

    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 1,
        color: colors[Math.floor(Math.random() * colors.length)] ?? "rgba(229, 169, 60, 0.3)"
      });
    }

    const telemetryLines = [
      "YOLOv8_CPU · 25+ FPS",
      "OPENVINO_INT8 · OPTIMIZED",
      "PYQT6_FRONTEND · ACTIVE",
      "APIFY_ACTOR · HARVESTING",
      "POSTGRESQL · 3.4K ROWS",
      "ZAPIER_OAUTH · 4-APP SYNC"
    ];

    let tick = 0;

    const render = () => {
      tick += 0.01;
      ctx.clearRect(0, 0, width, height);

      // 1. Subtle Circuit Grid
      const gridSize = 64;
      ctx.strokeStyle = "rgba(31, 40, 51, 0.35)";
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

      // 2. Subtle Telemetry Marks
      ctx.font = "9px monospace";
      ctx.fillStyle = "rgba(161, 161, 170, 0.15)";
      telemetryLines.forEach((text, idx) => {
        const xPos = (width * ((idx + 1) * 0.16)) % (width - 150);
        const yPos = 60 + idx * 130 + Math.sin(tick + idx) * 5;
        ctx.fillText(text, xPos, yPos);
      });

      // 3. Render and Connect Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i]!;
        n1.x += n1.vx;
        n1.y += n1.vy;

        if (n1.x < 0) n1.x = width;
        if (n1.x > width) n1.x = 0;
        if (n1.y < 0) n1.y = height;
        if (n1.y > height) n1.y = 0;

        ctx.fillStyle = n1.color;
        ctx.beginPath();
        ctx.arc(n1.x, n1.y, n1.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j]!;
          const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(229, 169, 60, ${(1 - dist / 130) * 0.12})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 h-full w-full pointer-events-none z-0 opacity-80"
    />
  );
}

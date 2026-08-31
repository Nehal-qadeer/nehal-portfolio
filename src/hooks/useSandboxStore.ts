"use client";

import { useEffect, useState } from "react";

export type SimulationMode = "cv_vision" | "data_pipeline" | "workflow_automation";
export type ThemeMode = "dark" | "light";

export interface PipelineNode {
  id: string;
  label: string;
  category: "ingest" | "transform" | "storage" | "ai" | "automation";
  status: "idle" | "active" | "processing";
  dataRate: string;
  metric: string;
  tech: string;
}

export interface SandboxState {
  mode: SimulationMode;
  theme: ThemeMode;
  streamSpeed: number; // 1, 2, 4
  activeNode: string | null;
  recordsHarvested: number;
  inferenceLatency: number; // in ms
  cvConfidence: number; // in %
  isStreaming: boolean;
  setMode: (mode: SimulationMode) => void;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  setStreamSpeed: (speed: number) => void;
  setActiveNode: (nodeId: string | null) => void;
  toggleStreaming: () => void;
  triggerBurst: () => void;
}

class SimpleEmitter {
  private listeners: (() => void)[] = [];
  subscribe(fn: () => void) {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== fn);
    };
  }
  notify() {
    this.listeners.forEach((l) => l());
  }
}

const emitter = new SimpleEmitter();

let state: SandboxState = {
  mode: "cv_vision",
  theme: "dark",
  streamSpeed: 1,
  activeNode: null,
  recordsHarvested: 2840,
  inferenceLatency: 14.2,
  cvConfidence: 99.2,
  isStreaming: true,
  setMode: (mode: SimulationMode) => {
    state.mode = mode;
    emitter.notify();
  },
  setTheme: (theme: ThemeMode) => {
    state.theme = theme;
    if (typeof document !== "undefined") {
      if (theme === "light") {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      } else {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      }
    }
    emitter.notify();
  },
  toggleTheme: () => {
    state.setTheme(state.theme === "dark" ? "light" : "dark");
  },
  setStreamSpeed: (speed: number) => {
    state.streamSpeed = speed;
    emitter.notify();
  },
  setActiveNode: (nodeId: string | null) => {
    state.activeNode = nodeId;
    emitter.notify();
  },
  toggleStreaming: () => {
    state.isStreaming = !state.isStreaming;
    emitter.notify();
  },
  triggerBurst: () => {
    state.recordsHarvested += 120;
    state.inferenceLatency = Number((11.5 + Math.random() * 4).toFixed(1));
    state.cvConfidence = Number((98.5 + Math.random() * 1.4).toFixed(1));
    emitter.notify();
  }
};

export function useSandboxStore(): SandboxState {
  const [, setTick] = useState(0);

  useEffect(() => {
    return emitter.subscribe(() => {
      setTick((t) => (t + 1) % 1000000);
    });
  }, []);

  return state;
}

export function getSandboxState(): SandboxState {
  return state;
}

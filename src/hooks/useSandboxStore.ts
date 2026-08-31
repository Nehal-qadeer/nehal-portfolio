"use client";

import { useEffect, useState } from "react";

export type RenderMode = "standard" | "exploded" | "xray" | "lidar";
export type CameraPreset = "iso" | "front" | "core" | "top";
export type ThemeMode = "dark" | "light";

interface SandboxState {
  explosionProgress: number; // 0.0 to 1.0
  manualControl: boolean;
  renderMode: RenderMode;
  cameraPreset: CameraPreset;
  activeComponent: string | null;
  theme: ThemeMode;
  laserScanActive: boolean;
  autoRotate: boolean;
  telemetry: {
    fps: number;
    rotationSpeed: number;
    displacementMm: number;
    sensorState: string;
  };
  setExplosionProgress: (val: number, manual?: boolean) => void;
  setRenderMode: (mode: RenderMode) => void;
  setCameraPreset: (preset: CameraPreset) => void;
  setActiveComponent: (component: string | null) => void;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  setLaserScanActive: (active: boolean) => void;
  toggleAutoRotate: () => void;
  updateTelemetry: (partial: Partial<SandboxState["telemetry"]>) => void;
}

// Simple lightweight state hook without needing heavy external state library

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
  explosionProgress: 0,
  manualControl: false,
  renderMode: "standard",
  cameraPreset: "iso",
  activeComponent: null,
  theme: "dark",
  laserScanActive: true,
  autoRotate: true,
  telemetry: {
    fps: 60,
    rotationSpeed: 0.2,
    displacementMm: 0,
    sensorState: "NOMINAL"
  },
  setExplosionProgress: (val: number, manual = true) => {
    state.explosionProgress = Math.max(0, Math.min(1, val));
    if (manual) state.manualControl = true;
    state.telemetry.displacementMm = Math.round(state.explosionProgress * 125);
    emitter.notify();
  },
  setRenderMode: (mode: RenderMode) => {
    state.renderMode = mode;
    if (mode === "exploded" && state.explosionProgress < 0.2) {
      state.explosionProgress = 0.85;
      state.telemetry.displacementMm = Math.round(0.85 * 125);
    }
    emitter.notify();
  },
  setCameraPreset: (preset: CameraPreset) => {
    state.cameraPreset = preset;
    emitter.notify();
  },
  setActiveComponent: (component: string | null) => {
    state.activeComponent = component;
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
  setLaserScanActive: (active: boolean) => {
    state.laserScanActive = active;
    emitter.notify();
  },
  toggleAutoRotate: () => {
    state.autoRotate = !state.autoRotate;
    emitter.notify();
  },
  updateTelemetry: (partial) => {
    state.telemetry = { ...state.telemetry, ...partial };
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

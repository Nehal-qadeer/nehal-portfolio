"use client";

import { useSandboxStore } from "@/hooks/useSandboxStore";
import { Html } from "@react-three/drei";

export function PartCallouts3D() {
  const { explosionProgress, activeComponent, setActiveComponent, theme } = useSandboxStore();

  const isLight = theme === "light";
  // Only show floating 3D callouts when exploded enough or inspecting
  if (explosionProgress < 0.25) return null;

  const opacity = Math.min(1, (explosionProgress - 0.25) * 2);

  const callouts = [
    {
      id: "optics",
      label: "OP-1 TELECENTRIC LENS",
      spec: "50mm f/1.2 Sapphire Coated",
      pos: [1.6, 1.2, 0.6 + explosionProgress * 2.8] as [number, number, number]
    },
    {
      id: "radiator",
      label: "CRYO-FIN THERMAL MATRIX",
      spec: "12-Blade 6061 Anodized Alloy",
      pos: [-2.2, 1.6, 0.1] as [number, number, number]
    },
    {
      id: "core",
      label: "NEURAL TPU SILICON DIE",
      spec: "32 TOPS INT8 · OpenVINO Accel",
      pos: [2.2, -1.2, -0.3 - explosionProgress * 0.8] as [number, number, number]
    },
    {
      id: "chassis",
      label: "TITANIUM GIMBAL FRAME",
      spec: "Grade-5 Exoskeleton Chassis",
      pos: [-2.0, -1.8, -0.7 - explosionProgress * 2.6] as [number, number, number]
    }
  ];

  return (
    <group>
      {callouts.map((item) => {
        const isSelected = activeComponent === item.id;
        return (
          <Html
            key={item.id}
            position={item.pos}
            center
            distanceFactor={9}
            style={{
              opacity,
              transition: "all 0.3s ease-out",
              pointerEvents: "auto"
            }}
          >
            <button
              onClick={() => setActiveComponent(isSelected ? null : item.id)}
              className={`group flex items-center gap-2 rounded-full border px-3 py-1 text-left backdrop-blur-md transition-all duration-300 ${
                isSelected
                  ? isLight
                    ? "border-signal bg-amber-50 shadow-md ring-2 ring-signal"
                    : "border-signal bg-signal/20 shadow-lg ring-2 ring-signal"
                  : isLight
                    ? "border-slate-300 bg-white/90 text-slate-800 hover:border-signal"
                    : "border-line bg-panel/85 text-text hover:border-signal"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full transition-transform group-hover:scale-125 ${
                  isSelected ? "bg-signal animate-ping" : isLight ? "bg-signal" : "bg-verify"
                }`}
              />
              <div className="flex flex-col whitespace-nowrap">
                <span className="font-data text-[10px] font-semibold tracking-wider text-signal">
                  {item.label}
                </span>
                <span
                  className={`font-data text-[9px] ${
                    isLight ? "text-slate-500" : "text-text-faint"
                  }`}
                >
                  {item.spec}
                </span>
              </div>
            </button>
          </Html>
        );
      })}
    </group>
  );
}

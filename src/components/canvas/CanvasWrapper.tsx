"use client";

import dynamic from "next/dynamic";
import { useSandboxStore } from "@/hooks/useSandboxStore";

const IntelligentPipelineCanvas = dynamic(() => import("./IntelligentPipelineCanvas"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-ink transition-colors duration-500" />
});

export function CanvasWrapper() {
  const { theme } = useSandboxStore();
  const isLight = theme === "light";

  return (
    <div
      className={`fixed inset-0 z-0 h-screen w-screen transition-colors duration-500 ${
        isLight ? "bg-[#F4F6F9]" : "bg-[#0D1420]"
      }`}
      aria-hidden="true"
    >
      <IntelligentPipelineCanvas />
    </div>
  );
}

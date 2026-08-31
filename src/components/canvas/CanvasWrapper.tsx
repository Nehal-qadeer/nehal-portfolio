"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-ink" />
});

export function CanvasWrapper() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <HeroScene />
    </div>
  );
}

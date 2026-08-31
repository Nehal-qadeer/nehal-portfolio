"use client";

import { useEffect, useState } from "react";

function useScrollDepth() {
  const [depth, setDepth] = useState(0);

  useEffect(() => {
    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      setDepth(Math.min(100, Math.max(0, pct)));
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return depth;
}

function useClock(timeZone: string) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    function tick() {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        }).format(new Date())
      );
    }
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return time;
}

export function TelemetryRail() {
  const depth = useScrollDepth();
  const time = useClock("Europe/Berlin");

  return (
    <div className="pointer-events-none fixed inset-y-0 left-0 z-40 hidden w-10 flex-col items-center justify-between py-28 lg:flex">
      <div
        className="font-data text-[10px] tabular tracking-widest text-text-faint"
        style={{ writingMode: "vertical-rl" }}
      >
        MANNHEIM · {time || "--:--:--"}
      </div>

      <div className="relative h-40 w-px bg-line">
        <div
          className="absolute left-0 top-0 w-px bg-signal transition-[height] duration-150 ease-out"
          style={{ height: `${depth}%` }}
        />
      </div>

      <div
        className="font-data text-[10px] tabular tracking-widest text-text-faint"
        style={{ writingMode: "vertical-rl" }}
      >
        DEPTH · {depth.toFixed(0).padStart(2, "0")}%
      </div>
    </div>
  );
}

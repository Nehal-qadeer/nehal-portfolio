"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { getSandboxState } from "@/hooks/useSandboxStore";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
    }
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const onScroll = () => {
      const state = getSandboxState();
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;

      // Dynamic explosion curve:
      // Hero (0-20%): 0.0 -> 0.25 (assemble & calibrate)
      // About/Stack (20-65%): 0.25 -> 0.95 (modular component explosion)
      // Projects (65-85%): 0.95 (inspection state)
      // Contact (85-100%): 0.95 -> 0.15 (magnetic re-lock)
      let targetExplosion = 0;
      if (progress < 0.2) {
        targetExplosion = (progress / 0.2) * 0.25;
      } else if (progress < 0.65) {
        targetExplosion = 0.25 + ((progress - 0.2) / 0.45) * 0.7;
      } else if (progress < 0.85) {
        targetExplosion = 0.95;
      } else {
        targetExplosion = 0.95 - ((progress - 0.85) / 0.15) * 0.8;
      }

      if (!state.manualControl) {
        state.setExplosionProgress(targetExplosion, false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}

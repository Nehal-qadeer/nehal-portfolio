"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useSandboxStore } from "@/hooks/useSandboxStore";
import { Layers, Sun, Moon } from "lucide-react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, setExplosionProgress, setRenderMode, explosionProgress } = useSandboxStore();
  const isLight = theme === "light";

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 md:px-10",
        scrolled
          ? isLight
            ? "bg-white/80 shadow-sm backdrop-blur-md border-b border-slate-200"
            : "bg-ink/80 shadow-md backdrop-blur-md border-b border-line"
          : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-4">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-text">
          NQ
          <span className="ml-0.5 text-signal">.</span>
        </a>
        <button
          onClick={() => {
            const next = explosionProgress > 0.5 ? 0 : 0.85;
            setExplosionProgress(next, true);
            if (next > 0) setRenderMode("exploded");
          }}
          className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-signal/40 bg-signal/10 px-3 py-1 font-data text-[10px] text-signal hover:bg-signal hover:text-ink transition-all"
        >
          <Layers size={11} />
          {explosionProgress > 0.5 ? "Assemble 3D" : "Explode 3D Sandbox"}
        </button>
      </div>

      <nav className="hidden gap-8 font-body text-sm text-text-muted md:flex items-center">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-colors duration-300 hover:text-text"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="p-2 rounded-full border border-line text-text-muted hover:text-signal hover:border-signal transition-colors"
          title={isLight ? "Switch to Dark Lab" : "Switch to Light Studio"}
        >
          {isLight ? <Moon size={15} /> : <Sun size={15} />}
        </button>
        <a
          href="mailto:nehal.q.s@gmail.com"
          className="rounded-full border border-line bg-panel-raised/80 px-4 py-2 font-body text-xs font-medium text-text transition-colors duration-300 hover:border-signal hover:text-signal"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useSandboxStore } from "@/hooks/useSandboxStore";
import { Cpu, Database, Workflow, Sun, Moon } from "lucide-react";

const LINKS = [
  { href: "#work", label: "Projects" },
  { href: "#stack", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, mode, setMode } = useSandboxStore();
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
            ? "bg-white/90 shadow-sm backdrop-blur-md border-b border-slate-200"
            : "bg-ink/90 shadow-md backdrop-blur-md border-b border-line"
          : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-4">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-text">
          NQ
          <span className="ml-0.5 text-signal">.</span>
        </a>

        {/* Quick Simulator Switcher Pills */}
        <div className="hidden lg:flex items-center gap-1.5 rounded-full border border-line bg-panel-raised/80 px-2 py-1">
          <button
            onClick={() => setMode("cv_vision")}
            className={cn(
              "flex items-center gap-1 px-2.5 py-0.5 rounded-full font-data text-[10px] transition-all",
              mode === "cv_vision" ? "bg-signal text-ink font-bold" : "text-text-muted hover:text-text"
            )}
          >
            <Cpu size={11} />
            CV Vision
          </button>
          <button
            onClick={() => setMode("data_pipeline")}
            className={cn(
              "flex items-center gap-1 px-2.5 py-0.5 rounded-full font-data text-[10px] transition-all",
              mode === "data_pipeline" ? "bg-signal text-ink font-bold" : "text-text-muted hover:text-text"
            )}
          >
            <Database size={11} />
            Scraping Pipeline
          </button>
          <button
            onClick={() => setMode("workflow_automation")}
            className={cn(
              "flex items-center gap-1 px-2.5 py-0.5 rounded-full font-data text-[10px] transition-all",
              mode === "workflow_automation" ? "bg-signal text-ink font-bold" : "text-text-muted hover:text-text"
            )}
          >
            <Workflow size={11} />
            Zapier Flow
          </button>
        </div>
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
          className="rounded-full border border-signal/40 bg-signal/10 px-4 py-2 font-body text-xs font-semibold text-signal transition-all duration-300 hover:bg-signal hover:text-ink"
        >
          Hire Nehal
        </a>
      </div>
    </header>
  );
}

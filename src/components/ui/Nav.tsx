"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

export function Nav() {
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      if (total > 0) {
        setScrollPct((h.scrollTop / total) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Rail */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-transparent z-50">
        <div
          className="h-full bg-gradient-to-r from-signal to-teal transition-all duration-75 ease-linear"
          style={{ width: `${scrollPct}%` }}
        />
      </div>

      {/* Sticky Navigation */}
      <nav className="sticky top-[2px] z-40 bg-bg/85 backdrop-blur-md border-b border-line">
        <div className="max-w-[1040px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo Badge */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-md border-2 border-ink bg-surface flex items-center justify-center font-mono font-bold text-xs text-ink shadow-sm">
              NQ
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-teal shadow-[0_0_0_2px_#EDF1F6] animate-pulse-blip" />
            </div>
            <div className="font-mono font-bold text-sm tracking-tight text-ink">
              NEHAL<span className="text-signal">_</span>QADEER
            </div>
          </Link>

          {/* Navlinks */}
          <div className="hidden sm:flex items-center gap-7 font-mono text-xs text-ink-soft">
            <a href="#about" className="hover:text-signal transition-colors">
              About
            </a>
            <a href="#stack" className="hover:text-signal transition-colors">
              Stack
            </a>
            <a href="#projects" className="hover:text-signal transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-signal transition-colors">
              Experience
            </a>
            <a href="#education" className="hover:text-signal transition-colors">
              Education
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-signal font-semibold hover:underline"
            >
              Contact
            </a>
          </div>

          {/* Quick Connect CTA */}
          <div className="sm:hidden">
            <a
              href="#contact"
              className="rounded bg-ink px-3 py-1.5 font-mono text-xs font-semibold text-bg"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

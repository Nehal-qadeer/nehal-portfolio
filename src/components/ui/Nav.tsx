"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import { Terminal, Layers, BookOpen, ArrowUpRight } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 md:px-10 lg:px-24 ${
        scrolled
          ? "bg-graphite/90 backdrop-blur-xl border-b border-charcoal shadow-2xl"
          : "bg-transparent"
      }`}
    >
      {/* Brand logo */}
      <Link href="/" className="flex items-center gap-2 group">
        <span className="font-display text-xl font-extrabold text-bone tracking-tight">
          NEHAL
          <span className="text-amber ml-0.5 font-bold">.</span>
        </span>
        <span className="hidden sm:inline-block rounded-full bg-amber/10 border border-amber/30 px-2.5 py-0.5 font-mono text-[10px] text-amber font-semibold">
          AI & AUTOMATION
        </span>
      </Link>

      {/* 2-Page Navigation Pills */}
      <nav className="flex items-center gap-1.5 rounded-full border border-charcoal bg-charcoal/80 p-1.5 backdrop-blur-xl">
        <Link
          href="/"
          className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 font-body text-xs font-semibold transition-all ${
            pathname === "/"
              ? "bg-amber text-graphite shadow-sm"
              : "text-ash hover:text-bone"
          }`}
        >
          <Layers size={13} />
          Engineering
        </Link>
        <Link
          href="/story"
          className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 font-body text-xs font-semibold transition-all ${
            pathname === "/story"
              ? "bg-amber text-graphite shadow-sm"
              : "text-ash hover:text-bone"
          }`}
        >
          <BookOpen size={13} />
          The Story
        </Link>
      </nav>

      {/* Direct Contact Action */}
      <div className="flex items-center gap-3">
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-1 rounded-full border border-amber/40 bg-amber/10 px-4 py-2 font-mono text-xs font-bold text-amber hover:bg-amber hover:text-graphite transition-all shadow-amber-sm"
        >
          <Terminal size={12} />
          CLI Connect
        </a>
      </div>
    </header>
  );
}

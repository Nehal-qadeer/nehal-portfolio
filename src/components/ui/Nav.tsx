"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import { Sparkles, ArrowUpRight, BookOpen, Layers } from "lucide-react";

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
          ? "bg-obsidian/90 backdrop-blur-xl border-b border-line shadow-2xl"
          : "bg-transparent"
      }`}
    >
      {/* Brand logo */}
      <Link href="/" className="flex items-center gap-2 group">
        <span className="font-display text-xl font-extrabold text-white tracking-tight">
          NEHAL
          <span className="text-cyan ml-0.5 font-bold">.</span>
        </span>
        <span className="hidden sm:inline-block rounded-full bg-cyan/10 border border-cyan/30 px-2.5 py-0.5 font-data text-[10px] text-cyan font-medium">
          AI & AUTOMATION
        </span>
      </Link>

      {/* 2-Page Navigation Pills */}
      <nav className="flex items-center gap-1.5 rounded-full border border-line bg-surface/80 p-1.5 backdrop-blur-xl">
        <Link
          href="/"
          className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 font-body text-xs font-semibold transition-all ${
            pathname === "/"
              ? "bg-cyan text-obsidian shadow-cyan-sm"
              : "text-text-muted hover:text-white"
          }`}
        >
          <Layers size={13} />
          Engineering
        </Link>
        <Link
          href="/story"
          className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 font-body text-xs font-semibold transition-all ${
            pathname === "/story"
              ? "bg-cyan text-obsidian shadow-cyan-sm"
              : "text-text-muted hover:text-white"
          }`}
        >
          <BookOpen size={13} />
          The Story
        </Link>
      </nav>

      {/* Direct Contact Button */}
      <div className="flex items-center gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="hidden sm:inline-flex items-center gap-1 rounded-full border border-cyan/40 bg-cyan/10 px-4 py-2 font-body text-xs font-bold text-cyan hover:bg-cyan hover:text-obsidian transition-all shadow-cyan-sm"
        >
          Connect
          <ArrowUpRight size={13} />
        </a>
      </div>
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

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
        "fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 transition-colors duration-500 ease-signal md:px-10",
        scrolled ? "bg-ink/80 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <a href="#top" className="font-display text-lg font-medium tracking-tight text-text">
        NQ
        <span className="ml-1 text-signal">.</span>
      </a>
      <nav className="hidden gap-8 font-body text-sm text-text-muted md:flex">
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
      <a
        href="mailto:nehal.q.s@gmail.com"
        className="rounded-full border border-line px-4 py-2 font-body text-sm text-text transition-colors duration-300 hover:border-signal hover:text-signal"
      >
        Get in touch
      </a>
    </header>
  );
}

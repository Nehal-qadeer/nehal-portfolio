"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useReducedMotion } from "framer-motion";
import { Download, ArrowUp } from "lucide-react";

export function Nav() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  // 10.2: Active section observer with threshold 0.4
  useEffect(() => {
    const sections = ["about", "stack", "projects", "experience", "education", "contact"];
    const elements = sections.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // 10.4: Show Back to top button after 600px scroll
  useEffect(() => {
    const checkScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };

    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "stack", label: "Stack" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* 10.1: Scroll Progress Bar (fixed 2px bar at very top, --signal, scaleX, left origin, z-index above nav) */}
      <motion.div
        style={{
          scaleX: shouldReduceMotion ? 1 : scrollYProgress,
          transformOrigin: "left",
        }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-signal z-50 pointer-events-none"
      />

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-40 bg-bg/85 backdrop-blur-md border-b border-line">
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

          {/* Desktop Navlinks with 10.2 Active section highlight */}
          <div className="hidden sm:flex items-center gap-7 font-mono text-xs">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative py-1 transition-colors hover:text-signal ${
                    isActive ? "text-signal font-semibold" : "text-ink-soft"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-signal" />
                  )}
                </a>
              );
            })}
          </div>

          {/* 10.3: Small outline CV download button (replaces duplicate Contact) */}
          <div className="flex items-center gap-3">
            <a
              href="/Nehal_Qadeer_CV.pdf"
              download
              className="inline-flex items-center gap-1.5 rounded border border-ink px-3 py-1.5 font-mono text-xs text-ink hover:border-signal hover:text-signal transition-all"
            >
              <Download size={12} />
              <span>CV</span>
            </a>
          </div>
        </div>
      </nav>

      {/* 10.4: Back to top button (fixed bottom 24px, right 24px, 44x44px, --ink, white ArrowUp) */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            aria-label="Back to top"
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-ink flex items-center justify-center text-white shadow-lg hover:bg-signal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useReducedMotion } from "framer-motion";
import { Download, ArrowUp, Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export function Nav() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const { theme, toggleTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  // 4.2 Nav highlight with rootMargin "-45% 0px -50% 0px"
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
      { rootMargin: "-45% 0px -50% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    // Handle scroll to absolute bottom where contact is active
    const handleScrollBottom = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.documentElement.scrollHeight - 60;
      if (scrollPosition >= threshold) {
        setActiveSection("contact");
      }
    };
    window.addEventListener("scroll", handleScrollBottom, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollBottom);
    };
  }, []);

  // Show Back to top after 600px
  useEffect(() => {
    const checkScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  // Close mobile menu on Escape key or outside click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        !(e.target as HTMLElement).closest('[aria-controls="mobile-menu"]')
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

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
      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX: shouldReduceMotion ? 1 : scrollYProgress,
          transformOrigin: "left",
        }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-signal z-50 pointer-events-none"
      />

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-40 bg-bg/85 backdrop-blur-[10px] border-b border-line">
        <div className="max-w-[1040px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo Badge */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-md border-2 border-line-strong bg-surface flex items-center justify-center font-mono font-bold text-xs text-ink shadow-sm">
              NQ
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-signal shadow-[0_0_0_2px_var(--bg)] animate-pulse-blip" />
            </div>
            <div className="font-mono font-bold text-sm tracking-tight text-ink">
              NEHAL<span className="text-signal">_</span>QADEER
            </div>
          </Link>

          {/* Desktop Navlinks */}
          <div className="hidden md:flex items-center gap-7 font-mono text-xs">
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

          {/* Controls: Theme Toggle, CV button, Mobile Menu button */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle (Desktop & Mobile) */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="w-10 h-10 rounded-[10px] border border-line-strong bg-surface flex items-center justify-center text-ink hover:border-signal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center text-ink"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* CV Download button */}
            <a
              href="/Nehal_Qadeer_CV.pdf"
              download
              className="inline-flex items-center gap-1.5 h-10 px-3.5 rounded-[10px] border border-line-strong bg-surface font-mono text-xs font-medium text-ink hover:border-signal hover:text-signal transition-colors"
            >
              <Download size={13} />
              <span>CV</span>
            </a>

            {/* Mobile Menu Toggle button (<768px) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden w-10 h-10 rounded-[10px] border border-line-strong bg-surface flex items-center justify-center text-ink hover:border-signal transition-colors"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* 4.3 Mobile Menu Panel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              ref={mobileMenuRef}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-b border-line bg-surface overflow-hidden shadow-card"
            >
              <div className="flex flex-col divide-y divide-line font-body text-base">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`h-12 px-6 flex items-center transition-colors ${
                        isActive ? "text-signal font-semibold bg-surface-2" : "text-ink hover:text-signal"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
                <div className="h-12 px-6 flex items-center justify-between text-sm text-ink-soft bg-surface-2">
                  <span>{theme === "dark" ? "Dark mode active" : "Light mode active"}</span>
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="font-mono text-xs text-signal font-semibold"
                  >
                    Switch to {theme === "dark" ? "Light" : "Dark"}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 4.9: Back to top button */}
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
            className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-signal flex items-center justify-center text-signal-ink shadow-card hover:bg-signal-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

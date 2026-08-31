"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { Mail, Phone, Linkedin, Github, MapPin, Copy, Check, ArrowRight, Sparkles } from "lucide-react";

export function ContactFooter() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer id="contact" className="py-20 border-t border-line relative overflow-hidden bg-bg">
      {/* Blueprint Coordinates */}
      <span className="crosshair bottom-6 right-6" />
      <span className="coord bottom-3 right-14">EOF · build v1.2.0</span>

      <div className="max-w-[1040px] mx-auto px-6 md:px-10 space-y-12">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-end justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal font-semibold">
              <span className="w-4 h-px bg-signal" />
              06 — Contact
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight">
              Let&apos;s build something.
            </h2>
            <p className="font-body text-sm sm:text-base text-ink-soft max-w-md leading-relaxed">
              Open to <strong className="text-ink">Junior AI/Automation Engineer, Python Developer, and QA Engineering</strong> roles in Mannheim, across Germany, and remote EU. Reach out — I reply fast.
            </p>

            {/* Interactive Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded bg-ink px-6 py-3 text-bg font-semibold transition-all hover:bg-signal hover:shadow-glow hover:-translate-y-0.5"
              >
                <Mail size={13} />
                Email me
                <ArrowRight size={13} />
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 rounded border border-ink px-4 py-3 text-ink font-medium hover:border-signal hover:text-signal hover:-translate-y-0.5 transition-all bg-surface"
              >
                {copied ? <Check size={13} className="text-teal" /> : <Copy size={13} />}
                {copied ? "Copied nehal.q.s@gmail.com!" : "Copy Email"}
              </button>
            </div>
          </div>

          {/* Contact Direct Links */}
          <div className="space-y-3 font-mono text-xs text-ink-soft">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2.5 hover:text-signal transition-colors group"
            >
              <Mail size={14} className="text-signal group-hover:scale-110 transition-transform" />
              <span>{profile.email}</span>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2.5 hover:text-signal transition-colors group"
            >
              <Phone size={14} className="text-signal group-hover:scale-110 transition-transform" />
              <span>{profile.phone}</span>
            </a>

            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2.5 hover:text-signal transition-colors group"
            >
              <Linkedin size={14} className="text-signal group-hover:scale-110 transition-transform" />
              <span>linkedin.com/in/nehalqadeer</span>
            </a>

            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2.5 hover:text-signal transition-colors group"
            >
              <Github size={14} className="text-signal group-hover:scale-110 transition-transform" />
              <span>github.com/Nehal-qadeer</span>
            </a>

            <div className="flex items-center gap-2.5 text-ink-soft pt-1">
              <MapPin size={14} className="text-teal" />
              <span>Mannheim, Germany</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar with Attribution */}
        <div className="pt-6 border-t border-line flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-ink-soft">
          <div>
            <span>© 2026 Nehal Qadeer · </span>
            <span className="text-teal font-semibold">status: available</span>
          </div>

          <div className="text-right text-[10.5px]">
            This portfolio was created from scratch with the help of Claude and Antigravity.
          </div>
        </div>
      </div>
    </footer>
  );
}

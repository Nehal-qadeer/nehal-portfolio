"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { Mail, Linkedin, Github, Phone, MapPin, Sparkles, Copy, Check } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="border-t border-line/60 px-6 py-28 md:px-10 lg:pl-24">
      <div className="max-w-4xl mx-auto rounded-2xl border border-line/80 bg-panel/90 p-8 md:p-14 shadow-2xl backdrop-blur-xl space-y-8">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-signal" />
            <span className="font-data text-xs tracking-widest text-signal font-semibold uppercase">
              Get in Touch
            </span>
          </div>

          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text leading-tight">
            Ready to Build Reliable AI & Automation Systems
          </h2>

          <p className="mt-4 font-body text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl">
            Currently looking for <strong className="text-text font-semibold">Junior & Full-Time AI/Automation Engineer, Python Developer, and QA/Systems Integrator</strong> roles. Open to on-site work across Germany and remote across the EU.
          </p>
        </div>

        {/* Interactive CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-xl bg-signal px-7 py-3.5 font-body text-sm font-bold text-ink transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-signal/20"
          >
            <Mail size={16} />
            Email Me Directly
          </a>

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel-raised px-5 py-3.5 font-body text-sm font-medium text-text hover:border-signal hover:text-signal transition-all"
          >
            {copied ? <Check size={16} className="text-verify" /> : <Copy size={16} />}
            {copied ? "Email Copied!" : "Copy Email"}
          </button>

          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel-raised px-5 py-3.5 font-body text-sm font-medium text-text hover:border-signal hover:text-signal transition-all"
          >
            <Linkedin size={16} />
            LinkedIn Profile
          </a>

          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel-raised px-5 py-3.5 font-body text-sm font-medium text-text hover:border-signal hover:text-signal transition-all"
          >
            <Github size={16} />
            GitHub Profile
          </a>
        </div>

        {/* Location & Contact Meta */}
        <div className="grid sm:grid-cols-3 gap-4 border-t border-line/60 pt-6 font-data text-xs text-text-faint">
          <div className="flex items-center gap-2">
            <MapPin size={13} className="text-signal" />
            <span>{profile.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={13} className="text-signal" />
            <span>{profile.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-verify">
            <span className="h-2 w-2 rounded-full bg-verify animate-pulse" />
            <span>Available Immediately</span>
          </div>
        </div>
      </div>
    </section>
  );
}

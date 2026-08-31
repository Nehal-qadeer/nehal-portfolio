"use client";

import { profile } from "@/data/profile";
import { Mail, Linkedin, Phone, MapPin, Sparkles } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="border-t border-line/60 px-6 py-32 md:px-10 lg:pl-24">
      <div className="max-w-4xl rounded-2xl border border-line/60 bg-panel/85 p-8 md:p-14 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-signal" />
          <p className="font-data text-xs tracking-widest text-signal font-semibold">GET IN TOUCH</p>
        </div>

        <h2 className="mt-4 max-w-3xl font-display text-display-2 font-medium leading-[1.08] text-text">
          Have a computer vision or automation system to build?
        </h2>

        <p className="mt-4 max-w-2xl font-body text-base md:text-lg text-text-muted">
          Whether you need an optimized computer vision pipeline, cloud data scrapers, or high-throughput API integrations — I build reliable systems designed to run seamlessly in production.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-signal px-8 py-3.5 font-body text-sm font-semibold text-ink transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-signal/20"
          >
            <Mail size={16} />
            Email {profile.email}
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-panel-raised/80 px-6 py-3.5 font-body text-sm font-medium text-text hover:border-signal hover:text-signal transition-colors"
          >
            <Linkedin size={16} />
            Connect on LinkedIn
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-line/80 pt-6 font-data text-xs text-text-faint">
          <span className="flex items-center gap-1.5">
            <Phone size={13} className="text-signal" /> {profile.phone}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-signal" /> {profile.location}
          </span>
          <span className="flex items-center gap-1.5 text-verify font-medium">
            <span className="h-2 w-2 rounded-full bg-verify animate-pulse" /> Available for EU / Remote contracts
          </span>
        </div>
      </div>
    </section>
  );
}

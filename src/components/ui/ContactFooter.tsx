"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Phone, MapPin, Copy, Check, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon, GmailIcon, WhatsAppIcon } from "@/components/ui/Icons";

export function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const [directCopied, setDirectCopied] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("AI & Automation Engineer role");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

  const subjectPresets = [
    "AI & Automation Engineer role",
    "Python / Backend Developer role",
    "Computer Vision role",
    "Project collaboration",
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const copyDirectEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(profile.email);
    setDirectCopied(true);
    setTimeout(() => setDirectCopied(false), 1500);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const bodyContent = `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${senderMessage}`;
    const mailto = `mailto:nehal.q.s@gmail.com?subject=${encodeURIComponent(
      `${selectedSubject}: message from portfolio`
    )}&body=${encodeURIComponent(bodyContent)}`;
    window.location.href = mailto;
  };

  return (
    <footer id="contact" className="py-20 border-t border-line relative overflow-hidden bg-bg">
      {/* Blueprint Coordinates */}
      <span className="crosshair bottom-6 right-6" />

      <div className="max-w-[1040px] mx-auto px-6 md:px-10 space-y-12">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start justify-between">
          {/* Left Column: Interactive Contact Composer */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "0px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal font-semibold mb-2">
                <span className="w-4 h-px bg-signal" />
                06 · CONTACT
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight">
                Get in touch
              </h2>
              <p className="mt-2 font-body text-sm text-ink-soft leading-relaxed">
                Open to AI &amp; Automation Engineer, Python and Computer Vision roles in Mannheim, across Germany, or remote within the EU. I usually reply within a day.
              </p>
            </motion.div>

            {/* Quick Role Subject Selector */}
            <div className="space-y-2">
              <span className="font-mono text-xs font-semibold text-ink-soft block">
                Select Opportunity Type:
              </span>
              <div className="flex flex-wrap gap-2">
                {subjectPresets.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setSelectedSubject(preset)}
                    className={`rounded-lg border px-3 py-1.5 font-mono text-xs transition-all ${
                      selectedSubject === preset
                        ? "border-signal bg-signal text-signal-ink font-semibold shadow-sm"
                        : "border-line bg-surface text-ink-soft hover:border-line-strong hover:text-ink"
                    }`}
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Composer Form */}
            <form onSubmit={handleSend} className="rounded-2xl border border-line bg-surface p-6 shadow-card space-y-4">
              <div className="grid sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block font-mono text-xs text-ink-soft mb-1">Your Name</label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Sarah Schmidt"
                    className="w-full rounded-lg border border-line-strong bg-surface px-3 py-2 font-mono text-xs text-ink placeholder:text-muted focus:border-signal focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-ink-soft mb-1">Your Email</label>
                  <input
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="sarah@company.de"
                    className="w-full rounded-lg border border-line-strong bg-surface px-3 py-2 font-mono text-xs text-ink placeholder:text-muted focus:border-signal focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-ink-soft mb-1">Message / Requirements</label>
                <textarea
                  rows={3}
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder="Hi Nehal, we would like to interview you for our team..."
                  className="w-full rounded-lg border border-line-strong bg-surface px-3 py-2 font-mono text-xs text-ink placeholder:text-muted focus:border-signal focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-[10px] bg-signal px-[18px] py-[10px] text-signal-ink font-sans font-medium text-sm transition-colors hover:bg-signal-hover shadow-sm"
                >
                  <Send size={14} />
                  Send via email
                </button>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 rounded-[10px] border border-line-strong bg-surface px-4 py-2 text-ink font-mono text-xs hover:border-signal transition-colors shadow-sm"
                >
                  {copied ? <Check size={13} className="text-signal" /> : <Copy size={13} />}
                  {copied ? "Copied nehal.q.s@gmail.com!" : "Copy Email"}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Direct Channels & Telemetry */}
          <div className="rounded-2xl border border-line bg-surface p-6 shadow-card space-y-6">
            <div className="font-mono text-xs font-bold text-ink uppercase tracking-wider border-b border-line pb-3">
              Direct Channels
            </div>

            <div className="space-y-4 font-mono text-xs text-ink-soft">
              {/* DIRECT EMAIL */}
              <div className="flex items-center justify-between p-2 rounded-xl hover:bg-surface-2 transition-colors">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 hover:text-signal transition-colors group flex-1 min-w-0"
                >
                  <div className="w-9 h-9 rounded-lg bg-surface border border-line flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <GmailIcon size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase text-muted tracking-wider">Direct Email</div>
                    <div className="font-bold text-ink truncate">{profile.email}</div>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={copyDirectEmail}
                  className="shrink-0 ml-2 font-mono text-xs text-signal hover:underline px-2 py-1"
                >
                  {directCopied ? "Copied" : "Copy"}
                </button>
              </div>

              {/* PHONE & WHATSAPP */}
              <div className="p-2 rounded-xl hover:bg-surface-2 transition-colors space-y-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-surface border border-line flex items-center justify-center shrink-0">
                    <WhatsAppIcon size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-muted tracking-wider">PHONE &amp; WHATSAPP</div>
                    <div className="font-bold text-ink">{profile.phone}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 pl-12">
                  <a
                    href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-1.5 h-8 px-3 rounded-[8px] border border-line bg-surface text-ink hover:border-line-strong hover:text-signal font-mono text-xs transition-colors shadow-sm"
                  >
                    <Phone size={14} className="text-current" />
                    Call
                  </a>
                  <a
                    href="https://wa.me/4915566441747"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 h-8 px-3 rounded-[8px] border border-line bg-surface text-ink hover:border-line-strong hover:text-[#25D366] font-mono text-xs transition-colors shadow-sm"
                  >
                    <WhatsAppIcon size={14} color="#25D366" />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* PROFESSIONAL NETWORK */}
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-signal transition-colors group p-2 rounded-xl hover:bg-surface-2"
              >
                <div className="w-9 h-9 rounded-lg bg-surface border border-line flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <LinkedInIcon size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-muted tracking-wider">Professional Network</div>
                  <div className="font-bold text-ink">linkedin.com/in/nehalqadeer</div>
                </div>
              </a>

              {/* OPEN SOURCE CODE */}
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-signal transition-colors group p-2 rounded-xl hover:bg-surface-2"
              >
                <div className="w-9 h-9 rounded-lg bg-surface border border-line flex items-center justify-center text-ink shrink-0 group-hover:scale-105 transition-transform">
                  <GitHubIcon size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-muted tracking-wider">Open Source Code</div>
                  <div className="font-bold text-ink">github.com/Nehal-qadeer</div>
                </div>
              </a>
            </div>

            <div className="rounded-xl border border-line bg-surface-2 p-4 font-mono text-[11px] text-muted space-y-2">
              <div className="flex items-center gap-2 text-ink font-semibold">
                <MapPin size={20} className="text-signal shrink-0" />
                Physical Base
              </div>
              <p>Mannheim / Rhine-Neckar Metropolitan Region, Germany</p>
              <div className="text-signal font-medium pt-1">
                EU Work Permit &amp; Residency Active
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 border-t border-line flex flex-wrap items-center justify-between text-xs font-mono text-muted gap-4">
          <div>
            © 2026 Nehal Qadeer. Built with Next.js, Tailwind CSS &amp; Framer Motion.
          </div>
          <div>
            Mannheim, Germany · Lat 49.4875° N, Lon 8.4660° E
          </div>
        </div>
      </div>
    </footer>
  );
}
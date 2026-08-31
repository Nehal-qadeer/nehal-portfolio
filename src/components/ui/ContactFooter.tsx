"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { Mail, Phone, Linkedin, Github, MapPin, Copy, Check, Send, Sparkles, MessageSquare } from "lucide-react";

export function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("Junior AI & Automation Engineer Role");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");

  const subjectPresets = [
    "Junior AI & Automation Engineer Role",
    "Junior Python Developer Opportunity",
    "Computer Vision Specialist Inquiry",
    "Project Collaboration"
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      selectedSubject
    )}&body=${encodeURIComponent(
      `Name: ${senderName || "Recruiter / Collaborator"}\nEmail: ${senderEmail || "N/A"}\n\nMessage:\n${senderMessage || "Hi Nehal, let's discuss an engineering opportunity..."}`
    )}`;
    window.location.href = mailto;
  };

  return (
    <footer id="contact" className="py-20 border-t border-line relative overflow-hidden bg-bg">
      {/* Blueprint Coordinates */}
      <span className="crosshair bottom-6 right-6" />
      <span className="coord bottom-3 right-14">EOF · build v1.3.0</span>

      <div className="max-w-[1040px] mx-auto px-6 md:px-10 space-y-12">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start justify-between">
          {/* Left Column: Interactive Contact Composer */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal font-semibold mb-2">
                <span className="w-4 h-px bg-signal" />
                06 — Interactive Connect
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight">
                Let&apos;s build something.
              </h2>
              <p className="mt-2 font-body text-sm text-ink-soft leading-relaxed">
                Open to <strong className="text-ink">Junior AI/Automation Engineer, Python Developer, and QA Engineering</strong> roles in Mannheim, across Germany, and remote EU. Reach out — I reply fast.
              </p>
            </div>

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
                        ? "border-signal bg-signal text-white font-semibold shadow-sm"
                        : "border-line bg-surface text-ink-soft hover:border-line-strong hover:text-ink"
                    }`}
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Composer Form */}
            <form onSubmit={handleSend} className="rounded-xl border border-line bg-surface p-5 shadow-blueprint space-y-3.5">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-[11px] text-ink-soft mb-1">Your Name</label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Sarah Schmidt"
                    className="w-full rounded-lg border border-line bg-bg px-3 py-2 font-mono text-xs text-ink placeholder:text-line-strong focus:border-signal focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[11px] text-ink-soft mb-1">Your Email</label>
                  <input
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="sarah@company.de"
                    className="w-full rounded-lg border border-line bg-bg px-3 py-2 font-mono text-xs text-ink placeholder:text-line-strong focus:border-signal focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[11px] text-ink-soft mb-1">Message / Requirements</label>
                <textarea
                  rows={2}
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder="Hi Nehal, we would like to interview you for our team..."
                  className="w-full rounded-lg border border-line bg-bg px-3 py-2 font-mono text-xs text-ink placeholder:text-line-strong focus:border-signal focus:outline-none"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded bg-ink px-6 py-2.5 font-mono text-xs font-bold text-bg transition-all hover:bg-signal hover:shadow-glow hover:-translate-y-0.5 active:scale-95"
                >
                  <Send size={13} />
                  Dispatch Message
                </button>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 rounded border border-line px-3.5 py-2 font-mono text-xs font-medium text-ink hover:border-signal hover:text-signal transition-all"
                >
                  {copied ? <Check size={13} className="text-teal" /> : <Copy size={13} />}
                  {copied ? "Copied nehal.q.s@gmail.com!" : "Copy Email"}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Direct Channels & Telemetry */}
          <div className="rounded-xl border border-line bg-surface p-6 shadow-blueprint space-y-6">
            <div className="font-mono text-xs font-bold text-ink uppercase tracking-wider border-b border-line pb-3">
              Direct Channels
            </div>

            <div className="space-y-4 font-mono text-xs text-ink-soft">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 hover:text-signal transition-colors group p-2 rounded-lg hover:bg-bg"
              >
                <div className="w-8 h-8 rounded-lg bg-signal-dim flex items-center justify-center text-signal group-hover:scale-105 transition-transform">
                  <Mail size={15} />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-line-strong">Direct Email</div>
                  <div className="font-bold text-ink">{profile.email}</div>
                </div>
              </a>

              <a
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 hover:text-signal transition-colors group p-2 rounded-lg hover:bg-bg"
              >
                <div className="w-8 h-8 rounded-lg bg-signal-dim flex items-center justify-center text-signal group-hover:scale-105 transition-transform">
                  <Phone size={15} />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-line-strong">Phone / WhatsApp</div>
                  <div className="font-bold text-ink">{profile.phone}</div>
                </div>
              </a>

              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-3 hover:text-signal transition-colors group p-2 rounded-lg hover:bg-bg"
              >
                <div className="w-8 h-8 rounded-lg bg-signal-dim flex items-center justify-center text-signal group-hover:scale-105 transition-transform">
                  <Linkedin size={15} />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-line-strong">Professional Profile</div>
                  <div className="font-bold text-ink">linkedin.com/in/nehalqadeer</div>
                </div>
              </a>

              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-3 hover:text-signal transition-colors group p-2 rounded-lg hover:bg-bg"
              >
                <div className="w-8 h-8 rounded-lg bg-signal-dim flex items-center justify-center text-signal group-hover:scale-105 transition-transform">
                  <Github size={15} />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-line-strong">Code Repositories</div>
                  <div className="font-bold text-ink">github.com/Nehal-qadeer</div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-2 rounded-lg">
                <div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center text-teal">
                  <MapPin size={15} />
                </div>
                <div>
                  <div className="text-[10px] uppercase text-line-strong">Location Base</div>
                  <div className="font-bold text-ink">Mannheim, Germany (Remote EU)</div>
                </div>
              </div>
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

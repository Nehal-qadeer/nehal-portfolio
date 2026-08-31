"use client";

import { useState, useRef, useEffect } from "react";
import { profile } from "@/data/profile";
import { Terminal, Send, Check, Copy, Sparkles, ArrowRight, CornerDownLeft, Linkedin, Github, Mail } from "lucide-react";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export function TerminalContact() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-ash">
          <p className="text-bone font-semibold">Nehal Qadeer · Interactive Engineering Terminal v2.4</p>
          <p>Type <span className="text-amber font-mono font-bold">contact --initiate</span> to open the direct dispatch form.</p>
          <p className="text-[11px] text-ash-dark">Available commands: <span className="text-bone">contact --initiate</span>, <span className="text-bone">skills</span>, <span className="text-bone">projects</span>, <span className="text-bone">clear</span>, <span className="text-bone">help</span></p>
        </div>
      )
    }
  ]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", subject: "Engineering Role / Project Collaboration", message: "" });
  const [copied, setCopied] = useState(false);
  const [dispatched, setDispatched] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let output: React.ReactNode = null;

    if (cleanCmd === "contact --initiate" || cleanCmd === "contact") {
      setIsFormOpen(true);
      output = (
        <div className="text-amber font-mono space-y-1">
          <p>✔ Session established: Initializing direct message composer...</p>
        </div>
      );
    } else if (cleanCmd === "skills") {
      output = (
        <div className="space-y-1 text-ash font-mono text-xs">
          <p className="text-bone font-semibold">Core Stack:</p>
          <p>• <strong className="text-amber">AI/CV:</strong> PyTorch, OpenCV, Intel OpenVINO (Inference Quantization)</p>
          <p>• <strong className="text-amber">Automation:</strong> Python, Selenium WebDriver, Apify REST API, Make.com, Zapier</p>
          <p>• <strong className="text-amber">Data & Infra:</strong> PostgreSQL, MySQL, Redis, Docker, Linux CLI, Git</p>
        </div>
      );
    } else if (cleanCmd === "projects") {
      output = (
        <div className="space-y-1 text-ash font-mono text-xs">
          <p className="text-bone font-semibold">Key Systems:</p>
          <p>1. <span className="text-amber">AI-Driven Object Verification System</span> (Master&apos;s Thesis · OpenVINO 30% speedup)</p>
          <p>2. <span className="text-amber">Multi-Platform Scraping & Ingestion Engine</span> (Apify + PostgreSQL · 3.4K recs/run)</p>
          <p>3. <span className="text-amber">Application Tracker & Satellite Tracker</span> (Zapier OAuth + Redis State)</p>
        </div>
      );
    } else if (cleanCmd === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    } else if (cleanCmd === "help") {
      output = (
        <div className="space-y-1 text-ash font-mono text-xs">
          <p>Supported commands:</p>
          <p>• <strong className="text-amber">contact --initiate</strong> : Open direct email form</p>
          <p>• <strong className="text-bone">skills</strong> : View technical capabilities</p>
          <p>• <strong className="text-bone">projects</strong> : View selected engineering case studies</p>
          <p>• <strong className="text-bone">clear</strong> : Reset console screen</p>
        </div>
      );
    } else if (cleanCmd === "") {
      return;
    } else {
      output = (
        <p className="text-red-400 font-mono text-xs">
          Command not recognized: &quot;{cmd}&quot;. Type <span className="text-amber">help</span> or click <span className="text-amber">contact --initiate</span>.
        </p>
      );
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendForm = (e: React.FormEvent) => {
    e.preventDefault();
    setDispatched(true);
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      formState.subject
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, isFormOpen]);

  return (
    <div id="contact" className="w-full rounded-2xl border border-charcoal bg-charcoal/80 shadow-2xl backdrop-blur-xl overflow-hidden">
      {/* Terminal Window Top Bar */}
      <div className="flex items-center justify-between border-b border-charcoal bg-graphite/90 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <span className="h-3 w-3 rounded-full bg-green-500/70" />
          </div>
          <span className="ml-2 font-mono text-xs text-ash flex items-center gap-1.5 font-medium">
            <Terminal size={13} className="text-amber" />
            nehal@engineering-workstation:~$
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={copyEmail}
            className="flex items-center gap-1 font-mono text-[11px] text-ash hover:text-amber transition-colors"
          >
            {copied ? <Check size={12} className="text-amber" /> : <Copy size={12} />}
            {copied ? "Copied" : "Copy Email"}
          </button>
        </div>
      </div>

      {/* Quick Command Action Chips */}
      <div className="flex flex-wrap items-center gap-2 border-b border-charcoal bg-graphite/40 px-4 py-2">
        <span className="font-mono text-[10px] text-ash-dark uppercase tracking-wider">Quick Run:</span>
        <button
          onClick={() => handleCommand("contact --initiate")}
          className="rounded border border-amber/40 bg-amber/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-amber hover:bg-amber hover:text-graphite transition-all"
        >
          contact --initiate
        </button>
        <button
          onClick={() => handleCommand("skills")}
          className="rounded border border-charcoal bg-charcoal px-2.5 py-1 font-mono text-[11px] text-ash hover:text-bone hover:border-amber transition-all"
        >
          skills
        </button>
        <button
          onClick={() => handleCommand("projects")}
          className="rounded border border-charcoal bg-charcoal px-2.5 py-1 font-mono text-[11px] text-ash hover:text-bone hover:border-amber transition-all"
        >
          projects
        </button>
        <button
          onClick={() => handleCommand("clear")}
          className="rounded border border-charcoal bg-charcoal px-2.5 py-1 font-mono text-[11px] text-ash-dark hover:text-ash transition-all"
        >
          clear
        </button>
      </div>

      {/* Terminal Log Output */}
      <div className="p-5 sm:p-6 font-mono text-xs space-y-4 max-h-[380px] overflow-y-auto bg-graphite/95">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center gap-2 text-amber font-semibold">
              <span className="text-ash-dark">&gt;</span>
              <span>{item.command}</span>
            </div>
            <div className="pl-4">{item.output}</div>
          </div>
        ))}

        {/* Dynamic Email Form Integration */}
        {isFormOpen && (
          <form
            onSubmit={handleSendForm}
            className="mt-4 rounded-xl border border-amber/30 bg-charcoal/90 p-5 space-y-4 backdrop-blur-md animate-fadeIn"
          >
            <div className="flex items-center justify-between border-b border-charcoal pb-2">
              <span className="font-mono text-xs font-bold text-amber flex items-center gap-1.5">
                <Sparkles size={13} />
                DIRECT MESSAGE COMPOSER
              </span>
              <span className="font-mono text-[10px] text-ash-dark">Target: {profile.email}</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-[11px] text-ash mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Alex Miller"
                  className="w-full rounded-lg border border-charcoal bg-graphite px-3 py-2 font-mono text-xs text-bone placeholder:text-ash-dark focus:border-amber focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] text-ash mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full rounded-lg border border-charcoal bg-graphite px-3 py-2 font-mono text-xs text-bone placeholder:text-ash-dark focus:border-amber focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-[11px] text-ash mb-1">Subject</label>
              <input
                type="text"
                required
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                className="w-full rounded-lg border border-charcoal bg-graphite px-3 py-2 font-mono text-xs text-bone focus:border-amber focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-mono text-[11px] text-ash mb-1">Message / Requirements</label>
              <textarea
                rows={3}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Let's build reliable AI vision and automation pipelines..."
                className="w-full rounded-lg border border-charcoal bg-graphite px-3 py-2 font-mono text-xs text-bone placeholder:text-ash-dark focus:border-amber focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-amber px-6 py-2.5 font-mono text-xs font-bold text-graphite hover:bg-amber/90 transition-transform active:scale-95 shadow-amber"
              >
                <Send size={13} />
                {dispatched ? "Opening Mail Client..." : "Dispatch Message"}
              </button>

              <div className="flex items-center gap-3">
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-ash hover:text-amber transition-colors flex items-center gap-1"
                >
                  <Linkedin size={13} /> LinkedIn
                </a>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-ash hover:text-amber transition-colors flex items-center gap-1"
                >
                  <Github size={13} /> GitHub
                </a>
              </div>
            </div>
          </form>
        )}

        {/* Active Command Line Input */}
        <div className="flex items-center gap-2 pt-2">
          <span className="text-amber font-mono font-bold select-none">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command (e.g. contact --initiate)..."
            className="flex-1 bg-transparent font-mono text-xs text-bone placeholder:text-ash-dark focus:outline-none"
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="p-1 text-ash hover:text-amber transition-colors"
            title="Execute Command"
          >
            <CornerDownLeft size={13} />
          </button>
        </div>

        <div ref={bottomRef} />
      </div>
    </div>
  );
}

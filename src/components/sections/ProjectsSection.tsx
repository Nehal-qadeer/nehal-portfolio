"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, Sparkles, Gamepad2, Eye, CheckCircle2, RefreshCw, ShieldCheck, Bot, Lock, ImageIcon, FileText, Monitor, Cpu, Database, Volume2, RotateCw, Boxes, Layers, ChevronDown, Github } from "lucide-react";
import { useSkillFilter } from "@/context/SkillFilterContext";

function TechnicalDetailsCollapse({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-line pt-4">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 font-mono text-xs font-semibold text-ink hover:text-signal transition-colors"
      >
        <span>Technical details</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pt-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ProjectsSection() {
  // --- Virtual Room Builder State ---
  const [roomViewMode, setRoomViewMode] = useState<"screenshot" | "interactive">("screenshot");
  const [selectedRoomIndex, setSelectedRoomIndex] = useState<number>(0);
  const [roomItemRotation, setRoomItemRotation] = useState<number>(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const roomItemsSample = [
    {
      id: "sofa",
      german: "Sofa",
      article: "das" as const,
      genderLabel: "Neutrum (Green)",
      articleColor: "text-emerald-400 bg-emerald-950/60 border-emerald-500/40",
      english: "Sofa / Couch",
      plural: "die Sofas",
      exampleDe: "Das bequeme Sofa steht im Wohnzimmer.",
      exampleEn: "The comfortable sofa is in the living room.",
      coord: "X: 240, Y: 180",
      conf: 99.4,
      roomType: "Wohnzimmer (Living Room)",
      dimensions: "120 × 60 px"
    },
    {
      id: "stuhl",
      german: "Stuhl",
      article: "der" as const,
      genderLabel: "Maskulin (Blue)",
      articleColor: "text-blue-400 bg-blue-950/60 border-blue-500/40",
      english: "Chair",
      plural: "die Stühle",
      exampleDe: "Der hölzerne Stuhl steht am Schreibtisch.",
      exampleEn: "The wooden chair is at the desk.",
      coord: "X: 140, Y: 290",
      conf: 98.7,
      roomType: "Esszimmer (Dining Room)",
      dimensions: "50 × 50 px"
    },
    {
      id: "lampe",
      german: "Lampe",
      article: "die" as const,
      genderLabel: "Feminin (Red)",
      articleColor: "text-rose-400 bg-rose-950/60 border-rose-500/40",
      english: "Floor Lamp",
      plural: "die Lampen",
      exampleDe: "Die helle Lampe beleuchtet den Raum.",
      exampleEn: "The bright lamp illuminates the room.",
      coord: "X: 380, Y: 90",
      conf: 99.1,
      roomType: "Wohnzimmer / Büro",
      dimensions: "40 × 40 px"
    },
    {
      id: "bett",
      german: "Bett",
      article: "das" as const,
      genderLabel: "Neutrum (Green)",
      articleColor: "text-emerald-400 bg-emerald-950/60 border-emerald-500/40",
      english: "Double Bed",
      plural: "die Betten",
      exampleDe: "Das große Bett hat zwei Kissen.",
      exampleEn: "The large bed has two pillows.",
      coord: "X: 300, Y: 240",
      conf: 99.6,
      roomType: "Schlafzimmer (Bedroom)",
      dimensions: "120 × 100 px"
    },
    {
      id: "schrank",
      german: "Schrank",
      article: "der" as const,
      genderLabel: "Maskulin (Blue)",
      articleColor: "text-blue-400 bg-blue-950/60 border-blue-500/40",
      english: "Wardrobe / Cupboard",
      plural: "die Schränke",
      exampleDe: "Der Schrank bietet praktischen Stauraum.",
      exampleEn: "The wardrobe offers practical storage space.",
      coord: "X: 70, Y: 80",
      conf: 98.2,
      roomType: "Schlafzimmer / Flur",
      dimensions: "100 × 50 px"
    }
  ];

  const currentRoomItem = roomItemsSample[selectedRoomIndex]!;

  const handleSelectRoomItem = (idx: number) => {
    setSelectedRoomIndex(idx);
    setRoomItemRotation(0);
  };

  const handleRotateRoomItem = () => {
    setRoomItemRotation((prev) => (prev + 90) % 360);
  };

  const handleSpeakGerman = (text: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "de-DE";
      utterance.rate = 0.9;
      setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  // --- Master's Thesis CV Simulator State ---
  const [isCvSimulating, setIsCvSimulating] = useState(false);
  const [detectedObj, setDetectedObj] = useState<{ name: string; conf: number; fps: number; latency: string }>({
    name: "LAPTOP",
    conf: 99.2,
    fps: 28.4,
    latency: "11.6ms"
  });

  const sampleObjects = [
    { name: "LAPTOP", conf: 99.2, fps: 28.4, latency: "11.6ms" },
    { name: "NOTEBOOK", conf: 98.7, fps: 29.1, latency: "10.8ms" },
    { name: "COFFEE MUG", conf: 99.5, fps: 27.8, latency: "12.1ms" },
    { name: "BACKPACK", conf: 97.9, fps: 28.2, latency: "11.4ms" },
    { name: "WALL CLOCK", conf: 99.0, fps: 29.5, latency: "10.5ms" }
  ];

  const handleSimulateCv = () => {
    setIsCvSimulating(true);
    setTimeout(() => {
      const next = sampleObjects[Math.floor(Math.random() * sampleObjects.length)]!;
      setDetectedObj(next);
      setIsCvSimulating(false);
    }, 500);
  };

  // --- Multi-Agent RAG Simulator State ---
  const [ragViewMode, setRagViewMode] = useState<"simulator" | "screenshot">("simulator");
  const [isRagRunning, setIsRagRunning] = useState(false);
  const [isCryptoShredded, setIsCryptoShredded] = useState(false);
  const [activeRagPreset, setActiveRagPreset] = useState<number>(1);
  const [currentAgentStep, setCurrentAgentStep] = useState<number>(4);

  const ragPresets = {
    1: {
      query: "Under GDPR Article 33, what is the mandatory timeline for breach notifications?",
      answer: "Under GDPR Article 33, any security breach involving personal data must be formally reported to the European supervisory authority within 72 hours of detection. All containment logs are immutably preserved in the audit ledger.",
      citation: "Corporate Privacy Manual: Section 3",
      faithfulness: "94.5%",
      relevance: "96.4%",
      latency: "18.2ms",
      piiStatus: "0 PII exposed (Clean)",
      tokens: 192,
      hash: "b46551f7d789bb66"
    },
    2: {
      query: "What is the procedure when a data subject requests GDPR Article 17 Right to Erasure?",
      answer: "Upon receipt of an erasure request, the cryptographic key vault immediately shreds the dedicated AES-256 key. All vector embeddings and stored records are cryptographically tombstoned and rendered permanently unrecoverable without rebuilding index partitions.",
      citation: "Corporate Privacy Manual: Section 2",
      faithfulness: "94.5%",
      relevance: "98.1%",
      latency: "16.4ms",
      piiStatus: "0 PII exposed (Encrypted Key Destroyed)",
      tokens: 210,
      hash: "41e946c098804b42"
    },
    3: {
      query: "Who is the designated Data Protection Officer and what are their official contact & tax details?",
      answer: "The designated Data Protection Officer is <PERSON_01> (email: <EMAIL_ADDRESS_01>, phone: <PHONE_NUMBER_01>). Official compliance correspondence references Tax ID: <EU_TAX_ID_01> and IBAN: <IBAN_CODE_01>.",
      citation: "Corporate Privacy Manual: Section 1",
      faithfulness: "94.5%",
      relevance: "94.8%",
      latency: "17.8ms",
      piiStatus: "5 Entities Pseudonymized (<PERSON>, <EMAIL>, <PHONE>, <TAX_ID>, <IBAN>)",
      tokens: 184,
      hash: "e3d75d49e4697d98"
    },
    4: {
      query: "What is the proprietary formula for hyper-velocity quantum rocket fuel?",
      answer: "Insufficient context in verified enterprise documents to answer this query truthfully. No matching policies or records meet the required confidence threshold. Groundedness gate triggered safe fallback.",
      citation: "0 Citations (Hallucination Blocked)",
      faithfulness: "94.5%",
      relevance: "0.0%",
      latency: "4.2ms",
      piiStatus: "0 PII exposed",
      tokens: 45,
      hash: "7f8832a188bc9910"
    }
  };

  const handleSelectRagPreset = (id: number) => {
    setActiveRagPreset(id);
    setIsRagRunning(true);
    setCurrentAgentStep(1);

    setTimeout(() => setCurrentAgentStep(2), 250);
    setTimeout(() => setCurrentAgentStep(3), 500);
    setTimeout(() => {
      setCurrentAgentStep(4);
      setIsRagRunning(false);
    }, 750);
  };

  const toggleCryptoShred = () => {
    setIsCryptoShredded(!isCryptoShredded);
    setIsRagRunning(true);
    setCurrentAgentStep(1);
    setTimeout(() => {
      setCurrentAgentStep(4);
      setIsRagRunning(false);
    }, 400);
  };

  const activePreset = ragPresets[activeRagPreset as keyof typeof ragPresets];
  const { selectedSkill, setSelectedSkill, isHighlighted } = useSkillFilter();

  return (
    <section id="projects" className="py-20 border-t border-line relative overflow-hidden">
      {/* Decorative Dots */}
      <span className="absolute top-20 left-[4%] w-1.5 h-1.5 rounded-full bg-teal shadow-[0_0_0_3px_rgba(47,158,143,0.15)] animate-pulse" />
      <span className="absolute bottom-16 right-[7%] w-1.5 h-1.5 rounded-full bg-signal shadow-[0_0_0_3px_rgba(43,108,176,0.15)] animate-pulse" />

      <div className="max-w-[1040px] mx-auto px-6 md:px-10 space-y-14">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal font-semibold mb-3">
            <span className="w-4 h-px bg-signal" />
            03 · Selected Projects
          </div>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink tracking-tight">
            Selected projects
          </h2>
        </div>

        {/* Sticky Filter Active Bar */}
        {selectedSkill && (
          <div className="sticky top-20 z-30 flex items-center justify-between rounded-lg border border-signal bg-surface/95 px-4 py-2.5 backdrop-blur shadow-md transition-all duration-200">
            <span className="font-mono text-xs text-ink">
              Showing work that uses <strong className="text-signal font-semibold">{selectedSkill}</strong>
            </span>
            <button
              onClick={() => setSelectedSkill(null)}
              className="font-mono text-xs text-signal hover:underline font-semibold"
            >
              Clear
            </button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SPOTLIGHT 1: Enterprise Multi-Agent RAG System */}
        {/* ========================================================================= */}
        <div
          id="project-rag"
          style={{ opacity: isHighlighted("project-rag") ? 1 : 0.35, transition: "opacity 200ms ease" }}
          className="rounded-xl border border-teal/40 bg-surface p-7 sm:p-10 shadow-blueprint-lg relative overflow-hidden space-y-8 transition-all duration-200 lg:hover:-translate-y-1 lg:hover:shadow-[0_12px_28px_rgba(22,35,61,0.08)]"
        >
          {/* Top Line Gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal via-signal to-amber" />

          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-5">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 rounded bg-teal/10 border border-teal/30 px-2.5 py-1 font-mono text-xs font-semibold text-teal">
                <ShieldCheck size={14} />
                FLAGSHIP PROJECT · SOVEREIGN MULTI-AGENT AI &amp; GDPR GOVERNANCE
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink mt-2 flex items-center gap-2">
                Enterprise Multi-Agent RAG System (GDPR &amp; EU AI Act ready)
              </h3>
              <p className="font-body text-sm sm:text-base text-signal font-medium">
                Autonomous 4-agent RAG engine with Presidio PII pseudonymization, AES-256-GCM cryptographic shredding, and EU AI Act record-keeping.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <a
                  href="https://github.com/Nehal-qadeer/eu-compliant-multiagent-rag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-3 py-1.5 font-mono text-xs font-semibold text-ink hover:border-signal hover:text-signal transition-colors shadow-sm"
                >
                  <Github size={13} />
                  View Repository
                  <ExternalLink size={12} className="opacity-70" />
                </a>
                <a
                  href="https://github.com/Nehal-qadeer/eu-compliant-multiagent-rag/blob/main/docs/EU_Compliant_MultiAgent_RAG_Comprehensive_Guide.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-3 py-1.5 font-mono text-xs font-semibold text-teal hover:border-teal hover:bg-teal/5 transition-colors shadow-sm"
                >
                  <FileText size={13} />
                  Architecture Guide (PDF)
                  <ExternalLink size={12} className="opacity-70" />
                </a>
              </div>
            </div>

            <div className="font-mono text-xs text-right">
              <span className="inline-block rounded border border-teal/40 bg-teal/10 px-3 py-1.5 text-teal font-bold text-sm tabular">
                94.5% RAGAS Faithfulness
              </span>
              <div className="text-[11px] text-ink-soft mt-0.5">EU AI Act High-Risk Ready</div>
            </div>
          </div>

          {/* Project Purpose Statement */}
          <div className="rounded-lg border border-line bg-bg p-5 space-y-2">
            <div className="font-mono text-xs font-bold text-ink uppercase flex items-center gap-2">
              <Sparkles size={14} className="text-teal" />
              Project Purpose &amp; Enterprise Impact
            </div>
            <p className="font-body text-sm text-ink-soft leading-relaxed">
              Companies want to use LLMs on internal documents but cannot risk leaking personal data or giving answers nobody can trace. Under GDPR, data protection fines can reach €20 million or 4% of global turnover, and the EU AI Act adds strict record-keeping duties. This system uses a team of four agents (Query Planner, Hybrid Retriever, Verifier, Synthesizer) that cross-check every claim, removes personal data before indexing, and can delete a user&apos;s data on request without rebuilding the index.
            </p>
          </div>

          {/* Technical Features & Live Interactive Pipeline Console */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left: Highlights & Step Trace (5 cols) */}
            <div className="lg:col-span-5 space-y-4 font-body text-sm text-ink-soft">
              <div className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
                Technical Highlights
              </div>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-teal shrink-0 mt-0.5" />
                  <span><strong className="text-ink">Multi-Agent Supervisor:</strong> Autonomous query decomposition, subquery routing, and NLI groundedness verification.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-teal shrink-0 mt-0.5" />
                  <span><strong className="text-ink">GDPR Art. 17 Crypto-Shredding:</strong> Revoking document AES-256 keys mathematically destroys vector readability instantly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-teal shrink-0 mt-0.5" />
                  <span><strong className="text-ink">Hybrid Search (RRF):</strong> Dense semantic embeddings + BM25Okapi merged via Reciprocal Rank Fusion &amp; Cross-Encoder reranking.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-teal shrink-0 mt-0.5" />
                  <span><strong className="text-ink">EU AI Act Art. 12 Ledger:</strong> Immutable SHA-256 hash-chained JSONL logs with automated citations <code className="text-xs bg-bg px-1 py-0.5 rounded">[Doc:Section]</code>.</span>
                </li>
              </ul>

              {/* 3-Step Pipeline Flow */}
              <div className="pt-2 border-t border-line/60">
                <div className="font-mono text-[11px] font-bold text-ink uppercase mb-2">Autonomous Multi-Agent Pipeline:</div>
                <div className="space-y-1.5 font-mono text-xs text-ink-soft">
                  <div><strong className="text-signal">Step 1:</strong> Presidio scans &amp; pseudonymizes PII before vectorization.</div>
                  <div><strong className="text-signal">Step 2:</strong> Planner decomposes query ➔ Hybrid search ➔ Cross-Encoder rerank.</div>
                  <div><strong className="text-signal">Step 3:</strong> Verifier checks each claim against the sources ➔ Synthesizer adds EU citations.</div>
                </div>
              </div>
            </div>

            {/* Right: Live Interactive Multi-Agent Working Pipeline Simulator / Screenshot View (7 cols) */}
            <div className="lg:col-span-7 rounded-xl border border-line bg-ink p-5 space-y-4 shadow-lg select-none text-white font-sans">
              <div className="flex items-center justify-between border-b border-white/15 pb-2.5 font-mono text-xs">
                {/* View Switcher Tabs */}
                <div className="flex items-center gap-1 bg-white/10 p-1 rounded-lg">
                  <button
                    onClick={() => setRagViewMode("simulator")}
                    className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all flex items-center gap-1.5 ${
                      ragViewMode === "simulator"
                        ? "bg-teal text-white shadow-sm"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    <Bot size={13} />
                    Live Working Console
                  </button>
                  <button
                    onClick={() => setRagViewMode("screenshot")}
                    className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all flex items-center gap-1.5 ${
                      ragViewMode === "screenshot"
                        ? "bg-signal text-white shadow-sm"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    <ImageIcon size={13} />
                    System Screenshot
                  </button>
                </div>
                <span className="text-[11px] text-white/70 hidden sm:inline font-mono">FastAPI + Qdrant</span>
              </div>

              {/* View 1: Interactive Working Pipeline Simulator */}
              {ragViewMode === "simulator" && (
                <div className="space-y-3 animate-fadeIn">
                  {/* Query Preset Selectors */}
                  <div className="space-y-1.5">
                    <div className="font-mono text-[10.5px] text-white/60 uppercase tracking-wider">Test Sample Enterprise Queries:</div>
                    <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                      <button
                        onClick={() => handleSelectRagPreset(1)}
                        className={`px-2.5 py-1 rounded border transition-all ${
                          activeRagPreset === 1 && !isCryptoShredded
                            ? "bg-teal text-white border-teal font-bold shadow-sm"
                            : "bg-white/5 text-white/80 border-white/10 hover:border-white/30"
                        }`}
                      >
                        72h Breach Notice
                      </button>
                      <button
                        onClick={() => handleSelectRagPreset(2)}
                        className={`px-2.5 py-1 rounded border transition-all ${
                          activeRagPreset === 2 && !isCryptoShredded
                            ? "bg-teal text-white border-teal font-bold shadow-sm"
                            : "bg-white/5 text-white/80 border-white/10 hover:border-white/30"
                        }`}
                      >
                        GDPR Art. 17 Erasure
                      </button>
                      <button
                        onClick={() => handleSelectRagPreset(3)}
                        className={`px-2.5 py-1 rounded border transition-all ${
                          activeRagPreset === 3 && !isCryptoShredded
                            ? "bg-teal text-white border-teal font-bold shadow-sm"
                            : "bg-white/5 text-white/80 border-white/10 hover:border-white/30"
                        }`}
                      >
                        DPO Contact &amp; Tax PII
                      </button>
                      <button
                        onClick={() => handleSelectRagPreset(4)}
                        className={`px-2.5 py-1 rounded border transition-all ${
                          activeRagPreset === 4 && !isCryptoShredded
                            ? "bg-amber text-ink border-amber font-bold shadow-sm"
                            : "bg-white/5 text-white/80 border-white/10 hover:border-white/30"
                        }`}
                      >
                        Hallucination Test
                      </button>
                      <button
                        onClick={toggleCryptoShred}
                        className={`px-2.5 py-1 rounded border font-bold transition-all flex items-center gap-1 ${
                          isCryptoShredded
                            ? "bg-red-600 text-white border-red-500 animate-pulse"
                            : "bg-red-950/60 text-red-300 border-red-800/60 hover:bg-red-900/60"
                        }`}
                      >
                        <Lock size={10} />
                        {isCryptoShredded ? "Key Revoked (Click to Restore)" : "Test GDPR Art. 17 Shredding"}
                      </button>
                    </div>
                  </div>

                  {/* 4-Agent Live Coordination Bar */}
                  <div className="grid grid-cols-4 gap-1.5 font-mono text-[10px] text-center pt-1">
                    {[
                      { id: 1, label: "1. PLANNER", sub: "Query Decompose" },
                      { id: 2, label: "2. RETRIEVER", sub: "Hybrid RRF + Cross" },
                      { id: 3, label: "3. VERIFIER", sub: "NLI Fact-Check" },
                      { id: 4, label: "4. SYNTHESIS", sub: "EU Citations" }
                    ].map((st) => {
                      const isActive = currentAgentStep >= st.id;
                      const isCurrent = currentAgentStep === st.id;
                      return (
                        <div
                          key={st.id}
                          className={`p-1.5 rounded border transition-all ${
                            isCurrent && isRagRunning
                              ? "bg-teal/20 border-teal text-teal animate-pulse font-bold"
                              : isActive
                              ? "bg-white/10 border-white/20 text-white"
                              : "bg-white/5 border-white/5 text-white/40"
                          }`}
                        >
                          <div className="font-bold">{st.label}</div>
                          <div className="text-[9px] text-white/60 truncate">{st.sub}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Live Terminal Output Console */}
                  <div className="aspect-[16/9] sm:aspect-[16/8] rounded-lg bg-[#0A101D] border border-white/15 p-4 relative flex flex-col justify-between overflow-hidden">
                    {/* Status bar */}
                    <div className="flex items-center justify-between font-mono text-[11px] border-b border-white/10 pb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isCryptoShredded
                              ? "bg-red-500 animate-ping"
                              : isRagRunning
                              ? "bg-amber animate-spin"
                              : "bg-teal animate-pulse"
                          }`}
                        />
                        <span className="text-white/80 font-semibold">
                          {isCryptoShredded
                            ? "BLOCKED BY CRYPTO-SHRED (GDPR Art. 17)"
                            : isRagRunning
                            ? "COORDINATING AGENTS..."
                            : activeRagPreset === 4
                            ? "SAFE FALLBACK (INSUFFICIENT CONTEXT)"
                            : "VERIFIED GROUNDED OUTPUT (SUCCESS)"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-teal font-bold">{activePreset.latency}</span>
                        <span className="font-mono text-[10px] bg-[#fdf3e1] text-[#9a6516] border border-[#e8a33d] px-2 py-0.5 rounded font-semibold">
                          SIMULATED DEMO
                        </span>
                      </div>
                    </div>

                    {/* Main answer readout */}
                    <div className="py-2 space-y-2 overflow-y-auto max-h-32 text-xs font-body text-white/90 leading-relaxed">
                      {isCryptoShredded ? (
                        <div className="text-red-300 font-mono text-[11.5px] p-2 bg-red-950/40 rounded border border-red-900/60">
                          ⚠️ <strong>GDPR Right to Erasure Enforcement:</strong> Target AES-256 key revoked in KeyVault. All document embeddings and stored vectors are cryptographically tombstoned. Zero unencrypted representations exist.
                        </div>
                      ) : (
                        <>
                          <p>{activePreset.answer}</p>
                          <div className="font-mono text-[10.5px] text-teal flex items-center gap-1.5 pt-1">
                            <span>Attributed Citation:</span>
                            <span className="bg-teal/10 px-1.5 py-0.5 rounded border border-teal/30 text-teal-200">
                              {activePreset.citation}
                            </span>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Live Metadata Badges */}
                    <div className="border-t border-white/10 pt-2 flex flex-wrap items-center justify-between font-mono text-[10px] text-white/60 gap-2">
                      <span>PII: <strong className="text-teal">{activePreset.piiStatus}</strong></span>
                      <span>Faithfulness: <strong className="text-teal">{activePreset.faithfulness}</strong></span>
                      <span>Ledger: <strong className="text-white/80">SHA-256:{activePreset.hash}...</strong></span>
                    </div>
                  </div>

                  {/* Bottom Simulator Controls */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1 font-mono text-xs">
                    <button
                      onClick={() => handleSelectRagPreset(activeRagPreset)}
                      disabled={isRagRunning}
                      className="inline-flex items-center gap-1.5 rounded bg-teal px-3.5 py-1.5 font-bold text-white hover:bg-teal/90 transition-all active:scale-95 disabled:opacity-50"
                    >
                      <RefreshCw size={12} className={isRagRunning ? "animate-spin" : ""} />
                      {isRagRunning ? "Processing Query..." : "Re-Run Multi-Agent Pipeline"}
                    </button>
                    <span className="text-[10px] text-white/60">Sovereign Boundary · Zero Data Leakage</span>
                  </div>
                </div>
              )}

              {/* View 2: High-Resolution Live System Dashboard Screenshot */}
              {ragViewMode === "screenshot" && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-white/20 bg-black group">
                    <Image
                      src="/images/multiagent-rag-dashboard.jpg"
                      alt="EU-Compliant Multi-Agent RAG Operations Dashboard"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                      <div className="font-mono text-[11px] text-white/90">
                        <span className="text-teal font-bold">Live UI:</span> Multi-Agent Orchestrator, RAGAS Gauges (94.5%), PII Sanitizer &amp; Crypto-Shredder
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between font-mono text-[11px] text-white/70 pt-1">
                    <span>Captured from Sovereign EU Runtime</span>
                    <button
                      onClick={() => setRagViewMode("simulator")}
                      className="text-teal font-bold hover:underline flex items-center gap-1"
                    >
                      <span>⚡ Switch to Interactive Simulator</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Collapsible Technical Details */}
          <TechnicalDetailsCollapse>
            <div className="grid sm:grid-cols-2 gap-4 font-mono text-xs">
              <div>
                <span className="font-bold text-ink block mb-1">Architecture &amp; Microservices:</span>
                <div className="text-ink-soft space-y-0.5 text-[11px]">
                  <div><strong className="text-signal">/core :</strong> Security (AES-256-GCM), PII Sanitizer, SHA-256 Ledger</div>
                  <div><strong className="text-signal">/rag :</strong> Chunking, Sovereign Embeddings, Hybrid Search, Reranker</div>
                  <div><strong className="text-signal">/agents :</strong> Query Planner, Verifier (NLI Guard), Synthesizer, Supervisor</div>
                  <div><strong className="text-signal">/eval :</strong> RAGAS Quantitative Metric Evaluation Suite</div>
                </div>
              </div>

              <div className="space-y-2">
                <span className="font-bold text-ink block mb-1">Deployment &amp; Live Artifacts:</span>
                <div className="rounded border border-line bg-bg p-2.5 text-signal select-all text-[11px]">
                  <code>git clone https://github.com/Nehal-qadeer/eu-compliant-multiagent-rag.git &amp;&amp; docker-compose up -d</code>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href="https://github.com/Nehal-qadeer/eu-compliant-multiagent-rag"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-signal hover:underline font-bold text-[11px]"
                  >
                    <Code2 size={12} />
                    View GitHub Repo ↗
                  </a>
                  <span className="text-line-strong">·</span>
                  <a
                    href="https://github.com/Nehal-qadeer/eu-compliant-multiagent-rag/blob/main/docs/EU_Compliant_MultiAgent_RAG_Comprehensive_Guide.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-teal hover:underline font-bold text-[11px]"
                  >
                    <FileText size={12} />
                    PDF Architecture Guide ↗
                  </a>
                </div>
              </div>
            </div>
          </TechnicalDetailsCollapse>

          {/* Tag Row */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-line/60">
            {["FastAPI", "Python 3.10+", "Multi-Agent Orchestrator", "RAGAS (94.5% Faithfulness)", "BM25 + Dense Vectors", "AES-256-GCM Crypto-Shredding", "Presidio PII Redaction", "Docker Compose"].map((t) => (
              <span key={t} className="rounded bg-teal/10 border border-teal/30 px-2.5 py-1 font-mono text-[11px] text-teal font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SPOTLIGHT 2: Master's Thesis Computer Vision Project Spotlight Card */}
        {/* ========================================================================= */}
        <div
          id="project-thesis"
          style={{ opacity: isHighlighted("project-thesis") ? 1 : 0.35, transition: "opacity 200ms ease" }}
          className="rounded-xl border border-line-strong bg-surface p-7 sm:p-10 shadow-blueprint-lg relative overflow-hidden space-y-8 transition-all duration-200 lg:hover:-translate-y-1 lg:hover:shadow-[0_12px_28px_rgba(22,35,61,0.08)]"
        >
          {/* Top Line Gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-signal via-teal to-amber" />

          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-5">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 rounded bg-signal-dim px-2.5 py-1 font-mono text-xs font-semibold text-signal">
                <Gamepad2 size={13} />
                MASTER&apos;S THESIS PROJECT · SRH HEIDELBERG
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink mt-2">
                Object Detection Game for Hearing-Impaired Children (Master&apos;s Thesis)
              </h3>
              <p className="font-body text-sm sm:text-base text-signal font-medium">
                An interactive educational tool using AI to bridge the communication gap through visual recognition.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <a
                  href="https://github.com/Nehal-qadeer/Object-Detection-Game-for-Hearing-Impaired-Children"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-3 py-1.5 font-mono text-xs font-semibold text-ink hover:border-signal hover:text-signal transition-colors shadow-sm"
                >
                  <Github size={13} />
                  View Repository
                  <ExternalLink size={12} className="opacity-70" />
                </a>
              </div>
            </div>

            <div className="font-mono text-xs text-right">
              <span className="inline-block rounded border border-teal/40 bg-teal/10 px-3 py-1.5 text-teal font-bold text-sm tabular">
                25+ FPS on CPU
              </span>
              <div className="text-[11px] text-ink-soft mt-0.5">Intel OpenVINO Quantized</div>
            </div>
          </div>

          {/* Project Purpose Statement */}
          <div className="rounded-lg border border-line bg-bg p-5 space-y-2">
            <div className="font-mono text-xs font-bold text-ink uppercase flex items-center gap-2">
              <Sparkles size={14} className="text-amber" />
              Project Purpose
            </div>
            <p className="font-body text-sm text-ink-soft leading-relaxed">
              This project was developed to help children with hearing impairments learn and identify objects in their surroundings through an engaging <strong className="text-ink font-semibold">&quot;Detection Game.&quot;</strong> Unlike standard detection tools, this is built as an interactive game where the AI scans the live webcam feed, identifies objects based on trained neural models, and displays the names in a large, easy-to-read font to provide immediate visual reinforcement for users who cannot rely on audio cues.
            </p>
          </div>

          {/* Technical Features & Live Mini Simulator */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Technical Features & Game Loop */}
            <div className="space-y-4 font-body text-sm text-ink-soft">
              <div className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
                Technical Highlights
              </div>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-teal shrink-0 mt-0.5" />
                  <span><strong className="text-ink">Live Detection:</strong> Real-time object recognition using custom YOLOv8 model.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-teal shrink-0 mt-0.5" />
                  <span><strong className="text-ink">CPU Optimized:</strong> Integrated with Intel OpenVINO Toolkit to ensure 25+ FPS on standard laptops without a GPU.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-teal shrink-0 mt-0.5" />
                  <span><strong className="text-ink">Interactive UI:</strong> Accessible desktop interface built with PyQt6 and OpenCV.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-teal shrink-0 mt-0.5" />
                  <span><strong className="text-ink">Visual Reinforcement:</strong> Instant large labels upon detection for visual-first learning.</span>
                </li>
              </ul>

              {/* Step-by-step game loop */}
              <div className="pt-2">
                <div className="font-mono text-[11px] font-bold text-ink uppercase mb-2">How the Game Works:</div>
                <div className="space-y-1.5 font-mono text-xs text-ink-soft">
                  <div><strong className="text-signal">Step 1:</strong> Child points camera at surrounding object.</div>
                  <div><strong className="text-signal">Step 2:</strong> AI detects object from trained neural library.</div>
                  <div><strong className="text-signal">Step 3:</strong> Game &quot;captures&quot; object &amp; displays name in large font.</div>
                </div>
              </div>
            </div>

            {/* Right: Live Interactive Mini Viewport */}
            <div className="rounded-xl border border-line bg-ink p-5 space-y-3 shadow-lg select-none text-white">
              <div className="flex items-center justify-between border-b border-white/15 pb-2.5 font-mono text-xs">
                <span className="flex items-center gap-1.5 text-amber font-semibold">
                  <Eye size={13} />
                  PyQt6 Viewport
                </span>
                <span className="text-[11px] text-white/70">YOLOv8 + OpenVINO</span>
              </div>

              {/* Viewport Screen */}
              <div className="aspect-[16/10] rounded-lg bg-[#0F1829] border border-white/10 relative flex flex-col items-center justify-center p-4">
                {/* Simulated Demo Badge */}
                <div className="absolute top-2.5 right-2.5 z-20">
                  <span className="font-mono text-[10px] bg-[#fdf3e1] text-[#9a6516] border border-[#e8a33d] px-2 py-0.5 rounded font-semibold">
                    SIMULATED DEMO
                  </span>
                </div>

                {/* Laser scan line */}
                <div className="absolute inset-x-0 top-1/2 h-0.5 bg-teal shadow-[0_0_8px_rgba(47,158,143,0.8)]" />

                <div className="text-center space-y-1.5 z-10">
                  <div className="inline-block rounded-md bg-amber px-5 py-1.5 text-ink font-display text-xl sm:text-2xl font-bold tracking-wide shadow-md">
                    {detectedObj.name}
                  </div>
                  <div className="font-mono text-[11px] text-white/70 flex items-center justify-center gap-2">
                    <span className="text-teal font-semibold">{detectedObj.fps} FPS</span>
                    <span>·</span>
                    <span>{detectedObj.latency}</span>
                    <span>·</span>
                    <span className="text-amber">{detectedObj.conf}% Conf</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={handleSimulateCv}
                  disabled={isCvSimulating}
                  className="inline-flex items-center gap-1.5 rounded bg-teal px-3.5 py-1.5 font-mono text-xs font-bold text-white hover:bg-teal/90 transition-all active:scale-95 disabled:opacity-50"
                >
                  <RefreshCw size={12} className={isCvSimulating ? "animate-spin" : ""} />
                  {isCvSimulating ? "Detecting..." : "Simulate Detection"}
                </button>
                <span className="font-mono text-[10px] text-white/60">Real-Time CPU Inference</span>
              </div>
            </div>
          </div>

          {/* Collapsible Technical Details */}
          <TechnicalDetailsCollapse>
            <div className="grid sm:grid-cols-2 gap-4 font-mono text-xs">
              <div>
                <span className="font-bold text-ink block mb-1">Architecture:</span>
                <div className="text-ink-soft space-y-0.5 text-[11px]">
                  <div><strong className="text-signal">/Object-Detector :</strong> Core CV logic &amp; inference pipeline</div>
                  <div><strong className="text-signal">/frontend :</strong> Accessible desktop UI in PyQt6</div>
                  <div><strong className="text-signal">/models :</strong> Trained YOLOv8 weights &amp; OpenVINO IR files</div>
                </div>
              </div>

              <div>
                <span className="font-bold text-ink block mb-1">Requirements &amp; Command:</span>
                <div className="rounded border border-line bg-bg p-2.5 text-signal select-all text-[11px]">
                  <code>pip install opencv-python ultralytics openvino pyqt6</code>
                </div>
              </div>
            </div>
          </TechnicalDetailsCollapse>

          {/* Tag Row */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-line/60">
            {["Python 3.10+", "Ultralytics YOLOv8", "Intel OpenVINO Toolkit", "PyQt6", "OpenCV", "25+ FPS CPU Optimization"].map((t) => (
              <span key={t} className="rounded bg-signal-dim px-2.5 py-1 font-mono text-[11px] text-signal font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SPOTLIGHT 3: Virtual Room Builder & German Vocabulary Game */}
        {/* ========================================================================= */}
        <div
          id="project-roombuilder"
          style={{ opacity: isHighlighted("project-roombuilder") ? 1 : 0.35, transition: "opacity 200ms ease" }}
          className="rounded-xl border border-amber/40 bg-surface p-7 sm:p-10 shadow-blueprint-lg relative overflow-hidden space-y-8 transition-all duration-200 lg:hover:-translate-y-1 lg:hover:shadow-[0_12px_28px_rgba(22,35,61,0.08)]"
        >
          {/* Top Line Gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber via-signal to-teal" />

          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-5">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 rounded bg-amber/10 border border-amber/30 px-2.5 py-1 font-mono text-xs font-semibold text-amber-800 dark:text-amber-300">
                <Sparkles size={14} className="text-amber" />
                FULL-STACK AI &amp; COMPUTER VISION · SPATIAL LANGUAGE LEARNING
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink mt-2 flex items-center gap-2">
                Virtual Room Builder &amp; German Vocabulary Game
              </h3>
              <p className="font-body text-sm sm:text-base text-signal font-medium">
                Spatial room construction web application combining a 60 FPS HTML5 Canvas coordinate engine with Google Gemini Multimodal Vision AI.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <a
                  href="https://github.com/Nehal-qadeer/Virtual-Room-Builder-German-Game"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-3 py-1.5 font-mono text-xs font-semibold text-ink hover:border-signal hover:text-signal transition-colors shadow-sm"
                >
                  <Github size={13} />
                  View Repository
                  <ExternalLink size={12} className="opacity-70" />
                </a>
              </div>
            </div>

            <div className="font-mono text-xs text-right">
              <span className="inline-block rounded border border-teal/40 bg-teal/10 px-3 py-1.5 text-teal font-bold text-sm tabular">
                15/15 Pytest Passed
              </span>
              <div className="text-[11px] text-ink-soft mt-0.5">FastAPI + React 18 + Gemini AI</div>
            </div>
          </div>

          {/* Project Purpose Statement */}
          <div className="rounded-lg border border-line bg-bg p-5 space-y-2">
            <div className="font-mono text-xs font-bold text-ink uppercase flex items-center gap-2">
              <Sparkles size={14} className="text-amber" />
              Project Purpose &amp; Pedagogical Architecture
            </div>
            <p className="font-body text-sm text-ink-soft leading-relaxed">
              Mastering German grammatical genders (<strong className="text-blue-600 font-semibold">der</strong>, <strong className="text-rose-600 font-semibold">die</strong>, <strong className="text-emerald-600 font-semibold">das</strong>) and spatial room vocabulary is notoriously unintuitive through traditional rote memorization. This system bridges the gap by combining embodied 2D spatial placement on a <strong className="text-ink font-semibold">60 FPS HTML5 Canvas coordinate grid</strong> with real-time <strong className="text-signal font-semibold">Google Gemini Multimodal Vision</strong>. Learners drag items into their virtual floor plan or scan real physical objects with their camera, receiving instant visual gender color reinforcement, contextual bilingual example sentences, and native Web Speech pronunciation.
            </p>
          </div>

          {/* Technical Features & Live Interactive Pipeline Console */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left: Highlights & Step Trace (5 cols) */}
            <div className="lg:col-span-5 space-y-4 font-body text-sm text-ink-soft">
              <div className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
                Technical Highlights
              </div>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-teal shrink-0 mt-0.5" />
                  <span><strong className="text-ink">60 FPS HTML5 Canvas Engine:</strong> Drag-and-drop 2D spatial coordinate system in React 18 with real-time boundary collision detection and 90° item rotation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-teal shrink-0 mt-0.5" />
                  <span><strong className="text-ink">Multimodal Vision Pipeline:</strong> Integrates Google Gemini Vision to classify real physical room objects from camera/image upload and generate structured vocabulary cards.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-teal shrink-0 mt-0.5" />
                  <span><strong className="text-ink">Pedagogical Gender Badging:</strong> Neurological color association (<span className="text-blue-600 font-semibold">der = Blue</span>, <span className="text-rose-600 font-semibold">die = Red</span>, <span className="text-emerald-600 font-semibold">das = Green</span>) across all item cards and Canvas overlays.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-teal shrink-0 mt-0.5" />
                  <span><strong className="text-ink">Speech &amp; Gamification:</strong> Native German pronunciation via Web Speech API, interactive article quizzes with confetti rewards, and XP progression.</span>
                </li>
              </ul>

              {/* 3-Step Pipeline Flow */}
              <div className="pt-2 border-t border-line/60">
                <div className="font-mono text-[11px] font-bold text-ink uppercase mb-2">Multimodal AI &amp; Spatial Flow:</div>
                <div className="space-y-1.5 font-mono text-xs text-ink-soft">
                  <div><strong className="text-signal">Step 1:</strong> User captures image ➔ Gemini Multimodal Vision extracts object semantics.</div>
                  <div><strong className="text-signal">Step 2:</strong> FastAPI backend assigns grammatical gender, plural forms &amp; generates bilingual examples.</div>
                  <div><strong className="text-signal">Step 3:</strong> React Canvas renders 2D coordinate asset ➔ Web Speech triggers native German audio.</div>
                </div>
              </div>
            </div>

            {/* Right: Live Interactive Multi-Agent Working Pipeline Simulator / Screenshot View (7 cols) */}
            <div className="lg:col-span-7 rounded-xl border border-line bg-ink p-5 space-y-4 shadow-lg select-none text-white font-sans">
              <div className="flex items-center justify-between border-b border-white/15 pb-2.5 font-mono text-xs">
                {/* View Switcher Tabs */}
                <div className="flex items-center gap-1 bg-white/10 p-1 rounded-lg">
                  <button
                    onClick={() => setRoomViewMode("screenshot")}
                    className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all flex items-center gap-1.5 ${
                      roomViewMode === "screenshot"
                        ? "bg-signal text-white shadow-sm"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    <ImageIcon size={13} />
                    Game Screenshot
                  </button>
                  <button
                    onClick={() => setRoomViewMode("interactive")}
                    className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all flex items-center gap-1.5 ${
                      roomViewMode === "interactive"
                        ? "bg-teal text-white shadow-sm"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    <Boxes size={13} />
                    Interactive Room &amp; Vision Console
                  </button>
                </div>
                <span className="text-[11px] text-white/70 hidden sm:inline font-mono">FastAPI + React 18</span>
              </div>

              {/* View 1: Screenshot */}
              {roomViewMode === "screenshot" && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-white/20 bg-black group">
                    <Image
                      src="/images/german-room-builder.png"
                      alt="Virtual Room Builder & German Vocabulary Game Screenshot"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-3">
                      <div className="font-mono text-[11px] text-white/90">
                        <span className="text-amber font-bold">Live UI:</span> 2D Spatial Canvas, Vocabulary Card Inventory, Camera Scanner &amp; Speech Synthesizer
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between font-mono text-[11px] text-white/70 pt-1">
                    <span>FastAPI REST Server · 60 FPS HTML5 Canvas Engine</span>
                    <button
                      onClick={() => setRoomViewMode("interactive")}
                      className="text-teal font-bold hover:underline flex items-center gap-1"
                    >
                      <span>⚡ Test Interactive Item Console</span>
                    </button>
                  </div>
                </div>
              )}

              {/* View 2: Interactive Room & Vision Simulator */}
              {roomViewMode === "interactive" && (
                <div className="space-y-3 animate-fadeIn">
                  {/* Item Presets */}
                  <div className="space-y-1.5">
                    <div className="font-mono text-[10.5px] text-white/60 uppercase tracking-wider">Select Sample Furniture &amp; Vision Objects:</div>
                    <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                      {roomItemsSample.map((item, idx) => (
                        <button
                          key={item.id}
                          onClick={() => handleSelectRoomItem(idx)}
                          className={`px-2.5 py-1 rounded border transition-all ${
                            selectedRoomIndex === idx
                              ? "bg-teal text-white border-teal font-bold shadow-sm"
                              : "bg-white/5 text-white/80 border-white/10 hover:border-white/30"
                          }`}
                        >
                          <span className="opacity-70 mr-1">{item.article}</span>
                          {item.german}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 2D Canvas Viewport Simulator */}
                  <div className="aspect-[16/9] sm:aspect-[16/8] rounded-lg bg-[#0A101D] border border-white/15 p-4 relative flex flex-col justify-between overflow-hidden">
                    {/* Status bar */}
                    <div className="flex items-center justify-between font-mono text-[11px] border-b border-white/10 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                        <span className="text-white/90 font-semibold">
                          GEMINI MULTIMODAL VISION: OBJECT CLASSIFIED
                        </span>
                      </div>
                      <span className="text-teal font-bold">{currentRoomItem.conf}% Conf</span>
                    </div>

                    {/* Room Canvas Object Centerpiece */}
                    <div className="py-2 flex items-center justify-between gap-4">
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded border text-xs font-bold font-mono uppercase ${currentRoomItem.articleColor}`}>
                            {currentRoomItem.article} · {currentRoomItem.genderLabel}
                          </span>
                          <span className="font-mono text-[11px] text-white/60">
                            {currentRoomItem.roomType}
                          </span>
                        </div>

                        <div className="flex items-baseline gap-2">
                          <h4 className="font-display font-bold text-2xl text-white">
                            {currentRoomItem.german}
                          </h4>
                          <span className="text-sm text-white/70">
                            ({currentRoomItem.english})
                          </span>
                          <span className="text-xs font-mono text-white/50">
                            [{currentRoomItem.plural}]
                          </span>
                        </div>

                        <p className="text-xs font-body text-amber-200/90 italic">
                          &quot;{currentRoomItem.exampleDe}&quot;
                        </p>
                        <p className="text-[11px] font-body text-white/60">
                          {currentRoomItem.exampleEn}
                        </p>
                      </div>

                      {/* Visual Item Blueprint Representation with Rotation */}
                      <div className="shrink-0 flex flex-col items-center gap-1">
                        <div
                          className="w-16 h-16 rounded border-2 border-teal/60 bg-teal/10 flex items-center justify-center transition-transform duration-300 shadow-[0_0_12px_rgba(47,158,143,0.3)]"
                          style={{ transform: `rotate(${roomItemRotation}deg)` }}
                        >
                          <Boxes size={28} className="text-teal" />
                        </div>
                        <span className="font-mono text-[10px] text-white/60">
                          {roomItemRotation}° Rotation
                        </span>
                      </div>
                    </div>

                    {/* Bottom Metadata Badges */}
                    <div className="border-t border-white/10 pt-2 flex flex-wrap items-center justify-between font-mono text-[10px] text-white/60 gap-2">
                      <span>Canvas Coord: <strong className="text-teal">{currentRoomItem.coord}</strong></span>
                      <span>Dimensions: <strong className="text-white/80">{currentRoomItem.dimensions}</strong></span>
                      <span>Engine: <strong className="text-teal">60 FPS HTML5 Canvas</strong></span>
                    </div>
                  </div>

                  {/* Simulator Interactive Action Buttons */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleSpeakGerman(`${currentRoomItem.article} ${currentRoomItem.german}`)}
                        disabled={isSpeaking}
                        className="inline-flex items-center gap-1.5 rounded bg-teal px-3.5 py-1.5 font-bold text-white hover:bg-teal/90 transition-all active:scale-95 disabled:opacity-50"
                      >
                        <Volume2 size={13} className={isSpeaking ? "animate-pulse text-amber" : ""} />
                        {isSpeaking ? "Speaking German..." : `Audio: "${currentRoomItem.article} ${currentRoomItem.german}"`}
                      </button>

                      <button
                        onClick={handleRotateRoomItem}
                        className="inline-flex items-center gap-1.5 rounded border border-white/20 bg-white/5 px-3 py-1.5 text-white/90 hover:bg-white/10 hover:border-white/40 transition-all active:scale-95 text-xs font-semibold"
                      >
                        <RotateCw size={12} />
                        Rotate 90°
                      </button>
                    </div>

                    <span className="text-[10px] text-white/60">Native Web Speech API (de-DE)</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Collapsible Technical Details */}
          <TechnicalDetailsCollapse>
            <div className="grid sm:grid-cols-2 gap-4 font-mono text-xs">
              <div>
                <span className="font-bold text-ink block mb-1">Architecture &amp; Microservices:</span>
                <div className="text-ink-soft space-y-0.5 text-[11px]">
                  <div><strong className="text-signal">/backend/app/api :</strong> FastAPI REST endpoints for room items &amp; inventory state</div>
                  <div><strong className="text-signal">/backend/app/services :</strong> Gemini Multimodal Vision &amp; German grammar service</div>
                  <div><strong className="text-signal">/backend/app/models :</strong> SQLAlchemy PostgreSQL schema with Alembic migration versioning</div>
                  <div><strong className="text-signal">/frontend/src/components :</strong> 60 FPS HTML5 Canvas engine, collision detection, Web Speech audio</div>
                </div>
              </div>

              <div className="space-y-2">
                <span className="font-bold text-ink block mb-1">Deployment &amp; Live Verification:</span>
                <div className="rounded border border-line bg-bg p-2.5 text-signal select-all text-[11px]">
                  <code>git clone https://github.com/Nehal-qadeer/Virtual-Room-Builder-German-Game.git &amp;&amp; npm run dev</code>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href="https://github.com/Nehal-qadeer/Virtual-Room-Builder-German-Game"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-signal hover:underline font-bold text-[11px]"
                  >
                    <Code2 size={12} />
                    View GitHub Repo ↗
                  </a>
                  <span className="text-line-strong">·</span>
                  <span className="inline-flex items-center gap-1 text-teal font-bold text-[11px]">
                    <CheckCircle2 size={12} />
                    15/15 Pytest Suite Passing
                  </span>
                </div>
              </div>
            </div>
          </TechnicalDetailsCollapse>

          {/* Tag Row */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-line/60">
            {["FastAPI", "Python 3.10+", "React 18", "HTML5 Canvas (60 FPS)", "Google Gemini Vision", "SQLAlchemy", "PostgreSQL", "Web Speech API", "Tailwind CSS v4", "15/15 Pytest Coverage"].map((t) => (
              <span key={t} className="rounded bg-amber/10 border border-amber/30 px-2.5 py-1 font-mono text-[11px] text-amber-800 dark:text-amber-300 font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Additional Project Cards Grid: Scraping Engine, Satellite Tracker */}
        {/* ========================================================================= */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Project Automation */}
          <article
            id="project-automation"
            style={{ opacity: isHighlighted("project-automation") ? 1 : 0.35, transition: "opacity 200ms ease" }}
            className="rounded-xl border border-line bg-surface p-7 shadow-blueprint relative overflow-hidden transition-all duration-200 lg:hover:-translate-y-1 lg:hover:shadow-[0_12px_28px_rgba(22,35,61,0.08)] flex flex-col justify-between space-y-5"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs font-semibold text-signal uppercase tracking-wider">
                  CLIENT &amp; PERSONAL PROJECTS · 2025–26
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl text-ink">
                  Workflow Automation &amp; Data Pipelines
                </h3>
                <p className="mt-2.5 font-body text-sm text-ink-soft leading-relaxed">
                  Python and Selenium scrapers deployed as scheduled Apify Actors that collect 2,000 to 4,000 records per run from dynamic, JavaScript-heavy websites, such as hotel pricing and ratings from Booking.com. Make.com validates and transforms the JSON before it is loaded into PostgreSQL. For a client, I turned a 40-hour manual lead-research task into a 1-hour script with CRM-ready CSV export. I also built a 4-app Zapier automation with OAuth (Forms → Sheets → Calendar → Gmail).
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                <a
                  href="https://github.com/Nehal-qadeer/Booking-Automation-Selenium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-signal hover:underline font-semibold"
                >
                  <Code2 size={12} />
                  Booking.com Scraper
                  <ExternalLink size={10} />
                </a>
                <span className="text-line-strong">·</span>
                <a
                  href="https://github.com/Nehal-qadeer/Yell-Business-Data-Extractor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-signal hover:underline font-semibold"
                >
                  <Code2 size={12} />
                  Lead-Gen Extractor
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-line">
              {["Python", "Selenium", "Apify", "Make.com", "Zapier", "PostgreSQL", "OAuth 2.0"].map((tag) => (
                <span key={tag} className="rounded bg-signal-dim px-2 py-0.5 font-mono text-[10.5px] text-signal font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Project Satellite */}
          <article
            id="project-satellite"
            style={{ opacity: isHighlighted("project-satellite") ? 1 : 0.35, transition: "opacity 200ms ease" }}
            className="rounded-xl border border-line bg-surface p-7 shadow-blueprint relative overflow-hidden transition-all duration-200 lg:hover:-translate-y-1 lg:hover:shadow-[0_12px_28px_rgba(22,35,61,0.08)] flex flex-col justify-between space-y-5"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs font-semibold text-signal uppercase tracking-wider">
                  UNIVERSITY PROJECT · 2024
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl text-ink">
                  Satellite Tracking System
                </h3>
                <p className="mt-2.5 font-body text-sm text-ink-soft leading-relaxed">
                  A full-stack app that shows live satellite positions on a Google Map. A Node.js and Express backend serves the latest positions from a Redis cache, with MongoDB for stored data, and a React frontend built with Vite displays them on the map.
                </p>
              </div>

              <div className="pt-1 font-mono text-xs">
                <a
                  href="https://github.com/Nehal-qadeer/satellite-trackingsystem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-signal hover:underline font-semibold"
                >
                  <Code2 size={12} />
                  View GitHub Repo ↗
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-line">
              {["Node.js", "Express", "Redis", "MongoDB", "React", "Vite", "Google Maps API"].map((tag) => (
                <span key={tag} className="rounded bg-signal-dim px-2 py-0.5 font-mono text-[10.5px] text-signal font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

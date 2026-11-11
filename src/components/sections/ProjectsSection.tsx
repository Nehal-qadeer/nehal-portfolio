"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Code2,
  Sparkles,
  Gamepad2,
  Eye,
  CheckCircle2,
  RefreshCw,
  ShieldCheck,
  Bot,
  Lock,
  ImageIcon,
  FileText,
  Volume2,
  RotateCw,
  Boxes,
  ChevronDown,
  Github,
  Maximize2,
  Workflow,
} from "lucide-react";
import { useSkillFilter } from "@/context/SkillFilterContext";
import { BorderBeam } from "@/components/magicui/BorderBeam";
import { NumberTicker } from "@/components/magicui/NumberTicker";
import { ProjectDiagram } from "@/components/ui/ProjectDiagram";
import { Lightbox } from "@/components/ui/Lightbox";

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
  // Lightbox State
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
    caption?: string;
  } | null>(null);

  // --- Project 1: Multi-Agent RAG State ---
  const [ragTab, setRagTab] = useState<"screenshot" | "architecture" | "demo">("screenshot");
  const [isRagRunning, setIsRagRunning] = useState(false);
  const [isCryptoShredded, setIsCryptoShredded] = useState(false);
  const [activeRagPreset, setActiveRagPreset] = useState<number>(1);
  const [currentAgentStep, setCurrentAgentStep] = useState<number>(4);

  const ragPresets = {
    1: {
      query: "Under GDPR Article 33, what is the mandatory timeline for breach notifications?",
      answer:
        "Under GDPR Article 33, any security breach involving personal data must be formally reported to the European supervisory authority within 72 hours of detection. All containment logs are immutably preserved in the audit ledger.",
      citation: "Corporate Privacy Manual: Section 3",
      faithfulness: "94.5%",
      relevance: "96.4%",
      latency: "18.2ms",
      piiStatus: "0 PII exposed (Clean)",
      tokens: 192,
      hash: "b46551f7d789bb66",
    },
    2: {
      query: "What is the procedure when a data subject requests GDPR Article 17 Right to Erasure?",
      answer:
        "Upon receipt of an erasure request, the cryptographic key vault immediately shreds the dedicated AES-256 key. All vector embeddings and stored records are cryptographically tombstoned and rendered permanently unrecoverable without rebuilding index partitions.",
      citation: "Corporate Privacy Manual: Section 2",
      faithfulness: "94.5%",
      relevance: "98.1%",
      latency: "16.4ms",
      piiStatus: "0 PII exposed (Encrypted Key Destroyed)",
      tokens: 210,
      hash: "41e946c098804b42",
    },
    3: {
      query: "Who is the designated Data Protection Officer and what are their official contact & tax details?",
      answer:
        "The designated Data Protection Officer is <PERSON_01> (email: <EMAIL_ADDRESS_01>, phone: <PHONE_NUMBER_01>). Official compliance correspondence references Tax ID: <EU_TAX_ID_01> and IBAN: <IBAN_CODE_01>.",
      citation: "Corporate Privacy Manual: Section 1",
      faithfulness: "94.5%",
      relevance: "94.8%",
      latency: "17.8ms",
      piiStatus: "5 Entities Pseudonymized (<PERSON>, <EMAIL>, <PHONE>, <TAX_ID>, <IBAN>)",
      tokens: 184,
      hash: "e3d75d49e4697d98",
    },
    4: {
      query: "What is the proprietary formula for hyper-velocity quantum rocket fuel?",
      answer:
        "Insufficient context in verified enterprise documents to answer this query truthfully. No matching policies or records meet the required confidence threshold. Groundedness gate triggered safe fallback.",
      citation: "0 Citations (Hallucination Blocked)",
      faithfulness: "94.5%",
      relevance: "0.0%",
      latency: "4.2ms",
      piiStatus: "0 PII exposed",
      tokens: 45,
      hash: "7f8832a188bc9910",
    },
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

  // --- Project 2: Master's Thesis State ---
  const [thesisTab, setThesisTab] = useState<"architecture" | "demo">("architecture");
  const [isCvSimulating, setIsCvSimulating] = useState(false);
  const [detectedObj, setDetectedObj] = useState<{
    name: string;
    conf: number;
    fps: number;
    latency: string;
  }>({
    name: "LAPTOP",
    conf: 99.2,
    fps: 28.4,
    latency: "11.6ms",
  });

  const sampleObjects = [
    { name: "LAPTOP", conf: 99.2, fps: 28.4, latency: "11.6ms" },
    { name: "NOTEBOOK", conf: 98.7, fps: 29.1, latency: "10.8ms" },
    { name: "COFFEE MUG", conf: 99.5, fps: 27.8, latency: "12.1ms" },
    { name: "BACKPACK", conf: 97.9, fps: 28.2, latency: "11.4ms" },
    { name: "WALL CLOCK", conf: 99.0, fps: 29.5, latency: "10.5ms" },
  ];

  const handleSimulateCv = () => {
    setIsCvSimulating(true);
    setTimeout(() => {
      const next = sampleObjects[Math.floor(Math.random() * sampleObjects.length)]!;
      setDetectedObj(next);
      setIsCvSimulating(false);
    }, 500);
  };

  // --- Project 3: Virtual Room Builder State ---
  const [roomTab, setRoomTab] = useState<"screenshot" | "architecture" | "demo">("screenshot");
  const [selectedRoomIndex, setSelectedRoomIndex] = useState<number>(0);
  const [roomItemRotation, setRoomItemRotation] = useState<number>(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const roomItemsSample = [
    {
      id: "sofa",
      german: "Sofa",
      article: "das" as const,
      genderLabel: "Neutrum",
      articleColor: "text-signal bg-signal-dim border-signal/30",
      english: "Sofa / Couch",
      plural: "die Sofas",
      exampleDe: "Das bequeme Sofa steht im Wohnzimmer.",
      exampleEn: "The comfortable sofa is in the living room.",
      coord: "X: 240, Y: 180",
      conf: 99.4,
      roomType: "Wohnzimmer (Living Room)",
      dimensions: "120 × 60 px",
    },
    {
      id: "stuhl",
      german: "Stuhl",
      article: "der" as const,
      genderLabel: "Maskulin",
      articleColor: "text-teal bg-teal-dim border-teal/30",
      english: "Chair",
      plural: "die Stühle",
      exampleDe: "Der hölzerne Stuhl steht am Schreibtisch.",
      exampleEn: "The wooden chair is at the desk.",
      coord: "X: 140, Y: 290",
      conf: 98.7,
      roomType: "Esszimmer (Dining Room)",
      dimensions: "50 × 50 px",
    },
    {
      id: "lampe",
      german: "Lampe",
      article: "die" as const,
      genderLabel: "Feminin",
      articleColor: "text-amber bg-amber-dim border-amber/30",
      english: "Floor Lamp",
      plural: "die Lampen",
      exampleDe: "Die helle Lampe beleuchtet den Raum.",
      exampleEn: "The bright lamp illuminates the room.",
      coord: "X: 380, Y: 90",
      conf: 99.1,
      roomType: "Wohnzimmer / Büro",
      dimensions: "40 × 40 px",
    },
    {
      id: "bett",
      german: "Bett",
      article: "das" as const,
      genderLabel: "Neutrum",
      articleColor: "text-signal bg-signal-dim border-signal/30",
      english: "Double Bed",
      plural: "die Betten",
      exampleDe: "Das große Bett hat zwei Kissen.",
      exampleEn: "The large bed has two pillows.",
      coord: "X: 300, Y: 240",
      conf: 99.6,
      roomType: "Schlafzimmer (Bedroom)",
      dimensions: "120 × 100 px",
    },
    {
      id: "schrank",
      german: "Schrank",
      article: "der" as const,
      genderLabel: "Maskulin",
      articleColor: "text-teal bg-teal-dim border-teal/30",
      english: "Wardrobe / Cupboard",
      plural: "die Schränke",
      exampleDe: "Der Schrank bietet praktischen Stauraum.",
      exampleEn: "The wardrobe offers practical storage space.",
      coord: "X: 70, Y: 80",
      conf: 98.2,
      roomType: "Schlafzimmer / Flur",
      dimensions: "100 × 50 px",
    },
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

  const { selectedSkill, setSelectedSkill, isHighlighted } = useSkillFilter();

  return (
    <section id="projects" className="py-20 border-t border-line relative overflow-hidden">
      {/* Lightbox for screenshots */}
      {lightboxImage && (
        <Lightbox
          isOpen={true}
          onClose={() => setLightboxImage(null)}
          src={lightboxImage.src}
          alt={lightboxImage.alt}
          caption={lightboxImage.caption}
        />
      )}

      <div className="max-w-[1040px] mx-auto px-6 md:px-10 space-y-12">
        {/* Section Header with Quick-Jump Pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "0px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal font-semibold">
            <span className="w-4 h-px bg-signal" />
            03 · Selected Projects
          </div>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink tracking-tight">
            Selected projects
          </h2>

          {/* Quick-Jump Navigation Pills (Part 4.5) */}
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              { name: "Multi-Agent RAG", href: "#project-rag" },
              { name: "Master's Thesis (CV)", href: "#project-thesis" },
              { name: "Room Builder", href: "#project-roombuilder" },
              { name: "Automation & Pipelines", href: "#project-automation" },
              { name: "Satellite Tracker", href: "#project-satellite" },
            ].map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="rounded-full bg-surface-2 border border-line px-3.5 py-1.5 font-mono text-xs text-ink-soft hover:border-signal hover:text-signal transition-colors"
              >
                {p.name}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Sticky Filter Active Bar */}
        {selectedSkill && (
          <div className="sticky top-20 z-30 flex items-center justify-between rounded-xl border border-signal bg-surface/95 px-4 py-2.5 backdrop-blur shadow-card transition-all duration-200">
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
        {/* PROJECT 1: Multi-Agent RAG System for Regulated Environments */}
        {/* ========================================================================= */}
        <div
          id="project-rag"
          style={{
            opacity: isHighlighted("project-rag") ? 1 : 0.35,
            transition: "opacity 200ms ease",
          }}
          className="scroll-mt-24 rounded-2xl border border-line bg-surface p-7 sm:p-10 shadow-card relative overflow-hidden space-y-6 transition-all duration-200 lg:hover:-translate-y-1 lg:hover:border-line-strong"
        >
          {/* Moving light beam around RAG card only */}
          <BorderBeam size={280} duration={12} colorFrom="var(--teal)" colorTo="var(--signal)" />

          {/* Header line & metadata */}
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line pb-5">
            <div className="space-y-1.5 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-signal-dim border border-signal/30 px-2.5 py-1 font-mono text-xs font-semibold text-signal">
                <ShieldCheck size={14} />
                FLAGSHIP PROJECT · SOVEREIGN MULTI-AGENT AI &amp; GDPR GOVERNANCE
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink tracking-tight">
                Multi-Agent RAG System for Regulated Environments (GDPR, EU AI Act)
              </h3>
              <p className="font-body text-sm sm:text-base text-ink-soft">
                Autonomous 4-agent RAG engine with Presidio PII pseudonymization, AES-256-GCM cryptographic shredding, and EU AI Act record-keeping.
              </p>
              {/* Prominent External Links (always visible) */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <a
                  href="https://github.com/Nehal-qadeer/eu-compliant-multiagent-rag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-[10px] border border-line-strong bg-surface px-3.5 py-2 font-mono text-xs font-semibold text-ink hover:border-signal hover:text-signal transition-colors shadow-sm"
                >
                  <Github size={13} />
                  View Repository
                  <ExternalLink size={12} className="opacity-70" />
                </a>
                <a
                  href="https://github.com/Nehal-qadeer/eu-compliant-multiagent-rag/blob/main/docs/EU_Compliant_MultiAgent_RAG_Comprehensive_Guide.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-[10px] border border-line bg-surface-2 px-3.5 py-2 font-mono text-xs font-semibold text-signal hover:border-signal transition-colors shadow-sm"
                >
                  <FileText size={13} />
                  Architecture Guide (PDF)
                  <ExternalLink size={12} className="opacity-70" />
                </a>
              </div>
            </div>

            {/* Metric chips */}
            <div className="font-mono text-xs flex flex-col items-start sm:items-end gap-1.5">
              <span className="inline-block rounded-lg border border-signal/30 bg-signal-dim px-3 py-1.5 text-signal font-bold text-sm tabular">
                <NumberTicker value={94.5} decimalPlaces={1} suffix="% RAGAS Faithfulness" />
              </span>
              <span className="inline-block rounded-md bg-signal-dim px-2.5 py-1 text-signal text-xs font-medium">
                Built for EU AI Act record-keeping
              </span>
            </div>
          </div>

          {/* Project Purpose Statement */}
          <div className="rounded-xl border border-line bg-surface-2 p-5 space-y-2">
            <div className="font-mono text-xs font-bold text-ink uppercase flex items-center gap-2">
              <Sparkles size={14} className="text-signal" />
              Project Purpose &amp; Enterprise Impact
            </div>
            <p className="font-body text-sm text-ink-soft leading-relaxed">
              Companies want to use LLMs on internal documents but cannot risk leaking personal data or giving answers nobody can trace. Under GDPR, data protection fines can reach €20 million or 4% of global turnover, and the EU AI Act adds strict record-keeping duties. This system uses a team of four agents (Query Planner, Hybrid Retriever, Verifier, Synthesizer) that cross-check every claim, removes personal data before indexing, and can delete a user&apos;s data on request without rebuilding the index.
            </p>
          </div>

          {/* Media Tab Panel (Screenshot · Architecture · Simulated demo) */}
          <div className="space-y-3">
            {/* Tab switchers */}
            <div className="flex items-center gap-2 border-b border-line pb-2 font-mono text-xs">
              <button
                type="button"
                onClick={() => setRagTab("screenshot")}
                className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                  ragTab === "screenshot"
                    ? "bg-signal text-signal-ink border border-signal shadow-sm"
                    : "bg-transparent text-ink-soft border border-line hover:border-line-strong hover:text-ink"
                }`}
              >
                <ImageIcon size={13} />
                Screenshot
              </button>
              <button
                type="button"
                onClick={() => setRagTab("architecture")}
                className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                  ragTab === "architecture"
                    ? "bg-signal text-signal-ink border border-signal shadow-sm"
                    : "bg-transparent text-ink-soft border border-line hover:border-line-strong hover:text-ink"
                }`}
              >
                <Workflow size={13} />
                Architecture
              </button>
              <button
                type="button"
                onClick={() => setRagTab("demo")}
                className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                  ragTab === "demo"
                    ? "bg-signal text-signal-ink border border-signal shadow-sm"
                    : "bg-transparent text-ink-soft border border-line hover:border-line-strong hover:text-ink"
                }`}
              >
                <Bot size={13} />
                Simulated demo
              </button>
            </div>

            {/* Tab 1: Screenshot with Lightbox */}
            {ragTab === "screenshot" && (
              <div className="space-y-2">
                <div
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/multiagent-rag-dashboard.jpg",
                      alt: "EU-Compliant Multi-Agent RAG Operations Dashboard",
                      caption:
                        "Live UI: Multi-Agent Orchestrator, RAGAS Gauges (94.5%), PII Sanitizer & Crypto-Shredder (Captured from Sovereign EU Runtime)",
                    })
                  }
                  className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-line bg-surface-2 group cursor-pointer"
                >
                  <Image
                    src="/images/multiagent-rag-dashboard.jpg"
                    alt="EU-Compliant Multi-Agent RAG Operations Dashboard"
                    fill
                    className="object-contain"
                    priority
                  />
                  <div className="absolute top-3 right-3 p-2 rounded-lg bg-surface/90 border border-line text-ink backdrop-blur-sm group-hover:border-signal group-hover:text-signal transition-colors shadow-sm">
                    <Maximize2 size={16} />
                  </div>
                </div>
                <p className="font-body text-[13px] text-muted text-center">
                  Live UI: Multi-Agent Orchestrator, RAGAS Gauges (94.5%), PII Sanitizer &amp; Crypto-Shredder (Captured from Sovereign EU Runtime)
                </p>
              </div>
            )}

            {/* Tab 2: Architecture SVG Diagram */}
            {ragTab === "architecture" && <ProjectDiagram type="rag" />}

            {/* Tab 3: Simulated demo console */}
            {ragTab === "demo" && (
              <div className="rounded-xl border border-line bg-surface-2 p-5 space-y-4 shadow-card text-ink font-sans">
                {/* Query Preset Selectors */}
                <div className="space-y-1.5">
                  <div className="font-mono text-xs text-ink-soft uppercase tracking-wider">
                    Test Sample Enterprise Queries:
                  </div>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    <button
                      type="button"
                      onClick={() => handleSelectRagPreset(1)}
                      className={`px-3 py-1.5 rounded-lg border transition-all ${
                        activeRagPreset === 1 && !isCryptoShredded
                          ? "bg-signal text-signal-ink border-signal font-semibold shadow-sm"
                          : "bg-surface text-ink-soft border-line hover:border-line-strong hover:text-ink"
                      }`}
                    >
                      72h Breach Notice
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectRagPreset(2)}
                      className={`px-3 py-1.5 rounded-lg border transition-all ${
                        activeRagPreset === 2 && !isCryptoShredded
                          ? "bg-signal text-signal-ink border-signal font-semibold shadow-sm"
                          : "bg-surface text-ink-soft border-line hover:border-line-strong hover:text-ink"
                      }`}
                    >
                      GDPR Art. 17 Erasure
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectRagPreset(3)}
                      className={`px-3 py-1.5 rounded-lg border transition-all ${
                        activeRagPreset === 3 && !isCryptoShredded
                          ? "bg-signal text-signal-ink border-signal font-semibold shadow-sm"
                          : "bg-surface text-ink-soft border-line hover:border-line-strong hover:text-ink"
                      }`}
                    >
                      DPO Contact &amp; Tax PII
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectRagPreset(4)}
                      className={`px-3 py-1.5 rounded-lg border transition-all ${
                        activeRagPreset === 4 && !isCryptoShredded
                          ? "bg-amber text-signal-ink border-amber font-semibold shadow-sm"
                          : "bg-surface text-ink-soft border-line hover:border-line-strong hover:text-ink"
                      }`}
                    >
                      Hallucination Test
                    </button>
                    <button
                      type="button"
                      onClick={toggleCryptoShred}
                      className={`px-3 py-1.5 rounded-lg border font-semibold transition-all flex items-center gap-1.5 ${
                        isCryptoShredded
                          ? "bg-red-600 text-signal-ink border-red-500 animate-pulse"
                          : "bg-surface text-amber border-line hover:border-amber"
                      }`}
                    >
                      <Lock size={12} />
                      {isCryptoShredded ? "Key Revoked (Click to Restore)" : "Test GDPR Art. 17 Shredding"}
                    </button>
                  </div>
                </div>

                {/* 4-Agent Step Trace */}
                <div className="grid grid-cols-4 gap-1.5 font-mono text-[11px] text-center pt-1">
                  {[
                    { id: 1, label: "1. PLANNER", sub: "Decomposition" },
                    { id: 2, label: "2. RETRIEVER", sub: "Hybrid RRF" },
                    { id: 3, label: "3. VERIFIER", sub: "NLI Grounding" },
                    { id: 4, label: "4. SYNTHESIS", sub: "EU Citations" },
                  ].map((st) => {
                    const isActive = currentAgentStep >= st.id;
                    const isCurrent = currentAgentStep === st.id;
                    return (
                      <div
                        key={st.id}
                        className={`p-2 rounded-lg border transition-all ${
                          isCurrent && isRagRunning
                            ? "bg-signal-dim border-signal text-signal font-bold animate-pulse"
                            : isActive
                            ? "bg-surface border-line-strong text-ink"
                            : "bg-surface/50 border-line text-muted"
                        }`}
                      >
                        <div className="font-bold">{st.label}</div>
                        <div className="text-[10px] text-muted truncate">{st.sub}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Console Output */}
                <div className="aspect-[16/9] sm:aspect-[16/8] rounded-xl bg-surface border border-line p-4 relative flex flex-col justify-between overflow-hidden">
                  <div className="flex items-center justify-between font-mono text-xs border-b border-line pb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isCryptoShredded
                            ? "bg-red-500 animate-ping"
                            : isRagRunning
                            ? "bg-amber animate-spin"
                            : "bg-signal animate-pulse"
                        }`}
                      />
                      <span className="text-ink font-semibold">
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
                      <span className="text-signal font-bold">{activePreset.latency}</span>
                      <span className="font-mono text-[10px] bg-amber-dim text-amber border border-amber/40 px-2 py-0.5 rounded font-semibold">
                        SIMULATED DEMO
                      </span>
                    </div>
                  </div>

                  <div className="py-2 space-y-2 overflow-y-auto max-h-32 font-body text-xs text-ink leading-relaxed">
                    {isCryptoShredded ? (
                      <div className="text-red-600 dark:text-red-400 font-mono text-xs p-2.5 bg-red-500/10 rounded-lg border border-red-500/30">
                        GDPR Right to Erasure Enforcement: Target AES-256 key revoked in KeyVault. All document embeddings and stored vectors are cryptographically tombstoned. Zero unencrypted representations exist.
                      </div>
                    ) : (
                      <>
                        <p>{activePreset.answer}</p>
                        <div className="font-mono text-[11px] text-signal flex items-center gap-1.5 pt-1">
                          <span>Attributed Citation:</span>
                          <span className="bg-signal-dim px-2 py-0.5 rounded border border-signal/20 text-signal font-medium">
                            {activePreset.citation}
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="border-t border-line pt-2 flex flex-wrap items-center justify-between font-mono text-[10.5px] text-muted gap-2">
                    <span>PII: <strong className="text-signal">{activePreset.piiStatus}</strong></span>
                    <span>Faithfulness: <strong className="text-signal">{activePreset.faithfulness}</strong></span>
                    <span>Ledger: <strong className="text-ink">SHA-256:{activePreset.hash}...</strong></span>
                  </div>
                </div>

                {/* Console footer */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1 font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => handleSelectRagPreset(activeRagPreset)}
                    disabled={isRagRunning}
                    className="inline-flex items-center gap-1.5 rounded-[10px] bg-signal px-3.5 py-2 font-semibold text-signal-ink hover:bg-signal-hover transition-all active:scale-95 disabled:opacity-50"
                  >
                    <RefreshCw size={12} className={isRagRunning ? "animate-spin" : ""} />
                    {isRagRunning ? "Processing Query..." : "Re-Run Multi-Agent Pipeline"}
                  </button>
                  <span className="text-muted text-[11px]">Sovereign Boundary · Zero Data Leakage</span>
                </div>
              </div>
            )}
          </div>

          {/* Tech stack chips */}
          <div className="flex flex-wrap gap-2 pt-1 border-t border-line">
            {[
              "FastAPI",
              "Python 3.10+",
              "Multi-Agent Orchestrator",
              "RAGAS (94.5% Faithfulness)",
              "BM25 + Dense Vectors",
              "AES-256-GCM Crypto-Shredding",
              "Presidio PII Redaction",
              "Docker Compose",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full bg-surface-2 border border-line px-3 py-1 font-mono text-xs text-ink-soft font-medium"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Technical Details Collapse (Technical highlights, 3-step pipeline, architecture breakdown) */}
          <TechnicalDetailsCollapse>
            <div className="space-y-6">
              {/* Technical Highlights list */}
              <div>
                <div className="font-mono text-xs font-bold text-ink uppercase tracking-wider mb-3">
                  Technical Highlights
                </div>
                <ul className="space-y-2.5 font-body text-sm text-ink-soft">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-signal shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-ink">Multi-Agent Supervisor:</strong> Autonomous query decomposition, subquery routing, and NLI groundedness verification.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-signal shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-ink">GDPR Art. 17 Crypto-Shredding:</strong> Revoking document AES-256 keys mathematically destroys vector readability instantly without re-indexing.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-signal shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-ink">Hybrid Search (RRF):</strong> Dense semantic embeddings + BM25Okapi merged via Reciprocal Rank Fusion &amp; Cross-Encoder reranking.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-signal shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-ink">EU AI Act Art. 12 Ledger:</strong> Immutable SHA-256 hash-chained JSONL logs with automated citations <code className="text-xs bg-surface-2 px-1 py-0.5 rounded border border-line">[Doc:Section]</code>.
                    </span>
                  </li>
                </ul>
              </div>

              {/* 3-Step Pipeline Flow */}
              <div className="border-t border-line pt-4">
                <div className="font-mono text-xs font-bold text-ink uppercase mb-2">
                  Autonomous Multi-Agent Pipeline:
                </div>
                <div className="space-y-1.5 font-mono text-xs text-ink-soft">
                  <div>
                    <strong className="text-signal">Step 1:</strong> Presidio scans &amp; pseudonymizes PII before vectorization.
                  </div>
                  <div>
                    <strong className="text-signal">Step 2:</strong> Planner decomposes query ➔ Hybrid search ➔ Cross-Encoder rerank.
                  </div>
                  <div>
                    <strong className="text-signal">Step 3:</strong> Verifier checks each claim against sources ➔ Synthesizer adds EU citations.
                  </div>
                </div>
              </div>

              {/* Microservices & Clone command */}
              <div className="grid sm:grid-cols-2 gap-4 font-mono text-xs border-t border-line pt-4">
                <div>
                  <span className="font-bold text-ink block mb-1">Architecture &amp; Microservices:</span>
                  <div className="text-ink-soft space-y-1 text-[11px]">
                    <div><strong className="text-signal">/core :</strong> Security (AES-256-GCM), PII Sanitizer, SHA-256 Ledger</div>
                    <div><strong className="text-signal">/rag :</strong> Chunking, Sovereign Embeddings, Hybrid Search, Reranker</div>
                    <div><strong className="text-signal">/agents :</strong> Query Planner, Verifier (NLI Guard), Synthesizer, Supervisor</div>
                    <div><strong className="text-signal">/eval :</strong> RAGAS Quantitative Metric Evaluation Suite</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="font-bold text-ink block mb-1">Deployment:</span>
                  <div className="rounded-lg border border-line bg-surface-2 p-2.5 text-signal select-all text-[11px]">
                    <code>git clone https://github.com/Nehal-qadeer/eu-compliant-multiagent-rag.git &amp;&amp; docker-compose up -d</code>
                  </div>
                </div>
              </div>
            </div>
          </TechnicalDetailsCollapse>
        </div>

        {/* ========================================================================= */}
        {/* PROJECT 2: Master's Thesis Computer Vision */}
        {/* ========================================================================= */}
        <div
          id="project-thesis"
          style={{
            opacity: isHighlighted("project-thesis") ? 1 : 0.35,
            transition: "opacity 200ms ease",
          }}
          className="scroll-mt-24 rounded-2xl border border-line bg-surface p-7 sm:p-10 shadow-card relative overflow-hidden space-y-6 transition-all duration-200 lg:hover:-translate-y-1 lg:hover:border-line-strong"
        >
          {/* Header line & metadata */}
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line pb-5">
            <div className="space-y-1.5 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-signal-dim border border-signal/30 px-2.5 py-1 font-mono text-xs font-semibold text-signal">
                <Gamepad2 size={13} />
                MASTER&apos;S THESIS PROJECT · SRH HEIDELBERG
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink tracking-tight">
                Object Detection Game for Hearing-Impaired Children (Master&apos;s Thesis)
              </h3>
              <p className="font-body text-sm sm:text-base text-ink-soft">
                An interactive educational tool using AI to bridge the communication gap through visual recognition.
              </p>
              {/* Prominent External Links (always visible) */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <a
                  href="https://github.com/Nehal-qadeer/Object-Detection-Game-for-Hearing-Impaired-Children"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-[10px] border border-line-strong bg-surface px-3.5 py-2 font-mono text-xs font-semibold text-ink hover:border-signal hover:text-signal transition-colors shadow-sm"
                >
                  <Github size={13} />
                  View Repository
                  <ExternalLink size={12} className="opacity-70" />
                </a>
              </div>
            </div>

            {/* Metric chips */}
            <div className="font-mono text-xs flex flex-col items-start sm:items-end gap-1.5">
              <span className="inline-block rounded-lg border border-signal/30 bg-signal-dim px-3 py-1.5 text-signal font-bold text-sm tabular">
                <NumberTicker value={25} decimalPlaces={0} suffix="+ FPS on CPU" />
              </span>
              <span className="inline-block rounded-md bg-signal-dim px-2.5 py-1 text-signal text-xs font-medium">
                Intel OpenVINO Quantized
              </span>
            </div>
          </div>

          {/* Project Purpose Statement */}
          <div className="rounded-xl border border-line bg-surface-2 p-5 space-y-2">
            <div className="font-mono text-xs font-bold text-ink uppercase flex items-center gap-2">
              <Sparkles size={14} className="text-signal" />
              Project Purpose
            </div>
            <p className="font-body text-sm text-ink-soft leading-relaxed">
              This project was developed to help children with hearing impairments learn and identify objects in their surroundings through an engaging <strong className="text-ink font-semibold">&quot;Detection Game.&quot;</strong> Unlike standard detection tools, this is built as an interactive game where the AI scans the live webcam feed, identifies objects based on trained neural models, and displays the names in a large, easy-to-read font to provide immediate visual reinforcement for users who cannot rely on audio cues.
            </p>
          </div>

          {/* Media Tab Panel (Architecture · Simulated demo; default Architecture as no screenshot in repo) */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 border-b border-line pb-2 font-mono text-xs">
              <button
                type="button"
                onClick={() => setThesisTab("architecture")}
                className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                  thesisTab === "architecture"
                    ? "bg-signal text-signal-ink border border-signal shadow-sm"
                    : "bg-transparent text-ink-soft border border-line hover:border-line-strong hover:text-ink"
                }`}
              >
                <Workflow size={13} />
                Architecture
              </button>
              <button
                type="button"
                onClick={() => setThesisTab("demo")}
                className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                  thesisTab === "demo"
                    ? "bg-signal text-signal-ink border border-signal shadow-sm"
                    : "bg-transparent text-ink-soft border border-line hover:border-line-strong hover:text-ink"
                }`}
              >
                <Eye size={13} />
                Simulated demo
              </button>
            </div>

            {/* Tab 1: Architecture SVG Diagram */}
            {thesisTab === "architecture" && <ProjectDiagram type="thesis" />}

            {/* Tab 2: Simulated Viewport Demo */}
            {thesisTab === "demo" && (
              <div className="rounded-xl border border-line bg-surface-2 p-5 space-y-3 shadow-card text-ink select-none font-sans">
                <div className="flex items-center justify-between border-b border-line pb-2.5 font-mono text-xs">
                  <span className="flex items-center gap-1.5 text-signal font-semibold">
                    <Eye size={13} />
                    PyQt6 Viewport
                  </span>
                  <span className="text-xs text-muted">YOLOv8 + OpenVINO</span>
                </div>

                <div className="aspect-[16/10] rounded-xl bg-surface border border-line relative flex flex-col items-center justify-center p-4">
                  <div className="absolute top-2.5 right-2.5 z-20">
                    <span className="font-mono text-[10px] bg-amber-dim text-amber border border-amber/40 px-2 py-0.5 rounded font-semibold">
                      SIMULATED DEMO
                    </span>
                  </div>

                  {/* Scan line */}
                  <div className="absolute inset-x-0 top-1/2 h-0.5 bg-signal opacity-80" />

                  <div className="text-center space-y-1.5 z-10">
                    <div className="inline-block rounded-lg bg-amber px-6 py-2 text-signal-ink font-display text-xl sm:text-2xl font-bold tracking-wide shadow-sm">
                      {detectedObj.name}
                    </div>
                    <div className="font-mono text-xs text-muted flex items-center justify-center gap-2">
                      <span className="text-signal font-semibold">{detectedObj.fps} FPS</span>
                      <span>·</span>
                      <span>{detectedObj.latency}</span>
                      <span>·</span>
                      <span className="text-amber font-semibold">{detectedObj.conf}% Conf</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 font-mono text-xs">
                  <button
                    type="button"
                    onClick={handleSimulateCv}
                    disabled={isCvSimulating}
                    className="inline-flex items-center gap-1.5 rounded-[10px] bg-signal px-3.5 py-2 font-semibold text-signal-ink hover:bg-signal-hover transition-all active:scale-95 disabled:opacity-50"
                  >
                    <RefreshCw size={12} className={isCvSimulating ? "animate-spin" : ""} />
                    {isCvSimulating ? "Detecting..." : "Simulate Detection"}
                  </button>
                  <span className="text-muted text-[11px]">Real-Time CPU Inference</span>
                </div>
              </div>
            )}
          </div>

          {/* Tech stack chips */}
          <div className="flex flex-wrap gap-2 pt-1 border-t border-line">
            {[
              "Python 3.10+",
              "Ultralytics YOLOv8",
              "Intel OpenVINO Toolkit",
              "PyQt6",
              "OpenCV",
              "25+ FPS CPU Optimization",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full bg-surface-2 border border-line px-3 py-1 font-mono text-xs text-ink-soft font-medium"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Technical Details Collapse */}
          <TechnicalDetailsCollapse>
            <div className="space-y-6">
              {/* Technical Highlights list */}
              <div>
                <div className="font-mono text-xs font-bold text-ink uppercase tracking-wider mb-3">
                  Technical Highlights
                </div>
                <ul className="space-y-2.5 font-body text-sm text-ink-soft">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-signal shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-ink">Live Detection:</strong> Real-time object recognition using custom YOLOv8 model.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-signal shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-ink">CPU Optimized:</strong> Integrated with Intel OpenVINO Toolkit to ensure 25+ FPS on standard laptops without a dedicated GPU.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-signal shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-ink">Interactive UI:</strong> Accessible desktop interface built with PyQt6 and OpenCV.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-signal shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-ink">Visual Reinforcement:</strong> Instant large labels upon detection for visual-first learning.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Game loop */}
              <div className="border-t border-line pt-4">
                <div className="font-mono text-xs font-bold text-ink uppercase mb-2">How the Game Works:</div>
                <div className="space-y-1.5 font-mono text-xs text-ink-soft">
                  <div><strong className="text-signal">Step 1:</strong> Child points camera at surrounding object.</div>
                  <div><strong className="text-signal">Step 2:</strong> AI detects object from trained neural library.</div>
                  <div><strong className="text-signal">Step 3:</strong> Game captures object &amp; displays name in large font.</div>
                </div>
              </div>

              {/* Architecture & Command */}
              <div className="grid sm:grid-cols-2 gap-4 font-mono text-xs border-t border-line pt-4">
                <div>
                  <span className="font-bold text-ink block mb-1">Architecture:</span>
                  <div className="text-ink-soft space-y-1 text-[11px]">
                    <div><strong className="text-signal">/Object-Detector :</strong> Core CV logic &amp; inference pipeline</div>
                    <div><strong className="text-signal">/frontend :</strong> Accessible desktop UI in PyQt6</div>
                    <div><strong className="text-signal">/models :</strong> Trained YOLOv8 weights &amp; OpenVINO IR files</div>
                  </div>
                </div>

                <div>
                  <span className="font-bold text-ink block mb-1">Requirements &amp; Setup:</span>
                  <div className="rounded-lg border border-line bg-surface-2 p-2.5 text-signal select-all text-[11px]">
                    <code>pip install opencv-python ultralytics openvino pyqt6</code>
                  </div>
                </div>
              </div>
            </div>
          </TechnicalDetailsCollapse>
        </div>

        {/* ========================================================================= */}
        {/* PROJECT 3: Virtual Room Builder & German Vocabulary Game */}
        {/* ========================================================================= */}
        <div
          id="project-roombuilder"
          style={{
            opacity: isHighlighted("project-roombuilder") ? 1 : 0.35,
            transition: "opacity 200ms ease",
          }}
          className="scroll-mt-24 rounded-2xl border border-line bg-surface p-7 sm:p-10 shadow-card relative overflow-hidden space-y-6 transition-all duration-200 lg:hover:-translate-y-1 lg:hover:border-line-strong"
        >
          {/* Header line & metadata */}
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line pb-5">
            <div className="space-y-1.5 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-signal-dim border border-signal/30 px-2.5 py-1 font-mono text-xs font-semibold text-signal">
                <Sparkles size={14} />
                FULL-STACK AI &amp; COMPUTER VISION · SPATIAL LANGUAGE LEARNING
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink tracking-tight">
                Virtual Room Builder &amp; German Vocabulary Game
              </h3>
              <p className="font-body text-sm sm:text-base text-ink-soft">
                Spatial room construction web application combining a 60 FPS HTML5 Canvas coordinate engine with Google Gemini Multimodal Vision AI.
              </p>
              {/* Prominent External Links (always visible) */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <a
                  href="https://github.com/Nehal-qadeer/Virtual-Room-Builder-German-Game"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-[10px] border border-line-strong bg-surface px-3.5 py-2 font-mono text-xs font-semibold text-ink hover:border-signal hover:text-signal transition-colors shadow-sm"
                >
                  <Github size={13} />
                  View Repository
                  <ExternalLink size={12} className="opacity-70" />
                </a>
              </div>
            </div>

            {/* Metric chips */}
            <div className="font-mono text-xs flex flex-col items-start sm:items-end gap-1.5">
              <span className="inline-block rounded-lg border border-signal/30 bg-signal-dim px-3 py-1.5 text-signal font-bold text-sm tabular">
                15/15 Pytest Passed
              </span>
              <span className="inline-block rounded-md bg-signal-dim px-2.5 py-1 text-signal text-xs font-medium">
                FastAPI + React 18 + Gemini AI
              </span>
            </div>
          </div>

          {/* Project Purpose Statement */}
          <div className="rounded-xl border border-line bg-surface-2 p-5 space-y-2">
            <div className="font-mono text-xs font-bold text-ink uppercase flex items-center gap-2">
              <Sparkles size={14} className="text-signal" />
              Project Purpose &amp; Pedagogical Architecture
            </div>
            <p className="font-body text-sm text-ink-soft leading-relaxed">
              Mastering German grammatical genders (<strong className="text-teal font-semibold">der</strong>, <strong className="text-amber font-semibold">die</strong>, <strong className="text-signal font-semibold">das</strong>) and spatial room vocabulary is notoriously unintuitive through traditional rote memorization. This system bridges the gap by combining embodied 2D spatial placement on a <strong className="text-ink font-semibold">60 FPS HTML5 Canvas coordinate grid</strong> with real-time <strong className="text-signal font-semibold">Google Gemini Multimodal Vision</strong>. Learners drag items into their virtual floor plan or scan real physical objects with their camera, receiving instant visual gender color reinforcement, contextual bilingual example sentences, and native Web Speech pronunciation.
            </p>
          </div>

          {/* Media Tab Panel (Screenshot · Architecture · Interactive demo) */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 border-b border-line pb-2 font-mono text-xs">
              <button
                type="button"
                onClick={() => setRoomTab("screenshot")}
                className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                  roomTab === "screenshot"
                    ? "bg-signal text-signal-ink border border-signal shadow-sm"
                    : "bg-transparent text-ink-soft border border-line hover:border-line-strong hover:text-ink"
                }`}
              >
                <ImageIcon size={13} />
                Screenshot
              </button>
              <button
                type="button"
                onClick={() => setRoomTab("architecture")}
                className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                  roomTab === "architecture"
                    ? "bg-signal text-signal-ink border border-signal shadow-sm"
                    : "bg-transparent text-ink-soft border border-line hover:border-line-strong hover:text-ink"
                }`}
              >
                <Workflow size={13} />
                Architecture
              </button>
              <button
                type="button"
                onClick={() => setRoomTab("demo")}
                className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                  roomTab === "demo"
                    ? "bg-signal text-signal-ink border border-signal shadow-sm"
                    : "bg-transparent text-ink-soft border border-line hover:border-line-strong hover:text-ink"
                }`}
              >
                <Boxes size={13} />
                Interactive demo
              </button>
            </div>

            {/* Tab 1: Screenshot */}
            {roomTab === "screenshot" && (
              <div className="space-y-2">
                <div
                  onClick={() =>
                    setLightboxImage({
                      src: "/images/german-room-builder.png",
                      alt: "Virtual Room Builder & German Vocabulary Game Screenshot",
                      caption:
                        "Live UI: 2D Spatial Canvas, Vocabulary Card Inventory, Camera Scanner & Speech Synthesizer",
                    })
                  }
                  className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-line bg-surface-2 group cursor-pointer"
                >
                  <Image
                    src="/images/german-room-builder.png"
                    alt="Virtual Room Builder & German Vocabulary Game Screenshot"
                    fill
                    className="object-contain"
                    priority
                  />
                  <div className="absolute top-3 right-3 p-2 rounded-lg bg-surface/90 border border-line text-ink backdrop-blur-sm group-hover:border-signal group-hover:text-signal transition-colors shadow-sm">
                    <Maximize2 size={16} />
                  </div>
                </div>
                <p className="font-body text-[13px] text-muted text-center">
                  Live UI: 2D Spatial Canvas, Vocabulary Card Inventory, Camera Scanner &amp; Speech Synthesizer
                </p>
              </div>
            )}

            {/* Tab 2: Architecture SVG Diagram */}
            {roomTab === "architecture" && <ProjectDiagram type="roombuilder" />}

            {/* Tab 3: Interactive Room & Vision Simulator */}
            {roomTab === "demo" && (
              <div className="rounded-xl border border-line bg-surface-2 p-5 space-y-4 shadow-card text-ink select-none font-sans">
                {/* Item Presets */}
                <div className="space-y-1.5">
                  <div className="font-mono text-xs text-ink-soft uppercase tracking-wider">
                    Select Sample Furniture &amp; Vision Objects:
                  </div>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {roomItemsSample.map((item, idx) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleSelectRoomItem(idx)}
                        className={`px-3 py-1.5 rounded-lg border transition-all ${
                          selectedRoomIndex === idx
                            ? "bg-signal text-signal-ink border-signal font-semibold shadow-sm"
                            : "bg-surface text-ink-soft border-line hover:border-line-strong hover:text-ink"
                        }`}
                      >
                        <span className="opacity-70 mr-1">{item.article}</span>
                        {item.german}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2D Canvas Viewport Simulator */}
                <div className="aspect-[16/9] sm:aspect-[16/8] rounded-xl bg-surface border border-line p-4 relative flex flex-col justify-between overflow-hidden">
                  <div className="flex items-center justify-between font-mono text-xs border-b border-line pb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-signal animate-pulse" />
                      <span className="text-ink font-semibold">
                        GEMINI MULTIMODAL VISION: OBJECT CLASSIFIED
                      </span>
                    </div>
                    <span className="text-signal font-bold">{currentRoomItem.conf}% Conf</span>
                  </div>

                  <div className="py-2 flex items-center justify-between gap-4">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-md border text-xs font-bold font-mono uppercase ${currentRoomItem.articleColor}`}>
                          {currentRoomItem.article} · {currentRoomItem.genderLabel}
                        </span>
                        <span className="font-mono text-[11px] text-muted">
                          {currentRoomItem.roomType}
                        </span>
                      </div>

                      <div className="flex items-baseline gap-2 pt-1">
                        <h4 className="font-display font-bold text-xl sm:text-2xl text-ink">
                          {currentRoomItem.german}
                        </h4>
                        <span className="text-sm text-ink-soft">
                          ({currentRoomItem.english})
                        </span>
                        <span className="text-xs font-mono text-muted">
                          [{currentRoomItem.plural}]
                        </span>
                      </div>

                      <p className="text-xs font-body text-signal italic">
                        &quot;{currentRoomItem.exampleDe}&quot;
                      </p>
                      <p className="text-[11px] font-body text-ink-soft">
                        {currentRoomItem.exampleEn}
                      </p>
                    </div>

                    <div className="shrink-0 flex flex-col items-center gap-1">
                      <div
                        className="w-16 h-16 rounded-xl border border-signal bg-signal-dim flex items-center justify-center transition-transform duration-300 shadow-sm"
                        style={{ transform: `rotate(${roomItemRotation}deg)` }}
                      >
                        <Boxes size={28} className="text-signal" />
                      </div>
                      <span className="font-mono text-[10px] text-muted">
                        {roomItemRotation}° Rotation
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-line pt-2 flex flex-wrap items-center justify-between font-mono text-[10.5px] text-muted gap-2">
                    <span>Canvas Coord: <strong className="text-signal">{currentRoomItem.coord}</strong></span>
                    <span>Dimensions: <strong className="text-ink">{currentRoomItem.dimensions}</strong></span>
                    <span>Engine: <strong className="text-signal">60 FPS HTML5 Canvas</strong></span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleSpeakGerman(`${currentRoomItem.article} ${currentRoomItem.german}`)}
                      disabled={isSpeaking}
                      className="inline-flex items-center gap-1.5 rounded-[10px] bg-signal px-3.5 py-2 font-semibold text-signal-ink hover:bg-signal-hover transition-all active:scale-95 disabled:opacity-50"
                    >
                      <Volume2 size={13} className={isSpeaking ? "animate-pulse" : ""} />
                      {isSpeaking ? "Speaking German..." : `Audio: "${currentRoomItem.article} ${currentRoomItem.german}"`}
                    </button>

                    <button
                      type="button"
                      onClick={handleRotateRoomItem}
                      className="inline-flex items-center gap-1.5 rounded-[10px] border border-line-strong bg-surface px-3 py-2 text-ink hover:border-signal transition-all active:scale-95 text-xs font-semibold"
                    >
                      <RotateCw size={12} />
                      Rotate 90°
                    </button>
                  </div>

                  <span className="text-muted text-[11px]">Native Web Speech API (de-DE)</span>
                </div>
              </div>
            )}
          </div>

          {/* Tech stack chips */}
          <div className="flex flex-wrap gap-2 pt-1 border-t border-line">
            {[
              "FastAPI",
              "Python 3.10+",
              "React 18",
              "HTML5 Canvas (60 FPS)",
              "Google Gemini Vision",
              "SQLAlchemy",
              "PostgreSQL",
              "Web Speech API",
              "Tailwind CSS",
              "15/15 Pytest Coverage",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full bg-surface-2 border border-line px-3 py-1 font-mono text-xs text-ink-soft font-medium"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Technical Details Collapse */}
          <TechnicalDetailsCollapse>
            <div className="space-y-6">
              {/* Technical Highlights list */}
              <div>
                <div className="font-mono text-xs font-bold text-ink uppercase tracking-wider mb-3">
                  Technical Highlights
                </div>
                <ul className="space-y-2.5 font-body text-sm text-ink-soft">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-signal shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-ink">60 FPS HTML5 Canvas Engine:</strong> Drag-and-drop 2D spatial coordinate system in React 18 with real-time boundary collision detection and 90° item rotation.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-signal shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-ink">Multimodal Vision Pipeline:</strong> Integrates Google Gemini Vision to classify real physical room objects from camera/image upload and generate structured vocabulary cards.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-signal shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-ink">Pedagogical Gender Badging:</strong> Neurological color association across all item cards and Canvas overlays.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-signal shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-ink">Speech &amp; Gamification:</strong> Native German pronunciation via Web Speech API, interactive article quizzes with confetti rewards, and XP progression.
                    </span>
                  </li>
                </ul>
              </div>

              {/* 3-Step Flow */}
              <div className="border-t border-line pt-4">
                <div className="font-mono text-xs font-bold text-ink uppercase mb-2">Multimodal AI &amp; Spatial Flow:</div>
                <div className="space-y-1.5 font-mono text-xs text-ink-soft">
                  <div><strong className="text-signal">Step 1:</strong> User captures image ➔ Gemini Multimodal Vision extracts object semantics.</div>
                  <div><strong className="text-signal">Step 2:</strong> FastAPI backend assigns grammatical gender, plural forms &amp; generates bilingual examples.</div>
                  <div><strong className="text-signal">Step 3:</strong> React Canvas renders 2D coordinate asset ➔ Web Speech triggers native German audio.</div>
                </div>
              </div>

              {/* Microservices & Clone */}
              <div className="grid sm:grid-cols-2 gap-4 font-mono text-xs border-t border-line pt-4">
                <div>
                  <span className="font-bold text-ink block mb-1">Architecture &amp; Microservices:</span>
                  <div className="text-ink-soft space-y-1 text-[11px]">
                    <div><strong className="text-signal">/backend/app/api :</strong> FastAPI REST endpoints for room items &amp; inventory state</div>
                    <div><strong className="text-signal">/backend/app/services :</strong> Gemini Multimodal Vision &amp; German grammar service</div>
                    <div><strong className="text-signal">/backend/app/models :</strong> SQLAlchemy PostgreSQL schema with Alembic migration versioning</div>
                    <div><strong className="text-signal">/frontend/src/components :</strong> 60 FPS HTML5 Canvas engine, collision detection, Web Speech audio</div>
                  </div>
                </div>

                <div>
                  <span className="font-bold text-ink block mb-1">Deployment &amp; Verification:</span>
                  <div className="rounded-lg border border-line bg-surface-2 p-2.5 text-signal select-all text-[11px]">
                    <code>git clone https://github.com/Nehal-qadeer/Virtual-Room-Builder-German-Game.git &amp;&amp; npm run dev</code>
                  </div>
                </div>
              </div>
            </div>
          </TechnicalDetailsCollapse>
        </div>

        {/* ========================================================================= */}
        {/* PROJECTS 4 & 5: Automation & Pipelines / Satellite Tracker */}
        {/* ========================================================================= */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Project 4: Automation & Pipelines */}
          <article
            id="project-automation"
            style={{
              opacity: isHighlighted("project-automation") ? 1 : 0.35,
              transition: "opacity 200ms ease",
            }}
            className="scroll-mt-24 rounded-2xl border border-line bg-surface p-7 shadow-card relative overflow-hidden transition-all duration-200 lg:hover:-translate-y-1 lg:hover:border-line-strong flex flex-col justify-between space-y-5"
          >
            <div className="space-y-4">
              <span className="font-mono text-xs font-semibold text-signal uppercase tracking-wider block">
                CLIENT &amp; PERSONAL PROJECTS · 2025–26
              </span>

              <div>
                <h3 className="font-display font-bold text-xl text-ink">
                  Workflow Automation &amp; Data Pipelines
                </h3>
                <p className="mt-2 font-body text-sm text-ink-soft leading-relaxed">
                  Python and Selenium scrapers deployed as scheduled Apify Actors that collect 2,000 to 4,000 records per run from dynamic, JavaScript-heavy websites, such as hotel pricing and ratings from Booking.com. Make.com validates and transforms the JSON before it is loaded into PostgreSQL. For a client, I turned a 40-hour manual lead-research task into a 1-hour script with CRM-ready CSV export. I also built a 4-app Zapier automation with OAuth (Forms → Sheets → Calendar → Gmail).
                </p>
              </div>

              {/* Architecture diagram for Automation */}
              <div className="pt-2">
                <ProjectDiagram type="automation" />
              </div>

              <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                <a
                  href="https://github.com/Nehal-qadeer/Booking-Automation-Selenium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-line-strong bg-surface px-3 py-1.5 text-ink hover:border-signal hover:text-signal transition-colors font-semibold"
                >
                  <Code2 size={13} />
                  Booking.com Scraper
                  <ExternalLink size={10} className="opacity-70" />
                </a>
                <a
                  href="https://github.com/Nehal-qadeer/Yell-Business-Data-Extractor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-line-strong bg-surface px-3 py-1.5 text-ink hover:border-signal hover:text-signal transition-colors font-semibold"
                >
                  <Code2 size={13} />
                  Lead-Gen Extractor
                  <ExternalLink size={10} className="opacity-70" />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-line">
              {["Python", "Selenium", "Apify", "Make.com", "Zapier", "PostgreSQL", "OAuth 2.0"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-surface-2 border border-line px-2.5 py-1 font-mono text-xs text-ink-soft font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Project 5: Satellite Tracker */}
          <article
            id="project-satellite"
            style={{
              opacity: isHighlighted("project-satellite") ? 1 : 0.35,
              transition: "opacity 200ms ease",
            }}
            className="scroll-mt-24 rounded-2xl border border-line bg-surface p-7 shadow-card relative overflow-hidden transition-all duration-200 lg:hover:-translate-y-1 lg:hover:border-line-strong flex flex-col justify-between space-y-5"
          >
            <div className="space-y-4">
              <span className="font-mono text-xs font-semibold text-signal uppercase tracking-wider block">
                UNIVERSITY PROJECT · 2024
              </span>

              <div>
                <h3 className="font-display font-bold text-xl text-ink">
                  Satellite Tracking System
                </h3>
                <p className="mt-2 font-body text-sm text-ink-soft leading-relaxed">
                  A full-stack app that shows live satellite positions on a Google Map. A Node.js and Express backend serves the latest positions from a Redis cache, with MongoDB for stored data, and a React frontend built with Vite displays them on the map.
                </p>
              </div>

              {/* Architecture diagram for Satellite Tracker */}
              <div className="pt-2">
                <ProjectDiagram type="satellite" />
              </div>

              <div className="pt-2 font-mono text-xs">
                <a
                  href="https://github.com/Nehal-qadeer/satellite-trackingsystem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-line-strong bg-surface px-3 py-1.5 text-ink hover:border-signal hover:text-signal transition-colors font-semibold"
                >
                  <Code2 size={13} />
                  View GitHub Repo
                  <ExternalLink size={10} className="opacity-70" />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-line">
              {["Node.js", "Express", "Redis", "MongoDB", "React", "Vite", "Google Maps API"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-surface-2 border border-line px-2.5 py-1 font-mono text-xs text-ink-soft font-medium"
                >
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
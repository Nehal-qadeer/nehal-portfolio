"use client";

import { useState, useEffect, useRef } from "react";
import { Terminal, Play, CheckCircle2, Cpu, Database, Workflow, RefreshCw, Sparkles } from "lucide-react";

interface LogMessage {
  text: string;
  type: "info" | "success" | "warn" | "accent";
}

const DEMOS = {
  cv: {
    id: "cv",
    title: "CV & OpenVINO Pipeline",
    icon: Cpu,
    color: "text-verify",
    logs: [
      { text: "$ python3 -m vision.verify --model=resnet_quantized --backend=openvino", type: "accent" },
      { text: "➔ Loading OpenCV video stream [1920x1080 @ 60fps]... OK", type: "info" },
      { text: "➔ Applying morphological filtering & tensor normalization... DONE", type: "info" },
      { text: "➔ Running Intel OpenVINO Inference Engine (INT8 Precision)...", type: "info" },
      { text: "✔ Inference Completed: 11.4ms (Baseline: 16.3ms → 30.1% speedup)", type: "success" },
      { text: "✔ Classification Result: VERIFIED [Confidence: 99.4%]", type: "success" },
      { text: "✔ Docker container health check: HEALTHY (Memory: 142MB)", type: "success" }
    ]
  },
  scraper: {
    id: "scraper",
    title: "Selenium & Apify Harvester",
    icon: Database,
    color: "text-signal",
    logs: [
      { text: "$ apify run actor/python-selenium-scraper --target=commercial_leads", type: "accent" },
      { text: "➔ Initializing Selenium Chrome Headless container... OK", type: "info" },
      { text: "➔ Dynamic JS pagination & anti-bot bypass executed... SUCCESS", type: "info" },
      { text: "➔ Extracting commercial entities: [Company, Contact, Revenue, Phone]", type: "info" },
      { text: "✔ Harvested 3,480 verified records across North America", type: "success" },
      { text: "➔ Make.com scenario: JSON transform & schema validation... PASSED", type: "info" },
      { text: "✔ PostgreSQL batch upsert completed: 3,480 rows committed (0 errors)", type: "success" }
    ]
  },
  zapier: {
    id: "zapier",
    title: "Zapier & OAuth Automator",
    icon: Workflow,
    color: "text-blue-400",
    logs: [
      { text: "$ webhook dispatch /api/v1/zapier/application_event", type: "accent" },
      { text: "➔ Ingesting Google Form payload via OAuth 2.0 token... AUTH OK", type: "info" },
      { text: "➔ Executing inline transformation formulas... MAPPED 8 FIELDS", type: "info" },
      { text: "✔ Appended structured row to Google Sheets master tracker", type: "success" },
      { text: "✔ Scheduled follow-up calendar event in Google Calendar", type: "success" },
      { text: "✔ Dispatched customized Gmail confirmation notification", type: "success" },
      { text: "✔ End-to-end multi-app pipeline execution time: 420ms", type: "success" }
    ]
  }
};

export function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState<keyof typeof DEMOS>("cv");
  const [displayedLogs, setDisplayedLogs] = useState<LogMessage[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const runSimulation = (tabKey: keyof typeof DEMOS) => {
    setActiveTab(tabKey);
    setDisplayedLogs([]);
    setIsRunning(true);

    const demo = DEMOS[tabKey];
    demo.logs.forEach((log, index) => {
      setTimeout(() => {
        setDisplayedLogs((prev) => [...prev, log as LogMessage]);
        if (index === demo.logs.length - 1) {
          setIsRunning(false);
        }
      }, (index + 1) * 320);
    });
  };

  useEffect(() => {
    runSimulation("cv");
  }, []);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [displayedLogs]);

  return (
    <div className="w-full rounded-2xl border border-line/80 bg-panel/95 shadow-2xl backdrop-blur-xl overflow-hidden">
      {/* Terminal Top Window Bar */}
      <div className="flex items-center justify-between border-b border-line bg-ink/70 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-2 font-data text-xs text-text-muted flex items-center gap-1.5 font-medium">
            <Terminal size={13} className="text-signal" />
            nehal@pipeline-engine:~$
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1 font-data text-[10px] text-verify">
            <span className="h-1.5 w-1.5 rounded-full bg-verify animate-pulse" />
            ONLINE
          </span>
          <button
            onClick={() => runSimulation(activeTab)}
            disabled={isRunning}
            className="flex items-center gap-1 rounded border border-line bg-panel px-2 py-1 font-data text-[11px] text-text-muted hover:text-signal hover:border-signal transition-colors disabled:opacity-50"
            title="Re-run Simulation"
          >
            <RefreshCw size={11} className={isRunning ? "animate-spin text-signal" : ""} />
            Re-run
          </button>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="flex flex-wrap gap-1.5 border-b border-line bg-panel-raised/60 p-2">
        {Object.entries(DEMOS).map(([key, item]) => {
          const Icon = item.icon;
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              onClick={() => runSimulation(key as keyof typeof DEMOS)}
              disabled={isRunning}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-data text-xs font-medium transition-all ${
                isActive
                  ? "bg-signal text-ink shadow-md font-semibold"
                  : "text-text-muted hover:bg-panel hover:text-text"
              }`}
            >
              <Icon size={13} />
              {item.title}
            </button>
          );
        })}
      </div>

      {/* Terminal Output Body */}
      <div className="h-64 sm:h-72 overflow-y-auto p-4 sm:p-5 font-data text-xs space-y-2 bg-ink/90">
        {displayedLogs.map((log, i) => (
          <div
            key={i}
            className={`flex items-start gap-2 leading-relaxed animate-fadeIn ${
              log.type === "accent"
                ? "text-signal font-semibold"
                : log.type === "success"
                  ? "text-verify"
                  : log.type === "warn"
                    ? "text-amber-400"
                    : "text-text-muted"
            }`}
          >
            <span className="text-text-faint select-none shrink-0">&gt;</span>
            <span className="break-all">{log.text}</span>
          </div>
        ))}

        {isRunning && (
          <div className="flex items-center gap-2 text-signal pt-1 font-data text-xs">
            <span className="h-2 w-2 rounded-full bg-signal animate-ping shrink-0" />
            <span>Processing execution pipeline...</span>
          </div>
        )}

        {!isRunning && displayedLogs.length > 0 && (
          <div className="mt-3 pt-3 border-t border-line/50 flex items-center justify-between font-data text-[11px] text-text-faint">
            <span className="text-verify flex items-center gap-1">
              <CheckCircle2 size={12} /> Execution successful · 0 warnings
            </span>
            <span className="hidden sm:inline">Click tabs above to test other pipelines</span>
          </div>
        )}

        <div ref={terminalEndRef} />
      </div>
    </div>
  );
}

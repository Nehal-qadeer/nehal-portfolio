export interface Project {
  slug: string;
  title: string;
  badge: string;
  role: string;
  metric: string;
  metricDesc: string;
  summary: string;
  purpose?: string;
  features: string[];
  techStack: string[];
  gameSteps?: { step: string; title: string; desc: string }[];
  repoStructure?: { dir: string; desc: string }[];
  installCommand?: string;
  repos: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    slug: "eu-multiagent-rag",
    title: "🛡️ Enterprise EU-Compliant Multi-Agent RAG System",
    badge: "Autonomous Multi-Agent AI · Sovereign RAG & GDPR Governance",
    role: "Multi-Agent Architecture & Full-Stack RAG Engineering",
    metric: "94.5% Faithfulness",
    metricDesc: "RAGAS Triad Benchmarked",
    summary:
      "A privacy-first, enterprise RAG platform powered by a coordinated 4-agent team (Planner, Hybrid Retriever, Verifier, Synthesizer) with Microsoft Presidio PII pseudonymization, GDPR Article 17 cryptographic shredding, and EU AI Act transparency scaffolding.",
    purpose:
      "Engineered to solve hallucination, sovereignty, and data privacy challenges in enterprise AI adoption through Technical & Organizational Measures (TOMs) by Design under European GDPR and EU AI Act frameworks.",
    features: [
      "Multi-Agent Supervisor: Autonomous query decomposition, hybrid retrieval coordination, and DeBERTa NLI factual consistency gates.",
      "GDPR Article 17 Crypto-Shredding: Instant key revocation via AES-256-GCM, permanently destroying vector searchability without index rebuilds.",
      "Hybrid Retrieval & Reranker: SentenceTransformers dense vectors + BM25Okapi combined via Reciprocal Rank Fusion (RRF) and Cross-Encoder attention scoring.",
      "EU AI Act Transparency: Immutable SHA-256 hash-chained audit ledger (Art. 12) and explicit citation watermarking (Art. 50)."
    ],
    installCommand: "git clone https://github.com/Nehal-qadeer/eu-compliant-multiagent-rag.git && python -m venv .venv",
    techStack: ["FastAPI", "Python 3.10", "Microsoft Presidio", "SentenceTransformers", "DeBERTa NLI", "BM25Okapi", "AES-256-GCM", "Docker"],
    repos: [
      { label: "GitHub Repository (EU Sovereign RAG)", url: "https://github.com/Nehal-qadeer/eu-compliant-multiagent-rag" }
    ]
  },
  {
    slug: "object-detection-game",
    title: "🎮 Object Detection Game for Hearing-Impaired Children",
    badge: "Master's Thesis · AI Assistive Education",
    role: "Computer Vision & CPU Optimization",
    metric: "25+ FPS",
    metricDesc: "CPU Optimized (Intel OpenVINO)",
    summary:
      "An interactive educational tool using AI to bridge the communication gap through visual recognition. Built as an engaging detection game for children with hearing impairments to learn and identify surrounding objects without relying on audio cues.",
    purpose:
      "Developed to help children with hearing impairments learn and identify objects in their surroundings through an engaging 'Detection Game' providing instant visual reinforcement.",
    features: [
      "Live Detection: Real-time object recognition using a custom YOLOv8 model.",
      "CPU Optimized: Integrated with Intel OpenVINO Toolkit to ensure 25+ FPS smooth gameplay on standard laptops without needing a dedicated GPU.",
      "Interactive UI: User-friendly, accessible desktop interface built with PyQt6 and OpenCV.",
      "Learning Reinforcement: Immediate large visual labels upon detection, providing effective educational reinforcement."
    ],
    gameSteps: [
      { step: "Step 01", title: "Target Environment", desc: "The child points the webcam/camera at an everyday object in their surroundings." },
      { step: "Step 02", title: "YOLOv8 + OpenVINO Inference", desc: "The AI detects the object in real-time from its saved library of trained neural models at 25+ FPS on standard CPU." },
      { step: "Step 03", title: "Visual Capture & Label", desc: "The game 'captures' the object and displays the name in a large, easy-to-read font for clear visual reinforcement." }
    ],
    repoStructure: [
      { dir: "/Object-Detector", desc: "Core computer vision logic & YOLOv8/OpenVINO inference pipeline" },
      { dir: "/frontend", desc: "Accessible desktop graphical user interface built with PyQt6" },
      { dir: "/models", desc: "Trained YOLOv8 weights and OpenVINO IR optimized files" }
    ],
    installCommand: "pip install opencv-python ultralytics openvino pyqt6",
    techStack: ["Python 3.10+", "Ultralytics YOLOv8", "Intel OpenVINO", "PyQt6", "OpenCV"],
    repos: [
      { label: "Master's Thesis YOLOv8 Repository", url: "https://github.com/Nehal-qadeer/Object-Detection-Game-for-Hearing-Impaired-Children" }
    ]
  },
  {
    slug: "scraping-engine",
    title: "Multi-Platform Scraping & Ingestion Engine",
    badge: "Production Data Architecture",
    role: "Python Automation & Cloud Pipelines",
    metric: "2K–4K Records",
    metricDesc: "Harvested per Run",
    summary:
      "High-throughput automated data harvesting infrastructure. Deploys custom Python Selenium scrapers as cloud Apify Actors with automated cron triggers, Make.com JSON validation, and direct PostgreSQL relational database storage.",
    features: [
      "Deployed custom Python Selenium scrapers as cloud Apify Actors with dynamic pagination & robust handling of dynamic pages.",
      "Engineered Make.com scenarios with JSON transformation logic to parse, clean, and validate payloads.",
      "Wired storage directly into PostgreSQL relational databases to power analytical dashboards."
    ],
    techStack: ["Python 3", "Selenium WebDriver", "Apify REST API", "Make.com", "PostgreSQL"],
    repos: [
      { label: "Booking.com Dynamic Scraper", url: "https://github.com/Nehal-qadeer/Booking-Automation-Selenium" },
      { label: "Lead-Gen Business Extractor", url: "https://github.com/Nehal-qadeer/Yell-Business-Data-Extractor" }
    ]
  },
  {
    slug: "automation-satellite",
    title: "Application Tracker Automation & Satellite Tracking System",
    badge: "Full-Stack Caching & Process Flow",
    role: "Systems Integration & Real-Time State",
    metric: "Real-Time / 100%",
    metricDesc: "Automated & Redis Cached",
    summary:
      "Dual systems engineering: A 4-step multi-app Zapier workflow with OAuth webhooks (Forms ➔ Sheets ➔ Calendar ➔ Gmail) combined with a full-stack real-time Satellite Tracking system leveraging Node.js, React, and Redis as the distributed state and cache layer.",
    features: [
      "Architected 4-app Zapier automation pipeline: Google Forms ➔ Sheets ➔ Calendar ➔ Gmail with inline formula mapping.",
      "Configured multi-account OAuth authentication with end-to-end data integrity validation.",
      "Built full-stack real-time tracking architecture using Redis as the shared caching/state layer between Node.js backend and React client."
    ],
    techStack: ["Zapier", "OAuth 2.0", "Google Workspace APIs", "Node.js", "React", "Redis"],
    repos: [
      { label: "Satellite Tracking System", url: "https://github.com/Nehal-qadeer/satellite-trackingsystem" }
    ]
  },
  {
    slug: "virtual-room-builder-german-game",
    title: "Virtual Room Builder & German Vocabulary Game",
    badge: "Full-Stack AI & Educational Gaming",
    role: "Lead Architecture & Computer Vision",
    metric: "15/15 Tests",
    metricDesc: "FastAPI + React 18 + Gemini AI",
    summary:
      "Interactive German language learning application combining spatial virtual room construction with Computer Vision. Features an asynchronous FastAPI backend, a 60 FPS HTML5 Canvas drag-and-drop grid in React 18, and Google Gemini Multimodal Vision AI to identify physical room objects and generate grammatical gender (der, die, das), plurals, and contextual sentences with native audio pronunciation.",
    features: [
      "Interactive 2D Room Grid: 60 FPS HTML5 Canvas engine with smooth drag-and-drop, boundary collision prevention, and 90° item rotation.",
      "Pedagogical Gender Color Association: Visual reinforcement using color-coded badges (der = Blue, die = Red, das = Green).",
      "Computer Vision & Multimodal AI: Live webcam and image scanner powered by Google Gemini Vision to turn real physical objects into German vocabulary cards.",
      "Audio & Gamification: Native German pronunciation via Web Speech API, interactive article quizzes with confetti celebrations, and XP leveling."
    ],
    techStack: ["Python 3.10+", "FastAPI", "React 18", "HTML5 Canvas", "Google Gemini Vision", "SQLAlchemy", "PostgreSQL", "Tailwind CSS v4"],
    repos: [
      { label: "Virtual Room Builder Game", url: "https://github.com/Nehal-qadeer/Virtual-Room-Builder-German-Game" }
    ]
  }
];


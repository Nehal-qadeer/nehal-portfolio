import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--bg)",
          dark: "#0B1120"
        },
        surface: {
          DEFAULT: "var(--surface)",
          dark: "#111A2E"
        },
        ink: {
          DEFAULT: "var(--ink)",
          soft: "var(--ink-soft)",
          light: "var(--line-strong)"
        },
        line: {
          DEFAULT: "var(--line)",
          strong: "var(--line-strong)",
          subtle: "rgba(30, 41, 59, 0.6)"
        },
        signal: {
          DEFAULT: "var(--signal)",
          dim: "var(--signal-dim)",
          hover: "#2563EB"
        },
        teal: {
          DEFAULT: "var(--teal)",
          dim: "rgba(20, 184, 166, 0.15)"
        },
        amber: {
          DEFAULT: "var(--amber)",
          dim: "rgba(245, 158, 11, 0.15)"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
        mono: ["var(--font-data)", "JetBrains Mono", "monospace"],
        data: ["var(--font-data)", "JetBrains Mono", "monospace"]
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      boxShadow: {
        blueprint: "0 4px 20px -8px rgba(22, 35, 61, 0.12)",
        "blueprint-lg": "0 14px 32px -12px rgba(22, 35, 61, 0.18)",
        glow: "0 0 24px -4px rgba(43, 108, 176, 0.25)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;

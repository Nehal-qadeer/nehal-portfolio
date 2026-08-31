import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#EDF1F6",
          dark: "#0D1420"
        },
        surface: {
          DEFAULT: "#FFFFFF",
          dark: "#141C2B"
        },
        ink: {
          DEFAULT: "#16233D",
          soft: "#4A5A76",
          light: "#A6B6C9"
        },
        line: {
          DEFAULT: "#C7D3E0",
          strong: "#A6B6C9",
          subtle: "rgba(199, 211, 224, 0.6)"
        },
        signal: {
          DEFAULT: "#2B6CB0",
          dim: "#E4ECF6",
          hover: "#1A4971"
        },
        teal: {
          DEFAULT: "#2F9E8F",
          dim: "rgba(47, 158, 143, 0.12)"
        },
        amber: {
          DEFAULT: "#E8A33D",
          dim: "rgba(232, 163, 61, 0.15)"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
        mono: ["var(--font-data)", "JetBrains Mono", "monospace"],
        data: ["var(--font-data)", "JetBrains Mono", "monospace"]
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

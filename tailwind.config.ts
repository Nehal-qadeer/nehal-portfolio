import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: {
          DEFAULT: "var(--surface)",
          2: "var(--surface-2)"
        },
        ink: {
          DEFAULT: "var(--ink)",
          soft: "var(--ink-soft)"
        },
        muted: "var(--muted)",
        line: {
          DEFAULT: "var(--line)",
          strong: "var(--line-strong)"
        },
        signal: {
          DEFAULT: "var(--signal)",
          hover: "var(--signal-hover)",
          dim: "var(--signal-dim)",
          ink: "var(--signal-ink)"
        },
        teal: {
          DEFAULT: "var(--teal)",
          dim: "var(--teal-dim)"
        },
        amber: {
          DEFAULT: "var(--amber)",
          dim: "var(--amber-dim)"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Plus Jakarta Sans", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
        mono: ["var(--font-data)", "JetBrains Mono", "monospace"],
        data: ["var(--font-data)", "JetBrains Mono", "monospace"]
      },
      boxShadow: {
        card: "var(--shadow-card)",
        blueprint: "var(--shadow-card)",
        "blueprint-lg": "var(--shadow-card)"
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
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        panel: "var(--color-panel)",
        "panel-raised": "var(--color-panel-raised)",
        line: "var(--color-line)",
        text: {
          DEFAULT: "var(--color-text)",
          muted: "var(--color-text-muted)",
          faint: "var(--color-text-faint)"
        },
        signal: {
          DEFAULT: "var(--color-signal)",
          dim: "var(--color-signal-dim)"
        },
        verify: {
          DEFAULT: "var(--color-verify)",
          dim: "var(--color-verify-dim)"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        data: ["var(--font-data)", "monospace"]
      },
      fontSize: {
        "display-1": ["clamp(3.5rem, 9vw, 8.5rem)", { lineHeight: "0.94", letterSpacing: "-0.03em" }],
        "display-2": ["clamp(2.25rem, 5vw, 4.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-3": ["clamp(1.5rem, 2.6vw, 2.25rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }]
      },
      maxWidth: {
        prose: "38rem"
      },
      backgroundImage: {
        "grid-fine": "linear-gradient(to right, var(--tw-grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--tw-grid-line) 1px, transparent 1px)"
      },
      transitionTimingFunction: {
        signal: "cubic-bezier(0.16, 1, 0.3, 1)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;

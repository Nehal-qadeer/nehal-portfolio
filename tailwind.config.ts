import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0D1420",
        panel: "#141C2B",
        "panel-raised": "#1B2438",
        line: "#24304A",
        text: {
          DEFAULT: "#EDF1F7",
          muted: "#8C99AF",
          faint: "#5B6780"
        },
        signal: {
          DEFAULT: "#E8A33D",
          dim: "#8A6428"
        },
        verify: {
          DEFAULT: "#6FE3D9",
          dim: "#3D8B84"
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

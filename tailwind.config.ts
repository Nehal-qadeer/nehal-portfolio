import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0B0C10",
        surface: {
          DEFAULT: "#1F2833",
          raised: "#263242",
          dark: "#141A22"
        },
        cyan: {
          DEFAULT: "#66FCF1",
          electric: "#66FCF1",
          steel: "#45A29E",
          dim: "rgba(102, 252, 241, 0.15)"
        },
        text: {
          DEFAULT: "#FFFFFF",
          muted: "#C5C6C7",
          faint: "#6D7E8F"
        },
        line: {
          DEFAULT: "rgba(102, 252, 241, 0.12)",
          subtle: "rgba(69, 162, 158, 0.2)",
          solid: "#1F2833"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        data: ["var(--font-data)", "monospace"]
      },
      backgroundImage: {
        "cyan-glow": "radial-gradient(ellipse at center, rgba(102, 252, 241, 0.15) 0%, transparent 70%)",
        "mesh-obsidian": "linear-gradient(to bottom, #0B0C10, #141A22)"
      },
      boxShadow: {
        cyan: "0 0 25px -5px rgba(102, 252, 241, 0.25)",
        "cyan-sm": "0 0 15px -3px rgba(102, 252, 241, 0.2)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;

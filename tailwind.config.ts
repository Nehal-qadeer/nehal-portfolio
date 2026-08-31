import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: {
          DEFAULT: "#0B0C10",
          dark: "#07080A"
        },
        charcoal: {
          DEFAULT: "#1F2833",
          light: "#2A3644",
          dark: "#141A22"
        },
        amber: {
          DEFAULT: "#E5A93C",
          gold: "#E5A93C",
          dim: "rgba(229, 169, 60, 0.15)",
          subtle: "rgba(229, 169, 60, 0.08)"
        },
        ice: {
          DEFAULT: "#45A29E",
          dim: "rgba(69, 162, 158, 0.15)"
        },
        bone: {
          DEFAULT: "#F4F4F5",
          pure: "#FFFFFF"
        },
        ash: {
          DEFAULT: "#A1A1AA",
          dark: "#71717A",
          faint: "#52525B"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-data)", "monospace"],
        data: ["var(--font-data)", "monospace"]
      },
      boxShadow: {
        amber: "0 0 25px -5px rgba(229, 169, 60, 0.25)",
        "amber-sm": "0 0 15px -3px rgba(229, 169, 60, 0.18)",
        keycap: "0 8px 16px -2px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;

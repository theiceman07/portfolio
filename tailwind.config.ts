import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0B",
        foreground: "#d1d1d6",
        heading: "#f5f5f5",
        accent: {
          DEFAULT: "#a8c8e8",
          muted: "rgba(168, 200, 232, 0.15)",
        },
        status: {
          DEFAULT: "#e8a33d",
          muted: "rgba(232, 163, 61, 0.15)",
        },
        steel: {
          DEFAULT: "#a8b8c8",
          muted: "rgba(168, 184, 200, 0.2)",
        },
        glass: {
          border: "rgba(255, 255, 255, 0.06)",
          bg: "rgba(8, 8, 14, 0.75)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
        display: ["var(--font-space)", "system-ui", "sans-serif"],
      },
      animation: {
        ticker: "ticker 40s linear infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;

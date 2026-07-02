import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Julia's brand palette — teal + deep violet on a bright, airy base.
        ink: {
          DEFAULT: "#15333b",
          soft: "#1d4651",
          muted: "#4d6b73",
        },
        paper: {
          DEFAULT: "#ffffff",
          warm: "#f4fafb",
          tint: "#eef6f7",
          deep: "#d9ebef",
        },
        teal: {
          DEFAULT: "#2f8499",
          deep: "#235e6e",
          light: "#6fa7b8",
          tint: "#d9ebef",
        },
        violet: {
          DEFAULT: "#3b1d8f",
          bright: "#5a36c9",
          soft: "#ebe4fb",
        },
        // Legacy accent aliases mapped onto the brand palette so every
        // component picks up the rebrand without stray off-brand colours.
        coral: "#2f8499",
        marigold: "#5a36c9",
        lilac: "#6fa7b8",
        blush: "#ebe4fb",
      },
      fontFamily: {
        display: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        ultra: "0.4em",
        wider2: "0.18em",
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "0.9" }],
        "11xl": ["13rem", { lineHeight: "0.86" }],
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
        smooth: "cubic-bezier(0.65, 0.05, 0, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        spinslow: {
          to: { transform: "rotate(360deg)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        "marquee-reverse": "marquee-reverse 46s linear infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 8s ease infinite",
        spinslow: "spinslow 22s linear infinite",
        blink: "blink 1.1s step-end infinite",
      },
      backgroundImage: {
        spectrum: "linear-gradient(100deg,#3b1d8f,#5a36c9,#2f8499,#6fa7b8)",
      },
    },
  },
  plugins: [],
};

export default config;

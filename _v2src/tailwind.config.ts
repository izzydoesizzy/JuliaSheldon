import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm editorial palette — deep plum ink on warm cream paper.
        ink: {
          DEFAULT: "#1c1018",
          soft: "#2a1a24",
          muted: "#4a3540",
        },
        paper: {
          DEFAULT: "#f6efe6",
          warm: "#efe4d4",
          deep: "#e7d8c4",
        },
        plum: "#3a1f33",
        blush: "#f4b9c4",
        coral: "#ff6b5e",
        peach: "#ffae8f",
        marigold: "#ffc857",
        lilac: "#b58bd6",
        sky: "#7ec8e3",
        sage: "#8fc7a0",
      },
      fontFamily: {
        display: ["Syne", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["'Plus Jakarta Sans'", "ui-sans-serif", "system-ui", "sans-serif"],
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
        spectrum:
          "linear-gradient(90deg,#ff6b5e,#ffc857,#8fc7a0,#7ec8e3,#b58bd6,#f4b9c4)",
      },
    },
  },
  plugins: [],
};

export default config;

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
        space: {
          dark:     "#06080f",
          navy:     "#0a1628",
          card:     "#0d1830",
          border:   "rgba(255,255,255,0.07)",
        },
        accent: {
          purple: "#6c47ff",
          blue:   "#4477ff",
          green:  "#4ade80",
          red:    "#f87171",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "space-hero": `
          radial-gradient(ellipse 120% 60% at 50% -10%, rgba(60,80,180,0.35) 0%, transparent 65%),
          radial-gradient(ellipse 80% 40% at 80% 110%, rgba(30,50,140,0.25) 0%, transparent 60%),
          radial-gradient(ellipse 60% 30% at 20% 100%, rgba(40,30,120,0.2) 0%, transparent 50%)
        `,
        "card-gradient": "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 100%)",
      },
      animation: {
        float:              "float 6s ease-in-out infinite",
        float2:             "float 8s ease-in-out infinite 1s",
        float3:             "float 7s ease-in-out infinite 2s",
        twinkle:            "twinkle 3s ease-in-out infinite",
        "spin-slow":        "spin-cw 40s linear infinite",
        "spin-slow-reverse":"spin-ccw 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.4" },
          "50%":      { opacity: "1" },
        },
        "spin-cw": {
          "0%":   { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-ccw": {
          "0%":   { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

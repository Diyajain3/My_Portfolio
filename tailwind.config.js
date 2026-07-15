/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#06120D",
        surface: "#0E211A",
        line: "#1C3D2E",
        accent: "#34D399",
        "accent-deep": "#0B4A31",
        cream: "#F1FBF6",
        muted: "#7FA491",
        body: "#B9CFC3",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'Antic Slab'", "serif"],
      },
      keyframes: {
        riseIn: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseDot: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(52,211,153,0.45)" },
          "50%": { boxShadow: "0 0 0 8px rgba(52,211,153,0)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        growLine: {
          from: { transform: "scaleY(0)" },
          to: { transform: "scaleY(1)" },
        },
      },
      animation: {
        riseIn: "riseIn 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
        pulseDot: "pulseDot 2.4s ease-out infinite",
        blink: "blink 1s step-start infinite",
        growLine: "growLine 1.2s cubic-bezier(0.22,1,0.36,1) forwards",
      },
    },
  },
  plugins: [],
};
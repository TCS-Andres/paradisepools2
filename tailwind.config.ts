import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paradise Pools brand tokens: premium resort palette.
        navy: "#0B1D33", // primary dark: hero overlay, dark sections, headings on light, text on gold
        midnight: "#071423", // deepest sections and footer, gradient depth partner to navy
        gold: "#C9A227", // the ONLY CTA color: button fills, checkmarks, key highlights
        champagne: "#E8D9A0", // soft accent: eyebrows, icons, rule lines, links ON DARK
        ivory: "#F7F4EC", // light page background
        pearl: "#EDEAE0", // alternate light section background
        ink: "#1A2230", // body text on light backgrounds
      },
      fontFamily: {
        // Playfair Display for headings, Inter for body. Inter is also the default sans.
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        // Soft, deep luxury card shadow: larger blur, lower opacity than a default card.
        luxe: "0 24px 60px -16px rgba(11, 29, 51, 0.18)",
      },
    },
  },
  plugins: [],
};
export default config;

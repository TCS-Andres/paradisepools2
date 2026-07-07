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
        // Paradise Pools brand tokens.
        pool: "#00A8E8", // primary brand blue: accents, icons, links
        deepwater: "#003D5B", // dark blue: headings, dark sections, footer
        aqua: "#7FDBFF", // light accent: gradients
        sunburst: "#FF6B35", // CTA orange: buttons and CTAs ONLY
        sand: "#FDFCF9", // page background
        wavetint: "#EAF7FD", // alternate section background
        charcoal: "#1F2A33", // body text
      },
      fontFamily: {
        // Montserrat for headings, Inter for body. Inter is also the default sans.
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

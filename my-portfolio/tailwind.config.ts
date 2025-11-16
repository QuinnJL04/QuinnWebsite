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
        'warm-cream': '#f9e6db',
        'soft-peach': '#ebbcad',
        'cool-gray': '#8a949a',
        'warm-brown': '#ad785c',
        'dark-slate': '#525f5c',
        'deep-forest': '#293a35',
      },
    },
  },
  plugins: [],
};

export default config;
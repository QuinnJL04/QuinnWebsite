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
        'warm-cream': '#f9e6db',      // lightest - backgrounds
        'soft-peach': '#ebbcad',      // accent/buttons
        'cool-gray': '#8a949a',       // text/borders
        'warm-brown': '#ad785c',      // highlights/links
        'dark-slate': '#525f5c',      // dark text
        'deep-forest': '#293a35',     // darkest - headers/footer
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'scroll': 'scroll 20s linear infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'scroll': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
        'blink': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
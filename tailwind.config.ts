import type { Config } from "tailwindcss";
import Image from 'next/image'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeIn2: "fadeIn 3s ease-in-out",
      },
      colors: {
        background: "var(--background)", 
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        bannerImg: "url('/images/mountainpic.jpg')", 
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeIn2: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-animated"),
  ],
};

export default config;

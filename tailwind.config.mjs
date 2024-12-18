/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        main: "url(/public/mainBG.png)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "0.7" },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in",
      },
      boxShadow: {
        "3xl": "0 15px 30px -5px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

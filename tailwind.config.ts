/** @type {import('tailwindcss').Config} */
import { type Config } from "tailwindcss";

export default {
  darkMode: "class", // ✅ FIXED — no brackets, just a string
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        card: "hsl(var(--card))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
      },
      borderRadius: {
        xl: "var(--radius)",
      },
    },
  },
  plugins: [],
} satisfies Config;

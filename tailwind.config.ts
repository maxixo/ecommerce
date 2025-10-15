/** @type {import('tailwindcss').Config} */
import { type Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // ✅ Simpler color palette using normal CSS colors
        primary: {
          DEFAULT: "#2563eb", // blue-600
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f59e0b", // amber-500
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#93c5fd", // blue-300
          foreground: "#1e3a8a", // dark blue text
        },
        background: "var(--background)",
        foreground: "var(--foreground)", // gray-800
        border: "#e5e7eb", // gray-200
        muted: {
          DEFAULT: "#6b7280", // gray-500
          foreground: "#9ca3af", // gray-400
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#111827", // gray-900
        },
        popover: {
          DEFAULT: "#f9fafb", // gray-50
          foreground: "#111827",
        },
        destructive: {
          DEFAULT: "#ef4444", // red-500
          foreground: "#ffffff",
        },
        sidebar: {
          DEFAULT: "#f3f4f6", // gray-100
          foreground: "#1f2937",
          primary: "#2563eb",
          "primary-foreground": "#ffffff",
          accent: "#93c5fd",
          "accent-foreground": "#1e3a8a",
          border: "#e5e7eb",
          ring: "#2563eb",
        },
      },

      // ✅ Simple rounded corners
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "4px",
      },

      // ✅ Keep accordion animations
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

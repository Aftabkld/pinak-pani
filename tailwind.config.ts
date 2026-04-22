import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        peacock: {
          50: "#eefaff",
          100: "#d9f3ff",
          500: "#047b9a",
          700: "#035b73",
          900: "#003f5c",
          950: "#022b3a"
        },
        royal: {
          gold: "#d4af37",
          saffron: "#f5a524"
        }
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0, 63, 92, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;

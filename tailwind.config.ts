import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // ضع هنا اللون الذي تريد
        secondary: "#9333EA",
        // أي ألوان مخصصة أخرى
      },
    },
  },
  plugins: [],
} satisfies Config;
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#C8FF00",
        "primary-hover": "#d4ff33",
        bg: "#0d0d0d",
        surface: "#141414",
        "surface-2": "#1a1a1a",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0px",
        none: "0px",
        sm: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        full: "9999px",
      },
      maxWidth: {
        momaa: "1800px",
        content: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;

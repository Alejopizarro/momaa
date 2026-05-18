import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: "#E8572A",
        "primary-hover": "#d14820",
        bg: "#ffffff",
        surface: "#f7f5f2",
        "surface-2": "#efefef",
      },
      fontFamily: {
        logo: ["var(--font-logo)", "serif"],
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

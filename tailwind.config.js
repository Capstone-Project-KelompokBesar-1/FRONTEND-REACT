/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "926px",
        desktop: "1440px",
      },

      colors: {
        transparent: "transparent",
        current: "currentColor",

        primary: {
          100: "#fcddcc",
          500: "#cf0a0a",
          700: "#95051d",
        },
        success: {
          100: "#ebfacf",
          500: "#56aa19",
          700: "#2e7a0c",
        },
        info: {
          100: "#c8faf5",
          500: "#004b73",
        },
        warning: {
          100: "#fcfccb",
          500: "#c4c407",
          700: "#8d8d03",
        },
        danger: {
          100: "#fce6cf",
          500: "#cc3d16",
          700: "#92140b",
        },
        web: {
          background: "#F6F5FA",
          webPrimary: "#31353D",
          dark: "#31353D",
          background: "#F6F5FA",
          blue: "#3C444C",
        },
      spacing: {
        88: "22rem",
      },
      boxShadow: {
        default: "0px 4px 8px rgba(0, 0, 0, 0.12);",
      },
      fontFamily: {
        avenir: ["AVENIR", "sans-serif"],
        avenirBlack: ["AVENIR-BLACK", "sans-serif"],
        avenirHeavy: ["AVENIR-HEAVY", "sans-serif"],
      },
    },
  },
  plugins: [],
};

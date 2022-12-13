/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "926px",
        desktop: "1440px",
      },

      fontFamily: {
        avenir: ["AVENIR", "sans-serif"],
        avenirBlack: ["AVENIR-BLACK", "sans-serif"],
        avenirHeavy: ["AVENIR-HEAVY", "sans-serif"],
      },

      spacing: {
        88: "22rem",
      },

      colors: {
        primary: {
          100: "#fcddcc",
          500: "#cf0a0a",
          700: "#95051d",
        },
        success: {
          100: "#ebfacf",
          500: "#22b542",
          700: "#2e7a0c",
        },
        info: {
          100: "#029BED",
          700: "#005092",
        },
        warning: "#B37600",
        danger: {
          100: "#fce6cf",
          500: "#cc3d16",
          700: "#92140b",
        },
        web: {
          background: "#F6F5FA",
          dark: "#31353D",
          blue: "#3C444C",
        },
      },
    },
    plugins: [],
  },
};

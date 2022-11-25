/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      tablet: "926px",
      desktop: "1440px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      
      transparent: "transparent",
      current: "currentColor",

      primary : {
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
      netral: {
        background: "#FFFFFF",
        outline: "#CCCCCC",
        teksgray: "#666666",
        teks: "#1A1A1A",
        teksForm: "#999999",
      },
      web: {
        background: "#F6F5FA",
        
      }

    },
    spacing: {
      px: "1px",
      0: "0px",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      88: "22rem",
      96: "24rem",
    },
    boxShadow: {
      default: "0px 4px 8px rgba(0, 0, 0, 0.12);"
    },
    extend: {},
  },
  plugins: [],
}

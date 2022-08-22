/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1440px",
    },
    extend: {
      colors: {
        navAdvertise: "rgb(235,250,239)",
        startColor: "rgb(2, 89, 173)",
        endColor: "rgb(0, 183, 78)",
        topNavColor: "rgb(196,245,208)",
        advertisingNavColor: "rgb(235, 250, 239)",
        hoverTextColor: "rgb(0,180,82)",
        iwanttoColor: "rgb(60,190,99)",
        body: "rgb(244,247,248)",
        cardBg: "rgb(244, 247, 248)",
        filterDropdown: "rgb(196, 245, 208)",
      },
      spacing: {
        promotionsHeight: "565px",
        apiSectionHeight: "200px",
      },
      fontFamily: {
        DM: ["DM", "monospace"],
        Quicksand: ["Quicksand", "sans-serif"],
        VarelaRound: ["VarelaRound", "sans-serif"],
      },
      boxShadow: {
        card: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

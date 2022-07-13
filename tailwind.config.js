/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navAdvertise: "rgb(235,250,239)",
        startColor: "rgb(2, 89, 173)",
        endColor: "rgb(0, 183, 78)",
        topNavColor: "rgb(196,245,208)",
        advertisingNavColor: "rgb(235, 250, 239)",
        hoverTextColor: "rgb(0,180,82)",
      },
      spacing: {
        diamond1: "18.5rem",
        diamond2: "11.5rem",
        diamond3: "4.3rem",
        diamond4: "-2.5rem",
        diamond5: "-12.3rem",
        dropdownHeight: "auto",
        dropdownWidth: "auto",
      },
    },
  },
  plugins: [],
};

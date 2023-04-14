/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light Mode
        "light-background": "#F1F2F3",
        "light-high-emphasis": "#4B5EFC",
        "light-medium-emphasis": "#D2D3DA",
        "light-low-emphasis": "#FFFFFF",
        // Dark Mode
        "dark-background": "#17171C",
        "dark-high-emphasis": "#4B5EFC",
        "dark-medium-emphasis": "#4E505F",
        "dark-low-emphasis": "#2E2F38",
      },
    },
  },
  plugins: [],
};

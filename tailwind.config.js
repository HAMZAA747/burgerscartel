/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F2AA21",
        black: "#000000",
        white: "#FFFFFF",
      },
      fontFamily: {
        heading: ["Cinzel", "serif"],
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

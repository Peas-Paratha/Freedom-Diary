/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: { sans: ["Raleway", ...defaultTheme.fontFamily.sans] },
    extend: {
      colors: {
        gray: "#D9D9D9",
        darkGray: "#808080",
        lightGray: "#F9F9F9",
        tagRed: "#FF5B5B",
        tagYellow: "#C7BF00",
        tagOrange: "#F08538",
        blue: "#3897F0",
      },
    },
  },
  plugins: [],
};

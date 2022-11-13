/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      blue: {
        DEFAULT: "hsl(220, 98%, 61%)",
        dark: "hsl(235, 21%, 11%)",
        desaturated: "hsl(235, 24%, 19%)",
      },
      gray: {
        DEFAULT: "hsl(0, 0%, 98%)",
      },
      "grayish-blue": {
        "very-light": "hsl(236, 33%, 92%)",
        light: "hsl(233, 11%, 84%)",
        DEFAULT: "hsl(235, 19%, 35%)",
        dark: "hsl(236, 9%, 61%)",
        "very-dark": "hsl(233, 14%, 35%)",
        hover: "hsl(236, 33%, 92%)",
      },
    },
    extend: {
      backgroundImage: {
        "desk-dark": "url('assets/images/bg-desktop-dark.jpg')",
      },
    },
  },
  plugins: [],
};

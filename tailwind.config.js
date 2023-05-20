/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        cursive: ["cursive"],
      },
      fontSize: {
        main: "20px",
        mainSubtitle: "16px",
        subH18: "18px",
        subH16: "16px",
        btn1: "16px",
        formLabel1: "16px",
      },
      colors: {
        primary: '#FF5A00',
        error: '#1E90FF',
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

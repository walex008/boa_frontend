/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        "max-height": "max-height",
      },
    },
    colors: {
      bgBlack: "#333A41",
      bgSemiBlack: "#22262B",
      bgBWhite: "#F9FAFB",
      textBlackH: "#1A1A1A",
      textBlack: "#404040",
      textWhite: "#fff",
      textGreyWhite: "#CBCBCB",
      textGrey: "#808080",
      blueLight: "#E5EFFF",
      blue: "#106CFF",
      redLight: "#FFE5EB",
      red: "#ED0036",
      orangeLight: "#FFF9E5",
      orange: "#FFC200",
      greenLight: "#F0FFF6",
      green: "#00B246",
      menuHover: "#8D99A5",
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};

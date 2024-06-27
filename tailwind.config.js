// tailwind.config.js
const {
  floralWhite,
  gray18,
  yellow400,
  yellow500,
  yellow700,
  lightblack,
  elightblack,
  gray40,
  gray78,
  shadowGray,
  grayishBlue,
  vampireBlack,
  antiFlashWhite,
  gray80,
  aluminium,
} = require("./src/utils/Colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  variants: {
    extend: {
      // backgroundColor: ['active'],
    },
  },
  theme: {
    extend: {
      screens: {
        'xm'  :'900px',
        'base': '992px',
        'small': '400px',
        'xs': '500px',
        'mmd': '600px',
        "700":'700px',
        'large': '1100px',
      },
      fontFamily: {
        grotesk: ["grotesk", "sans-serif"],
      },
      backgroundImage: {
        'book': "url('/public/heroBackgroundBook.png')",
      },
      colors: {
        floralWhite: floralWhite,
        gray18: gray18,
        yellow400: yellow400,
        yellow500: yellow500,
        yellow700: yellow700,
        lightblack:lightblack,
        elightblack:elightblack,
        gray40:gray40,
        gray78:gray78,
        shadowGray:shadowGray,
        grayishBlue:grayishBlue,
        vampireBlack:vampireBlack,
        antiFlashWhite:antiFlashWhite,
        gray80:gray80,
        aluminium:aluminium,
      },
    },
  },
  plugins: [],
};
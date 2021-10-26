const { fill } = require("lodash");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./*.html", "./**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      nearWhite: "rgba(0, 0, 0, 0.09)",
      red: {
        soft: "#FD665E",
      },
      gray: {
        soft: "#e0aaaa",
        darker: "#585858",
        darkest: "#473534",
      },
    },
    extend: {
      gridTemplateColumns: {
        340: "repeat(auto-fill,minmax(340px,1fr))",
      },
      gridAutoColumns: {
        340: "minmax(340px,1fr)",
        "4/5": "80%",
      },
      backgroundColor: {
        softGray: "rgba(0, 0, 0, 0.03)",
      },
      maxWidth: {
        "1/2": "50%",
      },
      backgroundImage: {
        gradientWhite:
          "linear-gradient(180deg, #F9F9F9 22.12%, rgba(249, 249, 249, 0) 100%);",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

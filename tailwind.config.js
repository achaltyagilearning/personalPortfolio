const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "rgb(185 28 28)",
        neutral: colors.gray,
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      sm2: "540px",
      md: "768px",
      md2: "911px",
      lg: "976px",
      xl: "1440px",
      smallest: "0"
    },
    extend: {
      colors: {
        light_greyish: "#cccccc",
      },
    },
  },  plugins: [],


}


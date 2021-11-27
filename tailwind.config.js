module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pirGray: {
          100: "#f5f5f5",
          200: "#ebebeb",
          300: "#d6d6d6",
          400: "#adadad",
          500: "#858585",
          600: "#333333",
          700: "#1f1f1f",
          800: "#141414",
          900: "#020202",
          1000: "#0a0a0a",
        },
        pirGreen: "#6ece9d",
        pirGreenHover: "#91dab4",
        pirBeige: "#faf8f5",
        pirYellow: "#ffce3d",
        pirRed: "#e87b7b",
        pirBlue: "#73b1f0",
      },
      maxWidth : {
        1200: "1200px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

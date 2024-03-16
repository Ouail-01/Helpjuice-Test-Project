/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#18181B",
        "primary-2": "#878686",
        // "primary-3": "#4F4F4F",
        "secondary": "#4F4F4F",
        "tertiary": "#fff",
        "quaternary": "#03132e",
        // New custom colors
        customColor1: '#1E293B', // dark-blue
        customColor2: '#00ff00', // Green
        customColor3: '#0000ff', // Blue
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        plusjakartasans: ["Plus Jakarta Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
      screens: {
        xs: "500px",
        sm: "778px",
        md: "1060px",
      },
    },
  plugins: [],
};
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


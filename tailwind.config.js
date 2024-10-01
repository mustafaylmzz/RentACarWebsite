/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#4A90E2', // Custom primary color
        'secondary': '#D0D0D0', // Custom secondary color
      },
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'], // Custom font family
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem",
        }
      }
    },
  },
  plugins: [],
}
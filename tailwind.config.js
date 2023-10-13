/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        'firstColor': '#EBEAEA',
        'secondColor': '#251F1F',
        'thirdColor': '#4F709C',
        'fourthColor': '#213555'
      }
    },
  },
  plugins: [],
}
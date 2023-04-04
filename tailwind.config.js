/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        brand:'#FF0000', //youtube icon color
        search:'#ccc', //input border color
        searchicon:'#f8f8f8',
      },
      boxShadow:{
        search:'inset 0 1px 1px 0 rgb(0 0 0 / 0.02)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

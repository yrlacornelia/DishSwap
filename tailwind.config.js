/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        green: {
          DEFAULT: '#B4D4A1',
          light: ' #9CC288',
        },   
        black: {
          DEFAULT: '#000000',
          light:  '#656565'
        }
         },
    },
  },
  plugins: [],
}



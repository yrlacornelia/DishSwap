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
        },
        blue: {
          DEFAULT: '#3D5D64',
          hover: '#44656C',
          light: '#D4DED5',
          lighter: '#D5D4D1'
        },
        white: {
          DEFAULT: '#D9D9D9'
        }
         },
    },
  },
  plugins: [],
}



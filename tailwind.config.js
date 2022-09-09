/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    // colors: {
    //   'back-dark': '#222831',
    //   'back-light': '#EEEEEE',
    //   white: '#FFFFFF',
    //   black: '#000000',
    //   gray: '#393E46',
    //   blue: '#00ADB5',
    //   yellow: {
    //     default: '#FFD600',
    //     focus: '#a68d02',
    //   },
    //   'blur-opacity': 'rgba(0, 0, 0, 0.5)',
    //   transparent: 'transparent',
    // },
    fontFamily: {
      sans: ['YekanRegular', 'sans-serif'],
      'yekan-bold': ['YekanBold', 'sans-serif'],
      'yekan-thin': ['YekanThin', 'sans-serif'],
      fanum: ['FaNum', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};

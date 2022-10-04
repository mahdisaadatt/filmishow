/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'logo-light': "url('/src/assets/images/logo-light.svg')",
        'logo-dark': "url('/src/assets/images/logo-dark.svg')",
      },
    },
    fontFamily: {
      sans: ['YekanRegular', 'sans-serif'],
      'yekan-bold': ['YekanBold', 'sans-serif'],
      'yekan-thin': ['YekanThin', 'sans-serif'],
      fanum: ['FaNum', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      backgroundImage: ['light'],
    },
  },
  plugins: [],
};

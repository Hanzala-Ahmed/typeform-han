/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#191919',
        grey: '#7F7F7F',
      },
      fontFamily: {
        apercuPro: ['ApercuPro-Regular', 'sans-serif'],
      },
      flex: {
        1.1: '1 1 10%',
      },
      gridTemplateColumns: {
        first: '0px auto',
        second: 'auto',
      },
    },
  },
  plugins: [],
};

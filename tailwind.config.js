/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'Roboto', 'Noto Sans Hebrew', 'Noto Kufi Arabic', 'Noto Sans JP', 'sans-serif'],
      },
      flex: {
        '2': '1 1 40%',
        '3': '1 1 60%'
      },
    },
  },
  plugins: [],
};

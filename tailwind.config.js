/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        xs: '1rem',
        md: '0',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    fontFamily : {
      'vazir' :  ["vazirmatn"],
    },
    extend: {
      screens: {
        'xs': '440px',
      },
    },
  },
  plugins: [],
}
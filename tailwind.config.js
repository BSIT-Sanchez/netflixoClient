/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      height: {
        header: '560px',
        rate: '400px',

      },
      fontSize: {
        h1: '2.6rem',

      },
      screens: {
        xs: '475px',
      },
      colors: {
        main: '#080A1A',
        subMain: '#F20000',
        subInfo: '#479dff',
        dry: '#0b0f29',
        star: '#ffb000',
        text: '#C0C0C0',
        border: '#4b5563',
        dryGray: '#E0D5D5',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}


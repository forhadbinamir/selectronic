/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#edf2fc',
        secondary: '#212121',
        accent: '#F4F4F4',
        info: '#068CCC',
        success: '#0D2964',
        dark: '#1D1D1D',

      },
    },
  },
  plugins: [require("daisyui")],

}


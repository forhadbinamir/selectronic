/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {

          "primary": "#068CCC",

          "secondary": "#F4F4F4",

          "accent": "#0D2964",

          "p-text": "#515151",

          "base-100": "#FFFFFF",

          "info": "#343434",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
      "dark"
    ],
  },
  plugins: [require("daisyui")],
}

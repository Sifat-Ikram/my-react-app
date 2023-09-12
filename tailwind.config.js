/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#b1d82f",

          "secondary": "#ff87e5",

          "accent": "#a1ff91",

          "neutral": "#261d35",

          "base-100": "#473a4b",

          "info": "#9fbff4",

          "success": "#186d5c",

          "warning": "#c1780b",

          "error": "#e42558",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "font-body": "Outfit, serif",
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require('daisyui'),],
}


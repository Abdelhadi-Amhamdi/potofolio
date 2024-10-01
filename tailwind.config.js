/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        "primary" : 'linear-gradient(to right, #8A2387, #E94057 , #F27121)',
        "ascii" : 'url("/ascii.svg")'
      }
    },
  },
  plugins: [],
}

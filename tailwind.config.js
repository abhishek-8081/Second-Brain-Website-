/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:{
          200:"#e6e9ed",
          100:"#eeeeed",
          600:"#95989c"
        },

        purple:{
          600:"#7164c0",
          200:"#d9ddee",
          500:"#9492db"
        }
      }
    }
  },
  plugins: [],
}
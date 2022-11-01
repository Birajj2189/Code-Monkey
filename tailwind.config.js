/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "first-color": "#1FAB89",
        "second-color": "#62D2A2",
        "third-color": "#9DF3C4",
        "fourth-color": "#D7FBE8"
      }
    },
  },
  plugins: [],
}

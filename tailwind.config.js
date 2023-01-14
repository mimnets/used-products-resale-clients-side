/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyUi:{
    themes:[
      {
        usedHand:{
          primary: "#CCCC66",
          secondary: "#66AA66",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        }
      }
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
}

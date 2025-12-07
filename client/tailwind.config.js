/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
     
      fontSize: {
        "18": "18px",
        "8": "8px",
      },

      backgroundColor: {

primary:"#0BCBD1",
secondary:"#3A3636",
btnBg:"#FF3F3F"


      }

    
    },
  },
  plugins: [],
}

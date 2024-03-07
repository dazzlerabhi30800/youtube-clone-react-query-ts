/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-color": "#DB6FFA",
      },
      screens: {
        sm: "600px",
      },
      fontSize: {
        small: "14px",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      size: {
        5: "5px",
        25: "25px",
        35: "35px",
      },
    },
  },
  plugins: [],
};

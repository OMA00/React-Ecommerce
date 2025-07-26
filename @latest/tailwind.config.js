/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
      colors: {
        babyGreen: "#7DB800",
        navColor: "#212121",
      },
    },
  },
  plugins: [],
};

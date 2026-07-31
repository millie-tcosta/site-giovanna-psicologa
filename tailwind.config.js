/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: {
          light: "#EAF4FB",
          soft: "#CFE6F5",
          DEFAULT: "#A9D2ED",
          deep: "#5B93BD",
        },
        cream: {
          DEFAULT: "#F5EFC7",
          soft: "#FBF6DE",
        },
        ink: "#1F3A56",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Jost'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

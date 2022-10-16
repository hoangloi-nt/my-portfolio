/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#594545",
        secondary: "#815B5B",
        third: "#9E7676",
        light: "#FFF8EA",
        dark: "#372c2c",
      },
      backgroundImage: {
        "white-dots": "radial-gradient(white 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

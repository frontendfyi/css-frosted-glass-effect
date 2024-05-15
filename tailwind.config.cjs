/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      black: "#000113",
      white: "#fff",
      violet: "#3b3c98",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      mono: ["monospace"],
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.{ts,tsx}"],
  theme: {
    backgroundImage: {
      "primary-gradient": "linear-gradient(to bottom, #B59CF8, #F5F2FF 48%, #B59CF8 68%, #8273A9 100%)",
      frost: "repeating-linear-gradient(to right, rgba(255,255,255,.04) 0%, rgba(0,0,0,.39) 49%, rgba(255,255,255,.27) 100%)"
    },
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

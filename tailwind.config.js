/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "sway-rotation": "sway 5s ease-in-out infinite",
      },
      keyframes: {
        sway: {
          "0%, 100%": { transform: "rotate(3deg)" },
          "50%": { transform: "rotate(-3deg)" },
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
        workSans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
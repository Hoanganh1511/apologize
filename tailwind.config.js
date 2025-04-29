/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // for App Router
  ],
  theme: {
    extend: {
      fontFamily: {
        mali: ["var(--font-mali)", "sans-serif"],
        dancing: ["var(--font-dancing)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

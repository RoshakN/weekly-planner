/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fredericka: ["Fredericka the Great", "cursive"],
        indieFlower: ["Indie Flower", "cursive"],
      },
    },
  },
  plugins: [],
};

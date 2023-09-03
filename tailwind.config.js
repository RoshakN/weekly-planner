/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        greatVibes: ["Great Vibes", "cursive"],
        indieFlower: ["Indie Flower", "cursive"],
      },
    },
  },
  plugins: [],
};

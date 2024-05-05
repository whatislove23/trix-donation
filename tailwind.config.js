/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('public/static/images/hero.jpg')",
        join: "url('src/assets/img/bg-join.png')",
      },
      colors: {
        primary: {
          100: "#ffd54f",
          200: "#ffb300",
          300: "#000000",
        },
        accent: {
          100: "#ffb300",
          200: "#ffa500",
        },
        text: {
          100: "#333333",
          200: "#5c5c5c",
        },
        bg: {
          100: "#ffffff",
          200: "#f5f5f5",
          300: "#cccccc",
          400: "#333333",
        },
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};

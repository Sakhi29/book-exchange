/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url(/hero-section2.jpg)",
      },
      clipPath: {
        polygon: "polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0 100%)",
      },
    },
  },
  plugins: [],
};

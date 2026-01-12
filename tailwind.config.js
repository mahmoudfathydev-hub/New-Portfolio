/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        floatBubble: {
          "0%, 100%": { transform: "translateY(0px) scale(1)", opacity: "0.6" },
          "25%": { transform: "translateY(-20px) scale(1.05)", opacity: "0.4" },
          "50%": { transform: "translateY(-40px) scale(1.1)", opacity: "0.2" },
          "75%": { transform: "translateY(-20px) scale(1.05)", opacity: "0.4" },
        },
      },
      animation: {
        floatBubble: "floatBubble linear infinite",
      },
    },
  },
  plugins: [],
};

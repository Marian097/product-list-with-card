/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        cartDrop: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px) scale(0.98)",
          },
          "60%": {
            opacity: "1",
            transform: "translateY(4px) scale(1.01)", // mic bounce
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
      },
      animation: {
        "cart-drop": "cartDrop 300ms cubic-bezier(.22,1.2,.36,1) both",
      },
    },
  },
  plugins: [],
};

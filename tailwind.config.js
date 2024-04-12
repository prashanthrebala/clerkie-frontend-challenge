/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: {
          default: "#1A1A1A",
          subtler: "#A3A6B1",
          subtle: "#62646C",
          disabled: "#C9CAD2",
        },
        background: {
          default: "#FFFFFF",
          disabled: "#EFF0F2",
          brand: "#1C5FFF",
          "brand-subtler": "#C1D4FF",
        },
        neutral: {
          900: "#373841",
        },
        border: {
          "default-dark": "#C9CAD2",
          default: "#DDDEE3",
          disabled: "#EFF0F2",
        },
      },
    },
  },
  plugins: [],
};

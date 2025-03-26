/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        md: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.7)",
        xl: "4px 4px 8px rgba(0, 0, 0, 0.8)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primaryRed: "#D0363A",
        primaryBlack: "#202020",
        primaryBlue: "#0915FF",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};

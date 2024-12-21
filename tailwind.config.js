/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "var(--color-black, #190b15)",
        pink: "var(--color-pink, #c75b7a)",
        gray: "var(--color-gray, #d9abab)",
        white: "var(--color-white, #f4d9d0)",
      },
      fontFamily: {
        serif: ["Ubuntu", "serif"],
      },
    },
  },
  plugins: [],
}

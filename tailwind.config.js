/** @type {import('tailwindcss').Config} */
export default {
  content: ["./html.js","./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),require("@tailwindcss/line-clamp")]
}


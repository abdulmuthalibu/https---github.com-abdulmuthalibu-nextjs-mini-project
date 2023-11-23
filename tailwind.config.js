/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
  ],
  theme: {
    xs:"300px",
    sm:"640px",
    md:"768",
    lg:"1080px",
    xl:"1280px",
    ["2xl"]:"1530px",
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        yellowHood: '#FCB900',
        textGray: '#625B5B',
        bgBg: '#F2F2F2',
      }
    },
    fontFamily: {
      Lalezar: ["Lalezar"],
      VazirBold: ["Vazir-Bold"],
      VazirLight: ["Vazir-Light"],
      VazirMedium: ["Vazir-Medium"],
    }
  },
  plugins: [require('flowbite/plugin')],
}

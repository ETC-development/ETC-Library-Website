/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'dark-bg': '#0C1F47',
      'light-bg': '#F4F4F4',
      'light-text': '#F6F9F6',
      'dark-text': '#0C1F47',
      'secondary': '#F37D00',
      'violet': '#9FADFD'
    },
    extend: {
      fontFamily: {
        'sans' : ['Montserrat', '"Open Sans"']
      }
    },
  },
  plugins: [],
}

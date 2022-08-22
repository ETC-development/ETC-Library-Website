/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
     "./src/*.html" // for my testing
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
      'violet': '#9FADFD',
      'grey-stroke': '#C2C2C2'
    },
    extend: {
      fontFamily: {
        'sans' : ['Montserrat', '"Open Sans"'],
        'cursive': ['Kalam', 'cursive']
      },
      width: {
        "100": "32rem",
        "200": "70rem"
      },
      boxShadow: { // Added by Zaki
        'md': ' 0px 0px 10px 2px rgba(0, 0, 0, 0.2)'
      }
    },
  },
  plugins: [],
}

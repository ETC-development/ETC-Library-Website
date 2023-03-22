/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            "dark-bg": "#101C1D",
            "light-bg": "#F4F4F4",
            "light-text": "#F6F9F6",
            "dark-text": "#0C1F47",
            secondary: "#FFC53A",
            violet: "#98D9C2",
            "dark-violet": "#31bd6b",
            "dark-violett": "#98D9C2",
            "grey-stroke": "#C2C2C2",
        },
        extend: {
            fontFamily: {
                sans: ["Montserrat", '"Open Sans"'],
                cursive: ["Kalam", "cursive"],
            },
            spacing: {
                100: "32rem",
                200: "70rem",
            },
        },
    },
    plugins: [],
};

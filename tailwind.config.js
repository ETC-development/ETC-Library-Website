/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            "dark-bg": "#0C1F47",
            "light-bg": "#F4F4F4",
            "light-text": "#F6F9F6",
            "dark-text": "#0C1F47",
            secondary: "#F37D00",
            violet: "#9FADFD",
            "dark-violet": "#7385ff",
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

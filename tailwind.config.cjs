/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app.vue",
        "./pages/**/*.{vue,js,ts,jsx,tsx}",
        "./components/**/*.{vue,js,ts,jsx,tsx}",
        "./src/components/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            burra: ["Burra"],
        }
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#000000",
                    "secondary": "#ddff89",
                    "accent": "#06d9c4",
                    "neutral": "#bf07f2",
                    "base-100": "#ffffff",
                    "info": "#73D2F2",
                    "success": "#0D6351",
                    "warning": "#EDC35A",
                    "error": "#E34F58",
                },
            },
        ],
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

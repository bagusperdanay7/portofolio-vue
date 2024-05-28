/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-50": "#EFF4FE",
                "primary-100": "#E1ECFE",
                "primary-200": "#C9DBFC",
                "primary-300": "#A8C2F9",
                "primary-400": "#859FF4",
                "primary-500": "#687DEC",
                "primary-600": "#525FE1",
                "primary-700": "#3D47C5",
                "primary-800": "#343E9F",
                "primary-900": "#31397E",
                "primary-950": "#1D2149",
                "secondary-50": "#fff3f1",
                "secondary-100": "#ffe6e1",
                "secondary-200": "#ffd0c7",
                "secondary-300": "#ffb0a0",
                "secondary-400": "#ff937d",
                "secondary-500": "#f85b3b",
                "secondary-600": "#e53f1d",
                "secondary-700": "#c13114",
                "secondary-800": "#a02c14",
                "secondary-900": "#842a18",
                "secondary-950": "#481207",
                "light-100": "#212121",
                "light-80": "#4d4d4d",
                "light-50": "#909090",
                "light-30": "#BCBCBC",
                "light-10": "#E8E8E8",
                "dark-100": "#FFFFFF",
                "dark-90": "#E6E6E6",
                "dark-70": "#B3B3B3",
                "dark-50": "#7F7F7F",
                "light-bg": "#F1F0F4",
                "light-bg-2": "#FDFCFC",
                "dark-bg": "#181925",
                "dark-bg-2": "#292A36",
            },
        },
    },
    plugins: [],
};

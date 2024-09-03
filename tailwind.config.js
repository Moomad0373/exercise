/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        container: {
            center: true,
            padding: { DEFAULT: "0.5rem", sm: "1rem", lg: "2rem", xl: "3rem", "2xl": "5rem" },
        },
        extend: {},
    },
    plugins: [
        function ({ addVariant }) {
            addVariant("child", "& > *");
            addVariant("child-hover", "& > *:hover");
            addVariant("last", "& > :last-child");
        },
    ],
};

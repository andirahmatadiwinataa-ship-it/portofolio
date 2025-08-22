/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.{html,js}'],
    theme: {
        extend: {
            gridTemplateColumns: {
                auto: 'repeat(auto-fit, minmax(200px, 1fr))',
            },
            fontFamily: {
                Outfit: ["Outfit", "sans-serif"],
                Ovo: ["Ovo", "serif"]
            }
        },
    },
    plugins: [],
};

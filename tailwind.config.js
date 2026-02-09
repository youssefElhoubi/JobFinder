/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}", // This ensures Tailwind scans your Angular files
    ],
    theme: {
        extend: {
            colors: {
                // Your custom palette
                primary: '#1B3C53',   // Dark Blue
                secondary: '#234C6A', // Medium Blue
                accent: '#456882',    // Light Blue/Grey
                lightBg: '#E3E3E3',   // Light Grey Background
            },
        },
    },
    plugins: [],
}
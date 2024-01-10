/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#001422",
                primary2: "#001d30",
                whiteText: "#1A202C",
                whiteText2: "#4A5568",
                darkText: "#CBD5E0",
                darkText2: "#E2E8F0",
                secondaryBg: "#f8f8f8",
                blue: "#1a94f5",
                green: "#00bd29",
            },
        },
    },
    plugins: [],
};

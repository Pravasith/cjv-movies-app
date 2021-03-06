/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "light-theme-background": {
                    100: "#f1f5f9",
                    200: "#e2e8f0",
                },

                "dark-theme-background": {
                    100: "#1f2937",
                    200: "#1a1a1a",
                },

                "icon-background-yellow": {
                    100: "#fcf877",
                },

                "icon-background-orange": {
                    100: "#f9b067",
                    200: "#ed1c24",
                },

                "light-theme-text": {
                    100: "#212121",
                    200: "#111111",
                },

                "dark-theme-text": {
                    100: "#f1f5f9",
                    200: "#c1c1c1",
                },
            },

            spacing: {
                half: "0.2rem",
                "1/10": "10%",
                "1/5": "20%",
                "1/8": "15%",
                "130%": "130%",
                "150%": "150%",
                "200%": "200%",
            },

            backgroundSize: {
                "150%": "150%",
            },

            minWidth: {
                "1/2": "50%",
                12: "3rem",
                8: "2rem",
                20: "5rem",
            },

            minHeight: {
                "1/2": "50%",
                12: "3rem",
                8: "2rem",
                20: "5rem",
            },

            rounded: {
                xxl: "1.25rem",
            },
        },
    },
    plugins: [],
}

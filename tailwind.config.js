/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-bg": "#007BFF",
                "secondary-bg": "#1E3A8A",
                "accent-1": "#555555",
                "accent-2": "#777777",
                "text-primary": "#e0e0e0",
                "text-secondary": "#a0a0a0",
            },
            fontFamily: {
                sans: [
                    '"Inter"',
                    "ui-sans-serif",
                    "system-ui",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    '"Segoe UI"',
                    "Roboto",
                    '"Helvetica Neue"',
                    "Arial",
                    '"Noto Sans"',
                    "sans-serif",
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    '"Noto Color Emoji"',
                ],
                mono: [
                    '"Fira Code"',
                    "ui-monospace",
                    "SFMono-Regular",
                    "Menlo",
                    "Monaco",
                    "Consolas",
                    '"Liberation Mono"',
                    '"Courier New"',
                    "monospace",
                ],
            },
            animation: {
                "text-focus-in": "text-focus-in 1.2s ease-in-out both",
                "slide-in-bottom":
                    "slide-in-bottom 0.7s cubic-bezier(0.4, 0, 0.2, 1) both",
            },
            keyframes: {
                "text-focus-in": {
                    "0%": { filter: "blur(12px)", opacity: "0" },
                    "100%": { filter: "blur(0px)", opacity: "1" },
                },
                "slide-in-bottom": {
                    "0%": { transform: "translateY(50px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
            },
        },
    },
    plugins: [
        // require('tailwind-scrollbar'),
    ],
};

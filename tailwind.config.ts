import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                // Add "Inter" to the beginning of the sans-serif font stack
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
export default config
/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    darkMode: false,
    theme: {
        colors: {
            // invert grays
            gray: {
                50: defaultTheme.colors.gray[900],
                100: defaultTheme.colors.gray[800],
                200: defaultTheme.colors.gray[700],
                300: defaultTheme.colors.gray[600],
                400: defaultTheme.colors.gray[500],
                500: defaultTheme.colors.gray[400],
                600: defaultTheme.colors.gray[300],
                700: defaultTheme.colors.gray[200],
                800: defaultTheme.colors.gray[100],
                900: defaultTheme.colors.gray[50],
            },
        },
        fontFamily: {
            sans: [
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Roboto',
                'Oxygen',
                'Ubuntu',
                'Cantarell',
                'Fira Sans',
                'Droid Sans',
                'Helvetica Neue',
                'sans-serif'
            ],
            serif: ['essonnes-text', 'serif'],
            "serif-headline": ['essonnes-headline', 'serif']
        },
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        color: '#fff',
                  },
                },
            },
        }
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
    ]
}

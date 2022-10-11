/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',

    theme: {
        extend: {
            textColor: {
                primary: {
                    light: '#ffff',
                    dark: '#04111d',
                },
                secondary: {
                    light: '#e5e8eb',
                    dark: '#353840',
                },
                muted: {
                    light: '#8a939b',
                    dark: '#707a83',
                },
            },

            backgroundColor: {
                primary: {
                    light: '#ffff',
                    dark: '#202225',
                },
                secondary: {
                    light: '#f3f4f6',
                    dark: '#303339',
                },
            },

            colors: {
                // ...
                primary: {
                    hover: '#2e8eee',
                    DEFAULT: '#1f82e2',
                    main: '#2081e2',
                },

                'black-rgba': 'rgba(0, 0, 0, 0.3)',
                'white-rgba': 'rgba(255, 255, 255, 0.3)',
                // ...
            },
            boxShadow: {
                auto: 'rgba(0, 0, 0, 0.2) 0px 1px 10px',
            },
        },
    },
    plugins: [],
}

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        container: {
            padding: '1rem',
            center: true,
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            black: '#000000',
            gray: {
                100: '#DFDFDF',
                200: '#CECECE',
                300: '#474747',
                400: '#7A7A7A',
                500: '#222222',
            },
            purple: '#3f3cbb',
            midnight: '#121063',
            metal: '#565584',
            tahiti: '#3ab7bf',
            silver: '#ecebff',
            'bubble-gum': '#ff77e9',
            bermuda: '#78dcca',
            blue: '#008AD9',
            'dark-blue': '#1E2335',
            yellow: '#C9D200',
        },
        extend: {
            fontFamily: {
                normal: ['Now', 'sans-serif'],
                medium: ['Now-Medium', 'sans-serif'],
                black: ['Now-Black', 'sans-serif'],
            },
            backgroundImage: {
                'hero-image': 'url(/assets/images/background.png)',
            },
        },
        screens: {
            extramini: '350px',
            mini: '430px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
    },
    plugins: [],
}

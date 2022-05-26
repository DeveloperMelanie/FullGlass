/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

module.exports = {
    ...nextConfig,
    async redirects() {
        return [
            {
                source: '/sobre-nosotros',
                destination: '/',
                permanent: false,
            },
            {
                source: '/servicios',
                destination: '/',
                permanent: false,
            },
            {
                source: '/contacto',
                destination: '/',
                permanent: false,
            },
            {
                source: '/aviso-legal',
                destination: '/',
                permanent: false,
            },
            {
                source: '/politica-de-cookies',
                destination: '/',
                permanent: false,
            },
            {
                source: '/politica-de-privacidad',
                destination: '/',
                permanent: false,
            },
            {
                source: '/trabaja-con-nosotros',
                destination: '/',
                permanent: false,
            },
        ]
    },
}

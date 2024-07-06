/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/home',
                destination: '/',
                permanent: true,
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.com',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'camo.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'i.imgur.com',
            },
            {
                protocol: 'https',
                hostname: 'api.pikwy.com',
            },
            {
                protocol: 'https',
                hostname: 'go-skill-icons.vercel.app',
            },
            {
                protocol: 'https',
                hostname: 'spoti-playing.vercel.app',
            }
        ]
    }
};

export default nextConfig;

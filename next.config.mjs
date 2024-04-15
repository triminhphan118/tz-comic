/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.otruyenapi.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'sv1.otruyencdn.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                pathname: '**',
            },
        ],
    }
};

export default nextConfig;

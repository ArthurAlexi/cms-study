/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        instrumentationHook: true
    },
    images: {
        remotePatterns: [
        {
            hostname: "freesvg.org",
        },
        {
            hostname: "images.unsplash.com",
        },
        {
            hostname: "medrectech.com",
        },
    ]
    }
};

export default nextConfig;

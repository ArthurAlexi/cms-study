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
            hostname: "plus.unsplash.com",
        },
        {
            hostname: "medrectech.com",
        },
        {
            hostname: "encrypted-tbn0.gstatic.com",
        },
    ]
    }
};

export default nextConfig;

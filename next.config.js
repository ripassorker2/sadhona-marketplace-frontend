/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["encrypted-tbn0.gstatic.com", "img.freepik.com"],
    },
    env: {
        BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    },
};

module.exports = nextConfig;

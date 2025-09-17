/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true, // Disable default image optimization for static export
    },
    // Fix for static export with App Router
    distDir: 'out',
};

module.exports = nextConfig;

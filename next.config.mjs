const nextConfig = {
    output: 'export', // Use 'export' for static site generation
    swcMinify: true,
    logging: {
        fetches: {
            fullUrl: true,
        }
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            }
        ]
    },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'reghardtpienaar.wordpress.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};;

export default nextConfig;

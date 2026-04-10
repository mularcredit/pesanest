/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.BUILD_TARGET === 'pesastack' ? '.next-pesastack' : '.next',
  devIndicators: false,
};

export default nextConfig;

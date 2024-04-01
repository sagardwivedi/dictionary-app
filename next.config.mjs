/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  transpilePackages: ['lucide-react'],
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;

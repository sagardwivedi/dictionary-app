/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  transpilePackages: ['lucide-react'],
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  env: {
    NEXT_DISABLE_TELEMETRY: "1",
  },
};

export default nextConfig;

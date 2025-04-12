import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['127.0.0.1', 'localhost', 'id.wikipedia.org','bpmp-kepri-backend.my.id'], // Tambahkan domain yang diizinkan
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bpmp-kepri-backend.my.id',
        pathname: '/storage/**',
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/v0/b/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/team/Chhavi.png',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
      {
        source: '/team/Yashd.png',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/blogs',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/practices-areas',
        permanent: true,
      },
      {
        source: '/practice-areas',
        destination: '/practices-areas',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

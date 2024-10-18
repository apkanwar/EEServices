/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '**',
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/seek-work",
        destination: "/job-seekers",
        permanent: true,
      },
      {
        source: "/seek-workers",
        destination: "/employers",
        permanent: true,
      }
    ];
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: `/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/**`,
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/en/about',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/en/contact',
        permanent: true,
      },
      {
        source: '/services/photography',
        destination: '/en/services/photography',
        permanent: true,
      },
      {
        source: '/services/videography',
        destination: '/en/services/videography',
        permanent: true,
      },
      {
        source: '/services/wedding',
        destination: '/en/services/wedding',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

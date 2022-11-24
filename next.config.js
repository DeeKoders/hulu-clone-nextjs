/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "links.papareact.com",
      "image.tmdb.org",
      "lavinephotography.com.au",
      "firebasestorage.googleapis.com",
      "cdn.australianageingagenda.com.au",
      "avatars2.githubusercontent.com",
      "bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com",
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

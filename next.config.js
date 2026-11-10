/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      { hostname: "icons.duckduckgo.com" },
      { hostname: "res.cloudinary.com" },
      { hostname: "www.google.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "github.com" },
      { hostname: "avatars.githubusercontent.com" },
      { hostname: "abdifatah.site" },
    ],
  },
};

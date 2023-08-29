/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app.econverse.com.br",
        port: "",
        pathname:
          "/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      },
    ],
  },
};

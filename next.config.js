/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "monthly.chosun.com",
      "image.kmib.co.kr",
      "kkoma.net",
      "post-phinf.pstatic.net",
      "i.namu.wiki",
      "encrypted-tbn0.gstatic.com",
      "picks.my",
    ],
  },
};

module.exports = nextConfig;

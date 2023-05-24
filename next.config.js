/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/feed',
        destination: '/feed.xml',
        permanent: true
      },
      {
        source: '/rss',
        destination: '/feed.xml',
        permanent: true
      },
      {
        source: '/resume',
        destination: process.env.CV_LINK,
        permanent: true
      },
      {
        source: '/cv',
        destination: process.env.CV_LINK,
        permanent: true
      }
    ]
  }
}
module.exports = nextConfig

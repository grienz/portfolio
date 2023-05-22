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
        destination: '/cv-2023.pdf',
        permanent: true
      },
      {
        source: '/cv',
        destination: '/cv-2023.pdf',
        permanent: true
      }
    ]
  }
}
module.exports = nextConfig

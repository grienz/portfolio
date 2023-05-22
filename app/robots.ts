export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/']
      }
    ],
    sitemap: 'https://grienz.dev/sitemap.xml',
    host: 'https://grienz.dev'
  }
}

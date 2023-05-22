export default async function sitemap() {
  const staticRoutes = ['', '/about', '/contact'].map((route) => {
    return {
      url: `https://grienz.dev${route}`,
      lastModified: new Date().toISOString().split('T')[0],
      priority: route === '' ? 1 : 0.8
    }
  })

  return [...staticRoutes]
}

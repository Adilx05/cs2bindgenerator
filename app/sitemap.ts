import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const routes = [
  '',
  '/binds',
  '/about'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `https://example.com${route}`,
    lastModified
  }));
}

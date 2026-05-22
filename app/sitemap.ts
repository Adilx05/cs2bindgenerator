import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const routes = [
  '',
  '/commands',
  '/binds',
  '/crosshair',
  '/cfg-generator',
  '/practice',
  '/lineups',
  '/skins',
  '/about'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `https://example.com${route}`,
    lastModified
  }));
}

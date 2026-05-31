import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const siteUrl = 'https://adilx05.github.io/cs2bindgenerator';

const routes: { path: string; priority: number; changeFreq: 'daily' | 'weekly' | 'monthly' }[] = [
  { path: '', priority: 1.0, changeFreq: 'weekly' },
  { path: '/binds', priority: 0.9, changeFreq: 'weekly' },
  { path: '/about', priority: 0.3, changeFreq: 'monthly' }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFreq,
    priority: route.priority
  }));
}

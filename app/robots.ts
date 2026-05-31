import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = 'https://adilx05.github.io/cs2bindgenerator';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/', '/404']
      }
    ],
    sitemap: `${siteUrl}/sitemap.xml`
  };
}

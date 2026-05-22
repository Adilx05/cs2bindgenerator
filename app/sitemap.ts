import type { MetadataRoute } from 'next';
const routes=['','/commands','/binds','/crosshair','/cfg-generator','/practice','/lineups','/skins','/about'];
export default function sitemap(): MetadataRoute.Sitemap {return routes.map(r=>({url:`https://example.com${r}`,lastModified:new Date()}));}

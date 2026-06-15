import type { APIRoute } from 'astro';
import { tools } from '../data/tools';

export const GET: APIRoute = () => {
  const pages = ['', ...tools.map(t => `/tools/${t.id}`)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url><loc>https://ziyuanzu.com${p}</loc><changefreq>weekly</changefreq><priority>${p?0.8:1}</priority></url>`).join('\n')}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};

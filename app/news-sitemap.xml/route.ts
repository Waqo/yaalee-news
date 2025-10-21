import { NextResponse } from 'next/server';
import { sanityClient } from '@/lib/sanity';

export const revalidate = 60;

function escapeXml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const since = new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString();

  const items: { slug: string; lang: string; title: string; publishedAt: string }[] =
    await sanityClient.fetch(
      `*[_type=="article" && defined(publishedAt) && publishedAt >= $since && status == "published"] | order(publishedAt desc)[0...1000]{
        "slug": slug.current,
        "lang": coalesce(language,"en"),
        title,
        "publishedAt": publishedAt
      }`,
      { since }
    );

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yaaleepost.com';

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  ${items
    .map(
      a => `
  <url>
    <loc>${siteUrl}/${a.lang}/news/${a.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>Yaalee Post</news:name>
        <news:language>${a.lang}</news:language>
      </news:publication>
      <news:publication_date>${a.publishedAt}</news:publication_date>
      <news:title>${escapeXml(a.title || '')}</news:title>
    </news:news>
  </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate',
    },
  });
}

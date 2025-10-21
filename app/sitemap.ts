import { MetadataRoute } from 'next';
import { sanityClient } from '@/lib/sanity';

export const revalidate = 3600; // Revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yaaleepost.com';
  const languages = ['en', 'om', 'am'];
  
  // Static pages (exist in all languages)
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/editorial-standards',
    '/corrections',
    '/privacy',
    '/terms',
  ];

  const staticRoutes: MetadataRoute.Sitemap = [];
  
  for (const lang of languages) {
    for (const page of staticPages) {
      staticRoutes.push({
        url: `${siteUrl}/${lang}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'hourly' : 'monthly',
        priority: page === '' ? 1.0 : 0.5,
        alternates: {
          languages: {
            en: `${siteUrl}/en${page}`,
            om: `${siteUrl}/om${page}`,
            am: `${siteUrl}/am${page}`,
          },
        },
      });
    }
  }

  // Section pages (exist in all languages)
  const sections = ['news', 'business', 'tech', 'culture', 'opinion', 'explainers'];
  const sectionRoutes: MetadataRoute.Sitemap = [];
  
  for (const lang of languages) {
    for (const section of sections) {
      sectionRoutes.push({
        url: `${siteUrl}/${lang}/section/${section}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
        alternates: {
          languages: {
            en: `${siteUrl}/en/section/${section}`,
            om: `${siteUrl}/om/section/${section}`,
            am: `${siteUrl}/am/section/${section}`,
          },
        },
      });
    }
  }

  // Article pages - fetch all published articles across all languages
  const allArticles = await sanityClient.fetch(
    `*[_type == "article" && status == "published"]{
      "slug": slug.current,
      language,
      publishedAt,
      updatedAt
    }`
  );

  // Group articles by slug to determine which languages have each article
  const articlesBySlug = new Map<string, { [lang: string]: any }>();
  
  for (const article of allArticles) {
    if (!articlesBySlug.has(article.slug)) {
      articlesBySlug.set(article.slug, {});
    }
    articlesBySlug.get(article.slug)![article.language] = article;
  }

  const articleRoutes: MetadataRoute.Sitemap = [];
  
  // For each article, only include alternates for languages where it exists
  for (const [slug, translations] of articlesBySlug) {
    for (const [lang, article] of Object.entries(translations)) {
      const alternates: Record<string, string> = {};
      
      // Only add alternate links for languages where this article exists
      for (const checkLang of languages) {
        if (translations[checkLang]) {
          alternates[checkLang] = `${siteUrl}/${checkLang}/news/${slug}`;
        }
      }

      articleRoutes.push({
        url: `${siteUrl}/${lang}/news/${slug}`,
        lastModified: new Date(article.updatedAt || article.publishedAt),
        changeFrequency: 'weekly',
        priority: 0.7,
        alternates: {
          languages: alternates,
        },
      });
    }
  }

  return [...staticRoutes, ...sectionRoutes, ...articleRoutes];
}

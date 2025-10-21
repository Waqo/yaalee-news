import { createClient } from '@sanity/client';
import type { SanityClient } from '@sanity/client';

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID');
}

export const sanityClient: SanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_API_DATASET || 'production',
  apiVersion: '2025-01-01',
  useCdn: true,
  token: process.env.SANITY_API_READ_TOKEN,
});

export const sanityClientWrite: SanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_API_DATASET || 'production',
  apiVersion: '2025-01-01',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

export async function getArticles(lang: string = 'en', limit: number = 20) {
  return sanityClient.fetch(
    `*[_type == "article" && language == $lang && status == "published"] | order(publishedAt desc)[0...$limit]{
      _id,
      "slug": slug.current,
      title,
      summary,
      "featuredImage": featuredImage.asset->url,
      publishedAt,
      "authors": authors[]->{ name, "slug": slug.current },
      "section": section->{ name, "slug": slug.current },
      "tags": tags[]->{ name, "slug": slug.current }
    }`,
    { lang, limit }
  );
}

export async function getArticleBySlug(slug: string, lang: string = 'en') {
  return sanityClient.fetch(
    `*[_type == "article" && slug.current == $slug && language == $lang && status == "published"][0]{
      _id,
      "slug": slug.current,
      title,
      summary,
      body,
      "featuredImage": featuredImage.asset->url,
      publishedAt,
      updatedAt,
      "authors": authors[]->{ name, bio, "slug": slug.current, "headshot": headshot.asset->url },
      "section": section->{ name, "slug": slug.current },
      "tags": tags[]->{ name, "slug": slug.current },
      allowComments
    }`,
    { slug, lang }
  );
}

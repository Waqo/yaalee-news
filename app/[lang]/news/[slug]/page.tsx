import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { getArticleBySlug, getArticles } from '@/lib/sanity';
import { newsArticleJsonLd, breadcrumbJsonLd } from '@/lib/seo';
import { formatDate, type Language } from '@/lib/utils';
import { AdSlot } from '@/components/AdSlot';
import { ArticleCard } from '@/components/ArticleCard';

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: { lang: string; slug: string };
}): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug, params.lang);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/${params.lang}/news/${params.slug}`;

  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary || '',
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: article.authors?.map(a => a.name),
      images: article.featuredImage ? [article.featuredImage] : [],
    },
    alternates: {
      canonical: url,
      languages: {
        en: `${process.env.NEXT_PUBLIC_SITE_URL}/en/news/${params.slug}`,
        om: `${process.env.NEXT_PUBLIC_SITE_URL}/om/news/${params.slug}`,
        am: `${process.env.NEXT_PUBLIC_SITE_URL}/am/news/${params.slug}`,
      },
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const lang = params.lang as Language;
  const article = await getArticleBySlug(params.slug, lang);

  if (!article) {
    notFound();
  }

  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/news/${params.slug}`;
  const relatedArticles = await getArticles(lang, 3);

  const jsonLd = newsArticleJsonLd({
    url,
    title: article.title,
    images: article.featuredImage ? [article.featuredImage] : [],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    authors: article.authors?.map(a => ({ name: a.name })) || [],
  });

  const breadcrumb = breadcrumbJsonLd([
    { name: 'Home', item: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}` },
    { name: article.section?.name || 'News', item: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/section/${article.section?.slug || 'news'}` },
    { name: article.title, item: url },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <article className="max-w-4xl mx-auto px-4 md:px-6 py-8" data-testid="article-detail">
        {article.section && (
          <div className="mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              {article.section.name}
            </span>
          </div>
        )}

        <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6" data-testid="text-article-title">
          {article.title}
        </h1>

        {article.summary && (
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6" data-testid="text-article-summary">
            {article.summary}
          </p>
        )}

        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border" data-testid="section-article-meta">
          {article.authors && article.authors.length > 0 && (
            <div className="flex items-center gap-3">
              {article.authors.map((author, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  {author.headshot && (
                    <Image
                      src={author.headshot}
                      alt={author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  )}
                  <span className="font-medium text-sm">{author.name}</span>
                </div>
              ))}
            </div>
          )}
          <time dateTime={article.publishedAt} className="text-sm text-muted-foreground">
            {formatDate(article.publishedAt, lang)}
          </time>
        </div>

        {article.featuredImage && (
          <div className="relative aspect-[21/9] mb-8 rounded-lg overflow-hidden">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        )}

        <AdSlot id="ARTICLE_TOP" minHeight={250} />

        <div className="prose prose-lg max-w-none mt-8" data-testid="section-article-body">
          <PortableText value={article.body} />
        </div>

        <AdSlot id="ARTICLE_BOTTOM" minHeight={250} />

        {article.tags && article.tags.length > 0 && (
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {article.tags.map(tag => (
                <span
                  key={tag.slug}
                  className="px-3 py-1 bg-muted text-sm rounded-full"
                  data-testid={`tag-${tag.slug}`}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>

      {relatedArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 border-t border-border" data-testid="section-related">
          <h2 className="font-serif font-bold text-3xl mb-8">Related Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map(article => (
              <ArticleCard key={article.slug} {...article} lang={lang} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

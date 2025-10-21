import type { Metadata } from 'next';
import { getArticles } from '@/lib/sanity';
import { ArticleCard } from '@/components/ArticleCard';
import { AdSlot } from '@/components/AdSlot';
import type { Language } from '@/lib/utils';

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  return {
    title: 'Home',
    description: 'Latest news and stories from Ethiopia and beyond',
    alternates: {
      languages: {
        en: '/en',
        om: '/om',
        am: '/am',
      },
    },
  };
}

export default async function HomePage({ params }: { params: { lang: string } }) {
  const lang = params.lang as Language;
  const articles = await getArticles(lang, 20);

  const featuredArticle = articles[0];
  const gridArticles = articles.slice(1, 13);
  const sideArticles = articles.slice(13);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
      {featuredArticle && (
        <div className="mb-12" data-testid="section-featured">
          <ArticleCard {...featuredArticle} lang={lang} variant="feature" />
        </div>
      )}

      <AdSlot id="HOME_TOP" minHeight={250} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12" data-testid="section-grid">
        {gridArticles.map((article, idx) => (
          <ArticleCard key={article.slug} {...article} lang={lang} />
        ))}
      </div>

      {sideArticles.length > 0 && (
        <aside className="border-t border-border pt-8" data-testid="section-more">
          <h2 className="font-serif font-bold text-2xl mb-6">More Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sideArticles.map(article => (
              <ArticleCard key={article.slug} {...article} lang={lang} variant="compact" />
            ))}
          </div>
        </aside>
      )}
    </div>
  );
}

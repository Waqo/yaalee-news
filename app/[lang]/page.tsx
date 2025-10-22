import type { Metadata } from 'next';
import { getArticles } from '@/lib/sanity';
import { ArticleCard } from '@/components/ArticleCard';
import { AdSlot } from '@/components/AdSlot';
import { Newsletter } from '@/components/Newsletter';
import { CategorySection } from '@/components/CategorySection';
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
  const articles = await getArticles(lang, 30);

  const featuredArticle = articles[0];
  const topStories = articles.slice(1, 7);
  const businessArticles = articles.slice(7, 10);
  const technologyArticles = articles.slice(10, 13);
  const worldArticles = articles.slice(13, 16);
  const moreStories = articles.slice(16);

  return (
    <div className="bg-background">
      {/* Hero Section */}
      {featuredArticle && (
        <section className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
            <ArticleCard {...featuredArticle} lang={lang} variant="feature" />
          </div>
        </section>
      )}

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Top Stories Section */}
        {topStories.length > 0 && (
          <section className="py-12 md:py-16" data-testid="section-top-stories">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-8">Latest Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {topStories.map((article, idx) => (
                <ArticleCard key={article.slug} {...article} lang={lang} />
              ))}
            </div>
          </section>
        )}

        <AdSlot id="HOME_TOP" minHeight={250} />

        {/* Newsletter Section */}
        <div className="py-12 md:py-16">
          <Newsletter />
        </div>

        {/* Business News Section */}
        <CategorySection
          title="Business News"
          slug="business"
          articles={businessArticles}
          lang={lang}
        />

        {/* Technology Section */}
        <CategorySection
          title="Technology"
          slug="technology"
          articles={technologyArticles}
          lang={lang}
        />

        {/* World News Section */}
        <CategorySection
          title="World"
          slug="world"
          articles={worldArticles}
          lang={lang}
        />

        {/* More News Section */}
        {moreStories.length > 0 && (
          <section className="py-12 border-t border-border" data-testid="section-more">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-8">More News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {moreStories.slice(0, 8).map(article => (
                <ArticleCard key={article.slug} {...article} lang={lang} variant="compact" />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

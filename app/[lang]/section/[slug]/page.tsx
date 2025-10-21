import type { Metadata } from 'next';
import { ArticleCard } from '@/components/ArticleCard';
import { getArticles } from '@/lib/sanity';
import type { Language } from '@/lib/utils';

export const revalidate = 300;

const sectionNames: Record<string, string> = {
  news: 'News',
  business: 'Business',
  tech: 'Tech',
  culture: 'Culture',
  opinion: 'Opinion',
  explainers: 'Explainers',
};

export async function generateMetadata({
  params,
}: {
  params: { lang: string; slug: string };
}): Promise<Metadata> {
  const sectionName = sectionNames[params.slug] || params.slug;

  return {
    title: sectionName,
    description: `Latest ${sectionName.toLowerCase()} stories from Yaalee Post`,
  };
}

export default async function SectionPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const lang = params.lang as Language;
  const sectionName = sectionNames[params.slug] || params.slug;
  const articles = await getArticles(lang, 20);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="mb-12" data-testid="section-header">
        <h1 className="font-serif font-bold text-4xl md:text-5xl mb-4">{sectionName}</h1>
        <p className="text-lg text-muted-foreground">
          Latest stories from {sectionName.toLowerCase()}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" data-testid="section-articles">
        {articles.map(article => (
          <ArticleCard key={article.slug} {...article} lang={lang} />
        ))}
      </div>
    </div>
  );
}

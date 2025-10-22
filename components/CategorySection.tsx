import Link from 'next/link';
import { ArticleCard, type ArticleCardProps } from './ArticleCard';

interface CategorySectionProps {
  title: string;
  slug: string;
  articles: ArticleCardProps[];
  lang: string;
}

export function CategorySection({ title, slug, articles, lang }: CategorySectionProps) {
  if (articles.length === 0) return null;

  return (
    <section className="py-12 md:py-16 border-t border-border" data-testid={`section-${slug}`} aria-labelledby={`section-heading-${slug}`}>
      <div className="flex items-center justify-between mb-8">
        <h2 id={`section-heading-${slug}`} className="text-hero">
          {title}
        </h2>
        <Link
          href={`/${lang}/section/${slug}`}
          className="text-primary hover:underline font-semibold text-sm transition-colors duration-200"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {articles.slice(0, 3).map((article) => (
          <ArticleCard
            key={article.slug}
            {...article}
            lang={lang}
          />
        ))}
      </div>
    </section>
  );
}


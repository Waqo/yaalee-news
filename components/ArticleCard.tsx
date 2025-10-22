import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';

export interface ArticleCardProps {
  slug: string;
  title: string;
  summary?: string;
  featuredImage?: string;
  publishedAt: string;
  authors?: { name: string; slug: string }[];
  section?: { name: string; slug: string };
  lang: string;
  variant?: 'standard' | 'feature' | 'compact';
}

export function ArticleCard({
  slug,
  title,
  summary,
  featuredImage,
  publishedAt,
  authors,
  section,
  lang,
  variant = 'standard',
}: ArticleCardProps) {
  const href = `/${lang}/news/${slug}`;

  if (variant === 'compact') {
    return (
      <Link
        href={href}
        className="group flex gap-4 hover:bg-card rounded-md p-2 -mx-2 transition-colors"
        data-testid={`card-article-${slug}`}
      >
        {featuredImage && (
          <div className="relative w-20 h-20 flex-shrink-0 rounded overflow-hidden">
            <Image
              src={featuredImage}
              alt={title}
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground mt-1">
            {formatDate(publishedAt, lang)}
          </p>
        </div>
      </Link>
    );
  }

  if (variant === 'feature') {
    return (
      <Link
        href={href}
        className="group block bg-card hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden border border-border"
        data-testid={`card-article-${slug}`}
      >
        <div className="md:flex md:gap-0">
          {featuredImage && (
            <div className="relative aspect-[16/9] md:w-3/5 md:aspect-[16/10] overflow-hidden">
              <Image
                src={featuredImage}
                alt={title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
              />
              {section && (
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider">
                  {section.name}
                </span>
              )}
            </div>
          )}
          <div className="p-8 md:w-2/5 md:flex md:flex-col md:justify-center">
            <h2 className="font-serif font-bold text-2xl md:text-3xl lg:text-4xl mt-2 line-clamp-3 group-hover:text-primary transition-colors leading-tight">
              {title}
            </h2>
            {summary && (
              <p className="text-muted-foreground mt-4 line-clamp-3 text-base">
                {summary}
              </p>
            )}
            <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
              {authors && authors.length > 0 && (
                <span className="font-semibold text-foreground">{authors.map(a => a.name).join(', ')}</span>
              )}
              {authors && authors.length > 0 && <span>•</span>}
              <time dateTime={publishedAt}>{formatDate(publishedAt, lang)}</time>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group block bg-card hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden border border-border hover:border-primary/20"
      data-testid={`card-article-${slug}`}
    >
      {featuredImage && (
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={featuredImage}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {section && (
            <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
              {section.name}
            </span>
          )}
        </div>
      )}
      <div className="p-5">
        <h3 className="font-serif font-bold text-lg md:text-xl mt-1 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
          {title}
        </h3>
        {summary && (
          <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
            {summary}
          </p>
        )}
        <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
          {authors && authors.length > 0 && (
            <span className="font-semibold text-foreground">{authors[0].name}</span>
          )}
          {authors && authors.length > 0 && <span>•</span>}
          <time dateTime={publishedAt}>{formatDate(publishedAt, lang)}</time>
        </div>
      </div>
    </Link>
  );
}

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
      <article>
        <Link
          href={href}
          className="group flex gap-4 hover:bg-muted/50 rounded-md p-2 -mx-2 transition-colors duration-200"
          data-testid={`card-article-${slug}`}
        >
          {featuredImage && (
            <div className="relative w-20 h-20 aspect-thumb flex-shrink-0 rounded overflow-hidden">
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
            <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors duration-200">
              {title}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              <time dateTime={publishedAt}>{formatDate(publishedAt, lang)}</time>
            </p>
          </div>
        </Link>
      </article>
    );
  }

  if (variant === 'feature') {
    return (
      <article>
        <Link
          href={href}
          className="group block bg-card article-hover rounded overflow-hidden"
          data-testid={`card-article-${slug}`}
        >
          <div className="md:flex md:gap-6">
            {featuredImage && (
              <div className="relative aspect-hero md:aspect-featured md:w-1/2 overflow-hidden">
                <Image
                  src={featuredImage}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            )}
            <div className="p-6 md:w-1/2 md:flex md:flex-col md:justify-center">
              {section && (
                <span className="category-badge">
                  {section.name}
                </span>
              )}
              <h2 className="text-large-heading mt-2 line-clamp-3 group-hover:text-primary transition-colors duration-200">
                {title}
              </h2>
              {summary && (
                <p className="text-muted-foreground mt-3 line-clamp-2 leading-relaxed">
                  {summary}
                </p>
              )}
              <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                <time dateTime={publishedAt}>{formatDate(publishedAt, lang)}</time>
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article>
      <Link
        href={href}
        className="group block bg-card article-hover rounded overflow-hidden"
        data-testid={`card-article-${slug}`}
      >
        {featuredImage && (
          <div className="relative aspect-featured overflow-hidden">
            <Image
              src={featuredImage}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="p-4">
          {section && (
            <span className="category-badge">
              {section.name}
            </span>
          )}
          <h3 className="font-bold text-lg mt-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
          {summary && (
            <p className="text-muted-foreground text-sm mt-2 line-clamp-2 leading-relaxed">
              {summary}
            </p>
          )}
          <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
            <time dateTime={publishedAt}>{formatDate(publishedAt, lang)}</time>
          </div>
        </div>
      </Link>
    </article>
  );
}

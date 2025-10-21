import Link from 'next/link';
import { languages, type Language } from '@/lib/utils';

const sections = [
  { slug: 'news', name: 'News' },
  { slug: 'business', name: 'Business' },
  { slug: 'tech', name: 'Tech' },
  { slug: 'culture', name: 'Culture' },
  { slug: 'opinion', name: 'Opinion' },
  { slug: 'explainers', name: 'Explainers' },
];

export function Header({ lang }: { lang: Language }) {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border" data-testid="header-main">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${lang}`} className="flex items-center" data-testid="link-home">
            <h1 className="font-serif font-bold text-2xl md:text-3xl text-primary">
              Yaalee Post
            </h1>
          </Link>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6" data-testid="nav-primary">
              {sections.map(section => (
                <Link
                  key={section.slug}
                  href={`/${lang}/section/${section.slug}`}
                  className="text-sm font-medium hover:text-primary transition-colors"
                  data-testid={`link-section-${section.slug}`}
                >
                  {section.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 border-l border-border pl-4">
              {Object.entries(languages).map(([code, { nativeName }]) => (
                <Link
                  key={code}
                  href={`/${code}`}
                  className={`text-sm px-2 py-1 rounded ${
                    code === lang
                      ? 'bg-primary text-primary-foreground font-semibold'
                      : 'hover:bg-accent'
                  }`}
                  data-testid={`link-lang-${code}`}
                >
                  {code.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <nav className="md:hidden border-t border-border overflow-x-auto" data-testid="nav-mobile">
        <div className="flex gap-4 px-4 py-2">
          {sections.map(section => (
            <Link
              key={section.slug}
              href={`/${lang}/section/${section.slug}`}
              className="text-sm font-medium whitespace-nowrap hover:text-primary transition-colors"
              data-testid={`link-section-mobile-${section.slug}`}
            >
              {section.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

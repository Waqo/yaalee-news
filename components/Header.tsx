import Link from 'next/link';
import { languages, type Language } from '@/lib/utils';

const sections = [
  { slug: 'world', name: 'World' },
  { slug: 'business', name: 'Business' },
  { slug: 'finance', name: 'Finance' },
  { slug: 'politics', name: 'Politics' },
  { slug: 'technology', name: 'Technology' },
  { slug: 'environment', name: 'Environment' },
];

export function Header({ lang }: { lang: Language }) {
  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm" data-testid="header-main">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <span className="font-medium">Breaking News</span>
              <div className="hidden md:block text-xs opacity-90">
                Stay updated with the latest news from Ethiopia and beyond
              </div>
            </div>
            <div className="flex items-center gap-2">
              {Object.entries(languages).map(([code, { nativeName }]) => (
                <Link
                  key={code}
                  href={`/${code}`}
                  className={`text-xs px-2 py-1 rounded transition-colors ${
                    code === lang
                      ? 'bg-white/20 font-semibold'
                      : 'hover:bg-white/10'
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

      {/* Main Header */}
      <div className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link href={`/${lang}`} className="flex items-center" data-testid="link-home">
              <h1 className="font-serif font-bold text-3xl md:text-4xl text-primary hover:opacity-80 transition-opacity">
                Yaalee Post
              </h1>
            </Link>

            <div className="flex items-center gap-4">
              <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-accent rounded-md hover:bg-accent/80 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-sm">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-background border-b border-border" data-testid="nav-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="hidden md:flex items-center gap-8 py-3">
            <Link
              href={`/${lang}`}
              className="text-sm font-semibold hover:text-primary transition-colors"
            >
              Home
            </Link>
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
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden overflow-x-auto">
            <div className="flex gap-6 px-2 py-3">
              <Link
                href={`/${lang}`}
                className="text-sm font-semibold whitespace-nowrap hover:text-primary transition-colors"
              >
                Home
              </Link>
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
          </div>
        </div>
      </nav>
    </header>
  );
}

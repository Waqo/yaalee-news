import Link from 'next/link';
import { languages, type Language } from '@/lib/utils';

const sections = [
  { slug: 'business', name: 'Business' },
  { slug: 'culture', name: 'Culture' },
  { slug: 'explainers', name: 'Explainers' },
  { slug: 'news', name: 'News' },
  { slug: 'opinion', name: 'Opinion' },
  { slug: 'tech', name: 'Tech' },
];

export function Header({ lang }: { lang: Language }) {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });

  return (
    <header className="bg-background border-b border-border" data-testid="header-main">
      {/* Top Bar with Date and Languages */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="text-muted-foreground">{today}</div>
            <div className="flex items-center gap-1">
              {Object.entries(languages).map(([code, { nativeName }]) => (
                <Link
                  key={code}
                  href={`/${code}`}
                  className={`px-3 py-1 rounded transition-colors text-xs font-medium uppercase ${
                    code === lang
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-accent'
                  }`}
                  data-testid={`link-lang-${code}`}
                >
                  {code}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Logo and Brand */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
        <Link href={`/${lang}`} className="flex items-center gap-3 group" data-testid="link-home">
          <svg className="w-12 h-12 md:w-16 md:h-16 text-primary transition-transform group-hover:scale-105" viewBox="0 0 200 200" fill="none">
            {/* Fountain Pen Icon */}
            <path d="M100 20L120 80L100 140L80 80L100 20Z" fill="currentColor"/>
            <circle cx="100" cy="90" r="8" fill="white"/>
            <rect x="95" y="140" width="10" height="30" fill="currentColor"/>
            <path d="M70 160C70 160 85 175 100 175C115 175 130 160 130 160" stroke="currentColor" strokeWidth="4" fill="none"/>
          </svg>
          <h1 className="font-bold text-4xl md:text-5xl text-foreground">
            Yaalee Post
          </h1>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="bg-background border-t border-border" data-testid="nav-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-8 py-3 overflow-x-auto">
            {sections.map(section => (
              <Link
                key={section.slug}
                href={`/${lang}/section/${section.slug}`}
                className="text-sm font-medium whitespace-nowrap hover:text-primary transition-colors"
                data-testid={`link-section-${section.slug}`}
              >
                {section.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

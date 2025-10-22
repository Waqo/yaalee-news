import Link from 'next/link';
import Image from 'next/image';
import { languages, type Language } from '@/lib/utils';
import { Search, User, Moon } from 'lucide-react';

const mainNavigation = [
  { slug: '', name: 'Home' },
  { slug: 'world', name: 'World' },
  { slug: 'business', name: 'Business' },
  { slug: 'finance', name: 'Finance' },
  { slug: 'politics', name: 'Politics' },
  { slug: 'blog', name: 'Blog' },
];

const secondaryNavigation = [
  { slug: 'opinion', name: 'Opinion', icon: '📝' },
  { slug: 'education', name: 'Education', icon: '📚' },
  { slug: 'global-affairs', name: 'Global Affairs', icon: '🌍' },
  { slug: 'featured', name: 'Featured', icon: '⭐' },
  { slug: 'renewable-energy', name: 'Renewable Energy', icon: '♻️' },
  { slug: 'climate-change', name: 'Climate Change', icon: '🌡️' },
  { slug: 'hot', name: 'Hot', icon: '🔥' },
  { slug: 'politics', name: 'Politics', icon: '⚖️' },
  { slug: 'research', name: 'Research', icon: '🔬' },
  { slug: 'health', name: 'Health', icon: '💊' },
];

export function Header({ lang }: { lang: Language }) {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    day: 'numeric',
    month: 'short',
    year: 'numeric' 
  });

  return (
    <header className="bg-background" data-testid="header-main">
      {/* Top Banner */}
      <div className="bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2.5 text-sm">
            <div className="flex items-center gap-2">
              <span className="hidden md:inline">Exclusive insights, data, and analysis for financial market experts.</span>
              <span className="md:hidden">📰 Stay updated with latest news</span>
            </div>
            <Link 
              href={`/${lang}/subscribe`}
              className="bg-[#ff6b35] hover:bg-[#ff8555] text-white px-4 py-1.5 rounded text-xs font-medium transition-colors whitespace-nowrap"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href={`/${lang}`} className="inline-block transition-opacity hover:opacity-80" data-testid="link-home">
              <Image 
                src="/yaalee-logo.png" 
                alt="Yaalee Post" 
                width={200} 
                height={66}
                priority
                className="h-auto w-auto"
              />
            </Link>

            {/* Main Navigation */}
            <nav className="hidden lg:flex items-center gap-8" data-testid="nav-primary">
              {mainNavigation.map(item => (
                <Link
                  key={item.slug}
                  href={item.slug ? `/${lang}/section/${item.slug}` : `/${lang}`}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="relative group">
                <button className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
                  Pages
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <div className="hidden md:flex items-center gap-1">
                {Object.entries(languages).map(([code]) => (
                  <Link
                    key={code}
                    href={`/${code}`}
                    className={`text-xs px-2 py-1 rounded transition-colors ${
                      code === lang
                        ? 'bg-primary text-primary-foreground font-medium'
                        : 'hover:bg-accent text-muted-foreground'
                    }`}
                    data-testid={`link-lang-${code}`}
                  >
                    {code.toUpperCase()}
                  </Link>
                ))}
              </div>

              <Link
                href={`/${lang}/my-news`}
                className="hidden md:inline-flex bg-foreground text-background px-4 py-2 rounded text-sm font-medium hover:bg-foreground/90 transition-colors"
              >
                My News
              </Link>
              <button className="p-2 hover:bg-accent rounded-full transition-colors">
                <User className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-accent rounded-full transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-accent rounded-full transition-colors">
                <Moon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 py-3 overflow-x-auto scrollbar-hide">
              {secondaryNavigation.map(item => (
                <Link
                  key={item.slug}
                  href={`/${lang}/section/${item.slug}`}
                  className="flex items-center gap-1.5 text-sm whitespace-nowrap hover:text-primary transition-colors"
                  data-testid={`link-category-${item.slug}`}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
            
            {/* Social Icons */}
            <div className="hidden xl:flex items-center gap-2 ml-6">
              <a href="#" className="p-1.5 hover:text-primary transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="p-1.5 hover:text-primary transition-colors" aria-label="Flickr">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.5 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm11 0a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/>
                </svg>
              </a>
              <a href="#" className="p-1.5 hover:text-primary transition-colors" aria-label="Medium">
                <span className="font-bold text-sm">M</span>
              </a>
              <a href="#" className="p-1.5 hover:text-primary transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="p-1.5 hover:text-primary transition-colors" aria-label="RSS">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Date Bar */}
      <div className="bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="py-2 text-xs text-muted-foreground">
            {today}
          </div>
        </div>
      </div>
    </header>
  );
}

import Link from 'next/link';
import type { Language } from '@/lib/utils';

const footerSections = {
  about: [
    { name: 'About Us', href: '/about' },
    { name: 'Editorial Standards', href: '/editorial-standards' },
    { name: 'Corrections', href: '/corrections' },
    { name: 'Contact', href: '/contact' },
  ],
  sections: [
    { name: 'News', href: '/section/news' },
    { name: 'Business', href: '/section/business' },
    { name: 'Tech', href: '/section/tech' },
    { name: 'Culture', href: '/section/culture' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

export function Footer({ lang }: { lang: Language }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="font-serif font-bold text-2xl text-primary mb-4">Yaalee Post</h2>
            <p className="text-sm text-muted-foreground">
              Ethiopia's trusted source for news, analysis, and storytelling.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-4">About</h3>
            <ul className="space-y-2">
              {footerSections.about.map(link => (
                <li key={link.href}>
                  <Link
                    href={`/${lang}${link.href}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer${link.href}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-4">Sections</h3>
            <ul className="space-y-2">
              {footerSections.sections.map(link => (
                <li key={link.href}>
                  <Link
                    href={`/${lang}${link.href}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer${link.href}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerSections.legal.map(link => (
                <li key={link.href}>
                  <Link
                    href={`/${lang}${link.href}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer${link.href}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Yaalee Post. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

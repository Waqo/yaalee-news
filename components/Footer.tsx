import Link from 'next/link';
import type { Language } from '@/lib/utils';

const footerSections = {
  about: [
    { name: 'Contact US', href: '/contact' },
    { name: 'Advertise with US', href: '/contact' },
    { name: 'Editorial Standards', href: '/editorial-standards' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/terms' },
  ],
  sections: [
    { name: 'World', href: '/section/world' },
    { name: 'Business', href: '/section/business' },
    { name: 'Finance', href: '/section/finance' },
    { name: 'Politics', href: '/section/politics' },
    { name: 'Technology', href: '/section/technology' },
    { name: 'Environment', href: '/section/environment' },
  ],
};

export function Footer({ lang }: { lang: Language }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h2 className="font-bold text-xl mb-3">Yaalee Post</h2>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed max-w-md">
              <span className="font-semibold">Information You Can Trust:</span> Yaalee Post covers Ethiopian politics, news, views and more. Stay instantly connected with breaking stories and live updates, making us your dependable source for 24/7 news.
            </p>
            <Link href={`/${lang}/about`} className="text-sm text-primary hover:underline">
              About Yaalee Post →
            </Link>
          </div>

          <div>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${lang}/contact`} className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href={`/${lang}/contact`} className="text-muted-foreground hover:text-primary transition-colors">Advertise with Us</Link></li>
              <li><Link href={`/${lang}/privacy`} className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href={`/${lang}/terms`} className="text-muted-foreground hover:text-primary transition-colors">Terms</Link></li>
              <li><Link href={`/${lang}/corrections`} className="text-muted-foreground hover:text-primary transition-colors">Corrections</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
          <p>© {currentYear} Yaalee Post. All Rights Reserved.</p>
          <p>Website developed by AlignCo</p>
        </div>
      </div>
    </footer>
  );
}

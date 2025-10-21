import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const merriweather = Merriweather({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://yaaleepost.com'),
  title: {
    default: 'Yaalee Post - Ethiopian News & Analysis',
    template: '%s | Yaalee Post',
  },
  description: 'Ethiopia\'s trusted source for news, business, technology, and culture',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Yaalee Post',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yaaleepost',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${merriweather.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

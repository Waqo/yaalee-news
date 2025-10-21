export function newsArticleJsonLd(p: {
  url: string;
  title: string;
  images: string[];
  datePublished: string;
  dateModified?: string;
  authors: { name: string; url?: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    mainEntityOfPage: p.url,
    headline: p.title,
    image: p.images,
    datePublished: p.datePublished,
    dateModified: p.dateModified ?? p.datePublished,
    author: p.authors.map(a => ({ '@type': 'Person', name: a.name, url: a.url })),
    publisher: {
      '@type': 'Organization',
      name: 'Yaalee Post',
      logo: { '@type': 'ImageObject', url: `${process.env.NEXT_PUBLIC_SITE_URL || ''}/logo-512.png` }
    }
  };
}

export function orgJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Yaalee Post',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yaaleepost.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || ''}/logo-512.png`
  };
}

export function breadcrumbJsonLd(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem', position: i + 1, name: it.name, item: it.item
    }))
  };
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://yaaleepost.com',
  generateRobotsTxt: true,
  exclude: ['/studio/*', '/api/*', '/news-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://yaaleepost.com'}/news-sitemap.xml`
    ],
  },
  alternateRefs: [
    {
      href: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://yaaleepost.com'}/en`,
      hreflang: 'en',
    },
    {
      href: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://yaaleepost.com'}/om`,
      hreflang: 'om',
    },
    {
      href: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://yaaleepost.com'}/am`,
      hreflang: 'am',
    },
  ],
};

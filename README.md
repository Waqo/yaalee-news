# Yaalee Post

A production-ready multilingual Ethiopian news platform built with Next.js 14+, Sanity CMS, and Supabase PostgreSQL.

## Features

- **Multilingual Support**: English (EN), Oromo (OM), and Amharic (AM)
- **SEO Optimized**: JSON-LD schemas, news sitemaps, hreflang tags, canonical URLs
- **CMS Integration**: Sanity Growth plan for editorial content management
- **Database**: Supabase PostgreSQL for operational data (users, profiles, ad campaigns)
- **Performance**: Optimized Core Web Vitals, lazy loading, image optimization
- **Ad Management**: CLS-safe ad slots with lazy loading
- **Editorial Design**: World-class news platform design with Ethiopian visual identity

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **CMS**: Sanity (Growth plan)
- **Database**: Supabase PostgreSQL
- **Styling**: Tailwind CSS with custom Ethiopian color palette
- **Typography**: Merriweather (serif), Inter (sans-serif), Noto Sans Ethiopic
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel (via GitHub integration)

## Development

### Prerequisites

- Node.js 18+
- Sanity project (Growth plan) with configured locales (en, om, am)
- Supabase project with PostgreSQL database

### Environment Variables

Required secrets (add to Replit Secrets or `.env.local`):

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
SANITY_API_DATASET=production
SANITY_API_READ_TOKEN=your-read-token
SANITY_API_WRITE_TOKEN=your-write-token
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_DB_URL_SERVICE_ROLE=postgres://service-role-connection-string
REVALIDATE_SECRET=your-secret-string
```

### Running Locally

```bash
# Install dependencies (if not using Replit)
npm install

# Run database migrations
npm run migrate

# Start development server
npm run dev
```

The application will be available at `http://localhost:5000`

### Database Migrations

Migrations are stored in `/migrations` directory and executed using the migration runner:

```bash
npm run migrate
```

This connects to Supabase using `SUPABASE_DB_URL_SERVICE_ROLE` and applies all pending migrations.

### Sanity CMS Setup

1. Create a Sanity project at sanity.io (Growth plan required)
2. Enable locales: `en`, `om`, `am`
3. Define schemas for articles, authors, sections, tags
4. Configure webhooks to hit `/api/revalidate` for on-demand revalidation

### Revalidation

To trigger on-demand revalidation from Sanity:

```bash
POST /api/revalidate
Headers: x-revalidate-secret: <REVALIDATE_SECRET>
Body: { "slug": "article-slug", "lang": "en", "tags": ["tag1"] }
```

## Project Structure

```
/app                  # Next.js App Router pages
  /[lang]             # Multilingual route segment
    /news/[slug]      # Article detail pages
    /section/[slug]   # Section archive pages
  /api                # API routes
  /news-sitemap.xml   # News sitemap (48h rolling)
/components           # React components
/lib                  # Utilities (Sanity, Supabase, SEO helpers)
/migrations           # SQL migration files
/public               # Static assets
/scripts              # Migration runner
/styles               # Global CSS
```

## Deployment

### GitHub → Vercel

1. Push repository to GitHub
2. Import in Vercel
3. Set Node.js version ≥ 18
4. Configure environment variables
5. Deploy

**Important**: Run migrations against production database manually, not in Vercel build process.

## Content Guidelines

Follow editorial standards documented in `/[lang]/editorial-standards` page.

## Performance Targets

- **LCP**: < 2.5s
- **INP**: < 200ms
- **CLS**: < 0.1

## License

All rights reserved © 2025 Yaalee Post

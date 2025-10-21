# Yaalee Post

## Overview

Yaalee Post is a production-ready multilingual Ethiopian news platform built with Next.js 14+, Sanity CMS (Growth plan), and Supabase PostgreSQL. The platform supports three languages (English default, Oromo, Amharic) with complete SEO optimization, CLS-safe ad management, and a world-class editorial design system following Ethiopian visual identity.

**Project Status:** Complete Next.js 14 implementation with App Router architecture. All core features built and ready for deployment.

**Last Updated:** October 21, 2025

## User Preferences

Preferred communication style: Simple, everyday language.

## Quick Start

### Running the Application

**Important:** The project has been converted from Express/React to Next.js 14. The workflow command needs to be updated:

```bash
# Correct command to run the app:
npx next dev -p 5000

# Or after updating package.json scripts:
npm run dev
```

### Setting Up Sanity CMS

1. Log into your Sanity project at sanity.io
2. The schemas are already defined in `/sanity/schemas/`
3. Import the schemas into your Sanity Studio
4. Create initial content (articles, authors, sections, tags)
5. Set up webhook to hit `/api/revalidate` for on-demand cache updates

### Database Setup

Apply migrations to your Supabase database:

1. Open Supabase SQL Editor
2. Copy contents of `/migrations/001_init.sql`
3. Execute the migration
4. Verify tables were created (profiles, authors, sections, tags, articles, etc.)

## System Architecture

### Frontend Architecture

**Framework:** Next.js 14+ with App Router and TypeScript

**Routing Pattern:**
- Language-prefixed routes: `/[lang]/...` (supports `en`, `om`, `am`)
- Homepage: `/[lang]` (e.g., `/en`, `/om`, `/am`)
- Article detail: `/[lang]/news/[slug]`
- Section pages: `/[lang]/section/[slug]`
- Trust pages: `/[lang]/about`, `/[lang]/contact`, etc.

**Rendering Strategy:**
- Homepage: 60-second ISR revalidation
- Article pages: 1-hour ISR revalidation
- Section pages: 5-minute ISR revalidation

**Styling:**
- Tailwind CSS with Ethiopian color palette
- Primary: `142 72% 45%` (Ethiopian green)
- Accent: `48 95% 53%` (Golden yellow)
- Typography: Merriweather (headlines), Inter (body EN/OM), Noto Sans Ethiopic (AM)

**Performance Optimizations:**
- Lazy-loaded ad slots with fixed heights (CLS prevention)
- Next.js Image optimization with priority for above-fold images
- Vercel Analytics for privacy-friendly tracking
- Minimal animations, content-first approach

### Content Management System

**Sanity (Growth Plan)** - Headless CMS for editorial content

**Schemas Defined:**
- **Articles:** Title, slug, language, status, summary, body (PortableText), featured image, authors, section, tags, publish/update timestamps
- **Authors:** Name, slug, bio, headshot, social links
- **Sections:** News, Business, Tech, Culture, Opinion, Explainers
- **Tags:** Content taxonomy

**Content Workflow:**
- Editors manage content in Sanity Studio
- Webhook integration triggers `/api/revalidate` for instant cache updates
- Multi-language support with localized content

### Database Architecture

**Supabase PostgreSQL** - Operational data

**Schema:** (See `/migrations/001_init.sql`)
- User profiles with role-based access (contributor/writer/editor/admin)
- Authors, sections, tags (mirrored from Sanity)
- Media assets with metadata
- Articles and translations (can mirror Sanity for search)
- Ad campaigns (future monetization)

**Security:**
- Row-Level Security (RLS) enabled
- Public read access to published content
- Authenticated staff write access based on roles
- Helper view `public.me` for role checking

### SEO & Discoverability

**Structured Data (JSON-LD):**
- NewsArticle schema with complete metadata
- Organization schema for site branding
- Breadcrumb schema for navigation
- Proper author, publisher, date information

**Sitemaps:**
- **Standard sitemap** (`/sitemap.xml`): All pages with hreflang alternates
- **News sitemap** (`/news-sitemap.xml`): Last 48 hours of articles (Google News)
- Both referenced in `/robots.txt`

**Internationalization:**
- `hreflang` alternate links for all languages
- Canonical URLs prevent duplicate content
- Language-specific Open Graph metadata

### Advertising System

**AdSlot Component** (`/components/AdSlot.tsx`):
- Fixed `minHeight` prevents layout shift (CLS optimization)
- Lazy loading with IntersectionObserver (300px margin)
- Ready for GAM/AdSense integration
- Pre-defined slots: HOME_TOP, ARTICLE_TOP, ARTICLE_BOTTOM

### On-Demand Revalidation

**Webhook Endpoint:** `/api/revalidate`
- Protected by `REVALIDATE_SECRET` header
- Accepts `slug`, `lang`, and `tags[]` parameters
- Triggers Next.js cache purge for updated content

**Sanity Webhook Setup:**
```
POST https://your-domain.com/api/revalidate
Headers: x-revalidate-secret: <REVALIDATE_SECRET>
Body: { "slug": "article-slug", "lang": "en" }
```

## File Structure

```
/app                          # Next.js App Router
  layout.tsx                  # Root layout with fonts
  page.tsx                    # Redirects / to /en
  /[lang]                     # Language-specific routes
    layout.tsx                # Language layout with Header/Footer
    page.tsx                  # Homepage with featured article grid
    /news/[slug]              # Article detail pages
      page.tsx
    /section/[slug]           # Section archive pages
      page.tsx
    /about                    # Trust pages
    /contact
    /editorial-standards
    /corrections
    /privacy
    /terms
  /api
    /revalidate              # Webhook for cache invalidation
      route.ts
  /news-sitemap.xml          # 48-hour news sitemap
    route.ts
  /robots.txt                # Dynamic robots.txt
    route.ts
  sitemap.ts                 # Standard sitemap with hreflang

/components
  ArticleCard.tsx            # Reusable article card (standard/feature/compact)
  AdSlot.tsx                 # CLS-safe ad container
  Header.tsx                 # Site header with navigation
  Footer.tsx                 # Site footer with links
  /ui
    button.tsx               # Radix UI button component

/lib
  sanity.ts                  # Sanity client & GROQ queries
  supabase.ts                # Supabase client
  seo.ts                     # JSON-LD helpers (NewsArticle, Org, Breadcrumb)
  utils.ts                   # Utility functions, language helpers

/sanity
  /schemas
    article.ts               # Article schema
    author.ts                # Author schema
    section.ts               # Section schema
    tag.ts                   # Tag schema
    index.ts                 # Schema exports

/migrations
  001_init.sql               # Initial database schema

/scripts
  run-migrations.js          # Migration runner (apply manually via Supabase)

/styles
  globals.css                # Global styles with Ethiopian color palette

/public
  ads.txt                    # Publisher verification (add your IDs)

next.config.mjs              # Next.js configuration
tailwind.config.ts           # Tailwind with custom theme
sanity.config.ts             # Sanity configuration
next-sitemap.config.js       # Sitemap configuration
tsconfig.json                # TypeScript configuration
```

## Environment Variables

**Required Secrets:** (Already configured in Replit)

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SANITY_PROJECT_ID=<your-project-id>
SANITY_API_DATASET=production
SANITY_API_READ_TOKEN=<read-token>
SANITY_API_WRITE_TOKEN=<write-token>
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon-key>
SUPABASE_DB_URL_SERVICE_ROLE=postgres://...
REVALIDATE_SECRET=<webhook-secret>
```

## Next Steps

### 1. Update Workflow Command

The Replit workflow is still using the old Express command. You need to:

1. Click "Shell" in Replit
2. Stop the current workflow
3. Run: `npx next dev -p 5000`

Alternatively, ask Replit support to update the workflow command from:
```
npm run dev
```
to:
```
npx next dev -p 5000
```

### 2. Apply Database Migrations

1. Open your Supabase project dashboard
2. Go to SQL Editor
3. Copy the entire contents of `/migrations/001_init.sql`
4. Execute the migration
5. Verify tables were created successfully

### 3. Set Up Sanity Content

1. Log into sanity.io and access your project
2. Import the schemas from `/sanity/schemas/`
3. Create initial content:
   - At least 3-5 articles in English
   - 2-3 authors
   - Sections (already seeded in DB, create matching ones in Sanity)
   - A few tags
4. Publish the articles

### 4. Configure Sanity Webhook

In your Sanity project settings:

1. Add webhook: `https://your-replit-url.repl.co/api/revalidate`
2. Set custom header: `x-revalidate-secret: <your-REVALIDATE_SECRET>`
3. Trigger on: Article publish/update

### 5. Test the Application

Once Next.js is running:

1. Visit `http://localhost:5000/en` (or your Replit URL)
2. Check that the homepage loads
3. Verify articles display (requires Sanity content)
4. Test language switcher (EN/OM/AM)
5. Check `/sitemap.xml` and `/news-sitemap.xml`
6. View article detail pages
7. Test trust pages (About, Contact, etc.)

### 6. Deploy to Vercel

When ready for production:

1. Push this repository to GitHub
2. Import in Vercel
3. Add all environment variables
4. Deploy
5. Configure custom domain
6. Update `NEXT_PUBLIC_SITE_URL` to production URL
7. Update Sanity webhook to point to production

## Performance Targets

- **LCP (Largest Contentful Paint):** < 2.5s
- **INP (Interaction to Next Paint):** < 200ms
- **CLS (Cumulative Layout Shift):** < 0.1

## Known Issues & Limitations

1. **Workflow Command:** The Replit workflow needs manual update to run Next.js instead of Express
2. **Migration Runner:** ESM import issue - migrations should be applied manually via Supabase SQL Editor
3. **Sample Content:** No sample articles exist yet - you need to create content in Sanity
4. **Sanity Studio:** Optional - can be embedded at `/app/studio` or hosted separately

## External Dependencies

- **Sanity (Growth Plan):** Content management with Growth plan features
- **Supabase:** PostgreSQL database with RLS and auth
- **Vercel:** Recommended hosting platform (automatic deployments)
- **Vercel Analytics:** Privacy-friendly analytics

## Support & Resources

- **Next.js 14 Docs:** https://nextjs.org/docs
- **Sanity Docs:** https://www.sanity.io/docs
- **Supabase Docs:** https://supabase.com/docs
- **Design Guidelines:** See `/design_guidelines.md` for complete Ethiopian design system

## License

All rights reserved © 2025 Yaalee Post

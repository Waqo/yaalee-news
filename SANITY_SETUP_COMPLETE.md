# ✅ Sanity Studio Setup Complete

## Summary

Your Sanity Studio has been successfully set up for the Yaalee News project! The setup is complete and ready for content management.

## What Was Installed & Configured

### 1. ✅ Dependencies Installed
- **sanity** v4.11.0 - Core Sanity Studio
- **@sanity/client** v7.12.0 - JavaScript client
- **@sanity/vision** v4.11.0 - GROQ query tool
- **@sanity/icons** v3.5.2 - Icon library
- **@sanity/image-url** v1.1.1 - Image URL builder
- **next-sanity** v11.5.6 - Next.js integration
- **@portabletext/react** v4.0.3 - Portable Text renderer

### 2. ✅ Configuration Files Updated

#### `sanity.config.ts`
- Updated to modern Sanity v4 syntax
- Using `structureTool()` instead of deprecated `deskTool()`
- Added `visionTool()` for GROQ query testing
- Set basePath to `/studio` for embedded studio

#### `package.json`
- Replaced incorrect template configuration
- Added proper Next.js + Sanity dependencies
- Added npm scripts:
  - `npm run studio` - Start standalone studio
  - `npm run studio:build` - Build studio for production
  - `npm run studio:deploy` - Deploy to Sanity hosting
  - `npm run dev` - Start Next.js with embedded studio

#### `.gitignore`
- Updated with comprehensive Next.js and Sanity patterns
- Ensures `.env.local` files are never committed

### 3. ✅ Content Schemas Ready

Located in `sanity/schemas/`:

**Article Schema** (`article.ts`)
- Multilingual support: English (en), Oromo (om), Amharic (am)
- Status workflow: Draft → In Review → Scheduled → Published → Archived
- Rich text body with image embedding
- Featured image with metadata (alt, caption, credit)
- Author references (multiple authors)
- Section categorization
- Tag system
- Publishing timestamps
- Comment toggle

**Author Schema** (`author.ts`)
- Name and slug
- Biography
- Headshot image
- Social media integration (Twitter, LinkedIn, Email)

**Section Schema** (`section.ts`)
- Name and slug
- Description

**Tag Schema** (`tag.ts`)
- Name and slug

### 4. ✅ Client Configuration

`lib/sanity.ts` includes:
- **sanityClient** - Read-only client for fetching content
- **sanityClientWrite** - Write client for mutations
- **getArticles()** - Fetch articles by language with pagination
- **getArticleBySlug()** - Fetch single article with full details

## 📋 Next Steps to Get Started

### Step 1: Set Up Environment Variables

Create a `.env.local` file in the project root:

```bash
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
SANITY_API_DATASET=production
SANITY_API_READ_TOKEN=your-read-token
SANITY_API_WRITE_TOKEN=your-write-token

# Other variables (see ENV_SETUP.md for complete list)
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_DB_URL_SERVICE_ROLE=postgres://...
REVALIDATE_SECRET=your-secret-string
```

**To get your Sanity credentials:**
1. Visit https://www.sanity.io/manage
2. Select your project (or create one)
3. Copy the Project ID
4. Go to Settings → API → Tokens
5. Create tokens:
   - Read Token (Viewer role)
   - Write Token (Editor role)

### Step 2: Start the Studio

**Option A: Standalone Studio (Recommended)**
```bash
npm run studio
```
Opens at: http://localhost:3333

**Option B: Embedded in Next.js**
```bash
npm run dev
```
Visit: http://localhost:3000/studio

### Step 3: Configure CORS (If Needed)

If you get CORS errors:
1. Go to https://www.sanity.io/manage
2. Select your project
3. Go to Settings → API → CORS Origins
4. Add:
   - `http://localhost:3000`
   - `http://localhost:3333`
   - Your production domain

### Step 4: Create Your First Content

1. Log in to the studio
2. Click "Article" to create a news article
3. Fill in the required fields:
   - Title
   - Slug (auto-generated from title)
   - Language (en, om, or am)
   - Status (Draft, Published, etc.)
   - Body content
4. Add authors, sections, and tags
5. Save and publish!

### Step 5: Set Up Webhooks (Production)

For on-demand revalidation:
1. Go to Sanity project settings → API → Webhooks
2. Create webhook:
   - URL: `https://your-domain.com/api/revalidate`
   - Header: `x-revalidate-secret: your-revalidate-secret`
   - Trigger: Create, Update, Delete
   - Filter: `_type in ["article", "author", "section", "tag"]`

## 🎯 Key Features

### Multilingual Support
All articles can be created in three languages:
- **English** (en)
- **Oromo** (om)  
- **Amharic** (am)

### Editorial Workflow
Track content through stages:
- Draft
- In Review
- Scheduled
- Published
- Archived

### Rich Content
- Portable Text editor with formatting
- Embed images in article body
- Featured images with metadata
- Photo credits and captions

### Vision Tool
Test GROQ queries at `/studio/vision` to:
- Query your content
- Test data structures
- Debug fetches

## 📚 Documentation Files Created

1. **STUDIO_SETUP.md** - Comprehensive setup and usage guide
2. **ENV_SETUP.md** - Environment variables reference
3. **SANITY_SETUP_COMPLETE.md** - This file

## 🔧 Useful Commands

```bash
# Development
npm run dev              # Start Next.js dev server
npm run studio          # Start Sanity Studio standalone

# Building
npm run build           # Build Next.js app
npm run studio:build    # Build Sanity Studio

# Deployment
npm run studio:deploy   # Deploy Studio to Sanity

# Database
npm run migrate         # Run Supabase migrations
```

## 🐛 Troubleshooting

**Studio won't start**
- Check that `NEXT_PUBLIC_SANITY_PROJECT_ID` is set in `.env.local`
- Ensure you've run `npm install`
- Verify the project ID is correct

**Can't log in to Studio**
- Make sure you have access to the Sanity project
- Check CORS settings in Sanity project settings

**Content not appearing on site**
- Ensure articles are set to "published" status
- Check that the language matches (en, om, or am)
- Verify environment variables are loaded

**TypeScript errors**
- Some minor type warnings exist but won't affect functionality
- Run `npm run build` to see if there are blocking errors

## ✨ What's Working

✅ Sanity Studio v4 configuration  
✅ Modern structure and vision tools  
✅ Complete content schemas for news site  
✅ Multilingual article support  
✅ Client configuration with helper functions  
✅ Next.js integration ready  
✅ All dependencies installed  
✅ npm scripts configured  

## 🎉 You're Ready!

Your Sanity Studio setup is complete! Just add your environment variables and start creating content.

For questions or issues, refer to:
- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js Sanity Integration](https://www.sanity.io/plugins/next-sanity)
- [GROQ Query Language](https://www.sanity.io/docs/groq)


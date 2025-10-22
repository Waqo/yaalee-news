# Sanity Studio Setup Guide

## ✅ Setup Complete!

Your Sanity Studio has been successfully configured for the Yaalee News project.

## 📁 What Was Set Up

1. **Modern Sanity v4 Configuration** (`sanity.config.ts`)
   - Structure Tool for content management
   - Vision Tool for GROQ query testing
   - Base path set to `/studio` for embedded studio

2. **Content Schemas** (in `sanity/schemas/`)
   - `article` - News articles with multilingual support (English, Oromo, Amharic)
   - `author` - Author profiles with bios and social media
   - `section` - News categories/sections
   - `tag` - Article tags for organization

3. **Sanity Client** (`lib/sanity.ts`)
   - Read client for public content fetching
   - Write client for content mutations
   - Helper functions: `getArticles()`, `getArticleBySlug()`

## 🚀 Running the Studio

### Standalone Studio (Recommended for Content Editors)
```bash
npm run studio
```
This starts the Sanity Studio on **http://localhost:3333**

### Embedded in Next.js App
The studio is configured to run at `/studio` when you run your Next.js app:
```bash
npm run dev
```
Then visit **http://localhost:3000/studio**

## 🔑 Environment Variables Required

Before running the studio, create a `.env.local` file (see `ENV_SETUP.md` for details):

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
SANITY_API_DATASET=production
SANITY_API_READ_TOKEN=your-read-token
SANITY_API_WRITE_TOKEN=your-write-token
```

### How to Get Your Credentials:

1. Visit https://www.sanity.io/manage
2. Select or create your project
3. Go to **Settings** → **API** → **Tokens**
4. Create tokens:
   - **Read Token**: Viewer role
   - **Write Token**: Editor role

## 📝 Content Model Overview

### Article Schema
- **Multilingual**: Supports English (en), Oromo (om), and Amharic (am)
- **Status Workflow**: Draft → In Review → Scheduled → Published → Archived
- **Rich Content**: 
  - Title, slug, summary
  - Rich text body with embedded images
  - Featured image with alt text, caption, and photo credit
  - Author references (multiple authors supported)
  - Section (category) reference
  - Tags for organization
  - Publishing timestamps
  - Comment toggle

### Author Schema
- Name and slug
- Biography
- Headshot image
- Social media links (Twitter, LinkedIn, Email)

### Section Schema
- Name and slug
- Description

### Tag Schema
- Name and slug

## 🔌 Additional Features

### Vision Tool
Access at `/studio/vision` to:
- Test GROQ queries
- Explore your content structure
- Debug data fetching

### Structure Tool
The main interface for:
- Creating and editing content
- Managing documents
- Organizing content hierarchy

## 📚 Useful Commands

```bash
# Start studio locally
npm run studio

# Build studio for production
npm run studio:build

# Deploy studio to Sanity's hosting
npm run studio:deploy

# Run Next.js with embedded studio
npm run dev

# Build Next.js app
npm run build

# Run database migrations (Supabase)
npm run migrate
```

## 🔗 Webhooks for Revalidation

To enable on-demand revalidation when content is published:

1. Go to your Sanity project settings
2. Navigate to **API** → **Webhooks**
3. Create a new webhook:
   - **URL**: `https://your-domain.com/api/revalidate`
   - **Dataset**: production
   - **Headers**: `x-revalidate-secret: your-revalidate-secret`
   - **Trigger on**: Create, Update, Delete
   - **Filter**: `_type in ["article", "author", "section", "tag"]`

## 🎨 Customization

### Adding New Fields
Edit schema files in `sanity/schemas/` directory.

### Adding Plugins
Install plugins via npm and add to `sanity.config.ts`:
```typescript
plugins: [
  structureTool(),
  visionTool(),
  // yourPlugin(),
]
```

### Popular Plugins
- `@sanity/table` - Table editor
- `@sanity/code-input` - Code blocks
- `sanity-plugin-media` - Enhanced media library
- `@sanity/google-maps-input` - Location picker

## 📖 Documentation

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Schema Types](https://www.sanity.io/docs/schema-types)

## 🐛 Troubleshooting

### Studio won't start
- Ensure all environment variables are set
- Check that `NEXT_PUBLIC_SANITY_PROJECT_ID` is correct
- Run `npm install` to ensure all dependencies are installed

### CORS errors
- Add your development URLs to the CORS origins list in Sanity project settings
- Common URLs: `http://localhost:3000`, `http://localhost:3333`

### Authentication issues
- Verify your API tokens have the correct permissions
- Tokens can be regenerated in project settings

## 🎉 Next Steps

1. Set up your `.env.local` file
2. Run `npm run studio` to start the studio
3. Log in with your Sanity account
4. Start creating content!
5. Configure webhooks for production deployment


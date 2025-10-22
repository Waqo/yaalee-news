# Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
SANITY_API_DATASET=production
SANITY_API_READ_TOKEN=your-read-token
SANITY_API_WRITE_TOKEN=your-write-token

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_DB_URL_SERVICE_ROLE=postgres://service-role-connection-string

# Revalidation Secret (for Sanity webhooks)
REVALIDATE_SECRET=your-secret-string
```

## How to Get Your Sanity Credentials

1. **Project ID**: Visit https://www.sanity.io/manage
2. **Tokens**: Go to your project settings → API → Tokens
   - Create a "Read" token for `SANITY_API_READ_TOKEN`
   - Create a "Write" token (Editor role) for `SANITY_API_WRITE_TOKEN`

## Note
Make sure `.env.local` is in your `.gitignore` file to prevent committing secrets.


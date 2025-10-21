-- Enable extensions (Supabase: pgcrypto available)
create extension if not exists "pgcrypto";

-- USERS/ROLES
create table if not exists public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null default 'contributor',
  created_at timestamptz not null default now()
);

-- AUTHORS (public bylines)
create table if not exists public.authors (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  bio text,
  headshot_url text,
  social jsonb default '{}'::jsonb
);

-- SECTIONS & TAGS
create table if not exists public.sections (
  id serial primary key,
  slug text unique not null,
  name text not null
);
create table if not exists public.tags (
  id serial primary key,
  slug text unique not null,
  name text not null
);

-- MEDIA
create table if not exists public.media_assets (
  id uuid primary key default gen_random_uuid(),
  url text not null,
  kind text not null check (kind in ('image','video')),
  width int,
  height int,
  credit text,
  caption text,
  alt text,
  meta jsonb default '{}'::jsonb,
  created_at timestamptz not null default now()
);

-- ARTICLES
create table if not exists public.articles (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  status text not null check (status in ('draft','review','scheduled','published','archived')),
  section_id int references public.sections(id) on delete set null,
  featured_media_id uuid references public.media_assets(id) on delete set null,
  language text not null,
  allow_comments boolean not null default false,
  published_at timestamptz,
  updated_at timestamptz not null default now(),
  created_by uuid references auth.users(id),
  updated_by uuid references auth.users(id),
  created_at timestamptz not null default now()
);

-- TRANSLATIONS (one row per lang)
create table if not exists public.article_translations (
  id uuid primary key default gen_random_uuid(),
  article_id uuid not null references public.articles(id) on delete cascade,
  lang text not null,
  title text not null,
  summary text,
  body jsonb not null,
  slug text not null,
  unique (article_id, lang),
  unique (lang, slug)
);

-- MULTI-BYLINE
create table if not exists public.article_authors (
  article_id uuid references public.articles(id) on delete cascade,
  author_id uuid references public.authors(id) on delete cascade,
  ord smallint not null default 1,
  primary key (article_id, author_id)
);

-- TAGGING
create table if not exists public.article_tags (
  article_id uuid references public.articles(id) on delete cascade,
  tag_id int references public.tags(id) on delete cascade,
  primary key (article_id, tag_id)
);

-- REVISIONS / CORRECTIONS
create table if not exists public.article_revisions (
  id bigserial primary key,
  article_id uuid references public.articles(id) on delete cascade,
  note text,
  snapshot jsonb,
  created_at timestamptz not null default now(),
  created_by uuid references auth.users(id)
);

-- DIRECT-SOLD ADS
create table if not exists public.ad_campaigns (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  placement_key text not null,
  start_date date,
  end_date date,
  targeting jsonb default '{}'::jsonb,
  creative jsonb default '{}'::jsonb,
  active boolean not null default true
);

-- INDEXES
create index if not exists idx_articles_published_at on public.articles (published_at desc);
create index if not exists idx_articles_status on public.articles (status);
create index if not exists idx_translations_lang_slug on public.article_translations (lang, slug);
create index if not exists idx_article_authors_article_ord on public.article_authors (article_id, ord);

-- === RLS ===
alter table public.profiles              enable row level security;
alter table public.authors               enable row level security;
alter table public.sections              enable row level security;
alter table public.tags                  enable row level security;
alter table public.media_assets          enable row level security;
alter table public.articles              enable row level security;
alter table public.article_translations  enable row level security;
alter table public.article_authors       enable row level security;
alter table public.article_tags          enable row level security;
alter table public.article_revisions     enable row level security;
alter table public.ad_campaigns          enable row level security;

-- Helper view for role
create or replace view public.me as
select u.id as user_id, coalesce(p.role,'contributor') as role
from auth.users u left join public.profiles p on p.user_id=u.id
where u.id = auth.uid();

-- PUBLIC READ policies (published only)
create policy "public read sections" on public.sections for select using (true);
create policy "public read tags"     on public.tags     for select using (true);
create policy "public read media"    on public.media_assets for select using (true);

create policy "public read published articles"
on public.articles for select using (status = 'published');

create policy "public read published translations"
on public.article_translations for select using (
  exists (select 1 from public.articles a where a.id = article_id and a.status='published')
);

-- STAFF WRITE policies
create policy "staff write articles"
on public.articles for all to authenticated
using (exists (select 1 from public.me where role in ('writer','editor','admin')))
with check (exists (select 1 from public.me where role in ('writer','editor','admin')));

create policy "staff write translations"
on public.article_translations for all to authenticated
using (exists (select 1 from public.me where role in ('writer','editor','admin')))
with check (exists (select 1 from public.me where role in ('writer','editor','admin')));

create policy "staff write media"
on public.media_assets for all to authenticated
using (exists (select 1 from public.me where role in ('writer','editor','admin')))
with check (exists (select 1 from public.me where role in ('writer','editor','admin')));

create policy "staff write taxonomy"
on public.tags for all to authenticated
using (exists (select 1 from public.me where role in ('editor','admin')))
with check (exists (select 1 from public.me where role in ('editor','admin')));

-- SEED (sections/tags)
insert into public.sections (slug, name) values
  ('news','News'),('business','Business'),('tech','Tech'),
  ('culture','Culture'),('opinion','Opinion'),('explainers','Explainers')
on conflict (slug) do nothing;

insert into public.tags (slug, name) values
  ('politics','Politics'),('economy','Economy'),('innovation','Innovation'),
  ('ethiopia','Ethiopia'),('diaspora','Diaspora')
on conflict (slug) do nothing;

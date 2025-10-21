# Design Guidelines for Yaalee Post

## Design Approach

**Reference-Based Strategy:** Draw inspiration from world-class news platforms (The Guardian, NYTimes, Medium) while incorporating Ethiopian visual identity. Focus on **editorial credibility, reading comfort, and cultural authenticity**.

**Core Principles:**
- **Trust First:** Clean, professional layouts that establish journalistic authority
- **Reading Flow:** Optimized typography and spacing for long-form content consumption
- **Cultural Pride:** Incorporate Ethiopian color traditions and visual motifs subtly
- **Performance:** Minimal animations, prioritize content over decoration

---

## Color Palette

**Light Mode:**
- **Primary Brand:** `142 72% 45%` (Ethiopian green - rich, trustworthy)
- **Accent:** `48 95% 53%` (Golden yellow - Ethiopian flag heritage, use sparingly for CTAs)
- **Background:** `0 0% 100%` (Pure white)
- **Surface:** `210 20% 98%` (Subtle gray for cards/sections)
- **Text Primary:** `220 15% 15%` (Near-black for body text)
- **Text Secondary:** `220 10% 45%` (Gray for metadata/bylines)

**Dark Mode:**
- **Primary Brand:** `142 60% 55%` (Lighter green for contrast)
- **Accent:** `48 90% 60%` (Adjusted yellow)
- **Background:** `220 15% 10%` (Deep charcoal)
- **Surface:** `220 12% 15%` (Elevated cards)
- **Text Primary:** `0 0% 95%` (Off-white)
- **Text Secondary:** `220 8% 65%` (Muted gray)

**Semantic Colors:**
- **Error:** `0 72% 51%`
- **Success:** `142 71% 45%`
- **Warning:** `43 96% 56%`

---

## Typography

**Font Families:**
- **Headlines (EN/OM/AM):** 'Merriweather', serif (authoritative, readable)
- **Body (EN/OM):** 'Inter', sans-serif (modern, multilingual support)
- **Body (AM):** 'Noto Sans Ethiopic', sans-serif (proper Ge'ez script rendering)
- **UI Elements:** 'Inter', sans-serif

**Scale & Hierarchy:**
- **Hero Headline:** text-5xl/text-6xl/text-7xl (60px/72px/96px), font-bold
- **Article Title:** text-3xl/text-4xl (36px/48px), font-bold, leading-tight
- **Section Headers:** text-2xl (24px), font-semibold
- **Card Titles:** text-xl (20px), font-semibold, leading-snug
- **Body Text:** text-base/text-lg (16px/18px), leading-relaxed (1.75)
- **Metadata/Bylines:** text-sm (14px), font-medium
- **Captions:** text-xs (12px), text-secondary

---

## Layout System

**Spacing Primitives:** Use Tailwind units of **4, 6, 8, 12, 16, 20, 24** (e.g., p-4, mt-8, gap-6)

**Container Strategy:**
- **Full Width Sections:** Container with max-w-7xl (1280px), px-4 md:px-6 lg:px-8
- **Reading Content:** max-w-3xl (768px) for article bodies
- **Grid Layouts:** max-w-6xl (1152px) for article cards

**Vertical Rhythm:**
- **Section Padding:** py-12 md:py-16 lg:py-20
- **Component Spacing:** space-y-6 md:space-y-8
- **Paragraph Spacing:** space-y-4

---

## Component Library

### Navigation
- **Header:** Fixed top bar, h-16, white bg with subtle shadow, logo left, language switcher right
- **Primary Nav:** Horizontal links (News, Business, Tech, Culture, Opinion, Explainers), hover underline
- **Mobile:** Hamburger menu with slide-in drawer, full-height overlay

### Article Cards
- **Standard Card:** Vertical layout, aspect-[4/3] image top, title (2-line clamp), byline, timestamp, hover lift shadow
- **Feature Card:** Horizontal on md+, larger image (aspect-[16/9]), 3-line title, summary text visible
- **Compact List:** Small thumbnail left (80x80), title right, minimal spacing

### Article Detail Components
- **Hero Section:** Full-width featured image (aspect-[21/9]), overlay gradient (bottom), white title text on image
- **Article Meta Bar:** Flex row with author avatars (circular, 32px), bylines, publish date, read time, share buttons
- **Body Container:** Prose-style with max-w-3xl, generous line-height (1.75), paragraph spacing (mb-4)
- **Related Articles:** 3-column grid on desktop, 1-column mobile, similar card style as homepage

### Section Archives
- **Header:** Section name (text-4xl), description (text-lg, text-secondary), divider line
- **Filter Bar:** Tag pills (rounded-full, px-4, py-1.5, hover bg-surface)
- **Article Grid:** 2-column md, 3-column lg, gap-6 md:gap-8

### Ad Slots
- **Header Ad:** Fixed container min-h-[100px] md:min-h-[90px] lg:min-h-[250px], centered, bg-surface, border subtle
- **In-Article Ad:** Inserted after 3rd paragraph, min-h-[250px], mx-auto, max-w-[300px], mb-8
- **Sidebar Ad (desktop only):** Sticky position, min-h-[600px], hidden on mobile

### Footer
- **Structure:** Dark background (bg-surface-dark), 4-column grid on desktop, stack on mobile
- **Columns:** About, Sections, Resources (Editorial Standards, Corrections, Contact), Legal (Privacy, Terms)
- **Newsletter:** Email input + button, mb-8
- **Bottom Bar:** Copyright, social icons (Heroicons), language links

---

## Images

**Strategy:** Use high-quality editorial photography throughout. Images are ESSENTIAL for news credibility and engagement.

### Image Specifications:
1. **Hero Section (Homepage):** Large landscape image (1920x800), overlay gradient, lead story headline overlay
2. **Article Featured Images:** Always present, aspect-[21/9] on detail page, aspect-[4/3] on cards
3. **Author Headshots:** Circular crop, 40px on cards, 80px on author pages
4. **Section Headers:** Background image (subtle, low opacity) behind section name
5. **Image Credits:** Always display photographer credit in text-xs, absolute bottom-right on hover

### Placement:
- **Homepage Hero:** Full-width, 70vh height, centered content overlay
- **Article Cards:** Top of card, always visible, lazy load below fold
- **Article Detail:** Immediately after title/metadata, full-width within article container
- **Gallery Articles:** Masonry grid (2-3 columns), lightbox on click

---

## Key Interactions

**Minimal Animation Philosophy:**
- Card hover: Subtle lift (transform translateY(-2px)) + shadow increase (duration-200)
- Link hover: Underline animation (border-b-2 with transition)
- Button hover: Background darken (via opacity or color shift)
- NO page transitions, NO parallax, NO scroll-triggered animations

**Loading States:**
- Skeleton screens for article cards (pulse animation)
- Spinner for infinite scroll loading
- Progressive image loading (blur-up technique)

---

## Multilingual Considerations

- **Amharic (AM):** Support RTL where needed, ensure Noto Sans Ethiopic loads properly
- **Oromo (OM):** Latin script, use Inter consistently
- **Language Switcher:** Dropdown in header, show current language + flag icons
- **URL Structure:** Prefix visible in all links (/en/, /om/, /am/)

---

## Accessibility & Performance

- **Color Contrast:** Minimum WCAG AA (4.5:1 for body text)
- **Focus States:** Visible ring-2 ring-primary on all interactive elements
- **Touch Targets:** Minimum 44x44px on mobile
- **Image Optimization:** next/image with priority for above-fold, lazy for below
- **Font Loading:** Subset fonts, preload critical, swap for Ethiopic
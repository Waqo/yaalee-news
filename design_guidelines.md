# Yaalee Post - Design Guidelines

## Design Philosophy

Yaalee Post's design is inspired by modern news platforms like PressPulse, emphasizing clean typography, clear hierarchy, and a content-first approach. The design balances professionalism with accessibility across three languages (English, Oromo, Amharic).

## Color Palette

### Primary Brand Colors

**Primary Blue (Accent/Links/CTAs)**
- Light mode: `hsl(210 100% 45%)` - #0073E6
- Dark mode: `hsl(210 100% 55%)` - #1A8CFF
- Used for: Links, primary buttons, category badges, logo

**Neutral Gray Scale**
- Background (light): `hsl(0 0% 100%)` - #FFFFFF
- Background (dark): `hsl(224 15% 8%)` - #0D0F14
- Foreground (light): `hsl(224 10% 10%)` - #17181C
- Foreground (dark): `hsl(0 0% 98%)` - #FAFAFA

### Semantic Colors

**Muted/Secondary**
- Light: `hsl(210 15% 96%)` - #F4F6F8
- Text: `hsl(224 6% 50%)` - #7B7F87

**Border**
- Light: `hsl(210 12% 90%)` - #E0E4E8
- Dark: `hsl(224 10% 22%)` - #30333A

## Typography

### System Font Stack

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
             'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 
             'Droid Sans', 'Helvetica Neue', sans-serif;
```

**Rationale:** Modern system fonts provide excellent readability, fast loading, and native feel across platforms. No custom font loading required.

### Font Weights & Usage

- **Regular (400)**: Body text, descriptions
- **Medium (500)**: Metadata, labels
- **Semibold (600)**: Navigation, section headers
- **Bold (700)**: Headlines, article titles

### Typography Scale

**Headlines**
- Hero (h1): 2.5rem (40px) - font-bold
- Large (h2): 2rem (32px) - font-bold
- Medium (h3): 1.5rem (24px) - font-bold
- Small: 1.25rem (20px) - font-bold

**Body Text**
- Large: 1.125rem (18px)
- Base: 1rem (16px)
- Small: 0.875rem (14px)
- Tiny: 0.75rem (12px)

### Letter Spacing

- Headlines: `-0.02em` (tighter for better readability)
- Uppercase labels: `0.05em` (wider for clarity)
- Body text: normal

## Layout & Spacing

### Grid System

**Container Max Width:** 1280px (7xl)
- Centered with auto margins
- Responsive padding: 4-6-8 (mobile-tablet-desktop)

**Grid Patterns:**
- Hero section: 2-column (2/3 main + 1/3 sidebar) on desktop
- Article grids: 1-2-3-4 columns (mobile-tablet-desktop)
- Responsive breakpoints: md:768px, lg:1024px

### Spacing Scale

```
xs:  0.25rem (4px)
sm:  0.5rem  (8px)
md:  1rem    (16px)
lg:  1.5rem  (24px)
xl:  2rem    (32px)
2xl: 3rem    (48px)
3xl: 4rem    (64px)
```

**Vertical Rhythm:**
- Section spacing: py-8 (32px)
- Card spacing: gap-6 (24px)
- Element spacing: mb-4 (16px)

## Components

### Header

**Structure:**
- Top bar (date + language switcher) - h-10
- Main header (logo + nav + search) - h-20 md:h-24
- Mobile navigation (horizontal scroll)

**Features:**
- Sticky positioning (`sticky top-0 z-50`)
- Dual logo support (light/dark mode)
- Uppercase navigation labels with tracking
- Search icon on right

### Article Cards

**Variants:**

1. **Hero** - Large featured article
   - Aspect ratio: 21:9
   - Gradient overlay with text on image
   - Category badge in top-left

2. **Large** - Section featured articles
   - Aspect ratio: 4:3
   - Image + title + date below

3. **Standard** - Grid cards
   - Aspect ratio: 4:3
   - Category label + title + date

4. **Horizontal** - Side listings
   - Image left (192px wide)
   - Content right with title + date

5. **Small Thumb** - Compact listings
   - 80x80px thumbnail
   - 2-line title clamp
   - Border bottom separators

**Hover Effects:**
- Image scale: `group-hover:scale-105`
- Title color: `group-hover:text-primary`
- Smooth transitions: `transition-transform duration-300`

### Category Badges

```css
.category-badge {
  @apply inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider;
  @apply bg-primary text-primary-foreground rounded;
}
```

## Image Guidelines

### Aspect Ratios

- Hero images: 21:9 (cinematic)
- Featured images: 4:3 (standard)
- Thumbnails: 1:1 (square)

### Optimization

- Use Next.js `<Image>` component
- Lazy loading for below-fold images
- Priority loading for hero/featured images
- Responsive sizes with `sizes` attribute

### Overlay Gradients

For text over images:

```css
.gradient-overlay {
  background: linear-gradient(
    to top, 
    rgba(0,0,0,0.7) 0%, 
    rgba(0,0,0,0.3) 50%, 
    rgba(0,0,0,0) 100%
  );
}
```

## Interaction Design

### Hover States

**Article Cards:**
- Subtle lift: `translateY(-2px)`
- Image zoom: `scale-105`
- Title color change to primary
- Smooth transitions: 200-300ms

**Buttons:**
- Background color elevation
- No drastic color changes
- Maintain accessibility contrast

### Link Styles

- Underline on hover for body links
- Color change for navigation links
- No underline for card links (whole card clickable)

## Dark Mode

### Strategy

- CSS custom properties with `.dark` class
- Automatic system preference detection
- Manual toggle available
- Consistent contrast ratios

### Color Adjustments

Dark mode modifications:
- Reduce primary color brightness slightly
- Increase background darkness for OLED
- Soften borders (lower contrast)
- Adjust muted text for readability

## Accessibility

### Contrast Ratios

- Body text: Minimum 4.5:1
- Large text (18px+): Minimum 3:1
- Interactive elements: Minimum 3:1

### Focus States

- Visible focus rings using `--ring` color
- Skip to content link for keyboard navigation
- Semantic HTML5 elements

### ARIA Labels

- All interactive elements labeled
- Image alt text descriptive and concise
- Language attributes on `<html>` tag

## Performance

### Core Web Vitals Targets

- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

### Optimization Strategies

- **Images:** Next.js optimization + WebP format
- **Fonts:** System fonts (zero load time)
- **Code:** Route-based code splitting
- **CSS:** Tailwind JIT (minimal bundle)

## Responsive Design

### Breakpoints

```
sm: 640px   // Mobile landscape
md: 768px   // Tablet
lg: 1024px  // Desktop
xl: 1280px  // Large desktop
```

### Mobile-First Approach

- Base styles for mobile
- Progressive enhancement for larger screens
- Touch-friendly tap targets (min 44x44px)
- Horizontal scroll for mobile navigation

## Content Guidelines

### Headlines

- Clear, concise, under 70 characters
- Action-oriented when possible
- Avoid clickbait
- Proper title case

### Summaries

- 1-2 sentences maximum
- Complement headline, don't repeat
- Include key information
- End with period

### Dates

- Relative for recent ("2 hours ago")
- Absolute for older ("Jan 15, 2025")
- Respect user's language/locale

## Multilingual Support

### Language-Specific Considerations

**English & Oromo:**
- System font stack works well
- Left-to-right reading

**Amharic (Ge'ez script):**
- Noto Sans Ethiopic font family
- Ensure proper Unicode support
- Test text rendering carefully

### Translation Strategy

- All UI strings translatable
- Content managed per language in Sanity
- Consistent terminology across languages

## Special Features

### Ad Slots

- Fixed heights to prevent CLS
- Lazy loading with IntersectionObserver
- Clear visual separation from content
- Labeled as "Advertisement"

### Loading States

- Skeleton screens for content
- Smooth transitions when loaded
- Progressive image loading
- Avoid layout shifts

## Design Tokens

All design tokens are defined in `styles/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 224 10% 10%;
  --primary: 210 100% 45%;
  --muted: 210 15% 96%;
  --border: 210 12% 90%;
  --radius: 0.375rem;
}
```

Use these tokens via Tailwind utilities: `bg-background`, `text-foreground`, `border-border`, etc.

## Best Practices

1. **Consistency:** Use established patterns across the site
2. **Simplicity:** Avoid unnecessary decorative elements
3. **Performance:** Optimize every asset and interaction
4. **Accessibility:** Test with keyboard and screen readers
5. **Responsive:** Test on real devices, not just browser resize

## Resources

- **Reference site:** https://foxiz.io/presspulse/
- **Logo files:** `/public/yaalee-logo.png`
- **Color system:** Defined in `styles/globals.css`
- **Component library:** Built with Radix UI primitives

## Implementation Notes

### CSS Utilities

The following utility classes are available in `styles/globals.css`:

- `.article-hover` - Card hover effects with lift and shadow
- `.category-badge` - Category label styling
- `.gradient-overlay` - Image overlay gradients
- `.text-hero` - Hero headline styling
- `.text-large-heading` - Large heading styling
- `.aspect-hero` - 21:9 aspect ratio
- `.aspect-featured` - 4:3 aspect ratio
- `.aspect-thumb` - 1:1 aspect ratio
- `.scrollbar-hide` - Hide scrollbars while maintaining functionality

### Components

Key components following the design guidelines:

- `Header.tsx` - Sticky header with top banner, main navigation, and secondary nav
- `ArticleCard.tsx` - Article cards with feature, standard, and compact variants
- `Newsletter.tsx` - Newsletter subscription section
- `CategorySection.tsx` - Category-based article listings
- `Footer.tsx` - Site footer with links and information

---

Last updated: October 22, 2025

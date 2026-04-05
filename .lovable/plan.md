

## Plan: Replace Lynton with Quanta Thunder + Replace Fresha Links with Shop URL

### Summary
Two major changes across the site:
1. Replace all "Lynton Motus AY" references with "Quanta Thunder" (keep NHS-approved as-is)
2. Replace all Fresha booking links with `https://laserlightskinclinic.co.uk/shop/`
3. Add "Medical LED Clinic" mention where appropriate

---

### Files to Update (~25+ files)

#### 1. Constants file (`src/lib/constants.ts`)
- Change `FRESHA_BOOKING_URL` value to `https://laserlightskinclinic.co.uk/shop/`

#### 2. Fresha link replacements (all hardcoded instances)
Replace every `https://www.fresha.com/...` URL with `https://laserlightskinclinic.co.uk/shop/` in:
- `src/components/home/MobileStickyButton.tsx`
- `src/components/home/HeroSectionNew.tsx`
- `src/components/prices/PricesStickyButton.tsx`
- `src/pages/BlogPost.tsx`
- `src/pages/Prices.tsx`
- `src/pages/services/LyntonMotusAYLaser.tsx`
- All other service pages with hardcoded Fresha links
- `src/lib/csp-config.ts` — remove Fresha from CSP allowlists (no longer needed)

#### 3. Lynton → Quanta Thunder replacements
Replace "Lynton Motus AY" with "Quanta Thunder" across all files:
- `src/components/home/TrustBar.tsx` — "Quanta Thunder laser"
- `src/components/home/HeroSectionNew.tsx` — trust badge sublabel
- `src/components/home/HeroSection.tsx` — description text
- `src/components/home/LaserSpotlight.tsx` — description
- `src/components/home/TrustSection.tsx` — "Quanta Thunder Lasers"
- `src/components/home/FeaturedServices.tsx` — service descriptions
- `src/components/home/TechnologyShowcase.tsx`
- `src/components/seo/StructuredData.tsx`
- `src/components/about/CertificationsBar.tsx` — "Lynton Certified" → "Quanta Certified"
- `src/components/layout/Footer.tsx` — "Lynton Certified" → "Quanta Certified"
- `src/pages/services/LaserHairRemoval.tsx` — all Lynton references in content, FAQ, testimonials, technology section
- `src/pages/services/LaserHairRemovalEastLondon.tsx` — same
- `src/pages/services/LyntonMotusAYLaser.tsx` — entire page content update (this page is dedicated to Lynton, will need significant rewrite to be about Quanta Thunder)
- `src/pages/services/SkinRejuvenation.tsx`
- `src/pages/About.tsx` — certifications list
- `src/pages/Index.tsx` — structured data / FAQ schema
- `src/lib/prefetch.ts` — route reference

#### 4. Lynton page route consideration
The page at `/lynton-motus-ay-laser` needs to either:
- Be renamed/redirected to a Quanta Thunder URL (e.g., `/quanta-thunder-laser`)
- Or keep the URL for SEO but update all content to reference Quanta Thunder
- Add a redirect from the old URL

#### 5. Blog post update
Update the blog post in Supabase if it contains Lynton references (via SQL UPDATE)

---

### Technical Details
- Total files affected: ~20-25 `.tsx`/`.ts` files
- The `FRESHA_BOOKING_URL` constant change will NOT auto-update hardcoded URLs — each file with a hardcoded Fresha URL needs individual updating
- The "Book Appointment" buttons will now link to the shop page instead of external Fresha
- Since `/shop/` is internal, `target="_blank"` and `rel="noopener noreferrer"` should be removed from those links (use React Router `Link` instead)


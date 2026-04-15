

# Publishing on Lovable with SEO-Safe Domain Migration

## Current Situation
- Domain: **laserlightskinclinic.co.uk** hosted on one.com
- Google Business Profile and Bing Places already configured
- Site is built and ready on Lovable

## Recommendation: Host on Lovable

Lovable hosting will **not** reduce SEO — it serves static files with automatic SSL, SPA routing, and CDN. Your SEO elements (structured data, meta tags, sitemap, robots.txt) are already built into the app.

---

## Step-by-Step Migration Plan

### 1. Publish on Lovable first
- Click **Publish** (top right) to get your `.lovable.app` URL live
- Verify everything works on the staging URL before touching the domain

### 2. Connect your custom domain
- Go to **Project Settings → Domains → Connect Domain**
- Enter `laserlightskinclinic.co.uk`
- Lovable will give you DNS records to set at one.com:
  - **A record** for `@` → `185.158.133.1`
  - **A record** for `www` → `185.158.133.1`
  - **TXT record** for `_lovable` → verification value
- Log into one.com DNS settings and update these records
- Add **both** `laserlightskinclinic.co.uk` and `www.laserlightskinclinic.co.uk` in Lovable, set one as Primary
- SSL is provisioned automatically

### 3. SEO Protection Checklist (Critical)

**Before switching DNS:**
- Ensure the `public/sitemap.xml` has all your current URLs — cross-check with the live site
- Verify `robots.txt` allows crawling and points to the correct sitemap URL
- All canonical URLs in your `SEOHead` component already point to `laserlightskinclinic.co.uk` — this is correct

**After switching DNS:**
- **Google Search Console**: Go to [search.google.com/search-console](https://search.google.com/search-console) → add/verify the property if not already done. You can verify via DNS TXT record (add a Google verification TXT record at one.com alongside the Lovable records)
- **Submit sitemap**: In Search Console → Sitemaps → submit `https://laserlightskinclinic.co.uk/sitemap.xml`
- **Request indexing**: Use the URL Inspection tool on key pages to request re-crawling
- **Bing Webmaster Tools**: Same process at [bing.com/webmasters](https://www.bing.com/webmasters) — verify and submit sitemap

**Google Business Profile:**
- The website URL in your GBP should already be `laserlightskinclinic.co.uk` — since the domain isn't changing, **no GBP update is needed**
- If you can access GBP, verify the website link is correct

### 4. What won't change (good news)
- Your **domain stays the same** — no URL changes means no broken backlinks
- **GBP and Bing profiles** continue working since they point to the same domain
- All **structured data** (LocalBusiness, Service, FAQ schemas) is already in the code
- **301 redirects** aren't needed since URLs aren't changing

### 5. DNS Propagation
- Takes up to 72 hours but usually 1-4 hours
- Brief downtime is possible during propagation — best to switch during a quiet period (evening/weekend)
- Your one.com hosting will serve the old site until DNS propagates

---

## To Recover Google/Bing Logins
- **Google Business Profile**: Go to [business.google.com](https://business.google.com) and try signing in with any Google account associated with the business. If locked out, use the "Request access" flow on your listing
- **Google Search Console**: Any Google account can add and verify the property via DNS — you don't need the original account
- **Bing Webmaster Tools**: Similarly, create a new account and verify via DNS

## Implementation Steps for Me
1. Remove the `public/_redirects` file (not used by Lovable hosting)
2. Remove the `public/_headers` file (not used by Lovable hosting — security headers are handled differently)
3. Verify `sitemap.xml` is complete and accurate
4. You publish and connect domain through Lovable UI


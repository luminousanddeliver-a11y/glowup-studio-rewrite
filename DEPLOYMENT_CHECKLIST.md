# 🚀 Deployment Checklist

## Pre-Deployment Setup

### 1. Environment Variables
Create a `.env` file with the following:

```bash
# Google Analytics (Required for tracking)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# OR Google Tag Manager (Use either GA or GTM, not both)
VITE_GTM_ID=GTM-XXXXXXX

# Supabase (if using)
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=your-key-here
```

**To get GA Measurement ID:**
1. Go to https://analytics.google.com
2. Create a new GA4 property
3. Copy the Measurement ID (starts with `G-`)

---

### 2. Build & Test Locally

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build
npm run preview
```

**Test these features:**
- [ ] All pages load correctly
- [ ] Images lazy load and show skeletons
- [ ] PWA manifest loads (check DevTools > Application)
- [ ] Service worker registers (check DevTools > Application > Service Workers)
- [ ] Analytics fires (check Network tab for GA requests)
- [ ] Error boundaries work (test by throwing an error)
- [ ] Toast notifications appear

---

### 3. Lighthouse Audit

Run in Chrome DevTools (Incognito mode):
1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Mobile" and all categories
4. Click "Analyze page load"

**Target Scores:**
- ✅ Performance: 90+
- ✅ Accessibility: 95+
- ✅ Best Practices: 95+
- ✅ SEO: 100
- ✅ PWA: All checks passed

---

## Platform-Specific Deployment

### Option A: Netlify (Recommended)

**Files Already Configured:**
- ✅ `public/_headers` - Security & cache headers
- ✅ `public/robots.txt` - SEO crawling rules
- ✅ `public/sitemap.xml` - Site structure

**Deploy Steps:**
1. Push code to GitHub
2. Connect repo to Netlify
3. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Add environment variables in Netlify dashboard
5. Deploy!

**Post-Deploy:**
- [ ] Verify `_headers` file is working (check Response Headers in DevTools)
- [ ] Test PWA installation
- [ ] Check sitemap at `yoursite.com/sitemap.xml`

---

### Option B: Vercel

**Create `vercel.json`:**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: blob:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com https://*.supabase.co;"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains; preload"
        }
      ]
    }
  ]
}
```

**Deploy Steps:**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts
4. Add environment variables in Vercel dashboard

---

### Option C: Cloudflare Pages

**Files Already Configured:**
- ✅ `public/_headers` (works with Cloudflare)

**Deploy Steps:**
1. Go to Cloudflare Pages dashboard
2. Connect GitHub repo
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Add environment variables
5. Deploy!

---

## Post-Deployment Verification

### 1. SEO Check ✅

**Verify these URLs work:**
- [ ] https://yoursite.com/sitemap.xml
- [ ] https://yoursite.com/robots.txt
- [ ] https://yoursite.com/manifest.json

**Check in Google Search Console:**
1. Go to https://search.google.com/search-console
2. Add your property
3. Submit sitemap
4. Request indexing for key pages

---

### 2. Analytics Check 📊

**Test GA4 is working:**
1. Visit your site
2. Go to GA4 dashboard > Realtime
3. You should see yourself as an active user

**Test event tracking:**
- [ ] Click booking button (should fire `booking_click`)
- [ ] Click phone number (should fire `phone_click`)
- [ ] Add item to cart (should fire `add_to_cart`)

---

### 3. PWA Check 📱

**Desktop Test:**
1. Open site in Chrome
2. Look for install icon in address bar
3. Click to install
4. Should open as standalone app

**Mobile Test (Android):**
1. Open site in Chrome mobile
2. Tap menu > "Add to Home Screen"
3. Open the installed app
4. Should work offline (test by turning off WiFi)

**iOS Test:**
1. Open site in Safari
2. Tap Share button
3. Tap "Add to Home Screen"
4. Open the app from home screen

---

### 4. Security Headers Check 🔒

Use https://securityheaders.com to scan your site.

**Expected Result:** A or A+ rating

**Required Headers:**
- ✅ Content-Security-Policy
- ✅ X-Content-Type-Options
- ✅ X-Frame-Options
- ✅ X-XSS-Protection
- ✅ Referrer-Policy
- ✅ Strict-Transport-Security

---

### 5. Performance Check ⚡

**Tools to use:**
- https://pagespeed.web.dev - Google's official tool
- https://gtmetrix.com - Detailed performance report
- https://webpagetest.org - Advanced testing

**Target Metrics:**
- ✅ First Contentful Paint (FCP): < 1.8s
- ✅ Largest Contentful Paint (LCP): < 2.5s
- ✅ Total Blocking Time (TBT): < 300ms
- ✅ Cumulative Layout Shift (CLS): < 0.1
- ✅ Speed Index: < 3.4s

---

### 6. Mobile Responsiveness 📱

**Test on:**
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad (Safari)
- [ ] Various screen sizes (use DevTools device emulation)

**Check:**
- [ ] Touch targets are at least 44x44px
- [ ] Text is readable without zooming
- [ ] Images load correctly
- [ ] Buttons are easily tappable
- [ ] Forms work well on mobile

---

## Ongoing Maintenance

### Weekly:
- [ ] Check Google Analytics for traffic
- [ ] Monitor Core Web Vitals in Search Console
- [ ] Review any error logs

### Monthly:
- [ ] Run Lighthouse audit
- [ ] Check for broken links
- [ ] Update dependencies: `npm outdated`
- [ ] Review and respond to any issues

### Quarterly:
- [ ] Review and update sitemap
- [ ] Audit security headers
- [ ] Check PWA is still working correctly
- [ ] Update content for SEO

---

## Troubleshooting

### Issue: Analytics not tracking
**Solution:**
1. Check `.env` has correct `VITE_GA_MEASUREMENT_ID`
2. Rebuild: `npm run build`
3. Check Network tab for requests to `google-analytics.com`
4. Make sure it's only loading in production

### Issue: PWA not installing
**Solution:**
1. Must be served over HTTPS (or localhost)
2. Check `manifest.json` is accessible
3. Check Service Worker registered in DevTools
4. Verify all manifest icons exist
5. Build and serve from `dist` folder

### Issue: Images not loading
**Solution:**
1. Check image paths are correct
2. Verify images exist in `public` or `src/assets`
3. Check browser console for errors
4. Ensure WebP fallback works

### Issue: Security headers not working
**Solution:**
1. For Netlify: Verify `_headers` file is in `public/` folder
2. Check Response Headers in DevTools > Network tab
3. Re-deploy if needed
4. Some headers may only work on HTTPS

---

## Success Criteria ✅

Your deployment is successful when:

- ✅ **Lighthouse scores:** All 90+ (except PWA which should be installable)
- ✅ **Security headers:** A or A+ on securityheaders.com
- ✅ **Analytics working:** Real-time events showing in GA4
- ✅ **PWA installable:** Can add to home screen on mobile
- ✅ **Images optimized:** WebP format, lazy loading working
- ✅ **No console errors:** Check browser console
- ✅ **Mobile responsive:** Works on all devices
- ✅ **SEO verified:** Sitemap submitted, pages indexing
- ✅ **Fast loading:** LCP < 2.5s on mobile
- ✅ **Accessibility:** No major WCAG violations

---

## 🎉 Congratulations!

Your site is now:
- 📱 Mobile-first and responsive
- 🚀 Blazing fast with optimized images
- 🔒 Secure with proper headers
- ♿ Accessible to all users
- 📊 Trackable with analytics
- 📱 Installable as a PWA
- 🎯 SEO optimized for 10/10 ranking

---

## Need Help?

If you encounter any issues during deployment:
1. Check the browser console for errors
2. Review the Network tab for failed requests
3. Verify environment variables are set
4. Ensure all files are committed to Git
5. Check deployment logs in your hosting platform

Happy deploying! 🚀

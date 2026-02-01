# 📚 Usage Guide for New Components

## Quick Reference for Using the New Features

---

## 🖼️ Optimized Images

### Basic Usage
```tsx
import { OptimizedImage } from "@/components/ui/OptimizedImage";

<OptimizedImage
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority={false} // Set true for hero images
/>
```

### Hero Images with Blur Effect
```tsx
import { BlurUpImage } from "@/components/ui/OptimizedImage";

<BlurUpImage
  src="/hero-image.jpg"
  alt="Hero image"
  blurDataURL="data:image/jpeg;base64,..." // Optional
  priority={true}
/>
```

### Responsive Images
```tsx
import { ResponsiveImage } from "@/components/ui/OptimizedImage";

<ResponsiveImage
  src="/image.jpg"
  srcSet={{
    webp: "/image.webp",
    jpg: "/image.jpg"
  }}
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Responsive image"
/>
```

---

## 🔔 Toast Notifications

### Import
```tsx
import { toast, toastMessages } from "@/lib/toast-notifications";
```

### Basic Usage
```tsx
// Success
toast.success("Operation successful!", "Details here");

// Error
toast.error("Something went wrong", "Error details");

// Warning
toast.warning("Please note", "Important info");

// Info
toast.info("FYI", "Some information");

// Loading (returns ID for dismissal)
const loadingId = toast.loading("Processing...");
// Later: toast.dismiss(loadingId);
```

### Promise-based Toasts
```tsx
const myPromise = fetch('/api/data');

toast.promise(myPromise, {
  loading: 'Loading data...',
  success: 'Data loaded successfully!',
  error: 'Failed to load data'
});
```

### Predefined Messages
```tsx
// Cart actions
toastMessages.addToCart("Product Name");
toastMessages.removeFromCart("Product Name");

// Forms
toastMessages.formSuccess();
toastMessages.formError();

// Booking
toastMessages.bookingSuccess();

// Generic
toastMessages.saved();
toastMessages.copied();
```

---

## 💀 Skeleton Loaders

### Import
```tsx
import {
  CardSkeleton,
  ServiceCardSkeleton,
  BlogPostSkeleton,
  ProductCardSkeleton,
  GridSkeleton,
  PageSkeleton
} from "@/components/ui/skeleton-loaders";
```

### Usage in Suspense
```tsx
import { Suspense } from "react";

<Suspense fallback={<ServiceCardSkeleton />}>
  <ServiceComponent />
</Suspense>
```

### Grid of Skeletons
```tsx
<GridSkeleton
  items={6}
  columns={3}
  CardComponent={ProductCardSkeleton}
/>
```

### Full Page Skeleton
```tsx
<PageSkeleton />
```

---

## 🚨 Error Boundaries

### Wrap Your App
```tsx
import { ErrorBoundary } from "@/components/common/ErrorBoundary";

<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>
```

### Component-Level Error Boundary
```tsx
import { ComponentErrorBoundary } from "@/components/common/ErrorBoundary";

<ComponentErrorBoundary>
  <RiskyComponent />
</ComponentErrorBoundary>
```

### With Custom Fallback
```tsx
<ErrorBoundary
  fallback={<div>Custom error message</div>}
  onError={(error, errorInfo) => {
    console.log("Error occurred:", error);
  }}
>
  <YourComponent />
</ErrorBoundary>
```

---

## 🏷️ Schema.org Markup

### Import
```tsx
import {
  organizationSchema,
  websiteSchema,
  generateArticleSchema,
  generateProductSchema,
  generateServiceFAQSchema
} from "@/components/seo/StructuredData";
```

### Article Schema (for Blog Posts)
```tsx
const articleSchema = generateArticleSchema({
  title: "Blog Post Title",
  description: "Post description",
  publishedDate: "2026-01-15",
  modifiedDate: "2026-01-20",
  authorName: "Author Name",
  imageUrl: "https://example.com/image.jpg",
  url: "https://example.com/blog/post"
});

<SEOHead structuredData={[articleSchema]} />
```

### Product Schema (for Shop Items)
```tsx
const productSchema = generateProductSchema({
  name: "Product Name",
  description: "Product description",
  imageUrl: "https://example.com/product.jpg",
  price: 99.99,
  currency: "GBP",
  brand: "Brand Name",
  sku: "SKU123",
  availability: "InStock", // InStock, OutOfStock, PreOrder
  rating: 4.8,
  reviewCount: 120
});

<SEOHead structuredData={[productSchema]} />
```

### FAQ Schema
```tsx
const faqSchema = generateServiceFAQSchema([
  {
    question: "How long does it take?",
    answer: "The treatment takes 30-45 minutes."
  },
  {
    question: "Is it painful?",
    answer: "No, the treatment is pain-free."
  }
]);

<SEOHead structuredData={[faqSchema]} />
```

---

## 📊 Analytics Tracking

### Import
```tsx
import {
  trackEvent,
  trackBookingClick,
  trackPhoneClick,
  trackFormSubmit,
  trackAddToCart,
  trackPurchase
} from "@/components/analytics/GoogleAnalytics";
```

### Track Events
```tsx
// Booking click
const handleBooking = () => {
  trackBookingClick("Laser Hair Removal", "hero_button");
  // ... booking logic
};

// Phone click
const handlePhoneClick = () => {
  trackPhoneClick();
  window.location.href = "tel:02085981200";
};

// Form submission
const handleSubmit = () => {
  trackFormSubmit("contact_form");
  // ... submit logic
};

// Add to cart
const handleAddToCart = () => {
  trackAddToCart({
    id: "product123",
    name: "Product Name",
    price: 99.99
  });
  // ... cart logic
};

// Custom event
trackEvent("custom_event", {
  category: "engagement",
  label: "button_click",
  value: "header_cta"
});
```

---

## 📱 PWA Features

### Check if Running as PWA
```tsx
import { isPWA } from "@/lib/registerServiceWorker";

if (isPWA()) {
  console.log("Running as installed PWA");
}
```

### Prompt PWA Install
```tsx
import { promptPWAInstall } from "@/lib/registerServiceWorker";

const handleInstallClick = async () => {
  const installed = await promptPWAInstall();
  if (installed) {
    toastMessages.pwaInstalled();
  }
};
```

---

## 🎨 Example: Complete Service Page

```tsx
import { SEOHead } from "@/components/seo/SEOHead";
import { generateServiceFAQSchema } from "@/components/seo/StructuredData";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { toast } from "@/lib/toast-notifications";
import { trackBookingClick } from "@/components/analytics/GoogleAnalytics";

const ServicePage = () => {
  const faqSchema = generateServiceFAQSchema([
    { question: "How long?", answer: "30 minutes" },
    { question: "Is it safe?", answer: "Yes, FDA approved" }
  ]);

  const handleBooking = () => {
    trackBookingClick("Service Name", "cta_button");
    toast.success("Redirecting to booking...");
    window.open("https://booking-url.com", "_blank");
  };

  return (
    <div>
      <SEOHead
        title="Service Name | Clinic Name"
        description="Service description"
        canonicalUrl="https://example.com/service"
        structuredData={[faqSchema]}
      />

      <OptimizedImage
        src="/service-hero.jpg"
        alt="Service hero image"
        width={1200}
        height={600}
        priority={true}
      />

      <button onClick={handleBooking}>
        Book Now
      </button>
    </div>
  );
};
```

---

## 🔒 Security Headers

Already configured in `public/_headers` for Netlify.

**For other platforms:**
```tsx
import { securityHeaders } from "@/lib/csp-config";
// Configure in your platform's settings
```

---

## ✅ Testing Checklist

### Before Deployment:
1. ✅ Set `VITE_GA_MEASUREMENT_ID` in `.env`
2. ✅ Test PWA installation locally
3. ✅ Run Lighthouse audit
4. ✅ Test all toasts work
5. ✅ Verify images load with lazy loading
6. ✅ Test error boundaries
7. ✅ Check mobile responsiveness
8. ✅ Verify skip-to-content link (press Tab)

---

## 🎯 Pro Tips

1. **Always use OptimizedImage** instead of regular `<img>` tags
2. **Add toast feedback** for all user actions
3. **Wrap risky components** in ErrorBoundary
4. **Use skeleton loaders** for all async content
5. **Track important user actions** with analytics
6. **Test PWA** on mobile devices
7. **Use predefined toastMessages** for consistency

---

Happy coding! 🚀

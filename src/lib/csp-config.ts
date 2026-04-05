/**
 * Content Security Policy Configuration
 *
 * This defines the security headers for the application.
 * For production deployment, these should be set in your hosting provider's configuration.
 *
 * Examples:
 * - Netlify: Add to netlify.toml or _headers file
 * - Vercel: Add to vercel.json or next.config.js
 * - Cloudflare Pages: Add to _headers file
 */

export const cspDirectives = {
  // Default source for all content types
  "default-src": ["'self'"],

  // Scripts - allow self, inline scripts (with hashes in production), and trusted CDNs
  "script-src": [
    "'self'",
    "'unsafe-inline'", // Required for Vite in development, remove in production
    "'unsafe-eval'", // Required for development, remove in production
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://storage.googleapis.com",
  ],

  // Styles - allow self, inline styles, and Google Fonts
  "style-src": [
    "'self'",
    "'unsafe-inline'", // Required for styled components and CSS-in-JS
    "https://fonts.googleapis.com",
  ],

  // Images - allow self, data URIs, and trusted image sources
  "img-src": [
    "'self'",
    "data:",
    "https:",
    "blob:",
    "https://storage.googleapis.com",
    "https://www.google-analytics.com",
  ],

  // Fonts - allow self and Google Fonts
  "font-src": [
    "'self'",
    "data:",
    "https://fonts.gstatic.com",
  ],

  // Connect - allow API calls to these origins
  "connect-src": [
    "'self'",
    "https://www.google-analytics.com",
    "https://www.googletagmanager.com",
    "https://storage.googleapis.com",
    "https://www.fresha.com",
    "https://*.supabase.co",
  ],

  // Frame sources - for embedded content
  "frame-src": [
    "'self'",
    "https://www.fresha.com",
    "https://www.google.com",
  ],

  // Worker sources
  "worker-src": ["'self'", "blob:"],

  // Manifest source
  "manifest-src": ["'self'"],

  // Media sources
  "media-src": ["'self'", "https://storage.googleapis.com"],

  // Object/embed sources (restrict for security)
  "object-src": ["'none'"],

  // Base URI restriction
  "base-uri": ["'self'"],

  // Form action restriction
  "form-action": ["'self'", "https://www.fresha.com"],

  // Frame ancestors - prevent clickjacking
  "frame-ancestors": ["'none'"],

  // Upgrade insecure requests
  "upgrade-insecure-requests": [],
};

export const generateCSP = (): string => {
  return Object.entries(cspDirectives)
    .map(([directive, sources]) => {
      if (sources.length === 0) {
        return directive;
      }
      return `${directive} ${sources.join(" ")}`;
    })
    .join("; ");
};

// Additional security headers
export const securityHeaders = {
  // Content Security Policy
  "Content-Security-Policy": generateCSP(),

  // Prevent MIME sniffing
  "X-Content-Type-Options": "nosniff",

  // Enable XSS protection
  "X-XSS-Protection": "1; mode=block",

  // Prevent clickjacking
  "X-Frame-Options": "DENY",

  // Referrer policy
  "Referrer-Policy": "strict-origin-when-cross-origin",

  // Permissions policy (formerly Feature Policy)
  "Permissions-Policy": [
    "accelerometer=()",
    "camera=()",
    "geolocation=(self)",
    "gyroscope=()",
    "magnetometer=()",
    "microphone=()",
    "payment=(self)",
    "usb=()",
  ].join(", "),

  // Strict Transport Security (HTTPS only)
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
};

// For Netlify - create this content in a _headers file
export const netlifyHeaders = `
/*
  ${Object.entries(securityHeaders)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n  ")}

/*.html
  Cache-Control: public, max-age=0, must-revalidate

/static/*
  Cache-Control: public, max-age=31536000, immutable

/assets/*
  Cache-Control: public, max-age=31536000, immutable
`;

// For Vercel - add this to vercel.json
export const vercelConfig = {
  headers: [
    {
      source: "/(.*)",
      headers: Object.entries(securityHeaders).map(([key, value]) => ({
        key,
        value: value.toString(),
      })),
    },
  ],
};

export default securityHeaders;

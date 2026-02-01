import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Google Analytics 4 Measurement ID
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-XXXXXXXXXX";
const GTM_ID = import.meta.env.VITE_GTM_ID || "";

export const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views on route change
    if (window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  // Only load in production
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <Helmet>
      {/* Google Tag Manager */}
      {GTM_ID && (
        <>
          <script>
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </script>
          <noscript>
            {`<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}
          </noscript>
        </>
      )}

      {/* Google Analytics 4 */}
      {!GTM_ID && GA_MEASUREMENT_ID && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
                send_page_view: true
              });
            `}
          </script>
        </>
      )}
    </Helmet>
  );
};

// Analytics event tracking utilities
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
};

export const trackPageView = (url: string) => {
  if (window.gtag) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

export const trackBookingClick = (service: string, location: string) => {
  trackEvent("booking_click", {
    event_category: "engagement",
    event_label: service,
    booking_location: location,
  });
};

export const trackPhoneClick = () => {
  trackEvent("phone_click", {
    event_category: "engagement",
    event_label: "phone_number",
  });
};

export const trackFormSubmit = (formName: string) => {
  trackEvent("form_submit", {
    event_category: "engagement",
    event_label: formName,
  });
};

export const trackAddToCart = (product: {
  id: string;
  name: string;
  price: number;
}) => {
  trackEvent("add_to_cart", {
    event_category: "ecommerce",
    items: [
      {
        item_id: product.id,
        item_name: product.name,
        price: product.price,
      },
    ],
  });
};

export const trackPurchase = (transactionId: string, value: number, items: any[]) => {
  trackEvent("purchase", {
    transaction_id: transactionId,
    value: value,
    currency: "GBP",
    items: items,
  });
};

// TypeScript declarations
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

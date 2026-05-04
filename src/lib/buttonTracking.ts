import { supabase } from "@/integrations/supabase/client";
import { getConversionValueForPath } from "@/lib/conversionValues";

const SESSION_KEY = "ll_track_session";

function getSessionId(): string {
  try {
    let id = sessionStorage.getItem(SESSION_KEY);
    if (!id) {
      id = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
      sessionStorage.setItem(SESSION_KEY, id);
    }
    return id;
  } catch {
    return "no-session";
  }
}

function extractLabel(el: HTMLElement): string {
  const aria = el.getAttribute("aria-label");
  if (aria) return aria.trim().slice(0, 200);
  const text = (el.innerText || el.textContent || "").replace(/\s+/g, " ").trim();
  if (text) return text.slice(0, 200);
  const title = el.getAttribute("title");
  if (title) return title.trim().slice(0, 200);
  return "(no label)";
}

async function logEvent(payload: {
  label: string;
  cta_key: string | null;
  is_key_cta: boolean;
  element_type: string;
  href: string | null;
}) {
  try {
    await supabase.from("button_events").insert({
      ...payload,
      path: window.location.pathname + window.location.search,
      referrer: document.referrer || null,
      session_id: getSessionId(),
      viewport_width: window.innerWidth,
      user_agent: navigator.userAgent.slice(0, 500),
    });
  } catch (err) {
    // Silent fail — never block UX for analytics
    console.debug("[buttonTracking] failed", err);
  }
}

function fireBookNowConversion(el: HTMLElement, href: string | null): boolean {
  const gtag = (window as any).gtag;
  const reportFn = (window as any).gtag_report_conversion;
  const tag = el.tagName.toLowerCase();
  const isAnchor = tag === "a";
  const anchor = isAnchor ? (el as HTMLAnchorElement) : null;
  const opensNewTab = !!anchor && anchor.target === "_blank";

  const value = getConversionValueForPath(window.location.pathname);

  // New tab or non-navigating: fire event, don't defer
  if (!isAnchor || !href || opensNewTab || href.startsWith("#")) {
    if (typeof gtag === "function") {
      const pageSlug = (window.location.pathname || "/").replace(/^\/+|\/+$/g, "").replace(/[^a-zA-Z0-9_-]+/g, "_") || "home";
      const txnId = `${pageSlug}_${Date.now()}`;
      gtag("event", "conversion", {
        send_to: "AW-18104090476/5k9kCIX1vaccEOz-2bhD",
        value,
        currency: "GBP",
        transaction_id: txnId,
      });
    }
    return false;
  }

  // Same-tab navigation: defer redirect until conversion is recorded
  if (typeof reportFn === "function") {
    reportFn(href, value);
    return true;
  }
  return false;
}

export function initButtonTracking() {
  if (typeof window === "undefined") return;
  if ((window as any).__llButtonTrackingInit) return;
  (window as any).__llButtonTrackingInit = true;

  document.addEventListener(
    "click",
    (e) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const el = target.closest(
        'button, a, [role="button"], [data-cta]'
      ) as HTMLElement | null;
      if (!el) return;

      if (el.getAttribute("aria-disabled") === "true") return;
      if ((el as HTMLButtonElement).disabled) return;

      const ctaKey = el.getAttribute("data-cta");
      const tag = el.tagName.toLowerCase();
      const href =
        tag === "a" ? (el as HTMLAnchorElement).getAttribute("href") : null;

      logEvent({
        label: extractLabel(el),
        cta_key: ctaKey,
        is_key_cta: !!ctaKey,
        element_type: tag,
        href,
      });

      // Google Ads "BookNow" conversion
      if (ctaKey === "book_now") {
        const deferred = fireBookNowConversion(el, href);
        if (deferred) e.preventDefault();
      }
    },
    { capture: true, passive: false }
  );
}

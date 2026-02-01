import { toast as sonnerToast } from "sonner";
import { CheckCircle2, XCircle, AlertCircle, Info, Loader2 } from "lucide-react";

// Enhanced toast notification system
export const toast = {
  success: (message: string, description?: string) => {
    sonnerToast.success(message, {
      description,
      icon: CheckCircle2 as any,
      duration: 4000,
      className: "success-toast",
    });
  },

  error: (message: string, description?: string) => {
    sonnerToast.error(message, {
      description,
      icon: XCircle as any,
      duration: 5000,
      className: "error-toast",
    });
  },

  warning: (message: string, description?: string) => {
    sonnerToast.warning(message, {
      description,
      icon: AlertCircle as any,
      duration: 4500,
      className: "warning-toast",
    });
  },

  info: (message: string, description?: string) => {
    sonnerToast.info(message, {
      description,
      icon: Info as any,
      duration: 4000,
      className: "info-toast",
    });
  },

  loading: (message: string, description?: string) => {
    return sonnerToast.loading(message, {
      description,
      icon: Loader2 as any,
      className: "loading-toast",
    });
  },

  promise: <T,>(
    promise: Promise<T>,
    {
      loading,
      success,
      error,
    }: {
      loading: string;
      success: string | ((data: T) => string);
      error: string | ((error: any) => string);
    }
  ) => {
    return sonnerToast.promise(promise, {
      loading,
      success,
      error,
    });
  },

  custom: (message: string, options?: any) => {
    return sonnerToast(message, options);
  },

  dismiss: (toastId?: string | number) => {
    sonnerToast.dismiss(toastId);
  },
};

// Predefined toast messages for common actions
export const toastMessages = {
  // Form submissions
  formSuccess: () => toast.success("Form submitted successfully!", "We'll get back to you soon."),
  formError: () => toast.error("Submission failed", "Please try again or contact us directly."),

  // Booking
  bookingSuccess: () => toast.success("Booking request sent!", "We'll confirm your appointment shortly."),
  bookingError: () => toast.error("Booking failed", "Please try again or call us at 0208 598 1200."),

  // Cart actions
  addToCart: (productName: string) => toast.success("Added to cart", productName),
  removeFromCart: (productName: string) => toast.info("Removed from cart", productName),
  cartUpdated: () => toast.success("Cart updated"),

  // Wishlist actions
  addToWishlist: (productName: string) => toast.success("Added to wishlist", productName),
  removeFromWishlist: (productName: string) => toast.info("Removed from wishlist", productName),

  // Network errors
  networkError: () => toast.error("Connection error", "Please check your internet connection."),
  serverError: () => toast.error("Server error", "Something went wrong. Please try again later."),

  // Copy to clipboard
  copied: () => toast.success("Copied to clipboard!"),

  // Generic messages
  saved: () => toast.success("Saved successfully!"),
  deleted: () => toast.success("Deleted successfully!"),
  updated: () => toast.success("Updated successfully!"),

  // Validation
  validationError: (field: string) => toast.error("Validation error", `Please check ${field}.`),
  requiredField: (field: string) => toast.warning("Required field", `${field} is required.`),

  // PWA
  pwaInstalled: () => toast.success("App installed!", "You can now use this app offline."),
  pwaUpdateAvailable: () => toast.info("Update available", "A new version is ready."),

  // Newsletter
  newsletterSuccess: () => toast.success("Subscribed!", "Thanks for subscribing to our newsletter."),
  newsletterError: () => toast.error("Subscription failed", "Please try again."),

  // Auth (if needed)
  loginSuccess: () => toast.success("Welcome back!"),
  loginError: () => toast.error("Login failed", "Please check your credentials."),
  logoutSuccess: () => toast.info("Logged out successfully"),

  // File upload
  uploadSuccess: () => toast.success("Upload successful!"),
  uploadError: () => toast.error("Upload failed", "Please try again with a different file."),

  // General
  comingSoon: () => toast.info("Coming soon!", "This feature will be available soon."),
};

// Track toast analytics
export const trackToastEvent = (type: string, message: string) => {
  if (window.gtag) {
    window.gtag("event", "toast_shown", {
      event_category: "user_feedback",
      event_label: type,
      value: message,
    });
  }
};

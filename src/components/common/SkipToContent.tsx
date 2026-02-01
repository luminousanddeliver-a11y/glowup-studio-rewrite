import { cn } from "@/lib/utils";

export const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className={cn(
        "sr-only focus:not-sr-only",
        "fixed top-4 left-4 z-[9999]",
        "bg-primary text-primary-foreground",
        "px-6 py-3 rounded-lg",
        "font-medium text-sm",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "transition-all duration-200",
        "shadow-lg"
      )}
    >
      Skip to main content
    </a>
  );
};

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

export interface BreadcrumbItemType {
  label: string;
  href?: string;
}

interface PageBreadcrumbProps {
  items: BreadcrumbItemType[];
  variant?: "light" | "dark";
  className?: string;
}

export const PageBreadcrumb = ({ items, variant = "light", className = "" }: PageBreadcrumbProps) => {
  const baseUrl = "https://laserlightskinclinic.co.uk";
  
  // Build full items array with Home
  const fullItems: BreadcrumbItemType[] = [
    { label: "Home", href: "/" },
    ...items,
  ];

  // Generate JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": fullItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      ...(item.href && index < fullItems.length - 1 ? { "item": `${baseUrl}${item.href}` } : {}),
    })),
  };

  const linkClasses = variant === "dark" 
    ? "text-primary-foreground/70 hover:text-primary-foreground transition-colors"
    : "text-muted-foreground hover:text-foreground transition-colors";

  const currentClasses = variant === "dark"
    ? "text-primary-foreground font-medium"
    : "text-foreground font-medium";

  return (
    <>
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`py-3 ${className}`}
        aria-label="Breadcrumb"
      >
        <Breadcrumb>
          <BreadcrumbList className="flex-wrap">
            {fullItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="contents"
              >
                <BreadcrumbItem>
                  {index === fullItems.length - 1 ? (
                    <BreadcrumbPage className={currentClasses}>
                      {item.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild className={linkClasses}>
                      <Link to={item.href || "/"}>
                        {index === 0 ? (
                          <span className="flex items-center gap-1">
                            <Home className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only">{item.label}</span>
                          </span>
                        ) : (
                          item.label
                        )}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < fullItems.length - 1 && (
                  <BreadcrumbSeparator className={variant === "dark" ? "text-primary-foreground/50" : ""} />
                )}
              </motion.div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </motion.nav>
    </>
  );
};

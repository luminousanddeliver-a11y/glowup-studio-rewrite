import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { List, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export const TableOfContents = ({ content }: TableOfContentsProps) => {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  // Parse headings from HTML content
  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const headingElements = doc.querySelectorAll("h2, h3");
    
    const items: TOCItem[] = [];
    headingElements.forEach((heading, index) => {
      const text = heading.textContent || "";
      const id = `heading-${index}`;
      items.push({
        id,
        text,
        level: heading.tagName === "H2" ? 2 : 3,
      });
    });
    
    setHeadings(items);
  }, [content]);

  // Add IDs to actual DOM headings after content is rendered
  useEffect(() => {
    const articleContent = document.querySelector(".prose");
    if (!articleContent) return;

    const headingElements = articleContent.querySelectorAll("h2, h3");
    headingElements.forEach((heading, index) => {
      heading.id = `heading-${index}`;
    });
  }, [content, headings]);

  // Track active heading on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -80% 0px",
        threshold: 0,
      }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  if (headings.length < 2) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="sticky top-28 hidden xl:block"
      aria-label="Table of contents"
    >
      <div className="bg-card/80 backdrop-blur-sm rounded-xl border border-border p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
          <List className="h-4 w-4 text-primary" />
          <h2 className="font-heading text-sm font-semibold text-foreground uppercase tracking-wide">
            In This Article
          </h2>
        </div>
        
        <ul className="space-y-1">
          {headings.map((heading, index) => (
            <motion.li
              key={heading.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <button
                onClick={() => scrollToHeading(heading.id)}
                className={cn(
                  "w-full text-left py-2 px-3 rounded-lg text-sm font-body transition-all duration-200 flex items-start gap-2 group",
                  heading.level === 3 && "ml-3",
                  activeId === heading.id
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <ChevronRight 
                  className={cn(
                    "h-4 w-4 mt-0.5 flex-shrink-0 transition-transform duration-200",
                    activeId === heading.id ? "text-primary rotate-90" : "text-muted-foreground/50 group-hover:translate-x-0.5"
                  )} 
                />
                <span className="line-clamp-2">{heading.text}</span>
              </button>
            </motion.li>
          ))}
        </ul>
        
        {/* Progress indicator */}
        <div className="mt-4 pt-3 border-t border-border">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <span>Reading progress</span>
            <span>{Math.round((headings.findIndex(h => h.id === activeId) + 1) / headings.length * 100) || 0}%</span>
          </div>
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ width: "0%" }}
              animate={{ 
                width: `${((headings.findIndex(h => h.id === activeId) + 1) / headings.length * 100) || 0}%` 
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
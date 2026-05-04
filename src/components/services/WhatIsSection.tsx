import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface WhatIsSectionProps {
  title: string;
  content: string[];
  highlightText?: string;
  collapsible?: boolean;
}

export const WhatIsSection = ({ title, content, highlightText, collapsible = false }: WhatIsSectionProps) => {
  const [expanded, setExpanded] = useState(!collapsible);
  const visible = collapsible && !expanded ? content.slice(0, 1) : content;

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-foreground mb-8 text-center"
          >
            {title}
          </motion.h2>
          
          <div className="space-y-6">
            {visible.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="font-body text-lg text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {collapsible && content.length > 1 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-2 text-primary font-body font-medium hover:underline"
              >
                {expanded ? "Show less" : "Read more"}
                <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
              </button>
            </div>
          )}
          
          {highlightText && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: content.length * 0.1 }}
              className="mt-8 p-6 bg-accent/10 rounded-lg border-l-4 border-accent"
            >
              <p className="font-heading font-medium text-foreground">
                {highlightText}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

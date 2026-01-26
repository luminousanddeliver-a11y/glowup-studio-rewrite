import { motion } from "framer-motion";

interface WhatIsSectionProps {
  title: string;
  content: string[];
  highlightText?: string;
}

export const WhatIsSection = ({ title, content, highlightText }: WhatIsSectionProps) => {
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
            {content.map((paragraph, index) => (
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

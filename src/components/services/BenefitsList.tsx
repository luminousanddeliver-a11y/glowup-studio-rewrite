import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
}

interface BenefitsListProps {
  title: string;
  subtitle?: string;
  benefits: Benefit[];
}

export const BenefitsList = ({ title, subtitle, benefits }: BenefitsListProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-foreground mb-4">{title}</h2>
          {subtitle && (
            <p className="font-body text-lg text-muted-foreground">{subtitle}</p>
          )}
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 p-6 bg-card rounded-lg shadow-card hover:shadow-card-hover transition-shadow"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2, type: "spring" }}
                className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center"
              >
                <Check className="h-5 w-5 text-accent" />
              </motion.div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-2 text-lg">
                  {benefit.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

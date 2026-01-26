import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface RelatedService {
  name: string;
  href: string;
  description: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
}

export const RelatedServices = ({ services }: RelatedServicesProps) => {
  if (!services || services.length === 0) return null;

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-foreground mb-3">Treatments You May Also Like</h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Explore complementary treatments to enhance your results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.a
              key={service.href}
              href={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card p-6 rounded-xl border border-border hover:border-accent/30 hover:shadow-card transition-all duration-300"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {service.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-4">
                {service.description}
              </p>
              <div className="flex items-center text-accent font-body text-sm font-medium group-hover:gap-2 transition-all">
                Learn More
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

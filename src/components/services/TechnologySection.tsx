import { motion } from "framer-motion";
import { Shield, Award, Zap, CheckCircle } from "lucide-react";

interface TechnologySectionProps {
  title: string;
  subtitle?: string;
  technologyName: string;
  description: string;
  features: string[];
  certifications?: string[];
  deviceImage?: string;
}

export const TechnologySection = ({
  title,
  subtitle,
  technologyName,
  description,
  features,
  certifications,
  deviceImage,
}: TechnologySectionProps) => {
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
        
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 md:p-12 ${deviceImage ? 'grid md:grid-cols-2 gap-8 items-center' : ''}`}
          >
            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-4 mb-6"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                  className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center"
                >
                  <Zap className="h-7 w-7 text-primary" />
                </motion.div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-2xl">
                    {technologyName}
                  </h3>
                  <p className="text-muted-foreground font-body">Advanced Technology</p>
                </div>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="font-body text-lg text-foreground/80 mb-8"
              >
                {description}
              </motion.p>
              
              <div className="grid gap-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: 0.4 + index * 0.08, type: "spring" }}
                    >
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    </motion.div>
                    <span className="font-body text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              {certifications && certifications.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="border-t border-border pt-6 mt-6"
                >
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-gold" />
                      <span className="font-heading font-semibold text-foreground">Certifications:</span>
                    </div>
                    {certifications.map((cert, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium"
                      >
                        <Award className="h-3.5 w-3.5" />
                        {cert}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
            
            {/* Device Image */}
            {deviceImage && (
              <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={deviceImage} 
                    alt={technologyName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

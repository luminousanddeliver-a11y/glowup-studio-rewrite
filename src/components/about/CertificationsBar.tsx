import { motion } from "framer-motion";
import { Shield, Award, CheckCircle, Sparkles, Heart, Star } from "lucide-react";

interface Certification {
  name: string;
  icon: React.ElementType;
}

const defaultCertifications: Certification[] = [
  { name: "NHS Approved", icon: Shield },
  { name: "FDA Cleared Technology", icon: CheckCircle },
  { name: "Lynton Certified Clinic", icon: Award },
  { name: "Quanta Laser Certified", icon: Sparkles },
  { name: "Level 4 Qualified", icon: Star },
  { name: "Made in Britain Equipment", icon: Heart },
];

interface CertificationsBarProps {
  certifications?: Certification[];
  title?: string;
  subtitle?: string;
}

export const CertificationsBar = ({ 
  certifications = defaultCertifications,
  title = "Trusted Certifications",
  subtitle = "Your safety is our priority"
}: CertificationsBarProps) => {
  return (
    <section className="py-12 bg-gradient-to-r from-primary via-primary/95 to-primary">
      <div className="container-custom">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-2">
            {title}
          </h3>
          <p className="font-body text-primary-foreground/70 text-sm">
            {subtitle}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-3 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              whileHover={{ scale: 1.05 }}
            >
              <cert.icon className="h-5 w-5 text-accent shrink-0" />
              <span className="font-body text-sm text-primary-foreground whitespace-nowrap">
                {cert.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

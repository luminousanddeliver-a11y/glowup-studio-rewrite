import { Check, Award } from "lucide-react";
import { motion } from "framer-motion";
import { OptimizedImage } from "@/components/ui/optimized-image";
import laserDevice from "@/assets/laser-device.jpg";
import tattooRemovalDevice from "@/assets/tattoo-removal-device.jpg";

interface Technology {
  image: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  exclusive?: boolean;
  exclusiveBadge?: string;
}

const technologies: Technology[] = [
  {
    image: laserDevice,
    name: "Lynton Motus AY",
    tagline: "Pain-Free Laser Hair Removal",
    description: "The only laser that delivers the power of Alexandrite without the pain. Our advanced cooling system ensures a comfortable experience, even on sensitive areas.",
    features: [
      "Safe for all skin types (Fitzpatrick I-VI)",
      "No downtime",
      "Faster treatment times",
      "NHS-approved technology",
    ],
  },
  {
    image: tattooRemovalDevice,
    name: "Quanta Thunder Series",
    tagline: "Advanced Tattoo Removal",
    exclusive: true,
    exclusiveBadge: "Only in East London",
    description: "We're the ONLY clinic in East London offering the Quanta Thunder Series—the revolutionary multi-wavelength system that removes ALL ink colors in 50% fewer sessions than traditional lasers.",
    features: [
      "Exclusive to our clinic in East London",
      "Removes ALL ink colors including stubborn blues & greens",
      "50% fewer sessions than traditional lasers",
      "Minimal scarring with precision targeting",
      "FDA Cleared & CE Marked",
    ],
  },
];

export const TechnologyShowcase = () => {
  return (
    <section className="section-padding bg-secondary overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-foreground mb-4">
            Advanced Medical-Grade Technology
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            We invest in the latest NHS-approved equipment to deliver safe, effective, and comfortable treatments.
          </p>
        </motion.div>

        {/* Technology Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className={`bg-card rounded-2xl overflow-hidden shadow-card relative ${tech.exclusive ? 'ring-2 ring-gold' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Exclusive Badge */}
              {tech.exclusive && (
                <motion.div 
                  className="absolute top-4 right-4 z-10 bg-gold text-gold-foreground px-3 py-1.5 rounded-full font-body font-bold text-xs shadow-lg flex items-center gap-1.5"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Award className="h-3.5 w-3.5" />
                  {tech.exclusiveBadge}
                </motion.div>
              )}
              
              {/* Visual Header with Image */}
              <motion.div 
                className="h-56 overflow-hidden relative"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <OptimizedImage 
                  src={tech.image} 
                  alt={tech.name}
                  className="w-full h-full"
                  objectFit="cover"
                />
              </motion.div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-foreground mb-2">{tech.name}</h3>
                <p className="font-body text-accent font-semibold mb-4">
                  {tech.tagline}
                </p>
                <p className="font-body text-muted-foreground mb-6">
                  {tech.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {tech.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={feature} 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + featureIndex * 0.08 }}
                    >
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="font-body text-foreground text-sm">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

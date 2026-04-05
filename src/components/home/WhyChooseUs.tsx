import { Shield, Sparkles, MapPin, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import treatmentRoom from "@/assets/treatment-room.jpg";

interface Differentiator {
  icon: typeof Shield;
  title: string;
  description: string;
  highlight?: boolean;
}

const differentiators: Differentiator[] = [
  {
    icon: Shield,
    title: "NHS-Approved Safety",
    description: "All our procedures, equipment, and protocols meet the highest medical standards set by the National Health Service.",
  },
  {
    icon: Sparkles,
    title: "Guaranteed Pain-Free",
    description: "Using the revolutionary Lynton Motus AY laser, we deliver permanent hair reduction without the pain.",
  },
  {
    icon: MapPin,
    title: "Level 4 Qualified Experts",
    description: "Our team of local, Level 4 qualified therapists have extensive experience treating East London's diverse skin types.",
  },
  {
    icon: Award,
    title: "Exclusive Technology",
    description: "We're the ONLY clinic in East London with the Quanta Thunder Series—the world's most advanced multi-wavelength tattoo removal system.",
    highlight: true,
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={treatmentRoom} 
                alt="Luxury treatment room with ambient lighting at Laser Light Skin Clinic" 
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Floating Badge */}
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-lg hidden md:block"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
              <div className="font-heading text-2xl font-bold">6+</div>
              <div className="font-body text-sm">Years Experience</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Header */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-foreground mb-4">
                The Laser Light Difference
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                We combine medical-grade safety with cutting-edge technology and local expertise to deliver results you can trust.
              </p>
            </motion.div>

            {/* Cards Stack */}
            <div className="space-y-4">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <Card className={`bg-card border-border shadow-card group hover:shadow-card-hover transition-all duration-300 ${item.highlight ? 'ring-2 ring-gold relative overflow-visible' : ''}`}>
                    {item.highlight && (
                      <motion.span 
                        className="absolute -top-3 left-6 bg-gold text-gold-foreground text-xs font-bold px-3 py-1 rounded-full"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ★ EXCLUSIVE
                      </motion.span>
                    )}
                    <div className="flex items-start gap-4 p-6">
                      <div className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center transition-colors ${item.highlight ? 'bg-gold/10 group-hover:bg-gold/20' : 'bg-primary/5 group-hover:bg-primary/10'}`}>
                        <item.icon className={`h-7 w-7 ${item.highlight ? 'text-gold' : 'text-primary'}`} />
                      </div>
                      <div>
                        <h3 className={`mb-2 ${item.highlight ? 'text-gold' : 'text-foreground'}`}>{item.title}</h3>
                        <p className="font-body text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

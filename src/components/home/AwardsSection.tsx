import { Shield, Award, Star, Factory } from "lucide-react";
import { motion } from "framer-motion";

const awards = [
  {
    icon: Shield,
    title: "NHS Approved",
    description: "Trusted clinical standards",
  },
  {
    icon: Award,
    title: "FDA Approved",
    description: "Medical-grade technology",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description: "250+ verified reviews",
  },
  {
    icon: Factory,
    title: "Made in Britain",
    description: "Lynton Lasers certified",
  },
];

export const AwardsSection = () => {
  return (
    <section className="py-12 bg-primary overflow-hidden">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary-foreground mb-2">
            Trusted & Certified
          </h2>
          <p className="font-body text-primary-foreground/80">
            Your safety is our priority
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <motion.div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <award.icon className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground group-hover:text-accent transition-colors" />
              </motion.div>
              <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-1">
                {award.title}
              </h3>
              <p className="font-body text-sm text-primary-foreground/70">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

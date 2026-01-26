import { Shield, Star, Sparkles, Percent } from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
  {
    icon: Shield,
    title: "NHS Approved",
    description: "Medical-grade standards",
  },
  {
    icon: Star,
    title: "5-Star Reviews (250+)",
    description: "Trusted by clients",
  },
  {
    icon: Sparkles,
    title: "Pain-Free Technology",
    description: "Lynton Motus AY",
  },
  {
    icon: Percent,
    title: "25% Off New Clients",
    description: "Limited time offer",
  },
];

export const TrustBar = () => {
  return (
    <section className="bg-secondary py-8 md:py-10 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <motion.div 
                className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 + 0.1 }}
              >
                <item.icon className="h-7 w-7 text-primary" />
              </motion.div>
              <h4 className="font-heading text-sm md:text-base font-medium text-foreground">
                {item.title}
              </h4>
              <p className="font-body text-xs md:text-sm text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Shield, Star, Sparkles, Award } from "lucide-react";
import { motion } from "framer-motion";
import { GOOGLE_MAPS_REVIEWS_URL } from "@/lib/constants";

const trustItems = [
  {
    icon: Shield,
    title: "NHS & FDA Approved",
    description: "Medical-grade standards",
  },
  {
    icon: Star,
    title: "5-Star Reviews (250+)",
    description: "Trusted by clients",
    link: GOOGLE_MAPS_REVIEWS_URL,
  },
  {
    icon: Sparkles,
    title: "Pain-Free Technology",
    description: "Lynton Motus AY",
  },
  {
    icon: Award,
    title: "Exclusive Technology",
    description: "Only Quanta Thunder in East London",
    highlight: true,
  },
];

export const TrustBar = () => {
  return (
    <section className="bg-secondary border-t border-border/50 py-10 md:py-12 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, index) => {
            const content = (
              <>
                {(item as any).highlight && (
                  <motion.span 
                    className="absolute -top-2 bg-gold text-gold-foreground text-[10px] font-bold px-2 py-0.5 rounded-full"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    EXCLUSIVE
                  </motion.span>
                )}
                <motion.div 
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 ${(item as any).highlight ? 'bg-gold/20' : 'bg-primary/10'} ${(item as any).link ? 'group-hover:bg-primary/20 transition-colors' : ''}`}
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.08 + 0.1 }}
                >
                  <item.icon className={`h-7 w-7 ${(item as any).highlight ? 'text-gold' : 'text-primary'}`} />
                </motion.div>
                <h4 className={`font-heading text-sm md:text-base font-medium ${(item as any).highlight ? 'text-gold' : 'text-foreground'} ${(item as any).link ? 'group-hover:text-primary transition-colors' : ''}`}>
                  {item.title}
                </h4>
                <p className="font-body text-xs md:text-sm text-muted-foreground">
                  {item.description}
                </p>
              </>
            );

            return (
              <motion.div
                key={item.title}
                className={`flex flex-col items-center text-center ${(item as any).highlight ? 'relative' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                {(item as any).link ? (
                  <a
                    href={(item as any).link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-center group cursor-pointer"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

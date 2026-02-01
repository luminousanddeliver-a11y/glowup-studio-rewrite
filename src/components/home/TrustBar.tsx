import { Shield, Star, Sparkles, Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import { GOOGLE_MAPS_REVIEWS_URL } from "@/lib/constants";

const trustItems = [
  {
    icon: Shield,
    title: "NHS & FDA Approved",
    description: "Medical-grade safety",
  },
  {
    icon: Star,
    title: "4.9★ Rating",
    description: "290+ verified reviews",
    link: GOOGLE_MAPS_REVIEWS_URL,
  },
  {
    icon: Sparkles,
    title: "Pain-Free Guaranteed",
    description: "Lynton Motus AY laser",
  },
  {
    icon: Users,
    title: "All Skin Types",
    description: "Including darker tones",
  },
  {
    icon: Award,
    title: "Only in East London",
    description: "Quanta Thunder laser",
    highlight: true,
  },
];

export const TrustBar = () => {
  return (
    <section className="bg-secondary border-t border-border/50 py-8 md:py-10 overflow-hidden">
      <div className="container-custom">
        {/* Mobile: 2 columns, Desktop: 5 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
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
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${(item as any).highlight ? 'bg-gold/20' : 'bg-primary/10'} ${(item as any).link ? 'group-hover:bg-primary/20 transition-colors' : ''}`}
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 + 0.1 }}
                >
                  <item.icon className={`h-5 w-5 ${(item as any).highlight ? 'text-gold' : 'text-primary'}`} />
                </motion.div>
                <h4 className={`font-heading text-sm font-medium ${(item as any).highlight ? 'text-gold' : 'text-foreground'} ${(item as any).link ? 'group-hover:text-primary transition-colors' : ''}`}>
                  {item.title}
                </h4>
                <p className="font-body text-xs text-muted-foreground">
                  {item.description}
                </p>
              </>
            );

            return (
              <motion.div
                key={item.title}
                className={`flex flex-col items-center text-center ${(item as any).highlight ? 'relative' : ''} ${index === 4 ? 'col-span-2 md:col-span-1' : ''}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {(item as any).link ? (
                  <a
                    href={(item as any).link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-center group cursor-pointer"
                    aria-label="View our Google reviews"
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

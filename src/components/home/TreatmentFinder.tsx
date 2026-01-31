import { Zap, Eraser, Droplets, Sparkles, Scissors, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const treatments = [
  {
    icon: Zap,
    label: "Laser Hair Removal",
    href: "/services/laser-hair-removal",
  },
  {
    icon: Eraser,
    label: "Tattoo Removal",
    href: "/services/tattoo-removal",
  },
  {
    icon: Droplets,
    label: "HydraFacial",
    href: "/services/hydrafacials",
  },
  {
    icon: Sparkles,
    label: "Chemical Peels",
    href: "/services/chemical-peels",
  },
  {
    icon: Scissors,
    label: "Skin Tag Removal",
    href: "/services/skin-tag-mole-removal",
  },
  {
    icon: LayoutGrid,
    label: "View All Treatments",
    href: "/prices",
    isViewAll: true,
  },
];

export const TreatmentFinder = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container-custom">
        {/* Headline */}
        <motion.h2 
          className="text-center text-foreground mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          What brings you in today?
        </motion.h2>

        {/* 2x3 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                to={treatment.href}
                className={`
                  flex flex-col items-center justify-center 
                  p-5 md:p-6 rounded-xl 
                  bg-card border border-border 
                  shadow-sm hover:shadow-md 
                  transition-all duration-300 
                  group min-h-[120px] md:min-h-[140px]
                  ${treatment.isViewAll ? 'border-primary/30 bg-primary/5' : ''}
                `}
              >
                <div className={`
                  w-12 h-12 md:w-14 md:h-14 rounded-full 
                  flex items-center justify-center mb-3
                  transition-colors duration-300
                  ${treatment.isViewAll 
                    ? 'bg-primary/10 group-hover:bg-primary/20' 
                    : 'bg-accent/10 group-hover:bg-accent/20'
                  }
                `}>
                  <treatment.icon className={`
                    h-6 w-6 md:h-7 md:w-7 
                    ${treatment.isViewAll ? 'text-primary' : 'text-accent'}
                  `} />
                </div>
                <span className={`
                  font-heading text-sm md:text-base font-medium text-center
                  ${treatment.isViewAll ? 'text-primary' : 'text-foreground'}
                  group-hover:text-primary transition-colors
                `}>
                  {treatment.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

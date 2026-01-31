import { Zap, Eraser, Droplets, Sparkles, Scissors, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";

const treatments = [
  {
    icon: Zap,
    label: "Laser Hair Removal",
    href: "/laser-hair-removal-dagenham",
    price: "From £80",
  },
  {
    icon: Eraser,
    label: "Tattoo Removal",
    href: "/tattoo-removal-east-london",
    price: "From £50",
  },
  {
    icon: Droplets,
    label: "HydraFacial",
    href: "/hydrafacial-east-london",
    price: "From £90",
  },
  {
    icon: Sparkles,
    label: "Chemical Peels",
    href: "/chemical-peels-dagenham",
    price: "From £75",
  },
  {
    icon: Scissors,
    label: "Skin Tag Removal",
    href: "/skin-tag-mole-removal-dagenham",
    price: "From £40",
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
    <section className="py-14 md:py-20 bg-secondary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }} />

      <div className="container-custom relative z-10">
        {/* Headline */}
        <motion.div 
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-foreground mb-3">
            What brings you in today?
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Select your treatment to learn more and view pricing
          </p>
        </motion.div>

        {/* 2x3 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 max-w-3xl mx-auto">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <a
                href={treatment.href}
                onClick={() => window.scrollTo(0, 0)}
                className={`
                  relative flex flex-col items-center justify-center 
                  p-6 md:p-8 rounded-2xl 
                  bg-card border border-border 
                  shadow-sm hover:shadow-xl 
                  transition-all duration-300 
                  group min-h-[140px] md:min-h-[160px]
                  hover:-translate-y-1
                  ${treatment.isViewAll ? 'border-primary/40 bg-gradient-to-br from-primary/5 to-primary/10' : ''}
                `}
              >
                {/* Hover gradient */}
                <div className={`
                  absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  ${treatment.isViewAll 
                    ? 'bg-gradient-to-br from-primary/10 to-primary/5' 
                    : 'bg-gradient-to-br from-accent/5 to-transparent'
                  }
                `} />
                
                <div className={`
                  relative w-14 h-14 md:w-16 md:h-16 rounded-2xl 
                  flex items-center justify-center mb-4
                  transition-all duration-300
                  shadow-sm group-hover:shadow-md
                  ${treatment.isViewAll 
                    ? 'bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110' 
                    : 'bg-accent/10 group-hover:bg-accent/20 group-hover:scale-110'
                  }
                `}>
                  <treatment.icon className={`
                    h-7 w-7 md:h-8 md:w-8 transition-transform duration-300
                    ${treatment.isViewAll ? 'text-primary' : 'text-accent'}
                  `} />
                </div>
                <span className={`
                  relative font-heading text-sm md:text-base font-medium text-center leading-tight
                  ${treatment.isViewAll ? 'text-primary' : 'text-foreground'}
                  group-hover:text-primary transition-colors
                `}>
                  {treatment.label}
                </span>
                {treatment.price && (
                  <span className="relative font-body text-xs text-muted-foreground mt-1">
                    {treatment.price}
                  </span>
                )}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

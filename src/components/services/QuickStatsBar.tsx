import { LucideIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface Stat {
  value: string;
  label: string;
  icon: LucideIcon;
}

interface QuickStatsBarProps {
  stats: Stat[];
}

// Animated counter for stats
const AnimatedStatValue = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    if (!isInView) return;
    
    // Extract numeric part and suffix/prefix
    const numericMatch = value.match(/(\d+)/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }
    
    const targetNum = parseInt(numericMatch[1]);
    const prefix = value.slice(0, value.indexOf(numericMatch[1]));
    const suffix = value.slice(value.indexOf(numericMatch[1]) + numericMatch[1].length);
    const duration = 1200;
    const steps = 25;
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(targetNum * eased);
      setDisplayValue(prefix + currentValue + suffix);
      
      if (currentStep >= steps) {
        clearInterval(interval);
        setDisplayValue(value);
      }
    }, stepDuration);
    
    return () => clearInterval(interval);
  }, [isInView, value]);
  
  return <span ref={ref}>{displayValue}</span>;
};

export const QuickStatsBar = ({ stats }: QuickStatsBarProps) => {
  return (
    <section className="bg-secondary py-6 md:py-8">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center gap-2"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                  className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center"
                >
                  <Icon className="h-6 w-6 text-accent" />
                </motion.div>
                <div>
                  <p className="font-heading font-bold text-foreground text-lg">
                    <AnimatedStatValue value={stat.value} />
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

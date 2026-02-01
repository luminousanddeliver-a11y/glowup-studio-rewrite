import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Star, Users, Award, TrendingUp, Quote } from "lucide-react";

interface Stat {
  value: string;
  label: string;
}

interface Testimonial {
  initials: string;
  name: string;
  treatment: string;
  rating: number;
  quote: string;
}

interface ResultsShowcaseProps {
  title: string;
  description?: string;
  stats?: Stat[];
  testimonials?: Testimonial[];
  instagramLink?: string;
  instagramText?: string;
}

const defaultStats: Stat[] = [
  { value: "4.9★", label: "Average Rating" },
  { value: "10,000+", label: "Treatments Performed" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "15+", label: "Years Experience" },
];

const defaultTestimonials: Testimonial[] = [
  {
    initials: "S.A.",
    name: "Sarah",
    treatment: "Laser Hair Removal",
    rating: 5,
    quote: "Amazing results! After just 4 sessions, I've seen a dramatic reduction. The pain-free technology really works—nothing like my previous experience elsewhere.",
  },
  {
    initials: "M.K.",
    name: "Maryam",
    treatment: "Hydrafacial",
    rating: 5,
    quote: "My skin has never looked better. The team made me feel so comfortable, and I walked out absolutely glowing. Now a monthly ritual for me!",
  },
  {
    initials: "R.P.",
    name: "Rebecca",
    treatment: "Skin Rejuvenation",
    rating: 5,
    quote: "I was skeptical at first, but the results speak for themselves. Fine lines visibly reduced and my skin feels firmer. Highly recommend!",
  },
];

// Animated counter for stats
const AnimatedStatValue = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    if (!isInView) return;
    
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
      setDisplayValue(prefix + currentValue.toLocaleString() + suffix);
      
      if (currentStep >= steps) {
        clearInterval(interval);
        setDisplayValue(value);
      }
    }, stepDuration);
    
    return () => clearInterval(interval);
  }, [isInView, value]);
  
  return <span ref={ref}>{displayValue}</span>;
};

export const ResultsShowcase = ({
  title,
  description,
  stats = defaultStats,
  testimonials = defaultTestimonials,
  instagramLink = "https://www.instagram.com/laserlightskinclinic",
  instagramText = "See More Results on Instagram",
}: ResultsShowcaseProps) => {
  const statIcons = [Star, Users, TrendingUp, Award];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-foreground mb-4">{title}</h2>
          {description && (
            <p className="font-body text-lg text-muted-foreground">{description}</p>
          )}
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          {stats.map((stat, index) => {
            const Icon = statIcons[index % statIcons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center border-none shadow-sm bg-background">
                  <CardContent className="pt-6 pb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: "spring" }}
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3"
                    >
                      <Icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <p className="font-heading font-bold text-2xl text-foreground mb-1">
                      <AnimatedStatValue value={stat.value} />
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="bg-background border-none shadow-card hover:shadow-card-hover transition-shadow h-full">
                <CardContent className="p-6">
                  {/* Quote icon */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-primary/20" />
                  </div>
                  
                  {/* Quote text */}
                  <p className="font-body text-foreground/80 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: index * 0.15 + i * 0.05 + 0.3 }}
                      >
                        <Star
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? "text-gold fill-gold"
                              : "text-muted-foreground/30"
                          }`}
                        />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-sm font-heading font-bold text-primary-foreground">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </p>
                      <p className="font-body text-xs text-muted-foreground">
                        {testimonial.treatment}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-body"
          >
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" />
              {instagramText}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

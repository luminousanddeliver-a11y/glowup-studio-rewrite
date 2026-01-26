import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { GOOGLE_MAPS_REVIEWS_URL } from "@/lib/constants";

interface Testimonial {
  quote: string;
  initials: string;
  treatment: string;
  rating?: number;
}

interface ServiceTestimonialProps {
  testimonials: Testimonial[];
  title?: string;
}

export const ServiceTestimonial = ({ 
  testimonials, 
  title = "What Our Clients Say" 
}: ServiceTestimonialProps) => {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="section-padding bg-accent/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-foreground mb-3">{title}</h2>
          <p className="font-body text-muted-foreground">
            Real reviews from our satisfied clients
          </p>
        </motion.div>

        <div className={`grid gap-6 max-w-4xl mx-auto ${testimonials.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-2'}`}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-card border border-border relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <Quote className="h-5 w-5 text-accent-foreground" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-body text-foreground mb-4 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Abstract avatar - initials only (halal-compliant) */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/30 flex items-center justify-center">
                  <span className="font-heading font-bold text-foreground text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-medium text-foreground text-sm">
                    Verified Client
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    {testimonial.treatment}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8"
        >
          <a
            href={GOOGLE_MAPS_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm border border-border hover:border-accent/30 hover:shadow-md transition-all group"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-body text-sm text-muted-foreground">
              4.9 from 250+ Google Reviews
            </span>
            <span className="text-accent text-xs group-hover:underline">View →</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import clinicExterior from "@/assets/clinic-exterior.jpg";
import clinicFlowerWall from "@/assets/clinic-flower-wall.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import clinicLogoWall from "@/assets/clinic-logo-wall.jpg";
import clinicReception from "@/assets/clinic-reception.jpg";

const slides = [
  { src: clinicExterior, alt: "Laser Light Skin Clinic exterior storefront" },
  { src: clinicReception, alt: "Welcoming clinic reception area" },
  { src: clinicFlowerWall, alt: "Signature teal flower wall feature" },
  { src: clinicInterior, alt: "Modern treatment room interior" },
  { src: clinicLogoWall, alt: "Clinic branding and logo wall" },
];

export const ClinicGalleryCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-10 md:py-14 bg-muted/30">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-2">
          Our Clinic
        </h2>
        <p className="text-muted-foreground text-center font-body mb-8 max-w-lg mx-auto">
          Take a look inside our modern, welcoming clinic in Dagenham
        </p>

        <div className="relative max-w-3xl mx-auto">
          {/* Image */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={slides[current].src}
                alt={slides[current].alt}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                loading="lazy"
              />
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-card transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-card transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-border"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

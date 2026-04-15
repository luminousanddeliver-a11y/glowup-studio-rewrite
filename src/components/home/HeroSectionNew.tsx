import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { GOOGLE_MAPS_REVIEWS_URL } from "@/lib/constants";

export const HeroSectionNew = () => {
  return (
    <section className="-mt-[80px] pt-[80px] relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <source src="/videos/banner-video-laser.mp4" type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 md:from-black/70 md:via-black/50 md:to-transparent" />
      </div>

      <div className="container-custom relative z-10 py-20 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3 text-center lg:text-left">
            <motion.h1 
              className="text-white mb-4 leading-tight text-4xl md:text-5xl lg:text-6xl font-semibold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Your Journey to{" "}
              <span className="block sm:inline text-white relative">
                Flawless Skin
                <motion.span 
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                />
              </span>
            </motion.h1>

            <motion.p 
              className="font-body text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              NHS-Approved Skin Clinic serving Dagenham, Barking, Redbridge & Havering.
            </motion.p>

            {/* Google Reviews Badge */}
            <motion.a
              href={GOOGLE_MAPS_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <img 
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_42x14dp.png" 
                alt="Google" 
                className="h-5 w-auto"
              />
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white font-medium text-sm">4.9 · 300+ reviews</span>
              </div>
            </motion.a>

            <motion.div 
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button 
                asChild 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-body min-h-[52px] px-8 text-base shadow-lg shadow-primary/25"
              >
                <a 
                  href="#treatment-finder" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('treatment-finder')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  View Treatments
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="border-white bg-white/10 text-white hover:bg-white hover:text-foreground font-body min-h-[52px] px-8 text-base backdrop-blur-sm"
              >
                <a href="https://www.phorest.com/salon/laserlightskinclinic/book/service-selection" target="_blank" rel="noopener noreferrer">
                  Book Consultation
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div 
            className="lg:col-span-2 hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="font-heading text-white text-lg font-medium mb-4">
                Trusted by East London
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <span className="block font-heading text-3xl font-bold text-primary">300+</span>
                  <span className="text-white/70 text-sm">5-Star Reviews</span>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <span className="block font-heading text-3xl font-bold text-primary">20+</span>
                  <span className="text-white/70 text-sm">Years Experience</span>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <span className="block font-heading text-3xl font-bold text-primary">5000+</span>
                  <span className="text-white/70 text-sm">Happy Clients</span>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <span className="block font-heading text-3xl font-bold text-primary">100%</span>
                  <span className="text-white/70 text-sm">NHS Approved</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
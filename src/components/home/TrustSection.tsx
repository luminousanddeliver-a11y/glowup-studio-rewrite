import { Shield, Award, Zap, Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GOOGLE_MAPS_REVIEWS_URL } from "@/lib/constants";
import { useMemo } from "react";

const reviewPool = [
  {
    name: "Mili Begum",
    rating: 5,
    text: "Clean and lovely decor. The staff are extremely helpful and friendly. Taiba and Kate were great and made me feel comfortable. I highly recommend this place!",
    treatment: "General Experience",
    source: "Google",
  },
  {
    name: "Gagandeep Kaur",
    rating: 5,
    text: "Made to feel so comfortable during my treatment. I highly recommend the laser used here, especially for people of colour. The technology is truly pain-free.",
    treatment: "Laser Hair Removal",
    source: "Google",
  },
  {
    name: "Aisha Omar",
    rating: 5,
    text: "The Hydrafacial treatment was AMAZING! My skin has never felt so good. The staff were so welcoming and professional.",
    treatment: "HydraFacial",
    source: "Google",
  },
  {
    name: "Mona William",
    rating: 5,
    text: "I had my microneedling appointment today at Laser Light Clinic and I'm extremely happy with the experience. I have also previously had a chemical peel there, and both treatments have given me great results.",
    treatment: "Microneedling & Chemical Peel",
    source: "Google",
  },
  {
    name: "Arifa",
    rating: 5,
    text: "Amazing! I saw huge results with laser, it saves me so much time and stress from having to think I have to make time to groom myself! I don't know why I didn't do this sooner! Laserlight skin clinic were so lovely.",
    treatment: "Laser Hair Removal",
    source: "Google",
  },
  {
    name: "Ezza Khan",
    rating: 5,
    text: "Been coming to Laser Light Clinic for years, Tayyaba has always been so welcoming, given the best advice and service, definitely become a really good friend over the years.",
    treatment: "Regular Client",
    source: "Google",
  },
  {
    name: "Laurie Smith",
    rating: 5,
    text: "NHS referred — I have been really happy with the laser treatment progress here and I think they have a good device. The clinicians and receptionists are nice too.",
    treatment: "Laser Hair Removal (NHS Referred)",
    source: "Google",
  },
  {
    name: "Danielle Willbourne",
    rating: 5,
    text: "I had a hydrafacial with Ionela. She was very professional but also a lovely, warm person and I loved the treatment. I will definitely be back and make this a part of my skincare.",
    treatment: "HydraFacial",
    source: "Google",
  },
  {
    name: "Bailey Haydon",
    rating: 5,
    text: "Had my biotin injection, I felt a surge of energy. The manager is lovely. She's so kind and gives you all the information. Highly recommend this place. Definitely my go to!",
    treatment: "Biotin Injection",
    source: "Google",
  },
  {
    name: "Holly Batcheler",
    rating: 5,
    text: "Had my micro-bladed brows removed here and honestly couldn't be happier with the whole experience. From the moment I walked in, the team made me feel completely comfortable — they are so warm, friendly, and genuinely care.",
    treatment: "Laser Brow Removal",
    source: "Google",
  },
];

// Fisher-Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const promises = [
  {
    icon: Shield,
    title: "NHS-Approved Safety",
    description: "All procedures meet highest medical standards.",
  },
  {
    icon: Award,
    title: "Level 4 Qualified Experts",
    description: "Extensive experience with diverse skin types.",
  },
  {
    icon: Zap,
    title: "Quanta Thunder Lasers",
    description: "World-class, medical-grade technology.",
  },
];

// Google "G" SVG icon
const GoogleIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export const TrustSection = () => {
  // Select 3 random reviews on mount using Fisher-Yates shuffle
  const selectedReviews = useMemo(() => shuffleArray(reviewPool).slice(0, 3), []);

  return (
    <section id="trust-section" className="py-14 md:py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-foreground mb-3">
            Why East London & Essex Trust <span className="text-primary">Laser Light</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Google Rating Badge */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          <a
            href={GOOGLE_MAPS_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2.5 shadow-sm hover:shadow-md transition-shadow"
          >
            <GoogleIcon />
            <span className="font-heading text-sm font-medium text-foreground">4.9★ on Google</span>
            <span className="text-muted-foreground text-sm">·</span>
            <span className="font-body text-sm text-muted-foreground">300+ reviews</span>
          </a>
        </motion.div>

        {/* Real Reviews */}
        <motion.div 
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="font-heading text-lg font-medium text-center text-muted-foreground mb-8">
            Real Reviews from Real Clients
          </h3>
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {selectedReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <Card className="bg-card border-border shadow-md hover:shadow-lg transition-shadow h-full relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <CardContent className="p-6 relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Quote className="w-5 h-5 text-primary" />
                        </div>
                        <GoogleIcon />
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                        ))}
                      </div>
                    </div>
                    <p className="font-body text-foreground mb-5 text-sm leading-relaxed italic">
                      "{review.text}"
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="font-heading font-semibold text-foreground">
                        {review.name}
                      </p>
                      <span className="inline-block mt-1 bg-primary/10 text-primary text-xs font-body px-2 py-0.5 rounded-full">
                        {review.treatment}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body shadow-sm"
            >
              <a
                href={GOOGLE_MAPS_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read All 300+ Reviews
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Our Promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="font-heading text-lg font-medium text-center text-muted-foreground mb-8">
            Our Promise to You
          </h3>
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {promises.map((promise, index) => (
              <motion.div
                key={promise.title}
                className="relative flex flex-col items-center text-center p-5 md:p-6 bg-secondary rounded-2xl group hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative mb-3">
                  <promise.icon className="h-7 w-7 text-primary" />
                </div>
                <h4 className="relative font-heading font-semibold text-foreground mb-2">
                  {promise.title}
                </h4>
                <p className="relative font-body text-sm text-muted-foreground">
                  {promise.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { Award, Shield, Heart, Users, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import treatmentRoom from "@/assets/treatment-room.jpg";
import consultationRoom from "@/assets/consultation-room.jpg";

const About = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Laser Light Skin Clinic",
    "description": "NHS-approved laser aesthetics clinic in Dagenham, East London offering pain-free laser hair removal and advanced skin treatments.",
    "url": "https://laserlightskinclinic.co.uk/about",
    "telephone": "+442085981200",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "125 Becontree Avenue",
      "addressLocality": "Dagenham",
      "addressRegion": "Essex",
      "postalCode": "RM8 2UJ",
      "addressCountry": "GB"
    },
    "founder": {
      "@type": "Person",
      "name": "Laser Light Skin Clinic Team"
    },
    "foundingDate": "2004",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "250"
    }
  };

  const values = [
    {
      icon: Shield,
      title: "NHS-Approved Safety",
      description: "Our protocols meet the highest medical standards, ensuring your complete peace of mind with every treatment."
    },
    {
      icon: Award,
      title: "Level 4 Qualifications",
      description: "All our therapists hold Level 4 qualifications in laser and light treatments, the highest in the industry."
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "We create bespoke treatment plans tailored to your unique skin type, concerns, and aesthetic goals."
    },
    {
      icon: Users,
      title: "Diverse Community",
      description: "We proudly serve Dagenham's diverse community with treatments safe for all skin types and tones."
    }
  ];

  const certifications = [
    "NHS Approved Clinic",
    "Lynton Laser Certified",
    "FDA-Approved Technology",
    "Level 4 Qualified Therapists",
    "Quanta Laser Certified",
    "Made in Britain Equipment"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="About Us | NHS-Approved Laser Clinic Dagenham | Laser Light"
        description="Learn about Laser Light Skin Clinic - Dagenham's trusted NHS-approved laser aesthetics clinic with 20+ years experience. Level 4 qualified therapists serving East London."
        canonicalUrl="https://laserlightskinclinic.co.uk/about"
        structuredData={organizationSchema}
      />
      
      <Header />
      <main className="flex-1 overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${consultationRoom})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40" />
          
          <div className="container-custom relative z-10 py-16">
            <motion.div 
              className="max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span 
                className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full font-body text-sm mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <Award className="h-4 w-4" />
                Est. 2004 • 20+ Years Experience
              </motion.span>
              <motion.h1 
                className="text-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                About <span className="text-accent">Laser Light</span> Skin Clinic
              </motion.h1>
              <motion.p 
                className="text-lg text-muted-foreground font-body"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                The only 5-star NHS-approved laser clinic in East London, trusted by over 250+ clients for pain-free, medical-grade treatments.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground font-body">
                  <p>
                    Founded in 2004, Laser Light Skin Clinic has been at the forefront of aesthetic treatments in Dagenham and East London for over two decades. What started as a vision to bring medical-grade, safe treatments to our local community has grown into the area's most trusted laser clinic.
                  </p>
                  <p>
                    We're proud to be NHS-approved, meaning our clinic meets the strictest safety and hygiene standards set by the National Health Service. This approval isn't just a badge – it's our commitment to your safety and wellbeing.
                  </p>
                  <p>
                    Our investment in cutting-edge technology, including the Lynton Motus AY and Quanta Thunder Series lasers, reflects our dedication to delivering the best possible results with maximum comfort.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img 
                  src={treatmentRoom} 
                  alt="Laser Light Skin Clinic treatment room with advanced medical equipment"
                  className="rounded-lg shadow-card-hover w-full"
                />
                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="text-3xl font-heading font-bold">20+</div>
                  <div className="font-body text-sm">Years of Excellence</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-foreground mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground font-body">
                Everything we do is guided by our commitment to safety, excellence, and personalized care.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div 
                  key={value.title}
                  className="bg-card p-6 rounded-lg shadow-card hover:shadow-card-hover transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <value.icon className="h-6 w-6 text-accent" />
                  </motion.div>
                  <h3 className="font-heading text-lg font-medium text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-4">Our Certifications & Accreditations</h2>
              <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
                We hold the highest industry certifications, ensuring you receive safe, effective treatments from qualified professionals.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={cert}
                  className="flex items-center gap-3 bg-primary-foreground/10 p-4 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                >
                  <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                  <span className="font-body">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Summary */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div 
              className="bg-card rounded-2xl p-8 md:p-12 shadow-card text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="flex justify-center gap-1 mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 fill-gold text-gold" />
                ))}
              </motion.div>
              <motion.div 
                className="text-4xl font-heading font-bold text-foreground mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                4.9 / 5
              </motion.div>
              <p className="text-muted-foreground font-body mb-6">
                Based on 250+ verified client reviews
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="/contact">Book Your Free Consultation</a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-foreground mb-4">Ready to Transform Your Skin?</h2>
              <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto mb-8">
                Book your free consultation today and discover why hundreds of clients trust us with their skin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href="/contact">Book Consultation</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary">
                  <a href="tel:02085981200">Call 0208 598 1200</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

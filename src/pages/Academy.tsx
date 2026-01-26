import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Users, Clock, CheckCircle, Phone, Mail } from "lucide-react";

const courses = [
  {
    title: "Laser Hair Removal Training",
    level: "Level 4",
    duration: "2-3 Days",
    price: "£1,500",
    description: "Comprehensive training on laser hair removal using the Lynton Motus AY, covering all skin types and safety protocols.",
    includes: [
      "Theory and practical sessions",
      "Hands-on treatment practice",
      "Skin type assessment training",
      "Safety and contraindications",
      "Business setup guidance",
      "Certificate upon completion",
    ],
  },
  {
    title: "Skin Rejuvenation & IPL Training",
    level: "Level 4",
    duration: "2 Days",
    price: "£1,200",
    description: "Learn advanced skin rejuvenation techniques using IPL and laser technology for anti-aging and skin improvement.",
    includes: [
      "IPL theory and physics",
      "Treatment protocols",
      "Client consultations",
      "Before/after documentation",
      "Machine operation",
      "Certificate upon completion",
    ],
  },
  {
    title: "Chemical Peel Training",
    level: "Level 3",
    duration: "1 Day",
    price: "£600",
    description: "Master the art of chemical peels, from superficial to medium-depth treatments for various skin concerns.",
    includes: [
      "Peel chemistry fundamentals",
      "Skin analysis techniques",
      "Application methods",
      "Post-treatment care",
      "Product knowledge",
      "Certificate upon completion",
    ],
  },
  {
    title: "Microneedling Training",
    level: "Level 4",
    duration: "1 Day",
    price: "£800",
    description: "Professional training in SkinPen microneedling for collagen induction therapy and scar treatment.",
    includes: [
      "Device operation training",
      "Treatment protocols",
      "Sterile technique",
      "Client selection criteria",
      "Aftercare guidance",
      "Certificate upon completion",
    ],
  },
];

const whyTrainWithUs = [
  {
    icon: Award,
    title: "Industry-Recognized Certificates",
    description: "Our courses are fully accredited and recognized by insurance providers nationwide.",
  },
  {
    icon: Users,
    title: "Small Class Sizes",
    description: "Maximum 4 students per course ensures personalized attention and hands-on practice.",
  },
  {
    icon: Clock,
    title: "20+ Years Experience",
    description: "Learn from practitioners with over two decades of industry experience.",
  },
  {
    icon: GraduationCap,
    title: "Ongoing Support",
    description: "We provide post-course support to help you launch and grow your practice.",
  },
];

const Academy = () => {
  const academySchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Laser Light Skin Clinic Academy",
    "description": "Professional laser and aesthetic training courses in Dagenham, East London. Level 3 and Level 4 accredited courses.",
    "url": "https://laserlightskinclinic.co.uk/academy",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "125 Becontree Avenue",
      "addressLocality": "Dagenham",
      "addressRegion": "Essex",
      "postalCode": "RM8 2UJ",
      "addressCountry": "GB"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Laser Training Academy | Level 4 Courses Dagenham | Laser Light"
        description="Professional laser and aesthetic training at Laser Light Academy, Dagenham. Level 3 & 4 accredited courses in laser hair removal, microneedling, and chemical peels."
        canonicalUrl="https://laserlightskinclinic.co.uk/academy"
        structuredData={academySchema}
      />
      
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container-custom">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-8 w-8" />
                <span className="font-body text-primary-foreground/80">Laser Light Academy</span>
              </div>
              <h1 className="mb-4">Professional Aesthetic Training</h1>
              <p className="text-lg text-primary-foreground/80 font-body">
                Launch or advance your career in aesthetics with our accredited Level 3 and Level 4 training courses.
              </p>
            </div>
          </div>
        </section>

        {/* Why Train With Us */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-foreground mb-4">Why Train With Us?</h2>
              <p className="text-muted-foreground font-body max-w-2xl mx-auto">
                Join the next generation of aesthetic professionals with training from industry leaders.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyTrainWithUs.map((item) => (
                <div 
                  key={item.title}
                  className="bg-card p-6 rounded-lg shadow-card text-center"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg font-medium text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-foreground mb-4">Our Training Courses</h2>
              <p className="text-muted-foreground font-body max-w-2xl mx-auto">
                Comprehensive, hands-on training with industry-leading equipment and techniques.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {courses.map((course) => (
                <div 
                  key={course.title}
                  className="bg-card rounded-lg shadow-card overflow-hidden"
                >
                  <div className="p-6 border-b border-border">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-accent/10 text-accent text-xs font-body px-3 py-1 rounded-full">
                        {course.level}
                      </span>
                      <span className="bg-primary/10 text-primary text-xs font-body px-3 py-1 rounded-full">
                        {course.duration}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-medium text-foreground mb-2">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground font-body mb-4">
                      {course.description}
                    </p>
                    <div className="text-2xl font-heading font-bold text-accent">
                      {course.price}
                    </div>
                  </div>
                  
                  <div className="p-6 bg-secondary/50">
                    <h4 className="font-heading text-sm font-medium text-foreground mb-3">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {course.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                          <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enrollment CTA */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="mb-4">Ready to Start Your Training?</h2>
                  <p className="text-primary-foreground/80 font-body mb-6">
                    Contact us to discuss course availability, prerequisites, and payment plans. Limited spaces available per course.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 font-body text-primary-foreground/80">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      Flexible payment plans available
                    </li>
                    <li className="flex items-center gap-2 font-body text-primary-foreground/80">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      Insurance-recognized certificates
                    </li>
                    <li className="flex items-center gap-2 font-body text-primary-foreground/80">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      Ongoing mentorship support
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-col gap-4">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a href="tel:02085981200">
                      <Phone className="h-5 w-5 mr-2" />
                      Call 0208 598 1200
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                    <a href="mailto:info@laserlightskinclinic.co.uk">
                      <Mail className="h-5 w-5 mr-2" />
                      Email for Course Info
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Academy;

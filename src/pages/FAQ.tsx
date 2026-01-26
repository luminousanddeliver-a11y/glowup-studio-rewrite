import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { PageBreadcrumb } from "@/components/layout/PageBreadcrumb";
import { MobileStickyButton } from "@/components/home/MobileStickyButton";
import { ScrollReveal } from "@/components/home/ScrollReveal";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

// General clinic FAQs
const generalFaqs = [
  {
    question: "Is Laser Light Skin Clinic NHS-approved?",
    answer: "Yes, we are proud to be an NHS-approved clinic, meaning all our procedures, equipment, and safety protocols meet the highest medical standards set by the National Health Service.",
  },
  {
    question: "Does your laser hair removal treatment hurt?",
    answer: "No. We use the Lynton Motus AY, which is guaranteed pain-free. Its advanced cooling system and Moveo technology ensure a comfortable experience, even on sensitive areas like the bikini line.",
  },
  {
    question: "How much does a treatment cost?",
    answer: "Treatment costs vary by service and area. We offer transparent pricing and a free, no-obligation consultation where we provide a personalized quote. New clients also receive 25% off their first treatment course.",
  },
  {
    question: "Is the laser safe for dark skin?",
    answer: "Absolutely. The Lynton Motus AY is safe for all skin types, including Fitzpatrick skin types IV-VI (darker skin tones). This is one of the reasons we chose this technology.",
  },
  {
    question: "What is the downtime after treatments?",
    answer: "Most treatments have minimal to no downtime. Laser hair removal and Hydrafacials allow you to return to normal activities immediately. More intensive treatments like Chemical Peels may require 3-5 days of redness.",
  },
  {
    question: "How many sessions will I need?",
    answer: "This depends on the treatment. Laser hair removal typically requires 6-8 sessions for optimal results. Tattoo removal varies based on ink color and depth (4-10 sessions). We provide a detailed plan during your free consultation.",
  },
  {
    question: "Can I book same-day appointments?",
    answer: "Yes, subject to availability. We recommend booking in advance, but we do our best to accommodate urgent requests. Call us at 0208 598 1200.",
  },
];

// Service-specific FAQs
const serviceFaqs = {
  "Laser Hair Removal": [
    {
      question: "How long does each laser hair removal session take?",
      answer: "Session times vary by area: small areas like the upper lip take 5-10 minutes, while larger areas like full legs can take 45-60 minutes.",
    },
    {
      question: "Can I shave between laser sessions?",
      answer: "Yes, shaving is fine and actually recommended 24 hours before each session. However, avoid waxing, threading, or plucking as these remove the hair follicle that the laser needs to target.",
    },
    {
      question: "What should I avoid before laser hair removal?",
      answer: "Avoid sun exposure and tanning for 2 weeks before treatment. Don't wax, pluck, or use depilatory creams. Shave the area 24 hours before your appointment.",
    },
  ],
  "Tattoo Removal": [
    {
      question: "Can you remove all tattoo ink colors?",
      answer: "Yes! Our Quanta Thunder laser system uses multiple wavelengths to effectively remove all ink colors, including stubborn blues and greens that older lasers struggle with.",
    },
    {
      question: "How many sessions does tattoo removal require?",
      answer: "Most tattoos require 4-10 sessions, depending on the size, ink colors, ink depth, and your skin type. Professional tattoos typically need more sessions than amateur ones.",
    },
    {
      question: "Will tattoo removal leave a scar?",
      answer: "The Quanta Thunder's advanced technology minimizes scarring risk. When you follow our aftercare instructions, scarring is extremely rare.",
    },
  ],
  "Hydrafacials": [
    {
      question: "How often should I get a Hydrafacial?",
      answer: "For best results, we recommend a Hydrafacial every 4-6 weeks. However, many clients enjoy monthly treatments as part of their skincare routine.",
    },
    {
      question: "Is there any downtime after a Hydrafacial?",
      answer: "No downtime at all! You can apply makeup and return to normal activities immediately. Many clients have a Hydrafacial during their lunch break.",
    },
  ],
  "Microneedling": [
    {
      question: "What's the difference between SkinPen and home dermarollers?",
      answer: "SkinPen is an FDA-cleared medical device that creates precise, controlled micro-injuries at optimal depths. Home dermarollers can cause uneven results, infection, and scarring. SkinPen treatments are performed by trained professionals in a sterile environment.",
    },
    {
      question: "How long until I see results from microneedling?",
      answer: "You'll notice improved skin texture within 1-2 weeks. Collagen remodeling continues for 3-6 months, with full results visible after a series of treatments.",
    },
  ],
  "Injectables": [
    {
      question: "How long do anti-wrinkle injections last?",
      answer: "Results typically last 3-4 months, after which the treatment can be repeated. Regular treatments may extend the duration of results over time.",
    },
    {
      question: "How long do dermal fillers last?",
      answer: "Depending on the area treated and product used, fillers can last anywhere from 6-18 months. Lip fillers typically last 6-12 months.",
    },
  ],
};

const FAQCard = ({ faq, index, prefix }: { faq: { question: string; answer: string }; index: number; prefix: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
  >
    <AccordionItem 
      value={`${prefix}-${index}`}
      className="bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden data-[state=open]:shadow-md"
    >
      <AccordionTrigger className="font-heading text-left text-foreground hover:text-primary py-5 px-6 hover:no-underline [&[data-state=open]]:text-primary">
        <span className="flex items-center gap-3">
          <span className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-sm font-semibold text-primary">
            {index + 1}
          </span>
          {faq.question}
        </span>
      </AccordionTrigger>
      <AccordionContent className="font-body text-muted-foreground px-6 pb-5 pt-0">
        <div className="pl-11">
          {faq.answer}
        </div>
      </AccordionContent>
    </AccordionItem>
  </motion.div>
);

const FAQ = () => {
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      ...generalFaqs,
      ...Object.values(serviceFaqs).flat(),
    ].map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Frequently Asked Questions | Laser Light Skin Clinic Dagenham"
        description="Get answers to common questions about laser hair removal, tattoo removal, Hydrafacials, and skin treatments at Laser Light Skin Clinic in Dagenham, East London."
        canonicalUrl="https://laserlightskinclinic.co.uk/faq"
        structuredData={faqPageSchema}
      />
      
      <Header />
      <main className="flex-1 pb-20">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground -mt-[80px] pt-[88px] lg:pt-[92px] pb-12">
          <div className="container-custom">
            <motion.div 
              className="max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <PageBreadcrumb 
                items={[{ label: "FAQs" }]} 
                variant="dark"
                className="mb-4"
              />
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-foreground/10 rounded-full mb-4">
                <MessageCircle className="h-7 w-7 text-primary-foreground" />
              </div>
              <h1 className="mb-4">Frequently Asked Questions</h1>
              <p className="text-lg text-primary-foreground/80 font-body">
                Find answers to the most common questions about our treatments, technology, and clinic.
              </p>
            </motion.div>
          </div>
        </section>

        {/* General FAQs */}
        <ScrollReveal>
          <section className="section-padding bg-secondary/50">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto">
                <motion.div 
                  className="text-center mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-foreground mb-4">General Questions</h2>
                  <p className="font-body text-muted-foreground">
                    Everything you need to know about our clinic, pricing, and what to expect.
                  </p>
                </motion.div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                  {generalFaqs.map((faq, index) => (
                    <FAQCard key={index} faq={faq} index={index} prefix="general" />
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Service-Specific FAQs */}
        {Object.entries(serviceFaqs).map(([category, faqs], categoryIndex) => (
          <ScrollReveal key={category} delay={0.1}>
            <section className={`section-padding ${categoryIndex % 2 === 0 ? 'bg-background' : 'bg-secondary/50'}`}>
              <div className="container-custom">
                <div className="max-w-3xl mx-auto">
                  <motion.div 
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-foreground mb-2">{category}</h2>
                    <p className="font-body text-muted-foreground">
                      Specific questions about our {category.toLowerCase()} treatments.
                    </p>
                  </motion.div>

                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                      <FAQCard key={index} faq={faq} index={index} prefix={category} />
                    ))}
                  </Accordion>
                </div>
              </div>
            </section>
          </ScrollReveal>
        ))}

        {/* CTA Section */}
        <ScrollReveal>
          <section className="section-padding bg-primary text-primary-foreground">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-primary-foreground/10 rounded-2xl p-8 md:p-10 text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-foreground/10 rounded-full mb-4">
                    <MessageCircle className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h2 className="text-primary-foreground mb-4">Still Have Questions?</h2>
                  <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                    Our friendly team is here to help. Book a free consultation or give us a call to discuss your treatment options.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      asChild 
                      size="lg"
                      className="bg-gold hover:bg-gold/90 text-gold-foreground font-body h-12 px-6"
                    >
                      <a href="https://www.fresha.com/a/laser-light-skin-clinic-dagenham-125-becontree-avenue-vdj9amsj/all-offer?menu=true" target="_blank" rel="noopener noreferrer">
                        Book Free Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline"
                      size="lg"
                      className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body h-12 px-6"
                    >
                      <a href="tel:02085981200">
                        <Phone className="mr-2 h-5 w-5" />
                        0208 598 1200
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
      <Footer />
      <MobileStickyButton />
    </div>
  );
};

export default FAQ;

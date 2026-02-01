import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";

const faqs = [
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
    answer: "Treatment costs vary by service and area. We offer transparent pricing, a free consultation, and flexible payment plans including 0% finance options.",
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

export const FAQSection = () => {
  return (
    <section className="section-padding bg-secondary/50 overflow-hidden">
      <div className="container-custom">
        {/* Header with icon */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
            <MessageCircle className="h-7 w-7 text-primary" />
          </div>
          <h2 className="text-foreground mb-4">
            Your Questions Answered
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            We believe in transparency. Here are the answers to the most common questions our clients ask before booking.
          </p>
        </motion.div>

        {/* Card-based FAQ Accordion */}
        <motion.div 
          className="max-w-3xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
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
            ))}
          </Accordion>
        </motion.div>

        {/* Still have questions CTA bar */}
        <motion.div 
          className="max-w-3xl mx-auto mt-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  Still have questions?
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  Our friendly team is here to help you with any concerns.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body"
                >
                  <a href="tel:02085981200">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-body"
                >
                  <a href="/faq">
                    View All FAQs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

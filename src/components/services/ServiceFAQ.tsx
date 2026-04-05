import { forwardRef } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  title: string;
  subtitle?: string;
  faqs: FAQ[];
}

export const ServiceFAQ = forwardRef<HTMLElement, ServiceFAQProps>(
  function ServiceFAQ({ title, subtitle, faqs }, ref) {
    return (
      <section ref={ref} className="section-padding bg-secondary/50">
        <div className="container-custom">
          {/* Header with icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
              <MessageCircle className="h-7 w-7 text-primary" />
            </div>
            <h2 className="text-foreground mb-4">{title}</h2>
            {subtitle && (
              <p className="font-body text-lg text-muted-foreground">{subtitle}</p>
            )}
          </motion.div>
          
          {/* Card-based FAQ items */}
          <div className="max-w-3xl mx-auto space-y-4">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
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
          </div>

          {/* Still have questions CTA bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-3xl mx-auto mt-10"
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
                    <a href="https://www.fresha.com/a/laser-light-skin-clinic-dagenham-125-becontree-avenue-vdj9amsj/all-offer?menu=true" target="_blank" rel="noopener noreferrer">
                      Book Consultation
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
  }
);

ServiceFAQ.displayName = "ServiceFAQ";

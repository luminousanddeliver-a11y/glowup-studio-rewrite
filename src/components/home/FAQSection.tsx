import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

export const FAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-foreground mb-4">
            Your Questions Answered: Safety, Pain, and Results
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            We believe in transparency. Here are the answers to the most common questions our clients ask before booking.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-heading text-left text-foreground hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body"
          >
            <Link to="/faq">View All FAQs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

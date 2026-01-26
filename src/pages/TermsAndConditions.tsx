import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { PageBreadcrumb } from "@/components/layout/PageBreadcrumb";
import { MobileStickyButton } from "@/components/home/MobileStickyButton";
import { ScrollReveal } from "@/components/home/ScrollReveal";
import { motion } from "framer-motion";
import { FileText, Calendar, CreditCard, UserCheck, AlertTriangle, Scale, Shield, Phone } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "1. Introduction & Agreement",
    content: `Welcome to Laser Light Skin Clinic. By booking an appointment, purchasing products, or using our website, you agree to be bound by these Terms and Conditions.

These terms apply to all services provided at our clinic located at 125 Becontree Avenue, Dagenham RM8 2UJ.

If you do not agree with any part of these terms, please do not use our services.`
  },
  {
    icon: Calendar,
    title: "2. Booking & Appointments",
    content: `**Booking:**
• Appointments can be booked online via Fresha, by phone, or in person
• A valid email address and phone number are required
• Some treatments may require a deposit at the time of booking

**Cancellations & Rescheduling:**
• Please provide at least 24 hours' notice for cancellations
• Late cancellations (less than 24 hours) may incur a fee of up to 50% of the treatment cost
• No-shows will be charged the full treatment price
• We reserve the right to cancel appointments if clients repeatedly miss appointments

**Late Arrivals:**
• If you arrive late, we will do our best to accommodate you
• However, your treatment time may be shortened to avoid delays for other clients
• If you are more than 15 minutes late, your appointment may need to be rescheduled`
  },
  {
    icon: CreditCard,
    title: "3. Payments & Refunds",
    content: `**Payment Methods:**
• We accept cash, all major credit/debit cards, and contactless payments
• Payment is due immediately upon completion of treatment
• Course packages must be paid in full at the time of purchase

**Refund Policy:**
• Treatment packages are non-refundable but may be transferable (subject to approval)
• Individual treatments are non-refundable once performed
• Product returns are accepted within 14 days if unopened and in original packaging
• Gift vouchers are non-refundable but can be transferred

**Pricing:**
• All prices are displayed including VAT where applicable
• We reserve the right to change prices without prior notice
• Promotional offers cannot be combined unless stated otherwise`
  },
  {
    icon: UserCheck,
    title: "4. Client Responsibilities",
    content: `To ensure safe and effective treatments, you agree to:

**Pre-Treatment:**
• Provide accurate and complete medical history
• Disclose all medications, allergies, and health conditions
• Follow pre-treatment instructions (e.g., shaving before laser, avoiding sun exposure)
• Arrive on time for your appointment

**Post-Treatment:**
• Follow all aftercare instructions provided by our practitioners
• Avoid sun exposure and use SPF as directed
• Contact us immediately if you experience any adverse reactions
• Attend all recommended follow-up appointments

**Honesty:**
• Failure to disclose relevant medical information may result in treatment refusal
• We are not liable for complications arising from undisclosed conditions`
  },
  {
    icon: AlertTriangle,
    title: "5. Treatment Risks & Consent",
    content: `**Consultation:**
• A consultation is required before most treatments
• During consultation, we will assess your suitability for treatment
• We may refuse treatment if we believe it is not in your best interest

**Informed Consent:**
• You will be asked to sign a consent form before treatment
• This form explains the procedure, expected results, and potential risks
• By signing, you confirm you understand and accept these risks

**Results:**
• Results vary between individuals
• We cannot guarantee specific outcomes
• Multiple sessions may be required to achieve desired results
• Before and after photographs may be taken for your records`
  },
  {
    icon: Scale,
    title: "6. Limitation of Liability",
    content: `**Our Liability:**
• We carry full professional indemnity insurance
• Our liability is limited to the cost of the treatment provided
• We are not liable for any indirect, consequential, or incidental damages

**Exclusions:**
• We are not liable for adverse reactions due to undisclosed medical conditions
• We are not liable for results not meeting unrealistic expectations
• We are not liable for post-treatment complications due to non-compliance with aftercare

**Complaints:**
• If you are dissatisfied with any aspect of our service, please contact us within 48 hours
• We will investigate and respond to all complaints within 14 days
• Contact: info@laserlightskinclinic.co.uk or 0208 598 1200`
  },
  {
    icon: Shield,
    title: "7. Privacy & Data Protection",
    content: `Your personal data is processed in accordance with our Privacy Policy and UK GDPR requirements.

**Key Points:**
• We collect only necessary information to provide our services
• Your medical records are kept confidential and secure
• We do not share your data with third parties without consent (except as legally required)
• You have the right to access, correct, or delete your personal data

For full details, please read our Privacy Policy at laserlightskinclinic.co.uk/privacy-policy`
  },
  {
    icon: FileText,
    title: "8. Intellectual Property",
    content: `**Website Content:**
• All content on our website is owned by Laser Light Skin Clinic
• This includes text, images, logos, and design elements
• You may not copy, reproduce, or distribute our content without permission

**Photographs:**
• Before/after photographs taken with your consent may be used for training and marketing
• Your identity will not be revealed without explicit consent
• You may withdraw consent for photograph use at any time`
  },
  {
    icon: Phone,
    title: "9. Contact Information",
    content: `For questions about these Terms and Conditions, please contact us:

**Laser Light Skin Clinic**
125 Becontree Avenue
Dagenham, RM8 2UJ

**Phone:** 0208 598 1200 / 07949 501 777
**Email:** info@laserlightskinclinic.co.uk

**Opening Hours:**
Monday - Friday: 10:00 AM - 7:00 PM
Saturday: 10:00 AM - 5:00 PM
Sunday: Closed

**Last Updated:** January 2025

We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page.`
  }
];

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Terms & Conditions | Laser Light Skin Clinic Dagenham"
        description="Read our terms and conditions for booking appointments, payments, and treatment policies at Laser Light Skin Clinic in Dagenham."
        canonicalUrl="https://laserlightskinclinic.co.uk/terms"
        noindex={false}
      />
      
      <Header />
      <main className="flex-1 pb-20">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground -mt-[80px] pt-[100px] md:pt-[108px] pb-12">
          <div className="container-custom">
            <motion.div 
              className="max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <PageBreadcrumb 
                items={[{ label: "Terms & Conditions" }]} 
                variant="dark"
                className="mb-4"
              />
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-foreground/10 rounded-full mb-4">
                <FileText className="h-7 w-7 text-primary-foreground" />
              </div>
              <h1 className="mb-4">Terms & Conditions</h1>
              <p className="text-lg text-primary-foreground/80 font-body">
                Please read these terms carefully before booking appointments or purchasing services from our clinic.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        {sections.map((section, index) => (
          <ScrollReveal key={index} delay={0.05}>
            <section className={`py-10 md:py-12 ${index % 2 === 0 ? 'bg-background' : 'bg-secondary/50'}`}>
              <div className="container-custom">
                <div className="max-w-3xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-card rounded-xl shadow-sm border border-border p-6 md:p-8"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <section.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="text-xl md:text-2xl font-heading text-foreground pt-1">
                        {section.title}
                      </h2>
                    </div>
                    <div className="prose prose-sm max-w-none font-body text-muted-foreground pl-14">
                      {section.content.split('\n\n').map((paragraph, pIndex) => (
                        <div key={pIndex} className="mb-4 last:mb-0">
                          {paragraph.split('\n').map((line, lIndex) => {
                            if (line.startsWith('**') && line.endsWith('**')) {
                              return (
                                <p key={lIndex} className="font-semibold text-foreground mb-2">
                                  {line.replace(/\*\*/g, '')}
                                </p>
                              );
                            }
                            if (line.startsWith('• ')) {
                              return (
                                <p key={lIndex} className="pl-4 mb-1">
                                  <span className="text-primary mr-2">•</span>
                                  {line.substring(2).replace(/\*\*([^*]+)\*\*/g, '$1')}
                                </p>
                              );
                            }
                            return <p key={lIndex} className="mb-2">{line}</p>;
                          })}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          </ScrollReveal>
        ))}
      </main>
      <Footer />
      <MobileStickyButton />
    </div>
  );
};

export default TermsAndConditions;

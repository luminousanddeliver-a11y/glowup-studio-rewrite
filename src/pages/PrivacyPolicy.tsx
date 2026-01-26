import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { PageBreadcrumb } from "@/components/layout/PageBreadcrumb";
import { MobileStickyButton } from "@/components/home/MobileStickyButton";
import { ScrollReveal } from "@/components/home/ScrollReveal";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, UserCheck, Cookie, Mail, RefreshCw } from "lucide-react";

const sections = [
  {
    icon: Shield,
    title: "1. Introduction",
    content: `Laser Light Skin Clinic ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our clinic or use our website (laserlightskinclinic.co.uk).

We are registered at 125 Becontree Avenue, Dagenham RM8 2UJ, and we are the data controller responsible for your personal data under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.`
  },
  {
    icon: Eye,
    title: "2. Information We Collect",
    content: `We may collect and process the following types of personal data:

**Personal Identification Information:**
• Full name, email address, phone number
• Date of birth and gender
• Address and postcode

**Health & Medical Information:**
• Medical history relevant to treatments
• Skin type, allergies, and sensitivities
• Before/after photographs (with consent)
• Treatment records and consultation notes

**Technical Data:**
• IP address and browser type
• Device information
• Website usage data through cookies

**Financial Information:**
• Payment card details (processed securely via third-party providers)
• Transaction history`
  },
  {
    icon: UserCheck,
    title: "3. How We Use Your Information",
    content: `We use your personal data for the following purposes:

**Service Delivery:**
• Booking and managing appointments
• Providing personalized treatments
• Sending appointment reminders
• Maintaining accurate treatment records

**Legal & Safety Requirements:**
• Complying with healthcare regulations
• Insurance and liability purposes
• Responding to legal requests

**Marketing (with consent):**
• Sending promotional offers and newsletters
• Informing you about new services
• Requesting feedback and reviews

**Business Operations:**
• Processing payments
• Improving our services
• Training and quality assurance`
  },
  {
    icon: Lock,
    title: "4. Data Sharing & Security",
    content: `**We may share your data with:**
• Healthcare professionals involved in your treatment
• Payment processors (Stripe, PayPal)
• Booking platforms (Fresha)
• IT and hosting service providers
• Legal authorities when required by law

**We will NEVER:**
• Sell your personal data to third parties
• Share your health information without consent (except as legally required)

**Security Measures:**
• SSL encryption on all data transmissions
• Secure, password-protected systems
• Regular security audits
• Staff training on data protection
• Physical security at our clinic`
  },
  {
    icon: UserCheck,
    title: "5. Your Rights Under UK GDPR",
    content: `Under UK data protection law, you have the right to:

• **Access** – Request a copy of your personal data
• **Rectification** – Request correction of inaccurate data
• **Erasure** – Request deletion of your data ("right to be forgotten")
• **Restriction** – Request we limit how we use your data
• **Portability** – Receive your data in a structured format
• **Object** – Object to processing for marketing purposes
• **Withdraw Consent** – Withdraw consent at any time

To exercise any of these rights, contact us at info@laserlightskinclinic.co.uk or call 0208 598 1200.

You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.`
  },
  {
    icon: Cookie,
    title: "6. Cookies",
    content: `Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device.

**Types of cookies we use:**
• **Essential cookies** – Required for the website to function
• **Analytics cookies** – Help us understand how visitors use our site
• **Marketing cookies** – Used to deliver relevant advertisements

You can manage cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.

For more details, see our cookie consent banner when you first visit our website.`
  },
  {
    icon: RefreshCw,
    title: "7. Data Retention",
    content: `We retain your personal data only for as long as necessary:

• **Treatment records:** 8 years from your last treatment (as required for medical records)
• **Marketing preferences:** Until you unsubscribe
• **Website analytics:** 26 months
• **Financial records:** 7 years (legal requirement)

After these periods, your data will be securely deleted or anonymized.`
  },
  {
    icon: Mail,
    title: "8. Contact Us",
    content: `If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us:

**Laser Light Skin Clinic**
125 Becontree Avenue
Dagenham, RM8 2UJ

**Phone:** 0208 598 1200 / 07949 501 777
**Email:** info@laserlightskinclinic.co.uk

**Last Updated:** January 2025

We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated revision date.`
  }
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Privacy Policy | Laser Light Skin Clinic Dagenham"
        description="Learn how Laser Light Skin Clinic collects, uses, and protects your personal data. UK GDPR compliant privacy policy."
        canonicalUrl="https://laserlightskinclinic.co.uk/privacy-policy"
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
                items={[{ label: "Privacy Policy" }]} 
                variant="dark"
                className="mb-4"
              />
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-foreground/10 rounded-full mb-4">
                <Shield className="h-7 w-7 text-primary-foreground" />
              </div>
              <h1 className="mb-4">Privacy Policy</h1>
              <p className="text-lg text-primary-foreground/80 font-body">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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

export default PrivacyPolicy;

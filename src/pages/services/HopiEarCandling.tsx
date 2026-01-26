import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceHero } from "@/components/services/ServiceHero";
import { QuickStatsBar } from "@/components/services/QuickStatsBar";
import { WhatIsSection } from "@/components/services/WhatIsSection";
import { BenefitsList } from "@/components/services/BenefitsList";
import { HowItWorks } from "@/components/services/HowItWorks";
import { PricingTable } from "@/components/services/PricingTable";
import { WhoIsThisFor } from "@/components/services/WhoIsThisFor";
import { WhatToExpect } from "@/components/services/WhatToExpect";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceTestimonial } from "@/components/services/ServiceTestimonial";
import { Timer, Shield, Users, Award, Sparkles, Moon, Heart, RefreshCw, Ear, Leaf } from "lucide-react";
import hopiCandles from "@/assets/hopi-candles.jpg";
import consultationRoom from "@/assets/consultation-room.jpg";

const relatedServices = [
  { name: "Massage Therapy", href: "/massage-dagenham", description: "Complete your relaxation with therapeutic massage" },
  { name: "Hydrafacials", href: "/hydrafacials-dagenham", description: "Pamper yourself with a glowing facial" },
  { name: "IV Vitamin Drips", href: "/iv-drips-dagenham", description: "Boost your wellness from within" },
];

const testimonials = [
  { quote: "Such a relaxing experience! The warmth and gentle sounds were so calming. The facial massage was a lovely bonus.", initials: "CB", treatment: "Hopi Ear Candling", rating: 5 },
  { quote: "I've made this part of my monthly wellness routine. It's my time to completely switch off and relax.", initials: "HG", treatment: "Hopi Ear Candling", rating: 5 },
];

const HopiEarCandling = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hopi Ear Candling Dagenham - Thermo-Auricular Therapy",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Laser Light Skin Clinic",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "125 Becontree Avenue",
        "addressLocality": "Dagenham",
        "postalCode": "RM8 2UJ",
        "addressCountry": "GB"
      },
      "telephone": "+442085981200"
    },
    "description": "Professional Hopi ear candling in Dagenham. Relaxing thermo-auricular therapy for ear health and wellbeing. Traditional technique in a clinical setting.",
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London"]
  };

  const quickStats = [
    { value: "45-60 min", label: "Relaxing Treatment", icon: Timer },
    { value: "Traditional", label: "Technique", icon: Shield },
    { value: "Natural", label: "Ingredients", icon: Users },
    { value: "Soothing", label: "Experience", icon: Award },
  ];

  const whatIsContent = [
    "Hopi ear candling, also known as thermo-auricular therapy, is a gentle, relaxing treatment originating from Native American traditions. It involves placing a specially designed hollow cotton candle in the ear canal and lighting the opposite end.",
    "As the candle burns, it creates a gentle vacuum and infuses the ear with the herbal essences (typically beeswax, honey, sage, and chamomile). Many people find this deeply relaxing and report feelings of clarity and calm afterwards.",
    "While ear candling is not a medical treatment, it's enjoyed as a holistic therapy for relaxation and general ear comfort. It's often combined with a soothing facial massage for an enhanced experience."
  ];

  const benefits = [
    {
      title: "Deep Relaxation",
      description: "The gentle warmth and soothing sounds create a meditative, calming experience that reduces stress.",
      icon: Moon
    },
    {
      title: "Traditional Therapy",
      description: "Based on ancient techniques used for centuries by Native American Hopi people for ear wellness.",
      icon: Leaf
    },
    {
      title: "Natural Ingredients",
      description: "Quality candles made with beeswax, honey, and herbal essences like sage, chamomile, and St. John's Wort.",
      icon: Sparkles
    },
    {
      title: "Ear Comfort",
      description: "Many clients report a pleasant sensation of lightness and comfort in the ears after treatment.",
      icon: Ear
    },
    {
      title: "Includes Massage",
      description: "Treatment includes a relaxing facial and scalp massage to enhance the calming experience.",
      icon: Heart
    },
    {
      title: "Holistic Wellness",
      description: "A peaceful ritual that promotes overall wellbeing and provides a break from daily stress.",
      icon: RefreshCw
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Consultation",
      description: "We discuss any ear concerns and ensure the treatment is suitable for you."
    },
    {
      number: 2,
      title: "First Ear",
      description: "You lie comfortably on your side. The candle is placed in the ear and lit. Gentle warmth and soft sounds create a soothing experience."
    },
    {
      number: 3,
      title: "Second Ear",
      description: "The process is repeated on the other side, allowing you to fully relax."
    },
    {
      number: 4,
      title: "Facial Massage",
      description: "Treatment concludes with a relaxing facial and pressure point massage to enhance the calming effects."
    }
  ];

  const pricingData = [
    { area: "Hopi Ear Candling (Both Ears)", singleSession: "£45", course: "£240 (6)", savings: "Save £30" },
    { area: "With Extended Facial Massage", singleSession: "£60", course: "£320 (6)", savings: "Save £40" },
    { area: "Add Scalp Massage", singleSession: "+£15", course: "N/A", savings: "" },
  ];

  const idealCandidates = [
    "Want a deeply relaxing experience",
    "Enjoy holistic and natural therapies",
    "Feel stress and tension",
    "Experience sinus discomfort (consult GP first)",
    "Want to try a traditional wellness ritual",
    "Appreciate gentle, non-invasive treatments"
  ];

  const considerations = [
    {
      title: "Ear Conditions",
      description: "Not suitable if you have ear infection, perforated eardrum, grommets, or recent ear surgery. Consult your GP if unsure."
    },
    {
      title: "Allergies",
      description: "The candles contain beeswax and herbal ingredients. Please inform us of any allergies."
    },
    {
      title: "Expectations",
      description: "This is a relaxation therapy, not a medical treatment. Ear candling does not remove earwax or treat infections."
    }
  ];

  const phases = [
    {
      phase: "Before Treatment",
      icon: "before" as const,
      items: [
        "No special preparation needed",
        "Inform us of any ear conditions",
        "Arrive relaxed and ready to unwind"
      ]
    },
    {
      phase: "During Treatment",
      icon: "during" as const,
      items: [
        "Lie comfortably on your side",
        "Gentle warmth and soft sounds",
        "Facial massage included"
      ]
    },
    {
      phase: "After Treatment",
      icon: "after" as const,
      items: [
        "Feeling of calm and relaxation",
        "Some report clearer sensation",
        "Avoid swimming for 24 hours"
      ]
    }
  ];

  const resultsTimeline = [
    { session: "During", result: "Deep relaxation and calm" },
    { session: "Immediately after", result: "Feeling of lightness and wellbeing" },
    { session: "Regular sessions", result: "Ongoing stress relief and relaxation" }
  ];

  const faqs = [
    {
      question: "Does ear candling remove earwax?",
      answer: "Despite popular belief, ear candling does not significantly remove earwax. The residue seen in the candle after burning is mostly from the candle itself, not your ear. For wax removal, consult your GP or an ear syringing service."
    },
    {
      question: "Is ear candling safe?",
      answer: "When performed by a trained therapist using quality candles with safety filters, ear candling is generally safe. However, it's not suitable for everyone—see our considerations section."
    },
    {
      question: "Can it help with blocked ears?",
      answer: "While some people report feeling clearer after treatment, ear candling is not medically proven to unblock ears. If you have blocked ears or hearing issues, please consult your GP."
    },
    {
      question: "How often can I have ear candling?",
      answer: "Many people enjoy ear candling monthly as part of their wellness routine. There's no strict limit, but we recommend spacing sessions at least 2 weeks apart."
    },
    {
      question: "Does it hurt?",
      answer: "No, the treatment should be completely painless and relaxing. You'll feel gentle warmth and hear soft crackling sounds. If you experience any discomfort, tell your therapist immediately."
    },
    {
      question: "What are the candles made from?",
      answer: "Quality Hopi candles are made from cotton or linen, beeswax, and herbal essences such as honey, sage, chamomile, and St. John's Wort. We use candles with built-in safety filters."
    },
    {
      question: "Can children have ear candling?",
      answer: "Ear candling can be performed on older children who can lie still for the treatment. We recommend consulting with your GP first and require parental presence for under-16s."
    },
    {
      question: "Why is there a facial massage included?",
      answer: "The facial and pressure point massage enhances the relaxation experience and helps with lymphatic drainage around the face and sinuses. It's a lovely addition to the treatment."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Hopi Ear Candling Dagenham | Relaxing Therapy | Book Now"
        description="Professional Hopi ear candling in Dagenham. Relaxing thermo-auricular therapy including facial massage. Natural, soothing experience from £45. Book today!"
        canonicalUrl="https://laserlightskinclinic.co.uk/hopi-ear-candling-dagenham"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        <ServiceHero
          trustBadge="Traditional Wellness Therapy"
          title="Hopi Ear Candling in Dagenham"
          titleAccent="Dagenham"
          subtitle="Ancient Relaxation Ritual for Modern Life"
          description="Experience this traditional thermo-auricular therapy. A gentle, relaxing treatment including soothing facial massage."
          badge="From £45"
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          backgroundImage={consultationRoom}
          breadcrumbs={[
            { label: "Services", href: "/prices" },
            { label: "Hopi Ear Candling" }
          ]}
          stats={[
            { value: "45-60", label: "Minutes" },
            { value: "Natural", label: "Therapy" },
            { value: "Includes", label: "Massage" }
          ]}
        />
        
        <QuickStatsBar stats={quickStats} />
        
        <WhatIsSection
          title="What is Hopi Ear Candling?"
          content={whatIsContent}
          highlightText="A gentle, holistic therapy that provides deep relaxation and a sense of wellbeing—not a medical treatment for ear conditions."
        />
        
        <BenefitsList
          title="Benefits of Ear Candling"
          subtitle="A relaxing ritual for mind and body"
          benefits={benefits}
        />
        
        <HowItWorks
          title="The Ear Candling Process"
          subtitle="A peaceful 45-60 minute experience"
          steps={steps}
        />
        
        <section id="pricing" className="section-padding bg-secondary">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-foreground mb-4">Ear Candling Pricing</h2>
              <p className="font-body text-lg text-muted-foreground">
                Includes quality Hopi candles and facial massage
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <PricingTable title="" prices={pricingData} />
            </div>
          </div>
        </section>
        
        <WhoIsThisFor
          title="Is Ear Candling Right for You?"
          intro="Ear candling is ideal for those who:"
          idealCandidates={idealCandidates}
          considerations={considerations}
        />
        
        <WhatToExpect
          title="What to Expect"
          phases={phases}
          resultsTimeline={resultsTimeline}
        />
        
        <ServiceFAQ
          title="Ear Candling FAQs"
          subtitle="Common questions about this traditional therapy"
          faqs={faqs}
        />
        
        <ServiceTestimonial testimonials={testimonials} />
        
        <RelatedServices services={relatedServices} />
        
        <ServiceCTA
          title="Ready to Relax?"
          subtitle="Book your Hopi ear candling session and experience this soothing traditional therapy."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default HopiEarCandling;

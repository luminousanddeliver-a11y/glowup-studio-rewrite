import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceHero } from "@/components/services/ServiceHero";
import { QuickStatsBar } from "@/components/services/QuickStatsBar";
import { WhatIsSection } from "@/components/services/WhatIsSection";
import { BenefitsList } from "@/components/services/BenefitsList";
import { TabbedPricingTable } from "@/components/services/TabbedPricingTable";
import { WhoIsThisFor } from "@/components/services/WhoIsThisFor";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { Timer, Shield, Users, Award, Heart, Sparkles, RefreshCw, Zap, Moon, Leaf } from "lucide-react";
import massageSetup from "@/assets/massage-setup.jpg";
import consultationRoom from "@/assets/consultation-room.jpg";

const Massage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Massage Dagenham - Relaxation & Therapeutic",
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
    "description": "Professional massage therapy in Dagenham. Swedish, deep tissue, hot stone, and relaxation massage. Qualified therapists in a tranquil clinic setting.",
    "areaServed": ["Dagenham", "Barking", "Romford", "Ilford", "East London"]
  };

  const quickStats = [
    { value: "30-90 min", label: "Session Options", icon: Timer },
    { value: "Qualified", label: "Therapists", icon: Shield },
    { value: "Multiple", label: "Massage Styles", icon: Users },
    { value: "Premium", label: "Oils & Products", icon: Award },
  ];

  const whatIsContent = [
    "Massage therapy offers both immediate relaxation and long-term health benefits. Regular massage reduces muscle tension, improves circulation, relieves stress, and promotes overall wellbeing.",
    "Our qualified massage therapists offer a range of techniques to suit your needs—from gentle Swedish massage for relaxation to deep tissue work for stubborn tension. Hot stone massage provides deep heat therapy for ultimate unwinding.",
    "Whether you're seeking relief from desk-bound tension, recovery after exercise, or simply a peaceful escape from daily stress, our tranquil treatment rooms provide the perfect environment for therapeutic massage."
  ];

  const benefits = [
    {
      title: "Swedish Massage",
      description: "Classic relaxation massage using flowing strokes to ease tension, improve circulation, and promote deep relaxation.",
      icon: Moon
    },
    {
      title: "Deep Tissue Massage",
      description: "Targets deeper muscle layers to release chronic tension, knots, and adhesions. Ideal for sports recovery.",
      icon: Zap
    },
    {
      title: "Hot Stone Massage",
      description: "Heated basalt stones combined with massage techniques for deep muscle relaxation and improved blood flow.",
      icon: Sparkles
    },
    {
      title: "Stress Relief",
      description: "All massage types reduce cortisol levels and promote relaxation, helping manage stress and anxiety.",
      icon: Heart
    },
    {
      title: "Improved Circulation",
      description: "Massage enhances blood flow, delivering oxygen and nutrients to muscles while removing toxins.",
      icon: RefreshCw
    },
    {
      title: "Natural Healing",
      description: "Support your body's natural healing processes. Regular massage maintains muscle health and flexibility.",
      icon: Leaf
    }
  ];

  const pricingTabs = [
    {
      label: "Swedish",
      prices: [
        { area: "30 Minutes (Back, Neck, Shoulders)", singleSession: "£40", course: "£210 (6)", savings: "Save £30" },
        { area: "45 Minutes (Extended)", singleSession: "£55", course: "£290 (6)", savings: "Save £40" },
        { area: "60 Minutes (Full Body)", singleSession: "£70", course: "£370 (6)", savings: "Save £50" },
        { area: "90 Minutes (Luxury Full Body)", singleSession: "£100", course: "£530 (6)", savings: "Save £70" },
      ]
    },
    {
      label: "Deep Tissue",
      prices: [
        { area: "30 Minutes (Targeted Area)", singleSession: "£50", course: "£265 (6)", savings: "Save £35" },
        { area: "45 Minutes (Extended)", singleSession: "£65", course: "£345 (6)", savings: "Save £45" },
        { area: "60 Minutes (Full Body)", singleSession: "£85", course: "£450 (6)", savings: "Save £60" },
        { area: "90 Minutes (Intensive)", singleSession: "£120", course: "£635 (6)", savings: "Save £85" },
      ]
    },
    {
      label: "Hot Stone",
      prices: [
        { area: "60 Minutes", singleSession: "£90", course: "£480 (6)", savings: "Save £60" },
        { area: "90 Minutes (Full Experience)", singleSession: "£130", course: "£690 (6)", savings: "Save £90" },
      ]
    },
    {
      label: "Add-Ons",
      prices: [
        { area: "Aromatherapy Oils", singleSession: "+£10", course: "N/A", savings: "" },
        { area: "Scalp Massage (15 min)", singleSession: "+£15", course: "N/A", savings: "" },
        { area: "Hot Towel Treatment", singleSession: "+£10", course: "N/A", savings: "" },
      ]
    }
  ];

  const idealCandidates = [
    "Feel stressed or anxious",
    "Have muscle tension from desk work",
    "Want to improve sleep quality",
    "Seeking recovery after exercise",
    "Have chronic tension or knots",
    "Simply want to relax and unwind"
  ];

  const considerations = [
    {
      title: "Medical Conditions",
      description: "Please inform us of any medical conditions, injuries, or pregnancies before your massage."
    },
    {
      title: "Recent Injuries",
      description: "Fresh injuries or inflammation may need to be avoided. We'll adapt the massage accordingly."
    },
    {
      title: "First Time",
      description: "First massage? Let us know and we'll explain everything and check in throughout the treatment."
    }
  ];

  const faqs = [
    {
      question: "Which massage type should I choose?",
      answer: "Swedish massage is best for general relaxation and stress relief. Deep tissue is ideal for chronic tension or sports recovery. Hot stone offers the deepest relaxation experience. We can advise based on your needs."
    },
    {
      question: "Is massage painful?",
      answer: "Swedish massage should be completely relaxing. Deep tissue can involve 'good discomfort' as knots are released, but should never be painful. Always tell your therapist if the pressure is too much."
    },
    {
      question: "What should I wear?",
      answer: "You'll be provided with towels and can undress to your comfort level. Most people remove clothing but keep underwear on. You'll be professionally draped throughout."
    },
    {
      question: "How often should I have a massage?",
      answer: "For general wellness, monthly massage is ideal. For chronic issues or athletes, fortnightly or weekly may be beneficial. Even occasional massage provides benefits."
    },
    {
      question: "Can I talk during the massage?",
      answer: "It's completely up to you! Some clients prefer silence, others like to chat. Your therapist will follow your lead."
    },
    {
      question: "Are hot stone massages safe?",
      answer: "Yes, when performed by trained therapists. The stones are heated to safe temperatures and constantly monitored. If you have circulatory issues, please inform us."
    },
    {
      question: "Can I have a massage while pregnant?",
      answer: "Yes, prenatal massage is beneficial! Please inform us of your pregnancy so we can use safe positioning and techniques. We avoid certain areas during pregnancy."
    },
    {
      question: "What happens after my massage?",
      answer: "Drink plenty of water, avoid strenuous activity, and enjoy the relaxation. Some mild soreness after deep tissue is normal and resolves within a day."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Professional Massage Dagenham | Swedish, Deep Tissue, Hot Stone"
        description="Professional massage therapy in Dagenham. Swedish, deep tissue, and hot stone massage from £40. Qualified therapists, tranquil setting. Book your escape today!"
        canonicalUrl="https://laserlightskinclinic.co.uk/massage-dagenham"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        <ServiceHero
          trustBadge="Qualified Massage Therapists"
          title="Professional Massage Therapy in Dagenham"
          titleAccent="Dagenham"
          subtitle="Swedish, Deep Tissue & Hot Stone Massage"
          description="Escape the everyday with therapeutic massage. Relieve tension, reduce stress, and restore your wellbeing in our tranquil treatment rooms."
          badge="From £40"
          secondaryCta={{ text: "View Pricing", href: "#pricing" }}
          backgroundImage={consultationRoom}
          breadcrumbs={[
            { label: "Services", href: "/prices" },
            { label: "Massage" }
          ]}
          stats={[
            { value: "30-90", label: "Minutes" },
            { value: "Multiple", label: "Styles" },
            { value: "Premium", label: "Products" }
          ]}
        />
        
        <QuickStatsBar stats={quickStats} />
        
        <WhatIsSection
          title="The Benefits of Professional Massage"
          content={whatIsContent}
          highlightText="Regular massage isn't just a luxury—it's an investment in your physical and mental wellbeing."
        />
        
        <BenefitsList
          title="Massage Options"
          subtitle="Find the perfect massage for your needs"
          benefits={benefits}
        />
        
        <TabbedPricingTable
          title="Massage Pricing"
          subtitle="Invest in your wellbeing with regular massage therapy"
          tabs={pricingTabs}
          offerBanner={{
            highlight: "COURSE SAVINGS",
            text: "Save Up to £90 on 6-Session Courses"
          }}
          paymentOptions="Individual sessions or save with our course packages."
          disclaimer="All massages performed by qualified, insured therapists."
        />
        
        <WhoIsThisFor
          title="Who Benefits from Massage?"
          intro="Massage therapy is beneficial if you:"
          idealCandidates={idealCandidates}
          considerations={considerations}
        />
        
        <ServiceFAQ
          title="Massage FAQs"
          subtitle="Common questions about our massage services"
          faqs={faqs}
        />
        
        <ServiceCTA
          title="Ready to Relax?"
          subtitle="Book your massage and experience the therapeutic benefits of professional treatment."
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Massage;

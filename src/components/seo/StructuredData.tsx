import { Helmet } from "react-helmet-async";

// Organization Schema - Main business entity
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://laserlightskinclinic.co.uk/#organization",
  "name": "Laser Light Skin Clinic",
  "alternateName": "Laser Light Clinic Dagenham",
  "url": "https://laserlightskinclinic.co.uk",
  "logo": "https://storage.googleapis.com/gpt-engineer-file-uploads/vzi9VoYX9vVShyOdOZDAL6jdw6n2/uploads/1769465234508-laser-light-logo.png",
  "description": "NHS-approved laser hair removal & skin clinic in East London. Serving Dagenham, Redbridge, Havering, Essex & Newham. Pain-free treatments using medical-grade technology.",
  "image": "https://storage.googleapis.com/gpt-engineer-file-uploads/vzi9VoYX9vVShyOdOZDAL6jdw6n2/social-images/social-1769465237172-laser-light-logo.png",
  "telephone": "+442085981200",
  "email": "info@laserlightskinclinic.co.uk",
  "priceRange": "££",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "125 Becontree Avenue",
    "addressLocality": "Dagenham",
    "addressRegion": "East London",
    "postalCode": "RM8 2UJ",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.5432",
    "longitude": "0.1258"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "17:00"
    }
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Dagenham"
    },
    {
      "@type": "City",
      "name": "Barking"
    },
    {
      "@type": "City",
      "name": "Romford"
    },
    {
      "@type": "City",
      "name": "Ilford"
    },
    {
      "@type": "City",
      "name": "Redbridge"
    },
    {
      "@type": "City",
      "name": "Havering"
    },
    {
      "@type": "City",
      "name": "Newham"
    }
  ],
  "hasMap": "https://maps.google.com/?cid=123456789",
  "sameAs": [
    "https://www.facebook.com/laserlightskinclinic",
    "https://www.instagram.com/laserlightskinclinic",
    "https://www.google.com/maps/place/Laser+Light+Skin+Clinic"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "290",
    "bestRating": "5",
    "worstRating": "1"
  },
  "medicalSpecialty": [
    "Dermatology",
    "Cosmetic Medicine",
    "Aesthetic Medicine"
  ],
  "availableService": [
    {
      "@type": "MedicalProcedure",
      "name": "Laser Hair Removal",
      "description": "Pain-free laser hair removal using Lynton Motus AY technology"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Hydrafacial",
      "description": "Deep cleansing facial treatment for radiant skin"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Skin Rejuvenation",
      "description": "Advanced skin treatments for anti-aging and skin health"
    }
  ]
};

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://laserlightskinclinic.co.uk/#website",
  "url": "https://laserlightskinclinic.co.uk",
  "name": "Laser Light Skin Clinic",
  "description": "NHS-approved laser hair removal & skin clinic in Dagenham, East London",
  "publisher": {
    "@id": "https://laserlightskinclinic.co.uk/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://laserlightskinclinic.co.uk/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// Review Schema Generator
export const generateReviewSchema = (reviews: Array<{
  author: string;
  rating: number;
  date: string;
  text: string;
}>) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": reviews.map((review, index) => ({
    "@type": "Review",
    "position": index + 1,
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": "5",
      "worstRating": "1"
    },
    "datePublished": review.date,
    "reviewBody": review.text,
    "itemReviewed": {
      "@id": "https://laserlightskinclinic.co.uk/#organization"
    }
  }))
});

// Component to inject structured data
interface StructuredDataProps {
  schemas: object | object[];
}

export const StructuredData = ({ schemas }: StructuredDataProps) => {
  const schemaArray = Array.isArray(schemas) ? schemas : [schemas];

  return (
    <Helmet>
      {schemaArray.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

// LocalBusiness FAQ Schema Generator
export const generateServiceFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Blog Article Schema Generator
export const generateArticleSchema = (article: {
  title: string;
  description: string;
  publishedDate: string;
  modifiedDate: string;
  authorName: string;
  imageUrl: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": article.title,
  "description": article.description,
  "image": article.imageUrl,
  "datePublished": article.publishedDate,
  "dateModified": article.modifiedDate,
  "author": {
    "@type": "Person",
    "name": article.authorName
  },
  "publisher": {
    "@id": "https://laserlightskinclinic.co.uk/#organization"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  }
});

// Product Schema Generator (for shop items)
export const generateProductSchema = (product: {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  currency: string;
  brand: string;
  sku: string;
  availability: string;
  rating?: number;
  reviewCount?: number;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.imageUrl,
  "brand": {
    "@type": "Brand",
    "name": product.brand
  },
  "sku": product.sku,
  "offers": {
    "@type": "Offer",
    "url": window.location.href,
    "priceCurrency": product.currency,
    "price": product.price,
    "availability": `https://schema.org/${product.availability}`,
    "seller": {
      "@id": "https://laserlightskinclinic.co.uk/#organization"
    }
  },
  ...(product.rating && product.reviewCount ? {
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount
    }
  } : {})
});

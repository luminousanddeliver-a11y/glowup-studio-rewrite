import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object | object[];
  keywords?: string;
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export const SEOHead = ({
  title,
  description,
  canonicalUrl,
  ogImage = "https://laserlightskinclinic.co.uk/og-image.jpg",
  ogType = "website",
  structuredData,
  keywords,
  noindex = false,
  publishedTime,
  modifiedTime,
  author = "Laser Light Skin Clinic",
}: SEOHeadProps) => {
  // Ensure title is under 60 chars for SEO
  const seoTitle = title.length > 60 ? `${title.substring(0, 57)}...` : title;
  
  // Ensure description is under 160 chars
  const seoDescription = description.length > 160 
    ? `${description.substring(0, 157)}...` 
    : description;

  const renderStructuredData = () => {
    if (!structuredData) return null;
    
    if (Array.isArray(structuredData)) {
      return structuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ));
    }
    
    return (
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    );
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content={ogType} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Laser Light Skin Clinic" />
      <meta property="og:locale" content="en_GB" />
      
      {/* Article specific tags */}
      {ogType === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === "article" && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Structured Data */}
      {renderStructuredData()}
    </Helmet>
  );
};
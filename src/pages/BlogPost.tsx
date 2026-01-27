import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { PageBreadcrumb } from "@/components/layout/PageBreadcrumb";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Clock, ArrowLeft, ArrowRight, Phone, User, Share2, BookOpen } from "lucide-react";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { SocialShareButtons } from "@/components/blog/SocialShareButtons";
import { PrintButton } from "@/components/blog/PrintButton";
import { calculateReadingTime } from "@/lib/readingTime";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();
      
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  // Calculate dynamic reading time from content
  const readingTime = post?.content ? calculateReadingTime(post.content) : (post?.reading_time || 5);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled or share failed
      }
    }
  };

  const currentUrl = typeof window !== 'undefined' ? window.location.href : `https://laserlightskinclinic.co.uk/blog/${slug}`;

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="relative h-[60vh] bg-muted -mt-[80px]">
            <Skeleton className="absolute inset-0" />
          </section>
          <section className="py-12">
            <div className="container-custom max-w-4xl space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <h1 className="font-heading text-3xl font-semibold text-foreground mb-4">
              Article Not Found
            </h1>
            <p className="font-body text-muted-foreground mb-6">
              Sorry, we couldn't find the article you're looking for.
            </p>
            <Button asChild>
              <a href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </a>
            </Button>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.meta_description || post.excerpt,
    "image": post.featured_image,
    "datePublished": post.published_at,
    "dateModified": post.updated_at,
    "author": {
      "@type": "Organization",
      "name": "Laser Light Skin Clinic"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Laser Light Skin Clinic",
      "logo": {
        "@type": "ImageObject",
        "url": "https://laserlightskinclinic.co.uk/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://laserlightskinclinic.co.uk/blog/${post.slug}`
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title={post.meta_title || `${post.title} | Laser Light Skin Clinic`}
        description={post.meta_description || post.excerpt || ""}
        canonicalUrl={`https://laserlightskinclinic.co.uk/blog/${post.slug}`}
        ogType="article"
        publishedTime={post.published_at || undefined}
        modifiedTime={post.updated_at || undefined}
        keywords={post.target_keyword || undefined}
        structuredData={articleSchema}
      />
      
      {/* Print Styles */}
      <style>{`
        @media print {
          header, footer, nav, .print\\:hidden, button, .sticky {
            display: none !important;
          }
          body {
            font-size: 12pt;
            line-height: 1.6;
            color: black !important;
            background: white !important;
          }
          .prose {
            max-width: 100% !important;
            padding: 0 !important;
          }
          .prose h2, .prose h3 {
            page-break-after: avoid;
            color: black !important;
          }
          .prose img {
            max-width: 100% !important;
            page-break-inside: avoid;
          }
          a {
            color: black !important;
            text-decoration: underline !important;
          }
          a::after {
            content: " (" attr(href) ")";
            font-size: 10pt;
          }
          .article-hero-print {
            margin-bottom: 2rem;
            border-bottom: 2px solid #333;
            padding-bottom: 1rem;
          }
        }
      `}</style>
      
      <Header />
      <main className="flex-1">
        {/* Premium Hero Section - Seamless blend with navbar */}
        <section className="relative -mt-[80px]">
          {/* Hero Image with Premium Overlays */}
          {post.featured_image && (
            <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
              <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                src={post.featured_image} 
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Multi-layer gradient for premium depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          )}
          
          {/* Fallback if no image */}
          {!post.featured_image && (
            <div className="relative h-[35vh] bg-gradient-to-br from-primary via-primary/90 to-primary/70" />
          )}
          
          {/* Content Overlay - Positioned at bottom, flush with image */}
          <div className="absolute bottom-0 left-0 right-0 pb-6 md:pb-8">
            <div className="container-custom max-w-5xl">
              {/* Breadcrumb */}
              <PageBreadcrumb 
                items={[
                  { label: "Blog", href: "/blog" },
                  { label: post.title }
                ]} 
                variant="dark"
                className="mb-4"
              />
              
              {/* Category and Reading Time Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {post.category && (
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground px-3 py-1.5 rounded-full font-body text-xs font-semibold uppercase tracking-wide shadow-lg"
                  >
                    <BookOpen className="h-3 w-3" />
                    {post.category}
                  </motion.span>
                )}
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-full font-body text-xs font-medium shadow-lg"
                >
                  <Clock className="h-3 w-3" />
                  {readingTime} min read
                </motion.span>
              </div>
              
              {/* Title with Text Shadow for Readability */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-[1.1] max-w-4xl"
                style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
              >
                {post.title}
              </motion.h1>
              
              {/* Excerpt */}
              {post.excerpt && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="font-body text-sm sm:text-base md:text-lg text-white/90 max-w-2xl leading-relaxed"
                  style={{ textShadow: '0 1px 10px rgba(0,0,0,0.3)' }}
                >
                  {post.excerpt}
                </motion.p>
              )}
            </div>
          </div>
        </section>

        {/* Article Meta Bar */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-b border-border bg-card/50 print:hidden"
        >
          <div className="container-custom max-w-5xl py-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4 md:gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  <span className="font-medium text-foreground">Laser Light Skin Clinic</span>
                </span>
                {post.published_at && (
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    {formatDate(post.published_at)}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <PrintButton />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleShare}
                  className="text-muted-foreground hover:text-primary lg:hidden"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Print Header - Only visible when printing */}
        <div className="hidden print:block article-hero-print">
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
          <p className="text-gray-600">{post.excerpt}</p>
          <p className="text-sm text-gray-500 mt-2">
            Laser Light Skin Clinic • {formatDate(post.published_at)} • {readingTime} min read
          </p>
        </div>

        {/* Article Content with Floating Share & TOC Sidebar */}
        <article className="py-10 md:py-14">
          <div className="container-custom max-w-7xl">
            <div className="flex gap-6 lg:gap-10">
              {/* Floating Social Share - Left Side */}
              <div className="w-14 flex-shrink-0">
                <SocialShareButtons title={post.title} url={currentUrl} />
              </div>

              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex-1 min-w-0 max-w-3xl"
              >
                <div 
                  className="prose prose-lg lg:prose-xl max-w-none font-body
                    /* Premium Headings with Accent */
                    prose-headings:font-heading prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight
                    prose-h2:text-xl prose-h2:sm:text-2xl prose-h2:md:text-3xl prose-h2:mt-10 prose-h2:mb-5 prose-h2:relative prose-h2:pl-5
                    prose-h2:before:content-[''] prose-h2:before:absolute prose-h2:before:left-0 prose-h2:before:top-0 prose-h2:before:bottom-0 prose-h2:before:w-1 prose-h2:before:bg-gradient-to-b prose-h2:before:from-primary prose-h2:before:to-accent prose-h2:before:rounded-full
                    prose-h3:text-lg prose-h3:sm:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-primary
                    
                    /* Premium Paragraph Styling */
                    prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-base prose-p:md:text-lg prose-p:mb-5
                    prose-p:first-of-type:text-lg prose-p:first-of-type:md:text-xl prose-p:first-of-type:text-foreground prose-p:first-of-type:font-medium prose-p:first-of-type:leading-relaxed
                    
                    /* Links with Underline Animation */
                    prose-a:text-primary prose-a:font-medium prose-a:underline prose-a:underline-offset-4 prose-a:decoration-primary/50 hover:prose-a:decoration-primary hover:prose-a:text-primary/80 prose-a:transition-colors
                    
                    /* Strong & Emphasis */
                    prose-strong:text-foreground prose-strong:font-bold
                    prose-em:text-foreground
                    
                    /* Premium Lists */
                    prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-ul:my-6 prose-ol:my-6
                    prose-li:text-base prose-li:md:text-lg prose-li:mb-2 prose-li:pl-1
                    prose-li:marker:text-primary prose-li:marker:font-bold
                    
                    /* Premium Images with Shadow */
                    prose-img:rounded-2xl prose-img:shadow-2xl prose-img:my-8 prose-img:ring-1 prose-img:ring-border/50
                    
                    /* Premium Blockquotes */
                    prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-gradient-to-r prose-blockquote:from-primary/5 prose-blockquote:to-transparent
                    prose-blockquote:rounded-r-2xl prose-blockquote:py-5 prose-blockquote:px-6 prose-blockquote:my-8
                    prose-blockquote:text-foreground prose-blockquote:font-medium prose-blockquote:not-italic
                    prose-blockquote:text-base prose-blockquote:md:text-lg
                    prose-blockquote:shadow-sm
                    
                    /* Premium Tables */
                    prose-table:rounded-xl prose-table:overflow-hidden prose-table:shadow-lg prose-table:border prose-table:border-border
                    prose-th:bg-primary prose-th:text-primary-foreground prose-th:py-3 prose-th:px-4 prose-th:text-left prose-th:font-semibold
                    prose-td:py-3 prose-td:px-4 prose-td:border-b prose-td:border-border
                    prose-tr:even:bg-muted/30
                    
                    /* Code Styling */
                    prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-primary prose-code:font-mono prose-code:text-sm"
                  dangerouslySetInnerHTML={{ __html: post.content || "" }}
                />

                {/* Book Consultation CTA - Inside Article */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-10 p-6 md:p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl border border-primary/20"
                >
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">
                    Ready to Get Started?
                  </h3>
                  <p className="font-body text-muted-foreground mb-5">
                    Book your free consultation today and discover how our NHS-approved treatments can help you achieve your aesthetic goals.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild size="lg" className="font-semibold">
                      <a href="https://www.fresha.com/a/laser-light-skin-clinic-dagenham-125-becontree-avenue-vdj9amsj/all-offer?menu=true" target="_blank" rel="noopener noreferrer">
                        Book Free Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <a href="tel:02085981200">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </motion.div>

              {/* Table of Contents Sidebar - Right Side */}
              <aside className="w-72 flex-shrink-0 hidden xl:block">
                <TableOfContents content={post.content || ""} />
              </aside>
            </div>
          </div>
        </article>

        {/* Related Posts Section */}
        <RelatedPosts currentSlug={post.slug} category={post.category} />

        {/* Related Services - Internal Linking for SEO */}
        <section className="bg-muted/50 py-12 md:py-16 print:hidden">
          <div className="container-custom max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-6 text-center"
            >
              Explore Our Treatments
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Laser Hair Removal", href: "/laser-hair-removal-dagenham" },
                { name: "Hydrafacials", href: "/hydrafacial-east-london" },
                { name: "Tattoo Removal", href: "/tattoo-removal-east-london" },
                { name: "View All Prices", href: "/prices" },
              ].map((service, index) => (
                <motion.a
                  key={service.name}
                  href={service.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-card p-4 rounded-xl text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-border/50"
                >
                  <span className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors">
                    {service.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Premium CTA Section */}
        <section className="relative py-16 md:py-24 overflow-hidden print:hidden">
          {/* Background with gradient and pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-pattern)" />
            </svg>
          </div>
          
          <div className="container-custom max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full font-body text-sm font-medium mb-6 backdrop-blur-sm">
                Free Consultation Available
              </span>
              
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Start Your<br />
                <span className="text-accent">Transformation?</span>
              </h2>
              
              <p className="font-body text-lg text-white/90 mb-8 max-w-xl mx-auto leading-relaxed">
                Book your free consultation today and discover how our NHS-approved treatments can help you achieve your aesthetic goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-body font-semibold h-14 px-8 shadow-lg hover:shadow-xl transition-all"
                >
                  <a href="https://www.fresha.com/a/laser-light-skin-clinic-dagenham-125-becontree-avenue-vdj9amsj/all-offer?menu=true" target="_blank" rel="noopener noreferrer">
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  asChild 
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-body font-semibold h-14 px-8 transition-all"
                >
                  <a href="tel:02085981200">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us Now
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;

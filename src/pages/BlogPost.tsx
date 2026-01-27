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
            <div className="relative h-[40vh] md:h-[45vh] lg:h-[50vh] overflow-hidden">
              <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                src={post.featured_image} 
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Multi-layer gradient for premium depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          )}
          
          {/* Fallback if no image */}
          {!post.featured_image && (
            <div className="relative h-[30vh] bg-gradient-to-br from-primary via-primary/90 to-primary/70 pt-[80px]" />
          )}
          
          {/* Content Overlay - Positioned at bottom, flush with image */}
          <div className="absolute bottom-0 left-0 right-0 pb-4 md:pb-6">
            <div className="container-custom max-w-5xl">
              {/* Breadcrumb */}
              <PageBreadcrumb 
                items={[
                  { label: "Blog", href: "/blog" },
                  { label: post.title }
                ]} 
                variant="dark"
                className="mb-3"
              />
              
              {/* Category and Reading Time Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {post.category && (
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground px-2.5 py-1 rounded-full font-body text-xs font-semibold uppercase tracking-wide shadow-lg"
                  >
                    <BookOpen className="h-3 w-3" />
                    {post.category}
                  </motion.span>
                )}
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md text-white px-2.5 py-1 rounded-full font-body text-xs font-medium shadow-lg"
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
                className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-[1.15] max-w-4xl"
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
                  className="font-body text-sm md:text-base text-white/90 max-w-2xl leading-relaxed line-clamp-2"
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
        <article className="py-8 md:py-12">
          <div className="container-custom max-w-7xl">
            <div className="flex gap-4 lg:gap-8">
              {/* Floating Social Share - Left Side (hidden on mobile) */}
              <div className="w-12 flex-shrink-0 hidden md:block">
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
                  className="prose prose-base md:prose-lg max-w-none font-body
                    /* Premium Headings with Accent */
                    prose-headings:font-heading prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight
                    prose-h2:text-lg prose-h2:sm:text-xl prose-h2:md:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:relative prose-h2:pl-4
                    prose-h2:before:content-[''] prose-h2:before:absolute prose-h2:before:left-0 prose-h2:before:top-0 prose-h2:before:bottom-0 prose-h2:before:w-1 prose-h2:before:bg-gradient-to-b prose-h2:before:from-primary prose-h2:before:to-accent prose-h2:before:rounded-full
                    prose-h3:text-base prose-h3:sm:text-lg prose-h3:md:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-primary
                    
                    /* Improved Paragraph Styling - Less essay-like */
                    prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-sm prose-p:md:text-base prose-p:mb-4
                    prose-p:first-of-type:text-base prose-p:first-of-type:md:text-lg prose-p:first-of-type:text-foreground prose-p:first-of-type:font-medium prose-p:first-of-type:leading-relaxed
                    
                    /* Links with Underline Animation */
                    prose-a:text-primary prose-a:font-medium prose-a:underline prose-a:underline-offset-4 prose-a:decoration-primary/50 hover:prose-a:decoration-primary hover:prose-a:text-primary/80 prose-a:transition-colors
                    
                    /* Strong & Emphasis */
                    prose-strong:text-foreground prose-strong:font-semibold
                    prose-em:text-foreground
                    
                    /* Premium Lists - More scannable */
                    prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-ul:my-4 prose-ol:my-4
                    prose-li:text-sm prose-li:md:text-base prose-li:mb-1.5 prose-li:pl-1
                    prose-li:marker:text-primary prose-li:marker:font-bold
                    
                    /* Premium Images with Shadow */
                    prose-img:rounded-xl prose-img:shadow-xl prose-img:my-6 prose-img:ring-1 prose-img:ring-border/50
                    
                    /* Premium Blockquotes */
                    prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-gradient-to-r prose-blockquote:from-primary/5 prose-blockquote:to-transparent
                    prose-blockquote:rounded-r-xl prose-blockquote:py-4 prose-blockquote:px-5 prose-blockquote:my-6
                    prose-blockquote:text-foreground prose-blockquote:font-medium prose-blockquote:not-italic
                    prose-blockquote:text-sm prose-blockquote:md:text-base
                    prose-blockquote:shadow-sm
                    
                    /* Premium Tables */
                    prose-table:rounded-lg prose-table:overflow-hidden prose-table:shadow-lg prose-table:border prose-table:border-border prose-table:text-sm
                    prose-th:bg-primary prose-th:text-primary-foreground prose-th:py-2.5 prose-th:px-3 prose-th:text-left prose-th:font-semibold prose-th:text-sm
                    prose-td:py-2.5 prose-td:px-3 prose-td:border-b prose-td:border-border
                    prose-tr:even:bg-muted/30
                    
                    /* Code Styling */
                    prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-primary prose-code:font-mono prose-code:text-xs"
                  dangerouslySetInnerHTML={{ __html: post.content || "" }}
                />

                {/* Book Consultation CTA - Inside Article */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-8 p-5 md:p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-xl border border-primary/20"
                >
                  <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-2">
                    Ready to Get Started?
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    Book your free consultation today and discover how our NHS-approved treatments can help you achieve your aesthetic goals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <Button asChild size="default" className="font-semibold w-full sm:w-auto">
                      <a href="https://www.fresha.com/a/laser-light-skin-clinic-dagenham-125-becontree-avenue-vdj9amsj/all-offer?menu=true" target="_blank" rel="noopener noreferrer">
                        Book Free Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="default" className="w-full sm:w-auto">
                      <a href="tel:02085981200">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </motion.div>

                {/* Mobile Social Share */}
                <div className="mt-6 flex items-center justify-center gap-3 md:hidden">
                  <span className="text-sm text-muted-foreground">Share:</span>
                  <div className="flex gap-2">
                    <a 
                      href={`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + currentUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition-opacity"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    </a>
                    <a 
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition-opacity"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a 
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(currentUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-foreground text-background hover:opacity-80 transition-opacity"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Table of Contents Sidebar - Right Side */}
              <aside className="w-64 flex-shrink-0 hidden xl:block">
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

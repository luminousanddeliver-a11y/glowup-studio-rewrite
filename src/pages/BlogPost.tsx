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
import { AspectRatio } from "@/components/ui/aspect-ratio";

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

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="bg-primary -mt-[80px] pt-[100px] md:pt-[108px] pb-12">
            <div className="container-custom max-w-4xl">
              <Skeleton className="h-8 w-32 mb-4" />
              <Skeleton className="h-12 w-full mb-4" />
              <Skeleton className="h-6 w-48" />
            </div>
          </section>
          <section className="section-padding">
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
      
      <Header />
      <main className="flex-1">
        {/* Premium Hero Section with Full-Width Image */}
        <section className="relative -mt-[80px] pt-[80px]">
          {/* Hero Image with Overlay */}
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
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent" />
            </div>
          )}
          
          {/* Content Overlay positioned at bottom */}
          <div className="absolute bottom-0 left-0 right-0 pb-8 md:pb-12">
            <div className="container-custom max-w-4xl">
              <PageBreadcrumb 
                items={[
                  { label: "Blog", href: "/blog" },
                  { label: post.title }
                ]} 
                variant="dark"
                className="mb-4 opacity-80"
              />
              
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {post.category && (
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground px-3 py-1 rounded-full font-body text-xs font-semibold uppercase tracking-wide"
                  >
                    <BookOpen className="h-3 w-3" />
                    {post.category}
                  </motion.span>
                )}
                {post.reading_time && (
                  <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full font-body text-xs font-medium"
                  >
                    <Clock className="h-3 w-3" />
                    {post.reading_time} min read
                  </motion.span>
                )}
              </div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.1] drop-shadow-lg"
              >
                {post.title}
              </motion.h1>
              
              {post.excerpt && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="font-body text-base md:text-lg text-white/90 max-w-2xl leading-relaxed drop-shadow"
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
          className="border-b border-border bg-card/50"
        >
          <div className="container-custom max-w-4xl py-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
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
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="text-muted-foreground hover:text-primary"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Article Content - Premium Typography */}
        <article className="py-12 md:py-16">
          <div className="container-custom max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="prose prose-lg lg:prose-xl max-w-none font-body
                /* Headings */
                prose-headings:font-heading prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight
                prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:relative prose-h2:pl-4
                prose-h2:before:content-[''] prose-h2:before:absolute prose-h2:before:left-0 prose-h2:before:top-0 prose-h2:before:bottom-0 prose-h2:before:w-1 prose-h2:before:bg-gradient-to-b prose-h2:before:from-primary prose-h2:before:to-accent prose-h2:before:rounded-full
                prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-primary
                
                /* Paragraphs */
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-base prose-p:md:text-lg prose-p:mb-6
                prose-p:first-of-type:text-lg prose-p:first-of-type:md:text-xl prose-p:first-of-type:text-foreground prose-p:first-of-type:font-medium prose-p:first-of-type:leading-relaxed
                
                /* Links */
                prose-a:text-primary prose-a:font-medium prose-a:underline prose-a:underline-offset-4 prose-a:decoration-primary/50 hover:prose-a:decoration-primary hover:prose-a:text-primary/80
                
                /* Strong & Emphasis */
                prose-strong:text-foreground prose-strong:font-bold
                prose-em:text-foreground
                
                /* Lists */
                prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-ul:my-6 prose-ol:my-6
                prose-li:text-base prose-li:md:text-lg prose-li:mb-3 prose-li:pl-2
                prose-li:marker:text-primary prose-li:marker:font-bold
                
                /* Images */
                prose-img:rounded-2xl prose-img:shadow-xl prose-img:my-10 prose-img:ring-1 prose-img:ring-border
                
                /* Blockquotes */
                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-gradient-to-r prose-blockquote:from-primary/5 prose-blockquote:to-transparent
                prose-blockquote:rounded-r-xl prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-8
                prose-blockquote:text-foreground prose-blockquote:font-medium prose-blockquote:not-italic
                prose-blockquote:text-lg
                
                /* Tables */
                prose-table:rounded-xl prose-table:overflow-hidden prose-table:shadow-md prose-table:border prose-table:border-border
                prose-th:bg-primary prose-th:text-primary-foreground prose-th:py-3 prose-th:px-4 prose-th:text-left prose-th:font-semibold
                prose-td:py-3 prose-td:px-4 prose-td:border-b prose-td:border-border
                prose-tr:even:bg-muted/30
                
                /* Code */
                prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-primary prose-code:font-mono prose-code:text-sm"
              dangerouslySetInnerHTML={{ __html: post.content || "" }}
            />
          </div>
        </article>

        {/* Related Posts Section */}
        <RelatedPosts currentSlug={post.slug} category={post.category} />

        {/* Related Services - Internal Linking for SEO */}
        <section className="bg-muted/50 py-12 md:py-16">
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
                  className="bg-card p-4 rounded-lg text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
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
        <section className="relative py-16 md:py-24 overflow-hidden">
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

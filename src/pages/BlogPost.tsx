import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";

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

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="bg-primary py-16">
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
          <div className="text-center">
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
          </div>
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
    <div className="min-h-screen flex flex-col">
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
        {/* Hero Section */}
        <section className="bg-primary py-12 md:py-20">
          <div className="container-custom max-w-4xl">
            <a 
              href="/blog" 
              className="inline-flex items-center text-primary-foreground/80 hover:text-accent transition-colors mb-6 font-body text-sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </a>
            
            {post.category && (
              <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full font-body text-sm font-medium mb-4">
                {post.category}
              </span>
            )}
            
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-primary-foreground/70 font-body text-sm">
              {post.published_at && (
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.published_at)}
                </span>
              )}
              {post.reading_time && (
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.reading_time} min read
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {post.featured_image && (
          <section className="container-custom max-w-4xl -mt-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src={post.featured_image} 
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </section>
        )}

        {/* Article Content */}
        <article className="section-padding">
          <div className="container-custom max-w-4xl">
            <div 
              className="prose prose-lg max-w-none font-body
                prose-headings:font-heading prose-headings:text-foreground
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground
                prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                prose-li:marker:text-accent"
              dangerouslySetInnerHTML={{ __html: post.content || "" }}
            />
          </div>
        </article>

        {/* CTA Section */}
        <section className="bg-secondary py-12 md:py-16">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Ready to Start Your Transformation?
            </h2>
            <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
              Book your free consultation today and discover how our NHS-approved treatments can help you achieve your aesthetic goals.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-body h-14 px-8"
            >
              <a href="/contact">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;

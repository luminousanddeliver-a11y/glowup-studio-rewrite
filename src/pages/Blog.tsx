import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { PageBreadcrumb } from "@/components/layout/PageBreadcrumb";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, Clock, ArrowRight, TrendingUp, Sparkles } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { MobileStickyButton } from "@/components/home/MobileStickyButton";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("published_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Laser Light Skin Clinic Blog",
    "description": "Expert advice on laser treatments, skincare, and aesthetic procedures from East London's leading NHS-approved clinic.",
    "url": "https://laserlightskinclinic.co.uk/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Laser Light Skin Clinic",
      "logo": {
        "@type": "ImageObject",
        "url": "https://laserlightskinclinic.co.uk/logo.png"
      }
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Get featured post (first one) and remaining posts
  const featuredPost = posts?.[0];
  const remainingPosts = posts?.slice(1) || [];

  return (
    <div className="min-h-screen flex flex-col pb-20 lg:pb-0">
      <SEOHead
        title="Skincare & Treatment Advice | Laser Light Skin Clinic Blog"
        description="Expert tips on laser hair removal, Hydrafacials, IV drips, and advanced skin treatments. Get answers to your aesthetic questions from Dagenham's NHS-approved clinic."
        canonicalUrl="https://laserlightskinclinic.co.uk/blog"
        keywords="skincare advice, laser treatment tips, hydrafacial benefits, iv drip wellness, aesthetic clinic blog"
        structuredData={blogSchema}
      />
      
      <Header />
      <main className="flex-1">
        {/* Hero Section - Premium Design */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-primary/95 -mt-[80px] pt-[88px] md:pt-[92px] pb-12 md:pb-16 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="container-custom text-center relative z-10">
            <PageBreadcrumb 
              items={[{ label: "Blog" }]} 
              variant="dark"
              className="mb-6 justify-center"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span className="font-body text-sm font-medium">Expert Skincare Insights</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
            >
              Laser Light <span className="text-accent">Blog</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto"
            >
              Discover the latest skincare tips, treatment guides, and expert advice from East London's leading NHS-approved aesthetic clinic.
            </motion.p>
          </div>
        </section>

        {/* Blog Content */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            {isLoading ? (
              <div className="space-y-8">
                {/* Featured skeleton */}
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg">
                  <div className="grid lg:grid-cols-2">
                    <Skeleton className="h-64 lg:h-96 w-full" />
                    <div className="p-8 space-y-4">
                      <Skeleton className="h-6 w-24" />
                      <Skeleton className="h-10 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  </div>
                </div>
                {/* Grid skeleton */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-card rounded-xl overflow-hidden shadow-card">
                      <Skeleton className="h-48 w-full" />
                      <div className="p-6 space-y-3">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-6 w-full" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : posts && posts.length > 0 ? (
              <div className="space-y-12">
                {/* Featured Post - Large Card */}
                {featuredPost && (
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
                  >
                    <a href={`/blog/${featuredPost.slug}`} className="grid lg:grid-cols-2">
                      {/* Image */}
                      <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                        {featuredPost.featured_image && (
                          <img 
                            src={featuredPost.featured_image} 
                            alt={featuredPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:hidden" />
                        <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground border-0 font-body">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                      
                      {/* Content */}
                      <div className="p-8 lg:p-10 flex flex-col justify-center">
                        {featuredPost.category && (
                          <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full font-body text-sm font-medium mb-4 w-fit">
                            {featuredPost.category}
                          </span>
                        )}
                        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors leading-tight">
                          {featuredPost.title}
                        </h2>
                        <p className="font-body text-muted-foreground text-base lg:text-lg mb-6 line-clamp-3">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                          {featuredPost.published_at && (
                            <span className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              {formatDate(featuredPost.published_at)}
                            </span>
                          )}
                          {featuredPost.reading_time && (
                            <span className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              {featuredPost.reading_time} min read
                            </span>
                          )}
                        </div>
                        <div className="inline-flex items-center gap-2 text-accent font-body font-semibold group-hover:gap-3 transition-all">
                          Read Full Article
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      </div>
                    </a>
                  </motion.article>
                )}

                {/* Remaining Posts Grid */}
                {remainingPosts.length > 0 && (
                  <>
                    <div className="flex items-center gap-4">
                      <h2 className="font-heading text-2xl font-bold text-foreground">More Articles</h2>
                      <div className="flex-1 h-px bg-border" />
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {remainingPosts.map((post, index) => (
                        <motion.article
                          key={post.id}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
                        >
                          <a href={`/blog/${post.slug}`}>
                            {/* Image with overlay */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                              {post.featured_image && (
                                <img 
                                  src={post.featured_image} 
                                  alt={post.title}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              
                              {/* Reading time badge on image */}
                              {post.reading_time && (
                                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full font-body text-xs flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {post.reading_time} min
                                </div>
                              )}
                            </div>
                            
                            {/* Content */}
                            <div className="p-6">
                              {post.category && (
                                <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full font-body text-xs font-medium mb-3">
                                  {post.category}
                                </span>
                              )}
                              <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                                {post.title}
                              </h3>
                              <p className="font-body text-muted-foreground text-sm mb-4 line-clamp-2">
                                {post.excerpt}
                              </p>
                              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                {post.published_at && (
                                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                                    <Calendar className="h-3.5 w-3.5" />
                                    {formatDate(post.published_at)}
                                  </span>
                                )}
                                <span className="inline-flex items-center text-accent font-body text-sm font-medium group-hover:gap-2 transition-all">
                                  Read
                                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                              </div>
                            </div>
                          </a>
                        </motion.article>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-10 h-10 text-muted-foreground" />
                </div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">
                  Coming Soon
                </h2>
                <p className="font-body text-muted-foreground text-lg max-w-md mx-auto">
                  We're working on expert skincare advice and treatment guides. Check back soon!
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-gradient-to-r from-primary to-primary/90 py-16">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Stay Updated with Expert Tips
              </h2>
              <p className="font-body text-primary-foreground/80 max-w-xl mx-auto mb-6">
                Get the latest skincare advice, exclusive offers, and treatment insights delivered to your inbox.
              </p>
              <a 
                href="/#contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-xl font-body font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
              >
                Get in Touch
                <ArrowRight className="h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyButton />
    </div>
  );
};

export default Blog;

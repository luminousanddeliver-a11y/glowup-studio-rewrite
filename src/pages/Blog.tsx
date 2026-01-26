import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

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

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Skincare & Treatment Advice | Laser Light Skin Clinic Blog"
        description="Expert tips on laser hair removal, Hydrafacials, IV drips, and advanced skin treatments. Get answers to your aesthetic questions from Dagenham's NHS-approved clinic."
        canonicalUrl="https://laserlightskinclinic.co.uk/blog"
        keywords="skincare advice, laser treatment tips, hydrafacial benefits, iv drip wellness, aesthetic clinic blog"
        structuredData={blogSchema}
      />
      
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container-custom text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="font-heading text-3xl md:text-5xl font-semibold text-primary-foreground mb-4"
            >
              Expert Advice & Insights
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto"
            >
              Discover the latest skincare tips, treatment guides, and expert advice from East London's leading NHS-approved aesthetic clinic.
            </motion.p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-card rounded-xl overflow-hidden shadow-card">
                    <Skeleton className="h-48 w-full" />
                    <div className="p-6 space-y-3">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-6 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  </div>
                ))}
              </div>
            ) : posts && posts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                  >
                    {post.featured_image && (
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={post.featured_image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      {post.category && (
                        <motion.span
                          initial={{ scale: 0.9 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full font-body text-xs font-medium mb-3"
                        >
                          {post.category}
                        </motion.span>
                      )}
                      <h2 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        <a href={`/blog/${post.slug}`}>{post.title}</a>
                      </h2>
                      <p className="font-body text-muted-foreground text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          {post.published_at && (
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {formatDate(post.published_at)}
                            </span>
                          )}
                          {post.reading_time && (
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {post.reading_time} min read
                            </span>
                          )}
                        </div>
                        <a 
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-accent font-body text-sm font-medium"
                        >
                          Read
                          <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="font-body text-muted-foreground text-lg">
                  No articles yet. Check back soon for expert skincare advice!
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;

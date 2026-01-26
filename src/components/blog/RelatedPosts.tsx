import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface RelatedPostsProps {
  currentSlug: string;
  category: string | null;
}

export const RelatedPosts = ({ currentSlug, category }: RelatedPostsProps) => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["related-posts", currentSlug, category],
    queryFn: async () => {
      let query = supabase
        .from("blog_posts")
        .select("id, slug, title, excerpt, featured_image, category, reading_time")
        .eq("published", true)
        .neq("slug", currentSlug)
        .limit(3);

      // Prioritize same category, but fall back to any posts
      if (category) {
        query = query.order("category", { ascending: false });
      }

      const { data, error } = await query.order("published_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
    enabled: !!currentSlug,
  });

  if (isLoading) {
    return (
      <section className="py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <Skeleton className="h-8 w-48 mx-auto mb-4" />
            <Skeleton className="h-5 w-64 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-sm">
                <Skeleton className="h-48 w-full" />
                <div className="p-6 space-y-3">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container-custom max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full font-body text-sm font-medium mb-4">
            Continue Reading
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            You May Also Like
          </h2>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <a href={`/blog/${post.slug}`} className="block">
                {/* Image Container */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                  {post.featured_image ? (
                    <img 
                      src={post.featured_image} 
                      alt={post.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  )}
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  {post.category && (
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-primary px-3 py-1 rounded-full font-body text-xs font-semibold uppercase tracking-wide shadow-sm">
                      {post.category}
                    </span>
                  )}
                  
                  {/* Reading Time Badge */}
                  {post.reading_time && (
                    <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full font-body text-xs font-medium flex items-center gap-1.5">
                      <Clock className="h-3 w-3" />
                      {post.reading_time} min
                    </span>
                  )}
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  {post.excerpt && (
                    <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}
                  
                  <span className="inline-flex items-center text-primary font-body text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
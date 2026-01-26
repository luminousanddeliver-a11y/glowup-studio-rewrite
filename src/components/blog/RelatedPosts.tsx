import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight } from "lucide-react";
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
      <section className="bg-muted/30 py-12 md:py-16">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-8">
            You May Also Like
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-lg overflow-hidden shadow-sm">
                <Skeleton className="h-32 w-full" />
                <div className="p-4 space-y-2">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-5 w-full" />
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
    <section className="bg-muted/30 py-12 md:py-16">
      <div className="container-custom max-w-4xl">
        <h2 className="font-heading text-2xl font-semibold text-foreground mb-8">
          You May Also Like
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article 
              key={post.id}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              {post.featured_image && (
                <a href={`/blog/${post.slug}`} className="block aspect-video overflow-hidden">
                  <img 
                    src={post.featured_image} 
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </a>
              )}
              <div className="p-4">
                {post.category && (
                  <span className="inline-block bg-accent/10 text-accent px-2 py-0.5 rounded-full font-body text-xs font-medium mb-2">
                    {post.category}
                  </span>
                )}
                <h3 className="font-heading text-sm font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                  <a href={`/blog/${post.slug}`}>{post.title}</a>
                </h3>
                <a 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-accent font-body text-xs font-medium"
                >
                  Read Article
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

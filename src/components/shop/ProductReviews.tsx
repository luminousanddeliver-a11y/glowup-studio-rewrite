import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Star, Check, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ReviewForm } from "./ReviewForm";
import { format } from "date-fns";

interface ProductReviewsProps {
  productId: string;
  productName: string;
}

export const ProductReviews = ({ productId, productName }: ProductReviewsProps) => {
  const { data: reviews, isLoading } = useQuery({
    queryKey: ["product-reviews", productId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("product_reviews")
        .select("*")
        .eq("product_id", productId)
        .eq("approved", true)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const averageRating = reviews?.length
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : 0;

  const ratingCounts = reviews?.reduce((acc, r) => {
    acc[r.rating] = (acc[r.rating] || 0) + 1;
    return acc;
  }, {} as Record<number, number>) || {};

  return (
    <div className="space-y-8">
      {/* Reviews Summary */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Rating Overview */}
        <div className="bg-muted/30 rounded-xl p-6">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
            Customer Reviews
          </h3>
          
          {isLoading ? (
            <div className="space-y-3">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-4 w-48" />
            </div>
          ) : reviews && reviews.length > 0 ? (
            <>
              <div className="flex items-center gap-4 mb-4">
                <span className="font-heading text-5xl font-bold text-foreground">
                  {averageRating.toFixed(1)}
                </span>
                <div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.round(averageRating)
                            ? "text-amber-400 fill-amber-400"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="font-body text-sm text-muted-foreground mt-1">
                    Based on {reviews.length} review{reviews.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              {/* Rating Breakdown */}
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => {
                  const count = ratingCounts[rating] || 0;
                  const percentage = reviews.length ? (count / reviews.length) * 100 : 0;
                  return (
                    <div key={rating} className="flex items-center gap-2">
                      <span className="font-body text-sm text-muted-foreground w-8">
                        {rating}★
                      </span>
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-amber-400 rounded-full transition-all"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="font-body text-sm text-muted-foreground w-8">
                        {count}
                      </span>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <MessageSquare className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
              <p className="font-body text-muted-foreground">
                No reviews yet. Be the first to review this product!
              </p>
            </div>
          )}
        </div>

        {/* Review Form */}
        <ReviewForm productId={productId} productName={productName} />
      </div>

      {/* Reviews List */}
      {!isLoading && reviews && reviews.length > 0 && (
        <div className="space-y-6">
          <h3 className="font-heading text-xl font-semibold text-foreground">
            All Reviews ({reviews.length})
          </h3>
          
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-border pb-6 last:border-b-0"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-body font-semibold text-foreground">
                      {review.reviewer_name}
                    </span>
                    {review.verified_purchase && (
                      <Badge variant="outline" className="text-xs">
                        <Check className="w-3 h-3 mr-1" />
                        Verified Purchase
                      </Badge>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {format(new Date(review.created_at!), "MMM d, yyyy")}
                  </span>
                </div>
                
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "text-amber-400 fill-amber-400"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                
                {review.title && (
                  <h4 className="font-heading font-semibold text-foreground mb-1">
                    {review.title}
                  </h4>
                )}
                
                <p className="font-body text-muted-foreground">
                  {review.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

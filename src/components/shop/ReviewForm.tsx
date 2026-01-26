import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { StarRatingInput } from "./StarRatingInput";
import { toast } from "@/hooks/use-toast";
import { Check, Send } from "lucide-react";
import { z } from "zod";

const reviewSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email"),
  rating: z.number().min(1, "Please select a rating").max(5),
  title: z.string().max(200).optional(),
  content: z.string().min(10, "Review must be at least 10 characters").max(1000),
  orderNumber: z.string().optional(),
});

interface ReviewFormProps {
  productId: string;
  productName: string;
}

export const ReviewForm = ({ productId, productName }: ReviewFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const queryClient = useQueryClient();

  const submitReview = useMutation({
    mutationFn: async (data: {
      product_id: string;
      reviewer_name: string;
      reviewer_email: string;
      rating: number;
      title: string | null;
      content: string;
      verified_purchase: boolean;
      order_id: string | null;
    }) => {
      const { error } = await supabase.from("product_reviews").insert(data);
      if (error) throw error;
    },
    onSuccess: () => {
      setIsSubmitted(true);
      queryClient.invalidateQueries({ queryKey: ["product-reviews", productId] });
      toast({
        title: "Review Submitted!",
        description: "Thank you for your review. It will appear after approval.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit review. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const validation = reviewSchema.safeParse({
      name,
      email,
      rating,
      title: title || undefined,
      content,
      orderNumber: orderNumber || undefined,
    });

    if (!validation.success) {
      const newErrors: Record<string, string> = {};
      validation.error.errors.forEach((err) => {
        if (err.path[0]) {
          newErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    // Check if order exists for verified purchase
    let orderId: string | null = null;
    let isVerified = false;

    if (orderNumber.trim()) {
      const { data: order } = await supabase
        .from("orders")
        .select("id")
        .eq("order_number", orderNumber.trim())
        .eq("guest_email", email)
        .maybeSingle();

      if (order) {
        orderId = order.id;
        isVerified = true;
      }
    }

    submitReview.mutate({
      product_id: productId,
      reviewer_name: name.trim(),
      reviewer_email: email.trim(),
      rating,
      title: title.trim() || null,
      content: content.trim(),
      verified_purchase: isVerified,
      order_id: orderId,
    });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-accent/10 rounded-xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-accent" />
        </div>
        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
          Thank You for Your Review!
        </h3>
        <p className="font-body text-muted-foreground">
          Your review for {productName} has been submitted and will be published after approval.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="bg-muted/30 rounded-xl p-6 space-y-6"
    >
      <div>
        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
          Write a Review
        </h3>
        <p className="font-body text-sm text-muted-foreground">
          Share your experience with {productName}
        </p>
      </div>

      {/* Star Rating */}
      <div className="space-y-2">
        <Label className="font-body text-sm font-medium">
          Your Rating <span className="text-destructive">*</span>
        </Label>
        <StarRatingInput value={rating} onChange={setRating} size="lg" />
        {errors.rating && (
          <p className="text-sm text-destructive">{errors.rating}</p>
        )}
      </div>

      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="reviewer-name" className="font-body text-sm font-medium">
            Your Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="reviewer-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="font-body"
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="reviewer-email" className="font-body text-sm font-medium">
            Your Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="reviewer-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            className="font-body"
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Order Number (Optional - for verified purchase) */}
      <div className="space-y-2">
        <Label htmlFor="order-number" className="font-body text-sm font-medium">
          Order Number <span className="text-muted-foreground">(optional - for verified badge)</span>
        </Label>
        <Input
          id="order-number"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          placeholder="e.g., ORD-ABC123"
          className="font-body"
        />
        <p className="text-xs text-muted-foreground">
          Enter your order number and email to get a "Verified Purchase" badge
        </p>
      </div>

      {/* Review Title */}
      <div className="space-y-2">
        <Label htmlFor="review-title" className="font-body text-sm font-medium">
          Review Title
        </Label>
        <Input
          id="review-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Summarize your experience"
          className="font-body"
        />
      </div>

      {/* Review Content */}
      <div className="space-y-2">
        <Label htmlFor="review-content" className="font-body text-sm font-medium">
          Your Review <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="review-content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share your experience with this product..."
          className="font-body min-h-[120px]"
        />
        {errors.content && (
          <p className="text-sm text-destructive">{errors.content}</p>
        )}
        <p className="text-xs text-muted-foreground text-right">
          {content.length}/1000 characters
        </p>
      </div>

      <Button
        type="submit"
        disabled={submitReview.isPending}
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-body"
      >
        {submitReview.isPending ? (
          "Submitting..."
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Submit Review
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Reviews are subject to approval before being published.
      </p>
    </motion.form>
  );
};

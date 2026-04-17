-- 1. Drop reviewer_email column from product_reviews (no longer needed; was publicly exposed)
ALTER TABLE public.product_reviews DROP COLUMN IF EXISTS reviewer_email;

-- 2. Tighten order_items INSERT policy: only allow inserting items for orders created very recently
DROP POLICY IF EXISTS "Anyone can create order items" ON public.order_items;

CREATE POLICY "Order items linkable only to fresh orders"
ON public.order_items
FOR INSERT
TO public
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.orders o
    WHERE o.id = order_items.order_id
      AND o.created_at > now() - interval '5 minutes'
  )
);
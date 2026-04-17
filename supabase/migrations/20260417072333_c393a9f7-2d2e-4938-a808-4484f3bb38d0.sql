DROP POLICY IF EXISTS "Anyone can submit reviews" ON public.product_reviews;
CREATE POLICY "Anyone can submit valid reviews"
ON public.product_reviews
FOR INSERT
TO public
WITH CHECK (
  length(trim(reviewer_name)) between 1 and 100
  AND rating between 1 and 5
  AND (content IS NULL OR length(content) <= 2000)
  AND (title IS NULL OR length(title) <= 200)
  AND approved = false
);
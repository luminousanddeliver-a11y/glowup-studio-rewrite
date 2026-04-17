-- Replace overly permissive WITH CHECK (true) policies with basic shape validation

-- Inquiries
DROP POLICY IF EXISTS "Anyone can submit inquiries" ON public.inquiries;
CREATE POLICY "Anyone can submit valid inquiries"
ON public.inquiries
FOR INSERT
TO public
WITH CHECK (
  length(trim(name)) between 1 and 200
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(email) <= 320
  AND (message IS NULL OR length(message) <= 5000)
);

-- Orders
DROP POLICY IF EXISTS "Anyone can create orders" ON public.orders;
CREATE POLICY "Anyone can create valid orders"
ON public.orders
FOR INSERT
TO public
WITH CHECK (
  length(trim(guest_name)) between 1 and 200
  AND guest_email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND subtotal >= 0
  AND total >= 0
  AND coalesce(shipping_cost, 0) >= 0
);
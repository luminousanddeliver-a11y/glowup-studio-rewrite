-- Button press tracking table
CREATE TABLE public.button_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  label TEXT NOT NULL,
  cta_key TEXT,
  is_key_cta BOOLEAN NOT NULL DEFAULT false,
  element_type TEXT,
  href TEXT,
  path TEXT NOT NULL,
  referrer TEXT,
  session_id TEXT,
  viewport_width INTEGER,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE INDEX idx_button_events_created_at ON public.button_events(created_at DESC);
CREATE INDEX idx_button_events_cta_key ON public.button_events(cta_key) WHERE cta_key IS NOT NULL;
CREATE INDEX idx_button_events_path ON public.button_events(path);

ALTER TABLE public.button_events ENABLE ROW LEVEL SECURITY;

-- Anyone can log a button press, with sensible length limits to prevent abuse
CREATE POLICY "Anyone can log button events"
ON public.button_events
FOR INSERT
TO public
WITH CHECK (
  length(label) <= 200
  AND length(path) <= 500
  AND (cta_key IS NULL OR length(cta_key) <= 100)
  AND (href IS NULL OR length(href) <= 1000)
  AND (element_type IS NULL OR length(element_type) <= 50)
  AND (referrer IS NULL OR length(referrer) <= 500)
  AND (session_id IS NULL OR length(session_id) <= 100)
  AND (user_agent IS NULL OR length(user_agent) <= 500)
);

-- No public SELECT — dashboard reads via edge function with admin password
CREATE POLICY "No public read of button events"
ON public.button_events
FOR SELECT
TO public
USING (false);
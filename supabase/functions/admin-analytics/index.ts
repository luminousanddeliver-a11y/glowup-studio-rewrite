import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-admin-password",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const adminPassword = Deno.env.get("ADMIN_ANALYTICS_PASSWORD");
  if (!adminPassword) {
    return new Response(
      JSON.stringify({ error: "Server not configured" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  let providedPassword: string | null = req.headers.get("x-admin-password");
  let days = 30;
  if (req.method === "POST") {
    try {
      const body = await req.json();
      if (typeof body.password === "string") providedPassword = body.password;
      if (typeof body.days === "number" && body.days > 0 && body.days <= 365) {
        days = Math.floor(body.days);
      }
    } catch {
      // ignore
    }
  }

  if (!providedPassword || providedPassword !== adminPassword) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );

  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

  const { data: events, error } = await supabase
    .from("button_events")
    .select("*")
    .gte("created_at", since)
    .order("created_at", { ascending: false })
    .limit(5000);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  return new Response(
    JSON.stringify({ events: events ?? [], days }),
    { headers: { ...corsHeaders, "Content-Type": "application/json" } }
  );
});

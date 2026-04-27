import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Loader2, BarChart3 } from "lucide-react";

type ButtonEvent = {
  id: string;
  label: string;
  cta_key: string | null;
  is_key_cta: boolean;
  element_type: string | null;
  href: string | null;
  path: string;
  referrer: string | null;
  session_id: string | null;
  viewport_width: number | null;
  user_agent: string | null;
  created_at: string;
};

const STORAGE_KEY = "ll_admin_analytics_pw";
const PROJECT_ID = import.meta.env.VITE_SUPABASE_PROJECT_ID;
const FUNCTION_URL = `https://${PROJECT_ID}.supabase.co/functions/v1/admin-analytics`;

const AdminAnalytics = () => {
  const [password, setPassword] = useState<string>(() => sessionStorage.getItem(STORAGE_KEY) || "");
  const [pwInput, setPwInput] = useState("");
  const [days, setDays] = useState(30);
  const [events, setEvents] = useState<ButtonEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = async (pw: string, dayCount: number) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(FUNCTION_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY },
        body: JSON.stringify({ password: pw, days: dayCount }),
      });
      if (res.status === 401) {
        sessionStorage.removeItem(STORAGE_KEY);
        setPassword("");
        setError("Incorrect password");
        return;
      }
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const data = await res.json();
      setEvents(data.events || []);
      sessionStorage.setItem(STORAGE_KEY, pw);
    } catch (e: any) {
      setError(e.message || "Failed to load");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (password) fetchEvents(password, days);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password, days]);

  const stats = useMemo(() => {
    const total = events.length;
    const keyCtas = events.filter((e) => e.is_key_cta).length;
    const sessions = new Set(events.map((e) => e.session_id).filter(Boolean)).size;

    const byCta = new Map<string, number>();
    const byLabel = new Map<string, number>();
    const byPath = new Map<string, number>();
    for (const ev of events) {
      if (ev.cta_key) byCta.set(ev.cta_key, (byCta.get(ev.cta_key) || 0) + 1);
      byLabel.set(ev.label, (byLabel.get(ev.label) || 0) + 1);
      byPath.set(ev.path, (byPath.get(ev.path) || 0) + 1);
    }
    const sortDesc = (m: Map<string, number>) =>
      [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, 25);
    return {
      total,
      keyCtas,
      sessions,
      topCtas: sortDesc(byCta),
      topLabels: sortDesc(byLabel),
      topPaths: sortDesc(byPath),
    };
  }, [events]);

  if (!password) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Helmet>
          <title>Admin Analytics</title>
          <meta name="robots" content="noindex,nofollow" />
        </Helmet>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" /> Admin Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (pwInput.trim()) setPassword(pwInput.trim());
              }}
              className="space-y-3"
            >
              <Input
                type="password"
                placeholder="Admin password"
                value={pwInput}
                onChange={(e) => setPwInput(e.target.value)}
                autoFocus
              />
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button type="submit" className="w-full">View dashboard</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <Helmet>
        <title>Admin Analytics</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <BarChart3 className="h-6 w-6" /> Button Press Analytics
          </h1>
          <div className="flex items-center gap-2">
            {[7, 30, 90].map((d) => (
              <Button
                key={d}
                size="sm"
                variant={days === d ? "default" : "outline"}
                onClick={() => setDays(d)}
              >
                {d}d
              </Button>
            ))}
            <Button size="sm" variant="ghost" onClick={() => fetchEvents(password, days)} disabled={loading}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Refresh"}
            </Button>
            <Button size="sm" variant="outline" onClick={() => { sessionStorage.removeItem(STORAGE_KEY); setPassword(""); }}>
              Sign out
            </Button>
          </div>
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard label="Total clicks" value={stats.total} />
          <StatCard label="Key CTA clicks" value={stats.keyCtas} />
          <StatCard label="Unique sessions" value={stats.sessions} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RankedTable title="Top Key CTAs" rows={stats.topCtas} keyHeader="CTA Key" />
          <RankedTable title="Top button labels" rows={stats.topLabels} keyHeader="Label" />
        </div>

        <RankedTable title="Top pages" rows={stats.topPaths} keyHeader="Path" />

        <Card>
          <CardHeader>
            <CardTitle>Recent events</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>Label</TableHead>
                  <TableHead>CTA</TableHead>
                  <TableHead>Path</TableHead>
                  <TableHead>Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {events.slice(0, 200).map((ev) => (
                  <TableRow key={ev.id}>
                    <TableCell className="whitespace-nowrap text-xs">
                      {new Date(ev.created_at).toLocaleString()}
                    </TableCell>
                    <TableCell className="max-w-[260px] truncate" title={ev.label}>{ev.label}</TableCell>
                    <TableCell>
                      {ev.cta_key ? <Badge>{ev.cta_key}</Badge> : <span className="text-muted-foreground text-xs">—</span>}
                    </TableCell>
                    <TableCell className="max-w-[260px] truncate" title={ev.path}>{ev.path}</TableCell>
                    <TableCell className="text-xs text-muted-foreground">{ev.element_type}</TableCell>
                  </TableRow>
                ))}
                {events.length === 0 && !loading && (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center text-muted-foreground py-6">
                      No events yet
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const StatCard = ({ label, value }: { label: string; value: number }) => (
  <Card>
    <CardContent className="pt-6">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-3xl font-bold mt-1">{value.toLocaleString()}</p>
    </CardContent>
  </Card>
);

const RankedTable = ({ title, rows, keyHeader }: { title: string; rows: [string, number][]; keyHeader: string }) => (
  <Card>
    <CardHeader><CardTitle className="text-base">{title}</CardTitle></CardHeader>
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{keyHeader}</TableHead>
            <TableHead className="text-right w-24">Clicks</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map(([k, v]) => (
            <TableRow key={k}>
              <TableCell className="max-w-[360px] truncate" title={k}>{k}</TableCell>
              <TableCell className="text-right font-mono">{v}</TableCell>
            </TableRow>
          ))}
          {rows.length === 0 && (
            <TableRow>
              <TableCell colSpan={2} className="text-center text-muted-foreground py-4">No data</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

export default AdminAnalytics;

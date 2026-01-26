import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Consideration {
  title: string;
  description: string;
}

interface WhoIsThisForProps {
  title: string;
  intro: string;
  idealCandidates: string[];
  considerations: Consideration[];
}

export const WhoIsThisFor = ({
  title,
  intro,
  idealCandidates,
  considerations,
}: WhoIsThisForProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-foreground mb-4">{title}</h2>
          <p className="font-body text-lg text-muted-foreground">{intro}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Ideal Candidates Checklist */}
          <div className="bg-card rounded-lg shadow-card p-8">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
              Ideal Candidates
            </h3>
            <ul className="space-y-4">
              {idealCandidates.map((candidate, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="font-body text-muted-foreground">
                    {candidate}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Special Considerations */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
              Special Considerations
            </h3>
            {considerations.map((consideration, index) => (
              <Card key={index} className="border-l-4 border-l-accent">
                <CardContent className="p-4">
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    {consideration.title}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground">
                    {consideration.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

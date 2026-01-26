import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList, Zap, Sparkles } from "lucide-react";

interface Phase {
  phase: string;
  icon: "before" | "during" | "after";
  items: string[];
}

interface ResultsStep {
  session: string;
  result: string;
}

interface WhatToExpectProps {
  title: string;
  phases: Phase[];
  resultsTimeline?: ResultsStep[];
}

const phaseIcons = {
  before: ClipboardList,
  during: Zap,
  after: Sparkles,
};

const phaseColors = {
  before: "bg-primary/10 text-primary",
  during: "bg-accent/10 text-accent",
  after: "bg-green-100 text-green-700",
};

export const WhatToExpect = ({ title, phases, resultsTimeline }: WhatToExpectProps) => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-foreground mb-4">{title}</h2>
        </div>

        {/* Phase Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {phases.map((phase, index) => {
            const Icon = phaseIcons[phase.icon];
            const colorClass = phaseColors[phase.icon];
            
            return (
              <Card key={index} className="relative">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-full ${colorClass} flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-heading text-xl">
                    {phase.phase}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="font-body text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-accent mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Results Timeline */}
        {resultsTimeline && resultsTimeline.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h3 className="font-heading font-semibold text-xl text-foreground text-center mb-8">
              Results Timeline
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-6 left-0 right-0 h-1 bg-accent/20 hidden md:block" />
              
              <div className="grid md:grid-cols-3 gap-6">
                {resultsTimeline.map((step, index) => (
                  <div key={index} className="relative text-center">
                    {/* Timeline dot */}
                    <div className="hidden md:flex w-12 h-12 rounded-full bg-accent text-accent-foreground mx-auto mb-4 items-center justify-center font-heading font-bold relative z-10">
                      {index + 1}
                    </div>
                    <h4 className="font-heading font-semibold text-foreground mb-2">
                      {step.session}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground">
                      {step.result}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

import { Check } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
}

interface BenefitsListProps {
  title: string;
  subtitle?: string;
  benefits: Benefit[];
}

export const BenefitsList = ({ title, subtitle, benefits }: BenefitsListProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-foreground mb-4">{title}</h2>
          {subtitle && (
            <p className="font-body text-lg text-muted-foreground">{subtitle}</p>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-card rounded-lg shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Check className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-2 text-lg">
                  {benefit.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

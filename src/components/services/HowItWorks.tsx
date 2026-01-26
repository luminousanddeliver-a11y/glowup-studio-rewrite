interface Step {
  number: number;
  title: string;
  description: string;
}

interface HowItWorksProps {
  title: string;
  subtitle?: string;
  steps: Step[];
}

export const HowItWorks = ({ title, subtitle, steps }: HowItWorksProps) => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-foreground mb-4">{title}</h2>
          {subtitle && (
            <p className="font-body text-lg text-muted-foreground">{subtitle}</p>
          )}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute left-8 top-12 bottom-12 w-0.5 bg-accent/30" />
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 relative">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-xl z-10">
                    {step.number}
                  </div>
                  <div className="flex-1 bg-card p-6 rounded-lg shadow-card">
                    <h3 className="font-heading font-semibold text-foreground mb-2 text-xl">
                      {step.title}
                    </h3>
                    <p className="font-body text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

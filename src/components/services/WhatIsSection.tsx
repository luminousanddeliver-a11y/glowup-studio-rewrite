interface WhatIsSectionProps {
  title: string;
  content: string[];
  highlightText?: string;
}

export const WhatIsSection = ({ title, content, highlightText }: WhatIsSectionProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-foreground mb-8 text-center">{title}</h2>
          
          <div className="space-y-6">
            {content.map((paragraph, index) => (
              <p
                key={index}
                className="font-body text-lg text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
          
          {highlightText && (
            <div className="mt-8 p-6 bg-accent/10 rounded-lg border-l-4 border-accent">
              <p className="font-heading font-medium text-foreground">
                {highlightText}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

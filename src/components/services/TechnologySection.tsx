import { Shield, Award, Zap, CheckCircle } from "lucide-react";

interface TechnologySectionProps {
  title: string;
  subtitle?: string;
  technologyName: string;
  description: string;
  features: string[];
  certifications?: string[];
  deviceImage?: string;
}

export const TechnologySection = ({
  title,
  subtitle,
  technologyName,
  description,
  features,
  certifications,
  deviceImage,
}: TechnologySectionProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-foreground mb-4">{title}</h2>
          {subtitle && (
            <p className="font-body text-lg text-muted-foreground">{subtitle}</p>
          )}
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className={`bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 md:p-12 ${deviceImage ? 'grid md:grid-cols-2 gap-8 items-center' : ''}`}>
            {/* Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-2xl">
                    {technologyName}
                  </h3>
                  <p className="text-muted-foreground font-body">Advanced Technology</p>
                </div>
              </div>
              
              <p className="font-body text-lg text-foreground/80 mb-8">
                {description}
              </p>
              
              <div className="grid gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="font-body text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              {certifications && certifications.length > 0 && (
                <div className="border-t border-border pt-6 mt-6">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-gold" />
                      <span className="font-heading font-semibold text-foreground">Certifications:</span>
                    </div>
                    {certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium"
                      >
                        <Award className="h-3.5 w-3.5" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Device Image */}
            {deviceImage && (
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={deviceImage} 
                    alt={technologyName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, ImageIcon } from "lucide-react";

interface BeforeAfterGalleryProps {
  title: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

const placeholderResults = [
  { area: "Full Legs", sessions: "6 sessions", reduction: "90% reduction" },
  { area: "Underarms", sessions: "6 sessions", reduction: "95% reduction" },
  { area: "Bikini Area", sessions: "8 sessions", reduction: "85% reduction" },
  { area: "Full Back", sessions: "6 sessions", reduction: "88% reduction" },
  { area: "Arms", sessions: "6 sessions", reduction: "92% reduction" },
  { area: "Face", sessions: "8 sessions", reduction: "80% reduction" },
];

export const BeforeAfterGallery = ({
  title,
  description,
  ctaText = "See More Results on Instagram",
  ctaLink = "#",
}: BeforeAfterGalleryProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-foreground mb-4">{title}</h2>
          {description && (
            <p className="font-body text-lg text-muted-foreground">{description}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {placeholderResults.map((result, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-card-hover transition-shadow">
              <CardContent className="p-0">
                {/* Placeholder image area */}
                <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative">
                  <div className="text-center">
                    <ImageIcon className="h-12 w-12 text-muted-foreground/40 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground/60 font-body">
                      Before & After
                    </p>
                  </div>
                  
                  {/* Session badge */}
                  <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-heading font-semibold px-3 py-1 rounded-full">
                    {result.sessions}
                  </div>
                </div>
                
                {/* Result info */}
                <div className="p-4 text-center">
                  <h4 className="font-heading font-semibold text-foreground mb-1">
                    {result.area}
                  </h4>
                  <p className="font-body text-sm text-accent font-medium">
                    {result.reduction}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-body"
          >
            <a href={ctaLink} target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" />
              {ctaText}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

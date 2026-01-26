import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

interface PriceItem {
  area: string;
  singleSession?: string;
  course?: string;
  note?: string;
}

interface PricingTableProps {
  title: string;
  subtitle?: string;
  prices: PriceItem[];
  disclaimer?: string;
}

export const PricingTable = ({ title, subtitle, prices, disclaimer }: PricingTableProps) => {
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
          <div className="bg-card rounded-xl shadow-card overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-primary text-primary-foreground p-4 font-heading font-semibold">
              <div>Treatment Area</div>
              <div className="text-center">Single Session</div>
              <div className="text-center">Course Price</div>
            </div>
            
            {/* Rows */}
            <div className="divide-y divide-border">
              {prices.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="font-body text-foreground">
                    {item.area}
                    {item.note && (
                      <span className="block text-sm text-muted-foreground">{item.note}</span>
                    )}
                  </div>
                  <div className="text-center font-body text-foreground">
                    {item.singleSession || "—"}
                  </div>
                  <div className="text-center font-body font-semibold text-accent">
                    {item.course || "—"}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {disclaimer && (
            <div className="flex items-start gap-3 mt-6 p-4 bg-muted rounded-lg">
              <Info className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <p className="font-body text-sm text-muted-foreground">{disclaimer}</p>
            </div>
          )}
          
          <div className="text-center mt-8">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-body h-14 px-8 text-lg"
            >
              <a href="#contact">Get Your Free Quote</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

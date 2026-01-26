import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroClinic from "@/assets/hero-clinic.jpg";

const testimonials = [
  {
    name: "Mili Begum",
    rating: 5,
    treatment: "General Experience",
    quote: "Clean and lovely decor. The staff are extremely helpful and friendly. Taiba and Kate were great and made me feel comfortable. I highly recommend this place!",
  },
  {
    name: "G",
    rating: 5,
    treatment: "Laser Hair Removal",
    quote: "Made to feel so comfortable during my treatment. I highly recommend the laser used here, especially for people of colour. The technology is truly pain-free.",
  },
  {
    name: "Aisha Oma",
    rating: 5,
    treatment: "Hydrafacial",
    quote: "The Hydrafacial treatment was AMAZING! My skin has never felt so good. The staff were so welcoming and professional.",
  },
];

export const Testimonials = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative hidden lg:block">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroClinic} 
                alt="Modern clinic interior" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Stats Badge */}
            <div className="absolute -bottom-6 -right-6 bg-card px-8 py-6 rounded-xl shadow-xl border border-border">
              <div className="flex items-center gap-2 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <div className="font-heading text-2xl font-bold text-foreground">4.9 / 5</div>
              <div className="font-body text-sm text-muted-foreground">250+ Google Reviews</div>
            </div>
          </div>

          {/* Testimonials Side */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-foreground mb-4">
                What Our Dagenham Clients Are Saying
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Don't just take our word for it. Read real stories from clients who achieved life-changing results at our NHS-approved clinic.
              </p>
            </div>

            {/* Testimonials Stack */}
            <div className="space-y-4 mb-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-card border-border shadow-card"
                >
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      {/* Quote Icon */}
                      <div className="w-10 h-10 shrink-0 rounded-full bg-accent/10 flex items-center justify-center">
                        <Quote className="w-5 h-5 text-accent" />
                      </div>

                      <div className="flex-1">
                        {/* Quote Text */}
                        <p className="font-body text-foreground mb-4 italic text-sm">
                          "{testimonial.quote}"
                        </p>

                        {/* Author & Rating */}
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-heading font-medium text-foreground text-sm">
                              {testimonial.name}
                            </p>
                            <p className="font-body text-xs text-muted-foreground">
                              {testimonial.treatment}
                            </p>
                          </div>
                          <div className="flex gap-0.5">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body"
            >
              <a
                href="https://g.page/r/laserlightskinclinic/review"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read All 250+ Reviews
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

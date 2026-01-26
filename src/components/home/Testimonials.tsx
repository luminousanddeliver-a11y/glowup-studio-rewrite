import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-foreground mb-4">
            What Our Dagenham Clients Are Saying
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Don't just take our word for it. Read real stories from clients who achieved life-changing results at our NHS-approved clinic.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border shadow-card"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Quote className="w-5 h-5 text-accent" />
                </div>

                {/* Quote Text */}
                <p className="font-body text-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Author */}
                <div>
                  <p className="font-heading font-medium text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {testimonial.treatment}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
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
    </section>
  );
};

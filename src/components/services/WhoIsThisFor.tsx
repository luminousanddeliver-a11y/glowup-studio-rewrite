import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-foreground mb-4">{title}</h2>
          <p className="font-body text-lg text-muted-foreground">{intro}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Ideal Candidates Checklist */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-lg shadow-card p-8"
          >
            <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
              Ideal Candidates
            </h3>
            <ul className="space-y-4">
              {idealCandidates.map((candidate, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: index * 0.08 + 0.1, type: "spring" }}
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5"
                  >
                    <Check className="h-4 w-4 text-accent" />
                  </motion.div>
                  <span className="font-body text-muted-foreground">
                    {candidate}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Special Considerations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-heading font-semibold text-xl text-foreground mb-6">
              Special Considerations
            </h3>
            {considerations.map((consideration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-4">
                    <h4 className="font-heading font-semibold text-foreground mb-2">
                      {consideration.title}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground">
                      {consideration.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

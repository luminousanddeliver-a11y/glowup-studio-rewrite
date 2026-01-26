import { forwardRef } from "react";
import { motion } from "framer-motion";
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

export const WhatToExpect = forwardRef<HTMLElement, WhatToExpectProps>(
  function WhatToExpect({ title, phases, resultsTimeline }, ref) {
    return (
      <section ref={ref} className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-foreground mb-4">{title}</h2>
          </motion.div>

          {/* Phase Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {phases.map((phase, index) => {
              const Icon = phaseIcons[phase.icon];
              const colorClass = phaseColors[phase.icon];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Card className="relative h-full">
                    <CardHeader className="pb-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: "spring" }}
                        className={`w-12 h-12 rounded-full ${colorClass} flex items-center justify-center mb-4`}
                      >
                        <Icon className="h-6 w-6" />
                      </motion.div>
                      <CardTitle className="font-heading text-xl">
                        {phase.phase}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {phase.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.15 + itemIndex * 0.05 + 0.3 }}
                            className="font-body text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-accent mt-1">•</span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Results Timeline */}
          {resultsTimeline && resultsTimeline.length > 0 && (
            <div className="max-w-4xl mx-auto">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="font-heading font-semibold text-xl text-foreground text-center mb-8"
              >
                Results Timeline
              </motion.h3>
              <div className="relative">
                {/* Timeline line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  style={{ transformOrigin: "left" }}
                  className="absolute top-6 left-0 right-0 h-1 bg-accent/20 hidden md:block"
                />
                
                <div className="grid md:grid-cols-3 gap-6">
                  {resultsTimeline.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 }}
                      className="relative text-center"
                    >
                      {/* Timeline dot */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.15 + 0.3, type: "spring" }}
                        className="hidden md:flex w-12 h-12 rounded-full bg-accent text-accent-foreground mx-auto mb-4 items-center justify-center font-heading font-bold relative z-10"
                      >
                        {index + 1}
                      </motion.div>
                      <h4 className="font-heading font-semibold text-foreground mb-2">
                        {step.session}
                      </h4>
                      <p className="font-body text-sm text-muted-foreground">
                        {step.result}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
);

WhatToExpect.displayName = "WhatToExpect";

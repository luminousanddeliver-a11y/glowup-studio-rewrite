import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PriceItem {
  area: string;
  singleSession: string;
  course: string;
  savings?: string;
  popular?: boolean;
}

interface PricingTab {
  label: string;
  prices: PriceItem[];
}

interface TabbedPricingTableProps {
  title: string;
  subtitle?: string;
  tabs: PricingTab[];
  offerBanner?: {
    text: string;
    highlight: string;
    href?: string;
  };
  paymentOptions?: string;
  disclaimer?: string;
}

export const TabbedPricingTable = ({
  title,
  subtitle,
  tabs,
  offerBanner,
  paymentOptions,
  disclaimer,
}: TabbedPricingTableProps) => {
  return (
    <section id="pricing" className="section-padding bg-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-foreground mb-4">{title}</h2>
          {subtitle && (
            <p className="font-body text-lg text-muted-foreground">{subtitle}</p>
          )}
        </motion.div>

        {offerBanner && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto mb-8"
          >
            <a href={offerBanner.href || "https://www.phorest.com/salon/laserlightskinclinic/book/service-selection"} target="_blank" rel="noopener noreferrer" data-cta="book_now">
              <motion.div
                animate={{ scale: [1, 1.01, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground rounded-lg p-4 text-center cursor-pointer hover:opacity-90 transition-opacity"
              >
                <p className="font-heading font-bold text-lg">
                  <span className="text-white">{offerBanner.highlight}</span>
                  {" - "}
                  {offerBanner.text}
                </p>
              </motion.div>
            </a>
          </motion.div>
        )}

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue={tabs[0]?.label.toLowerCase()} className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <TabsList className="grid w-full grid-cols-2 mb-8 h-12">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.label}
                    value={tab.label.toLowerCase()}
                    className="font-heading text-base data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </motion.div>

            {tabs.map((tab) => (
              <TabsContent key={tab.label} value={tab.label.toLowerCase()}>
                <PricingTabPanel prices={tab.prices} />
              </TabsContent>
            ))}
          </Tabs>

          {/* Book CTA below pricing */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="flex justify-center mt-8"
          >
            <a
              href="https://www.phorest.com/salon/laserlightskinclinic/book/service-selection"
              target="_blank"
              rel="noopener noreferrer"
              data-cta="book_now"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-semibold h-14 px-8 rounded-md text-lg shadow-lg transition-colors"
            >
              Book Your Appointment
            </a>
          </motion.div>

          {paymentOptions && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="max-w-2xl mx-auto mt-8 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30 rounded-xl p-5 text-center shadow-md"
            >
              <p className="font-heading font-bold text-lg text-primary mb-1">
                💳 0% Interest-Free Payment Plans
              </p>
              <p className="font-body text-base text-foreground">
                Spread the cost over <span className="font-bold">3 – 12 months</span> with no interest, no fees.
              </p>
              {paymentOptions && (
                <p className="font-body text-sm text-muted-foreground mt-2">{paymentOptions}</p>
              )}
            </motion.div>
          )}

          {disclaimer && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-center mt-4 font-body text-sm text-muted-foreground/80"
            >
              {disclaimer}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

const PricingTabPanel = ({ prices }: { prices: PriceItem[] }) => {
  const [expanded, setExpanded] = useState(false);
  // Show popular items first; if none flagged, show first 5
  const popularPrices = prices.filter((p) => p.popular);
  const visibleCount = popularPrices.length > 0 ? popularPrices.length : Math.min(5, prices.length);
  const ordered = popularPrices.length > 0
    ? [...popularPrices, ...prices.filter((p) => !p.popular)]
    : prices;
  const visible = expanded ? ordered : ordered.slice(0, visibleCount);
  const hiddenCount = ordered.length - visibleCount;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-card rounded-lg shadow-card overflow-hidden"
    >
      <Table>
        <TableHeader>
          <TableRow className="bg-primary hover:bg-primary">
            <TableHead className="text-primary-foreground font-heading font-semibold py-4">
              Treatment Area
            </TableHead>
            <TableHead className="text-primary-foreground font-heading font-semibold py-4 text-center">
              Single Session
            </TableHead>
            <TableHead className="text-primary-foreground font-heading font-semibold py-4 text-center">
              Course of 6
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <AnimatePresence initial={false}>
            {visible.map((price, index) => (
              <motion.tr
                key={`${price.area}-${index}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                className="hover:bg-muted/50 transition-colors"
              >
                <TableCell className="font-body font-medium text-foreground py-4">
                  <span className="inline-flex items-center gap-2">
                    {price.area}
                    {price.popular && (
                      <span className="inline-flex items-center gap-1 text-xs bg-accent/15 text-accent px-2 py-0.5 rounded-full font-semibold">
                        <Star className="h-3 w-3 fill-current" /> Popular
                      </span>
                    )}
                  </span>
                </TableCell>
                <TableCell className="font-body text-center text-muted-foreground py-4">
                  {price.singleSession}
                </TableCell>
                <TableCell className="font-body text-center py-4">
                  <span className="text-foreground font-medium">{price.course}</span>
                  {price.savings && (
                    <span className="block text-sm text-accent font-medium">
                      {price.savings}
                    </span>
                  )}
                </TableCell>
              </motion.tr>
            ))}
          </AnimatePresence>
        </TableBody>
      </Table>

      {hiddenCount > 0 && (
        <div className="flex justify-center border-t border-border bg-muted/20">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-2 py-4 px-6 font-heading font-semibold text-primary hover:text-primary/80 transition-colors"
            aria-expanded={expanded}
          >
            {expanded ? (
              <>
                Show fewer prices <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                Show {hiddenCount} more {hiddenCount === 1 ? "price" : "prices"} <ChevronDown className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      )}
    </motion.div>
  );
};

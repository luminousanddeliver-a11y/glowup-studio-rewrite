import { motion } from "framer-motion";
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
            <motion.div
              animate={{ scale: [1, 1.01, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground rounded-lg p-4 text-center"
            >
              <p className="font-heading font-bold text-lg">
                <span className="text-white">{offerBanner.highlight}</span>
                {" - "}
                {offerBanner.text}
              </p>
            </motion.div>
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
                      {tab.prices.map((price, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.03 }}
                          className="hover:bg-muted/50 transition-colors"
                        >
                          <TableCell className="font-body font-medium text-foreground py-4">
                            {price.area}
                          </TableCell>
                          <TableCell className="font-body text-center text-muted-foreground py-4">
                            {price.singleSession}
                          </TableCell>
                          <TableCell className="font-body text-center py-4">
                            <span className="text-foreground font-medium">
                              {price.course}
                            </span>
                            {price.savings && (
                              <span className="block text-sm text-accent font-medium">
                                {price.savings}
                              </span>
                            )}
                          </TableCell>
                        </motion.tr>
                      ))}
                    </TableBody>
                  </Table>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>

          {paymentOptions && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-center mt-6 font-body text-muted-foreground"
            >
              {paymentOptions}
            </motion.p>
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

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface PriceRangeFilterProps {
  minPrice: number;
  maxPrice: number;
  currentMin: number;
  currentMax: number;
  onChange: (min: number, max: number) => void;
}

export const PriceRangeFilter = ({
  minPrice,
  maxPrice,
  currentMin,
  currentMax,
  onChange,
}: PriceRangeFilterProps) => {
  const [localRange, setLocalRange] = useState([currentMin, currentMax]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setLocalRange([currentMin, currentMax]);
  }, [currentMin, currentMax]);

  const handleApply = () => {
    onChange(localRange[0], localRange[1]);
    setIsOpen(false);
  };

  const handleReset = () => {
    setLocalRange([minPrice, maxPrice]);
    onChange(minPrice, maxPrice);
    setIsOpen(false);
  };

  const isFiltered = currentMin !== minPrice || currentMax !== maxPrice;

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={isFiltered ? "default" : "outline"}
          size="sm"
          className={`gap-2 ${isFiltered ? 'bg-accent text-accent-foreground' : ''}`}
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span className="hidden sm:inline">
            {isFiltered 
              ? `£${currentMin} - £${currentMax}` 
              : "Price Range"
            }
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-card border-border z-50" align="start">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-heading font-semibold text-foreground">Price Range</h4>
            {isFiltered && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleReset}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Reset
              </Button>
            )}
          </div>
          
          <div className="space-y-6">
            <div className="pt-4">
              <Slider
                value={localRange}
                min={minPrice}
                max={maxPrice}
                step={1}
                onValueChange={(value) => setLocalRange(value)}
                className="cursor-pointer"
              />
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <motion.div
                key={localRange[0]}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="bg-muted px-3 py-1.5 rounded-md font-body font-medium"
              >
                £{localRange[0]}
              </motion.div>
              <span className="text-muted-foreground">to</span>
              <motion.div
                key={localRange[1]}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="bg-muted px-3 py-1.5 rounded-md font-body font-medium"
              >
                £{localRange[1]}
              </motion.div>
            </div>
          </div>
          
          <Button onClick={handleApply} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            Apply Filter
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

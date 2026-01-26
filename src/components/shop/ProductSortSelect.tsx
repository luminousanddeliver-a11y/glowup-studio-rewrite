import { ArrowUpDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type SortOption = "featured" | "price-asc" | "price-desc" | "newest" | "bestselling";

interface ProductSortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "newest", label: "Newest" },
  { value: "bestselling", label: "Best Selling" },
];

export const ProductSortSelect = ({ value, onChange }: ProductSortSelectProps) => {
  return (
    <div className="flex items-center gap-2">
      <ArrowUpDown className="w-4 h-4 text-muted-foreground hidden sm:block" />
      <Select value={value} onValueChange={(v) => onChange(v as SortOption)}>
        <SelectTrigger className="w-[180px] bg-card border-border">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent className="bg-card border-border z-50">
          {sortOptions.map((option) => (
            <SelectItem 
              key={option.value} 
              value={option.value}
              className="font-body"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

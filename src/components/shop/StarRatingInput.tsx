import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingInputProps {
  value: number;
  onChange: (rating: number) => void;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

export const StarRatingInput = ({
  value,
  onChange,
  size = "md",
  disabled = false,
}: StarRatingInputProps) => {
  const [hoverValue, setHoverValue] = useState(0);

  const sizeClasses = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const handleMouseEnter = (index: number) => {
    if (!disabled) setHoverValue(index);
  };

  const handleMouseLeave = () => {
    setHoverValue(0);
  };

  const handleClick = (index: number) => {
    if (!disabled) onChange(index);
  };

  const displayValue = hoverValue || value;

  return (
    <div 
      className="flex items-center gap-1"
      onMouseLeave={handleMouseLeave}
    >
      {[1, 2, 3, 4, 5].map((index) => (
        <button
          key={index}
          type="button"
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          disabled={disabled}
          className={cn(
            "transition-transform focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded",
            !disabled && "hover:scale-110 cursor-pointer",
            disabled && "cursor-not-allowed opacity-60"
          )}
          aria-label={`Rate ${index} out of 5 stars`}
        >
          <Star
            className={cn(
              sizeClasses[size],
              "transition-colors",
              index <= displayValue
                ? "text-amber-400 fill-amber-400"
                : "text-muted-foreground/30"
            )}
          />
        </button>
      ))}
    </div>
  );
};

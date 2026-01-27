import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          onClick={handlePrint}
          className="text-muted-foreground hover:text-primary print:hidden"
        >
          <Printer className="h-4 w-4 mr-2" />
          Print Article
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Print or save as PDF</p>
      </TooltipContent>
    </Tooltip>
  );
};

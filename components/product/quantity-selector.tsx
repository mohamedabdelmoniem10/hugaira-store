import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
  small?: boolean;
}

export default function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
  max = 99,
  small = false
}: QuantitySelectorProps) {
  return (
    <div className={cn(
      "flex items-center border border-input rounded-md",
      small ? "h-8" : "h-10"
    )}>
      <Button
        variant="ghost"
        size={small ? "icon" : "default"}
        className={cn(
          "rounded-none border-r border-input h-full",
          small ? "w-8 px-0" : "w-10 px-3"
        )}
        onClick={onDecrease}
        disabled={quantity <= min}
      >
        <Minus className={small ? "h-3 w-3" : "h-4 w-4"} />
        <span className="sr-only">Decrease quantity</span>
      </Button>
      
      <div className={cn(
        "flex-1 text-center",
        small ? "w-8 text-sm" : "w-10"
      )}>
        {quantity}
      </div>
      
      <Button
        variant="ghost"
        size={small ? "icon" : "default"}
        className={cn(
          "rounded-none border-l border-input h-full",
          small ? "w-8 px-0" : "w-10 px-3"
        )}
        onClick={onIncrease}
        disabled={quantity >= max}
      >
        <Plus className={small ? "h-3 w-3" : "h-4 w-4"} />
        <span className="sr-only">Increase quantity</span>
      </Button>
    </div>
  );
}
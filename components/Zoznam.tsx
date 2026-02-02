import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface ZoznamProps {
  polozky: readonly string[];
  trieda?: string;
  velkost?: "small" | "medium" | "large";
}

export function Zoznam({
  polozky,
  trieda = "",
  velkost = "medium",
}: ZoznamProps) {
  const velkostTriedy = {
    small: "text-sm space-y-2",
    medium: "text-base space-y-3",
    large: "text-lg space-y-4",
  }[velkost];

  const ikonaVelkost = {
    small: "w-4 h-4",
    medium: "w-5 h-5",
    large: "w-6 h-6",
  }[velkost];

  return (
    <ul className={cn(velkostTriedy, trieda)}>
      {polozky.map((polozka, index) => (
        <li key={index} className="flex items-start">
          <Check
            className={cn("text-primary mr-3 mt-1 shrink-0", ikonaVelkost)}
          />
          <span className="text-foreground leading-relaxed">{polozka}</span>
        </li>
      ))}
    </ul>
  );
}

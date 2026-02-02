import { cn } from "@/lib/utils";

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

  return (
    <ul className={cn(velkostTriedy, trieda)}>
      {polozky.map((polozka, index) => (
        <li key={index} className="flex items-start">
          <span className="text-primary mr-3 mt-1 shrink-0">✓</span>
          <span className="text-foreground leading-relaxed">{polozka}</span>
        </li>
      ))}
    </ul>
  );
}

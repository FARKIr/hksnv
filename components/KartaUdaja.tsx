import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface KartaUdajaProps {
  ikona: ReactNode;
  nazov: string;
  hodnota: string;
  popis?: string;
  farba?: "primary" | "secondary" | "accent" | "success";
}

export function KartaUdaja({ ikona, nazov, hodnota, popis, farba = "primary" }: KartaUdajaProps) {
  const farbaTriedy = {
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-secondary/50 text-secondary-foreground border-secondary/50",
    accent: "bg-accent/10 text-accent border-accent/20",
    success: "bg-green-50 text-green-700 border-green-200"
  }[farba];

  return (
    <div className="bg-card rounded-xl shadow-sm border border-border p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        <div className={cn("w-12 h-12 rounded-full flex items-center justify-center", farbaTriedy)}>
          {ikona}
        </div>
        <h3 className="ml-4 text-lg font-semibold text-card-foreground">{nazov}</h3>
      </div>
      <p className="text-xl font-bold text-foreground">{hodnota}</p>
      {popis && <p className="text-muted-foreground mt-2 text-sm">{popis}</p>}
    </div>
  );
}

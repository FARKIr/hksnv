import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SekciaProps {
  id?: string;
  titulok: string;
  children: ReactNode;
  trieda?: string;
  pozadie?: "default" | "secondary" | "accent";
}

export function Sekcia({
  id,
  titulok,
  children,
  trieda = "",
  pozadie = "default",
}: SekciaProps) {
  const pozadieTriedy = {
    default: "bg-background",
    secondary: "bg-secondary",
    accent: "bg-accent/5",
  }[pozadie];

  return (
    <section id={id} className={cn("py-16 md:py-20", pozadieTriedy, trieda)}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 md:mb-16">
          {titulok}
        </h2>
        {children}
      </div>
    </section>
  );
}

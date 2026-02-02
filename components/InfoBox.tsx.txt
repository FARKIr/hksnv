import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface InfoBoxProps {
  typ: "info" | "warning" | "success" | "error";
  titulok: string;
  obsah: string;
  ikona?: ReactNode;
}

export function InfoBox({ typ, titulok, obsah, ikona }: InfoBoxProps) {
  const typTriedy = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    success: "bg-green-50 border-green-200 text-green-800",
    error: "bg-red-50 border-red-200 text-red-800"
  }[typ];

  return (
    <div className={cn("rounded-lg border p-4", typTriedy)}>
      <div className="flex items-start">
        {ikona && <div className="mr-3 mt-0.5">{ikona}</div>}
        <div>
          <h4 className="font-semibold mb-1">{titulok}</h4>
          <p className="text-sm leading-relaxed">{obsah}</p>
        </div>
      </div>
    </div>
  );
}

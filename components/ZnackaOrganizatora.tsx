"use client";

import Image from "next/image";
import { udajeTurnaja } from "@/lib/udajeTurnaja";

export function ZnackaOrganizatora({ velkost = "medium" }: { velkost?: "small" | "medium" | "large" }) {
  const velkosti = {
    small: { width: 32, height: 32, trieda: "h-8 w-auto" },
    medium: { width: 40, height: 40, trieda: "h-10 w-auto" },
    large: { width: 48, height: 48, trieda: "h-12 w-auto" }
  }[velkost];

  return (
    <div className="flex items-center space-x-3">
      <Image
        src="/logo_hksnv.webp"
        alt="HK Spišská Nová Ves logo"
        width={velkosti.width}
        height={velkosti.height}
        className={velkosti.trieda}
      />
      <div className="text-foreground">
        <p className="font-semibold">{udajeTurnaja.organizator}</p>
        <p className="text-sm text-muted-foreground">Spišská Nová Ves</p>
      </div>
    </div>
  );
}

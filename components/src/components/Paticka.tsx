"use client";

import { udajeTurnaja } from "@/lib/udajeTurnaja";
import { ZnackaOrganizatora } from "@/components/src/components/ZnackaOrganizatora";

export function Paticka() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Textová časť */}
          <div className="text-center lg:text-left space-y-4">
            <p className="text-lg md:text-xl font-medium">
              {udajeTurnaja.podpis}
            </p>
            <div className="space-y-2">
              <p className="text-primary-foreground/80">
                Organizátor: {udajeTurnaja.organizator}
              </p>
              <p className="text-primary-foreground/60 text-sm">
                Spišská Nová Ves
              </p>
            </div>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <ZnackaOrganizatora velkost="medium" />
          </div>
        </div>

        {/* Bottom border */}
        <div className="mt-8 pt-8 border-t border-primary/30">
          <p className="text-center text-primary-foreground/60 text-sm">
            © 2026 {udajeTurnaja.organizator}. Všetky práva vyhradené.
          </p>
        </div>
      </div>
    </footer>
  );
}

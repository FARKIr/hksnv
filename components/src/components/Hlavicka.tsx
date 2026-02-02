"use client";

import { ZnackaOrganizatora } from "@/components/src/components/ZnackaOrganizatora";

export function Hlavicka() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo a organizátor */}
          <ZnackaOrganizatora velkost="small" />

          {/* Desktop navigácia */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#prehlad"
              className="text-foreground/80 hover:text-foreground font-medium transition-colors text-sm"
            >
              Prehľad
            </a>
            <a
              href="#balik"
              className="text-foreground/80 hover:text-foreground font-medium transition-colors text-sm"
            >
              Cenový balík
            </a>
            <a
              href="#timy"
              className="text-foreground/80 hover:text-foreground font-medium transition-colors text-sm"
            >
              Tímy
            </a>
            <a
              href="#pravidla"
              className="text-foreground/80 hover:text-foreground font-medium transition-colors text-sm"
            >
              Pravidlá
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className="p-2 rounded-md text-foreground/60 hover:text-foreground hover:bg-muted transition-colors">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile navigácia */}
        <div className="lg:hidden border-t border-border py-4">
          <nav className="flex flex-col space-y-3">
            <a
              href="#prehlad"
              className="text-foreground/80 hover:text-foreground font-medium transition-colors text-sm py-2"
            >
              Prehľad
            </a>
            <a
              href="#balik"
              className="text-foreground/80 hover:text-foreground font-medium transition-colors text-sm py-2"
            >
              Cenový balík
            </a>
            <a
              href="#timy"
              className="text-foreground/80 hover:text-foreground font-medium transition-colors text-sm py-2"
            >
              Tímy
            </a>
            <a
              href="#pravidla"
              className="text-foreground/80 hover:text-foreground font-medium transition-colors text-sm py-2"
            >
              Pravidlá
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

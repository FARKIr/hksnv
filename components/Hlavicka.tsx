"use client";

import Image from "next/image";
import { udajeTurnaja } from "@/lib/udajeTurnaja";

export function Hlavicka() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="/logo_hksnv.webp"
              alt="HK Spišská Nová Ves logo"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-blue-900">
                Spišská Nová Ves
              </h1>
              <p className="text-sm text-gray-600">{udajeTurnaja.nazov}</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a
              href="#prehlad"
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
            >
              Prehľad
            </a>
            <a
              href="#balik"
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
            >
              Balík
            </a>
            <a
              href="#timy"
              className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
            >
              Tímy
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

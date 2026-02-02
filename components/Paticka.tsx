"use client";

import Image from "next/image";
import { udajeTurnaja } from "@/lib/udajeTurnaja";

export function Paticka() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg font-medium mb-2">{udajeTurnaja.podpis}</p>
            <p className="text-blue-200">
              Organizátor: {udajeTurnaja.organizator}
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <Image
              src="/logo_hksnv.webp"
              alt="HK Spišská Nová Ves logo"
              width={40}
              height={40}
              className="h-10 w-auto opacity-80"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

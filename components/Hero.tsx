"use client";

import Image from "next/image";
import { udajeTurnaja } from "@/lib/udajeTurnaja";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero_img.webp"
          alt="Hokejový turnaj Spiško Cup"
          fill
          className="object-cover"
          priority
        />
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-primary/80 via-primary/60 to-primary/90"></div>
        {/* Ice texture overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-transparent via-white/5 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative min-h-[70vh] md:min-h-[80vh] flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center md:text-left max-w-4xl">
            {/* Hlavný nadpis */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {udajeTurnaja.nazov}
            </h1>

            {/* Podnadpis */}
            <p className="text-xl sm:text-2xl md:text-3xl text-primary-foreground/90 mb-4 font-medium">
              Oficiálne informácie pre tímy
            </p>

            {/* Detaily */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-lg md:text-xl text-primary-foreground/80">
              <div className="flex items-center justify-center md:justify-start">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                {udajeTurnaja.miesto}
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                {udajeTurnaja.datum}
              </div>
            </div>

            {/* Kategoria */}
            <div className="mt-8 inline-block bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-lg px-6 py-3">
              <p className="text-accent-foreground font-medium text-sm md:text-base">
                {udajeTurnaja.kategoria}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent"></div>
    </section>
  );
}

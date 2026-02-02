"use client";

import Image from "next/image";
import { udajeTurnaja } from "@/lib/udajeTurnaja";

export function Hero() {
  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero_img.webp"
          alt="Hokejový turnaj Spiško Cup"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/70"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {udajeTurnaja.nazov}
          </h1>
          <p className="text-xl md:text-2xl mb-2 text-blue-100">
            Oficiálne informácie pre tímy
          </p>
          <p className="text-lg text-gray-200 max-w-2xl">
            {udajeTurnaja.miesto} • {udajeTurnaja.datum}
          </p>
        </div>
      </div>
    </section>
  );
}

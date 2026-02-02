import { Hlavicka } from "@/components/src/components/Hlavicka";
import { Hero } from "@/components/src/components/Hero";
import { RychlyPrehlad } from "@/components/src/components/RychlyPrehlad";
import { CenovyBalik } from "@/components/src/components/CenovyBalik";
import { TimySection } from "@/components/src/sections/TimySection";
import { PravidlaSection } from "@/components/src/sections/PravidlaSection";
import { Paticka } from "@/components/src/components/Paticka";

export default function TurnajPage() {
  return (
    <div className="min-h-screen bg-background">
      <Hlavicka />
      <main>
        <Hero />
        <RychlyPrehlad />
        <CenovyBalik />
        <TimySection />
        <PravidlaSection />
      </main>
      <Paticka />
    </div>
  );
}

import { Hlavicka } from "@/components/Hlavicka";
import { Hero } from "@/components/Hero";
import { RychlyPrehlad } from "@/components/RychlyPrehlad";
import { CenovyBalik } from "@/components/CenovyBalik";
import { TimySection } from "@/components/TimySection";
import { PravidlaSection } from "@/components/PravidlaSection";
import { Paticka } from "@/components/Paticka";

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

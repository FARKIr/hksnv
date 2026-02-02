import { Hlavicka } from "@/components/Hlavicka";
import { Hero } from "@/components/Hero";
import { RychlyPrehlad } from "@/components/RychlyPrehlad";
import { CenovyBalik } from "@/components/CenovyBalik";
import { Timy } from "@/components/Timy";
import { Paticka } from "@/components/Paticka";

export default function TurnajPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hlavicka />
      <main>
        <Hero />
        <RychlyPrehlad />
        <CenovyBalik />
        <Timy />
      </main>
      <Paticka />
    </div>
  );
}

import { Sekcia } from "@/components/Sekcia";
import { KartaUdaja } from "@/components/KartaUdaja";
import { udajeTurnaja } from "@/lib/udajeTurnaja";

export function RychlyPrehlad() {
  return (
    <Sekcia id="prehlad" titulok="Rýchly prehľad" pozadie="secondary">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <KartaUdaja
          ikona={<span className="text-2xl">💰</span>}
          nazov="Štartovné"
          hodnota={udajeTurnaja.startovne.cena}
          popis="za tím"
          farba="primary"
        />

        <KartaUdaja
          ikona={<span className="text-2xl">📅</span>}
          nazov="Termín úhrady"
          hodnota={udajeTurnaja.startovne.terminUhrady}
          popis="platba na účet"
          farba="success"
        />

        <KartaUdaja
          ikona={<span className="text-2xl">🏦</span>}
          nazov="IBAN"
          hodnota={udajeTurnaja.startovne.iban}
          farba="accent"
        />
      </div>
    </Sekcia>
  );
}

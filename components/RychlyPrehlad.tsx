import { Sekcia } from "@/components/Sekcia";
import { KartaUdaja } from "@/components/KartaUdaja";
import { udajeTurnaja } from "@/lib/udajeTurnaja";
import { DollarSign, Calendar, Building2, UserPlus } from "lucide-react";

export function RychlyPrehlad() {
  return (
    <Sekcia id="prehlad" titulok="Rýchly prehľad" pozadie="secondary">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        <KartaUdaja
          ikona={<UserPlus className="w-6 h-6" />}
          nazov="Termín prihlášky"
          hodnota={udajeTurnaja.terminPrihlasky}
          farba="accent"
        />

        <KartaUdaja
          ikona={<DollarSign className="w-6 h-6" />}
          nazov="Štartovné"
          hodnota={udajeTurnaja.startovne.cena}
          popis="za tím"
          farba="primary"
        />

        <KartaUdaja
          ikona={<Calendar className="w-6 h-6" />}
          nazov="Termín úhrady"
          hodnota={udajeTurnaja.startovne.terminUhrady}
          popis="platba na účet"
          farba="success"
        />

        <KartaUdaja
          ikona={<Building2 className="w-6 h-6" />}
          nazov="IBAN"
          hodnota={udajeTurnaja.startovne.iban}
          farba="accent"
        />
      </div>
    </Sekcia>
  );
}

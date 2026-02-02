import { Sekcia } from "@/components/src/components/Sekcia";
import { Zoznam } from "@/components/src/components/Zoznam";
import { InfoBox } from "@/components/src/components/InfoBox";
import { udajeTurnaja } from "@/lib/udajeTurnaja";

export function CenovyBalik() {
  return (
    <Sekcia id="balik" titulok="Cenový balík turnaja">
      <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-8 lg:p-10">
          {/* Zahrnuté služby */}
          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-6">
              V cene štartovného je zahrnuté:
            </h3>
            <Zoznam
              polozky={udajeTurnaja.vCeneStartovneho}
              velkost="medium"
              trieda="text-foreground"
            />
          </div>

          {/* Stravné, ubytovanie, poznámka */}
          <div className="space-y-6">
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
              <h4 className="font-semibold text-primary mb-3">Stravné:</h4>
              <p className="text-foreground">{udajeTurnaja.stravne}</p>
            </div>

            <div className="bg-secondary/50 rounded-xl p-6 border border-secondary/50">
              <h4 className="font-semibold text-secondary-foreground mb-3">
                Ubytovanie:
              </h4>
              <p className="text-secondary-foreground">
                {udajeTurnaja.ubytovanie}
              </p>
            </div>

            <InfoBox
              typ="warning"
              titulok="Dôležitá poznámka:"
              obsah={udajeTurnaja.poznamka}
            />
          </div>
        </div>
      </div>
    </Sekcia>
  );
}

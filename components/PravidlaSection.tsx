"use client";

import { Sekcia } from "@/components/Sekcia";
import { Zoznam } from "@/components/Zoznam";
import { InfoBox } from "@/components/InfoBox";
import { udajeTurnaja } from "@/lib/udajeTurnaja";
import { Clock, Trophy, Users, AlertTriangle } from "lucide-react";

export function PravidlaSection() {
  return (
    <>
      {/* Hrací systém */}
      <Sekcia id="pravidla" titulok="Hrací systém" pozadie="default">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-lg font-semibold text-card-foreground">
                  Systém a čas
                </h3>
              </div>
              <p className="text-foreground mb-2">
                <strong>Systém:</strong> {udajeTurnaja.hraciSystem.system}
              </p>
              <p className="text-foreground">
                <strong>Hrací čas:</strong> {udajeTurnaja.hraciSystem.hraciCas}
              </p>
            </div>

            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center mb-4">
                <Trophy className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-lg font-semibold text-card-foreground">
                  Bodovanie
                </h3>
              </div>
              <Zoznam
                polozky={udajeTurnaja.hraciSystem.body}
                velkost="small"
                trieda="text-foreground"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-accent mr-3" />
                <h3 className="text-lg font-semibold text-card-foreground">
                  Špeciálne pravidlá
                </h3>
              </div>
              <Zoznam
                polozky={udajeTurnaja.specialnePravidla}
                velkost="small"
                trieda="text-foreground"
              />
            </div>

            <InfoBox
              typ="info"
              titulok="Súťaž v zručnosti"
              obsah={udajeTurnaja.sutazZrucnosti}
              ikona={<Users className="w-5 h-5" />}
            />
          </div>
        </div>
      </Sekcia>

      {/* Organizačné pokyny */}
      <Sekcia id="organizacne" titulok="Organizačné pokyny" pozadie="secondary">
        <div className="bg-card rounded-2xl border border-border shadow-sm p-8 lg:p-10">
          <Zoznam
            polozky={udajeTurnaja.organizacnePokyny}
            velkost="medium"
            trieda="text-foreground"
          />
        </div>
      </Sekcia>
    </>
  );
}

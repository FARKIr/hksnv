import { Sekcia } from "@/components/Sekcia";
import { udajeTurnaja } from "@/lib/udajeTurnaja";

export function Timy() {
  return (
    <Sekcia id="timy" titulok="Tímy" pozadie="secondary">
      <div className="bg-card rounded-2xl border border-border shadow-sm p-8 lg:p-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {udajeTurnaja.timy.map((tim, index) => (
            <div
              key={index}
              className="group relative bg-linear-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20 hover:from-primary/20 hover:to-primary/10 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:text-primary/90 transition-colors">
                  {tim.skupina}
                </div>
                <div className="text-xl text-foreground font-medium group-hover:text-foreground/90 transition-colors">
                  {tim.tim}
                </div>
              </div>
              {/* Ice texture effect */}
              <div className="absolute inset-0 bg-linear-to-t from-transparent via-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Počet tímov */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            Celkovo {udajeTurnaja.timy.length} tímov v turnaji
          </p>
        </div>
      </div>
    </Sekcia>
  );
}

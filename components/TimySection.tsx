"use client";

import { udajeTurnaja } from "@/lib/udajeTurnaja";

export function TimySection() {
  return (
    <section id="timy" className="py-16 md:py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 md:mb-16">
          Tímy
        </h2>
        
        <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Skupina
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Tím
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {udajeTurnaja.timy.map((tim, index) => (
                  <tr 
                    key={index} 
                    className="hover:bg-muted/30 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-lg font-bold text-primary">
                        {tim.skupina}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-lg font-medium text-foreground">
                        {tim.tim || (
                          <span className="text-muted-foreground italic">TBD</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Počet tímov */}
          <div className="px-6 py-4 bg-muted/30 border-t border-border">
            <p className="text-center text-muted-foreground text-sm">
              Celkovo {udajeTurnaja.timy.length} tímov v turnaji
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

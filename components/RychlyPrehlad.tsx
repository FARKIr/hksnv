import { udajeTurnaja } from "@/lib/udajeTurnaja";

export function RychlyPrehlad() {
  return (
    <section id="prehlad" className="py-12 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Rýchly prehľad
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-800">Štartovné</h3>
            </div>
            <p className="text-2xl font-bold text-blue-700">{udajeTurnaja.startovne.cena}</p>
            <p className="text-gray-600 mt-2">za tím</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-800">Termín úhrady</h3>
            </div>
            <p className="text-lg font-semibold text-green-700">{udajeTurnaja.startovne.terminUhrady}</p>
            <p className="text-gray-600 mt-2">platba na účet</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏦</span>
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-800">IBAN</h3>
            </div>
            <p className="text-sm font-mono text-purple-700 break-all">{udajeTurnaja.startovne.iban}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

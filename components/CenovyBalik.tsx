import { udajeTurnaja } from "@/lib/udajeTurnaja";

export function CenovyBalik() {
  return (
    <section id="balik" className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Cenový balík turnaja
        </h2>
        
        <div className="bg-linear-to-brrom-blue-50 to-white rounded-lg shadow-lg p-8 border border-blue-100">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                V cene štartovného je zahrnuté:
              </h3>
              <ul className="space-y-3">
                {udajeTurnaja.vCeneStartovneho.map((polozka, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{polozka}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="bg-blue-100 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-blue-900 mb-2">Stravné:</h4>
                <p className="text-blue-800">{udajeTurnaja.stravne}</p>
              </div>
              
              <div className="bg-green-100 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-green-900 mb-2">Ubytovanie:</h4>
                <p className="text-green-800">{udajeTurnaja.ubytovanie}</p>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Poznámka:</h4>
                <p className="text-yellow-700 text-sm">
                  {udajeTurnaja.poznamka}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

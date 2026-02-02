import { udajeTurnaja } from "@/lib/udajeTurnaja";

export function Timy() {
  return (
    <section id="timy" className="py-12 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Tímy
        </h2>
        
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {udajeTurnaja.timy.map((tim, index) => (
              <div key={index} className="flex items-center justify-center bg-blue-50 rounded-lg p-4 border border-blue-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700">{tim.skupina}</div>
                  <div className="text-xl text-gray-700 mt-1">{tim.tim}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

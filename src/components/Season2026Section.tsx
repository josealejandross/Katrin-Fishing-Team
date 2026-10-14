import React from 'react';

interface SimpleSpecies {
  name: string;
  catches: number;
}

const SPECIES_LIST: SimpleSpecies[] = [
  { name: 'Marlin Azul', catches: 1 },
  { name: 'Pez Vela', catches: 2 },
  { name: 'Dorado', catches: 1 }
];

export const Season2026Section: React.FC = () => {
  const totalCatches = SPECIES_LIST.reduce((sum, item) => sum + item.catches, 0);

  return (
    <section id="temporada-2026" className="w-full bg-[#080c14] text-white py-28 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-800 pb-8 mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
              Temporada 2026
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
              ESPECIES CAPTURADAS
            </h2>
          </div>

          {/* Suma actual de todo */}
          <div className="text-left md:text-right">
            <span className="text-4xl sm:text-6xl font-black text-white block leading-none">
              {totalCatches.toString().padStart(2, '0')}
            </span>
            <span className="text-xs uppercase tracking-wider text-neutral-400 mt-2 block font-medium">
              Capturas Totales Acumuladas
            </span>
          </div>
        </div>

        {/* Solo Nombre de la Especie y Número de Capturas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIES_LIST.map((item) => (
            <div
              key={item.name}
              className="p-6 bg-[#0c121e] border border-neutral-850 flex items-center justify-between shadow-lg"
            >
              <span className="text-xl font-bold uppercase text-white tracking-wide">
                {item.name}
              </span>
              <span className="text-3xl font-black text-cyan-400 ml-4">
                {item.catches}
              </span>
            </div>
          ))}
        </div>

        {/* Dato oficial de registro */}
        <div className="mt-8 pt-4 border-t border-neutral-850/80 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-neutral-400 gap-2">
          <span>Dato: Registro desde el 26 de septiembre, 2026</span>
          <span className="text-neutral-500">Katrin Fishing Team · Temporada 2026</span>
        </div>
      </div>
    </section>
  );
};

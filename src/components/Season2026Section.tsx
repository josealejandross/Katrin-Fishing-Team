import React from 'react';

interface SimpleSpecies {
  name: string;
  catches: number;
}

const SPECIES_LIST: SimpleSpecies[] = [
  { name: 'Marlin Azul', catches: 18 },
  { name: 'Pez Vela', catches: 34 },
  { name: 'Atún Aleta Amarilla', catches: 28 },
  { name: 'Mahi Mahi / Dorado', catches: 42 },
  { name: 'Wahoo', catches: 19 },
  { name: 'Pez Espada', catches: 5 }
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
            <span className="text-4xl sm:text-6xl font-heading font-black text-white block leading-none">
              {totalCatches}
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 mt-2 block">
              Capturas Totales Acumuladas
            </span>
          </div>
        </div>

        {/* Solo Nombre de la Especie y Número de Capturas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIES_LIST.map((item) => (
            <div
              key={item.name}
              className="p-6 bg-[#0c121e] border border-neutral-850 flex items-center justify-between"
            >
              <span className="font-heading text-xl font-bold uppercase text-white tracking-wide">
                {item.name}
              </span>
              <span className="text-3xl font-heading font-black text-white ml-4">
                {item.catches}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

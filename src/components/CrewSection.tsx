import React from 'react';
import { CREW_MEMBERS } from '../data/mockData';
import { CrewAvatarCanvas } from './VisualAssets';

export const CrewSection: React.FC = () => {
  return (
    <section id="tripulacion" className="w-full bg-[#080c14] text-white py-28 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-800 pb-8 mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
              El Equipo Humano
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
              LA TRIPULACIÓN
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-400 font-normal max-w-md leading-relaxed">
            Hombres y mujeres de mar guiados por el instinto náutico, la disciplina en cubierta y la camaradería en cada jornada.
          </p>
        </div>

        {/* Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 -mx-6 px-6 no-scrollbar touch-pan-x sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:overflow-visible sm:pb-0">
          {CREW_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="shrink-0 w-[74vw] max-w-[280px] snap-start sm:w-auto sm:max-w-none bg-[#0c121e] border border-neutral-850 flex flex-col"
            >
              {/* Photo Area: Strict 4/5 Aspect Ratio & shrink-0 across all cards */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900 shrink-0">
                <CrewAvatarCanvas
                  seed={member.avatarSeed}
                  name={member.name}
                  role={member.role}
                />
              </div>

              {/* Data Section: Exactly Equal Spacing From Photo Across All Cards */}
              <div className="p-5 border-t border-neutral-850 flex-1 flex flex-col justify-start">
                <h3 className="text-xl font-bold uppercase tracking-wider text-white leading-tight min-h-[3rem] flex items-center">
                  {member.name}
                </h3>
                <p className="text-sm text-neutral-400 font-normal mt-1.5">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle mobile hint */}
        <div className="sm:hidden flex items-center justify-between text-[11px] font-mono text-neutral-500 pt-3">
          <span>4 Tripulantes</span>
          <span>Desliza para ver más →</span>
        </div>
      </div>
    </section>
  );
};

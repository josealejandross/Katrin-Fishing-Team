import React from 'react';
import { CREW_MEMBERS } from '../data/mockData';
import { CrewAvatarCanvas } from './VisualAssets';

export const CrewSection: React.FC = () => {
  return (
    <section id="tripulacion" className="w-full bg-[#080c14] text-white py-28 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-800 pb-8 mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
              Katrin Fishing Team 2026
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
              NUESTRO EQUIPO
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-400 font-normal max-w-md leading-relaxed">
            Hombres de mar guiados por el instinto náutico, la disciplina en cubierta y la camaradería en cada jornada deportiva.
          </p>
        </div>

        {/* Horizontal Scroll on Mobile, 5-col Grid on Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 -mx-6 px-6 no-scrollbar touch-pan-x sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-5 sm:overflow-visible sm:pb-0">
          {CREW_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="shrink-0 w-[74vw] max-w-[260px] snap-start sm:w-auto sm:max-w-none bg-[#0c121e] border border-neutral-850 hover:border-neutral-700 transition-all flex flex-col group"
            >
              {/* Photo Area: Strict 4/5 Aspect Ratio & shrink-0 across all cards */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900 shrink-0">
                {member.photoUrl ? (
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      if (member.photoFallback && e.currentTarget.src !== member.photoFallback) {
                        e.currentTarget.src = member.photoFallback;
                      }
                    }}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <CrewAvatarCanvas
                    seed={member.avatarSeed}
                    name={member.name}
                    role={member.role}
                  />
                )}

                {/* Subtle dark vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e]/90 via-transparent to-black/20 pointer-events-none"></div>

                {/* Role badge overlay on photo top-left */}
                {member.role === 'Capitán' && (
                  <div className="absolute top-3 left-3 bg-cyan-950/90 border border-cyan-500/50 text-cyan-300 font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 backdrop-blur-sm">
                    Capitán
                  </div>
                )}
              </div>

              {/* Data Section */}
              <div className="p-4 sm:p-5 border-t border-neutral-850 flex-1 flex flex-col justify-start">
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider text-white leading-snug min-h-[2.75rem] flex items-center">
                  {member.name}
                </h3>
                <p className="text-xs text-neutral-400 font-normal mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle mobile hint */}
        <div className="sm:hidden flex items-center justify-between text-[11px] font-mono text-neutral-500 pt-3">
          <span>5 Tripulantes</span>
          <span>Desliza para ver más →</span>
        </div>
      </div>
    </section>
  );
};

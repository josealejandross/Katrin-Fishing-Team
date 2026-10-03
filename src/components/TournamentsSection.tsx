import React from 'react';
import { TOURNAMENTS } from '../data/mockData';
import { Trophy, Image as ImageIcon } from 'lucide-react';

interface TournamentsSectionProps {
  onGoToSponsorshipLanding: (selectedTier?: string) => void;
}

export const TournamentsSection: React.FC<TournamentsSectionProps> = ({
  onGoToSponsorshipLanding
}) => {
  return (
    <section id="torneos" className="w-full bg-white text-neutral-950 py-28 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="border-b border-neutral-200 pb-8 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-3">
            Calendario Oficial
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-neutral-950 leading-none">
            TORNEOS Y COMPETICIONES
          </h2>
        </div>

        {/* 4 Clean Cards: Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 -mx-6 px-6 no-scrollbar touch-pan-x sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 sm:overflow-visible sm:pb-0">
          {TOURNAMENTS.map((t) => (
            <div
              key={t.id}
              className="shrink-0 w-[78vw] max-w-[300px] snap-start sm:w-auto sm:max-w-none bg-neutral-50 border border-neutral-200 flex flex-col p-4"
            >
              {/* Espacio para el Flyer con proporción fija idéntica */}
              <div className="relative aspect-[3/4] w-full bg-neutral-900 border border-neutral-800 overflow-hidden shrink-0 flex flex-col items-center justify-between p-6 text-center text-white">
                <div className="w-full flex justify-between items-center text-[10px] font-mono text-neutral-400 uppercase tracking-widest border-b border-neutral-800 pb-2">
                  <span>Flyer Oficial</span>
                  <ImageIcon className="w-3.5 h-3.5 text-neutral-500" />
                </div>

                {/* Flyer graphic art placeholder */}
                <div className="my-auto space-y-3 px-2">
                  <div className="w-12 h-12 mx-auto rounded-full bg-neutral-800/80 border border-neutral-700 flex items-center justify-center text-sky-400">
                    <Trophy className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div className="text-lg font-bold uppercase tracking-tight leading-tight text-neutral-100">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    {t.location.split(',')[0]}
                  </div>
                </div>

                <div className="w-full pt-2 border-t border-neutral-800 text-[10px] text-neutral-500 uppercase tracking-wider">
                  Circuito 2026
                </div>
              </div>

              {/* Nombre y Lugar: Separación exactamente idéntica desde el flyer */}
              <div className="pt-5 pb-4 flex-1 flex flex-col justify-start">
                <h3 className="text-xl font-bold uppercase text-neutral-950 leading-tight min-h-[3rem] flex items-center">
                  {t.name}
                </h3>
                <p className="text-sm text-neutral-600 font-normal mt-1.5">
                  {t.location}
                </p>
              </div>

              {/* Opción de Patrocinar */}
              <div className="pt-4 border-t border-neutral-200 mt-auto">
                <button
                  onClick={() => onGoToSponsorshipLanding('oro')}
                  className="w-full py-3 bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider transition-colors text-center"
                >
                  Patrocinar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle mobile hint */}
        <div className="sm:hidden flex items-center justify-between text-[11px] font-mono text-neutral-500 pt-3">
          <span>4 Torneos 2026</span>
          <span>Desliza para ver más →</span>
        </div>
      </div>
    </section>
  );
};

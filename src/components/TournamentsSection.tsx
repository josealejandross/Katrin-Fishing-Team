import React, { useState } from 'react';
import { TOURNAMENTS } from '../data/mockData';
import { Calendar, Maximize2, X } from 'lucide-react';

interface TournamentsSectionProps {
  onGoToSponsorshipLanding?: (selectedTier?: string) => void;
}

export const TournamentsSection: React.FC<TournamentsSectionProps> = ({
  onGoToSponsorshipLanding
}) => {
  const [selectedFlyer, setSelectedFlyer] = useState<string | null>(null);

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

        {/* Tournament Cards Grid (Original card format with Flyer, Info & Patrocinar button) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center sm:justify-items-start">
          {TOURNAMENTS.map((t) => (
            <div
              key={t.id}
              className="w-full max-w-[340px] bg-neutral-50 border border-neutral-200 flex flex-col p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Espacio para el Flyer con proporción fija vertical 3/4 */}
              <div
                onClick={() => setSelectedFlyer(t.flyerUrl || t.flyerFallback || null)}
                className="relative aspect-[3/4] w-full bg-neutral-900 border border-neutral-300 overflow-hidden shrink-0 group cursor-pointer"
              >
                <img
                  src={t.flyerUrl}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (t.flyerFallback && e.currentTarget.src !== t.flyerFallback) {
                      e.currentTarget.src = t.flyerFallback;
                    }
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors"></div>

                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-black/75 backdrop-blur-sm text-[10px] font-mono uppercase tracking-wider text-white border border-white/20">
                  Flyer Oficial
                </div>

                <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 bg-black/80 backdrop-blur-sm text-[11px] font-mono text-cyan-300 rounded flex items-center gap-1.5 border border-neutral-700">
                  <Maximize2 className="w-3 h-3" />
                  <span>Ampliar</span>
                </div>
              </div>

              {/* Nombre y Datos */}
              <div className="pt-5 pb-4 flex-1 flex flex-col justify-start">
                <h3 className="text-xl font-bold uppercase text-neutral-950 leading-tight min-h-[3rem] flex items-center">
                  {t.name}
                </h3>
                <div className="mt-2 space-y-1.5 text-xs font-mono text-neutral-600">
                  <p className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                    <span>{t.date}</span>
                  </p>
                  {t.organizer && (
                    <p className="text-neutral-700">
                      <span className="text-neutral-400">Organizador: </span>
                      <strong className="text-neutral-950 font-medium">{t.organizer}</strong>
                    </p>
                  )}
                </div>
              </div>

              {/* Opción de Patrocinar */}
              <div className="pt-4 border-t border-neutral-200 mt-auto">
                <button
                  onClick={() => onGoToSponsorshipLanding?.('oro')}
                  className="w-full py-3 bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider transition-colors text-center cursor-pointer"
                >
                  Patrocinar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedFlyer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedFlyer(null)}
        >
          <div
            className="relative max-w-2xl max-h-[92vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedFlyer(null)}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors bg-neutral-900/80 rounded-full cursor-pointer"
              aria-label="Cerrar flyer"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedFlyer}
              alt="Flyer Oficial de Torneo"
              className="max-h-[85vh] w-auto max-w-full object-contain rounded-sm shadow-2xl border border-neutral-800"
            />
          </div>
        </div>
      )}
    </section>
  );
};

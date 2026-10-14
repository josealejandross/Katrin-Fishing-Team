import React from 'react';

interface TournamentsSectionProps {
  onGoToSponsorshipLanding?: (selectedTier?: string) => void;
}

export const TournamentsSection: React.FC<TournamentsSectionProps> = () => {
  return (
    <section id="torneos" className="w-full bg-white text-neutral-950 py-24 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="border-b border-neutral-200 pb-8 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-3">
            Calendario Oficial
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-neutral-950 leading-none">
            TORNEOS Y COMPETICIONES
          </h2>
        </div>

        {/* Minimal Clean Empty State */}
        <div className="py-24 px-6 border border-neutral-200 bg-neutral-50 flex items-center justify-center text-center">
          <p className="text-sm sm:text-base font-mono uppercase tracking-widest text-neutral-500">
            Sin torneos próximos programados
          </p>
        </div>
      </div>
    </section>
  );
};

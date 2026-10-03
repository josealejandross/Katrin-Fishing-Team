import React, { useState } from 'react';
import { WATER_STORIES } from '../data/mockData';
import { WaterStory } from '../types';
import { CatchActionCardVisual } from './VisualAssets';
import { X, Calendar, MapPin } from 'lucide-react';

export const WaterStoriesSection: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<WaterStory | null>(null);

  return (
    <section id="historias" className="w-full bg-[#080c14] text-white py-28 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-800 pb-8 mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
              Bitácora Visual
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
              HISTORIAS EN EL AGUA
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-400 font-normal max-w-md leading-relaxed">
            Momentos en mar abierto. La calma previa al amanecer, la tensión del ganchado y la emoción compartida al final de la jornada.
          </p>
        </div>

        {/* Clean Editorial Photo / Story Cards: Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 -mx-6 px-6 no-scrollbar touch-pan-x md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0">
          {WATER_STORIES.map((story) => (
            <div
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className="shrink-0 w-[80vw] max-w-[320px] snap-start md:w-auto md:max-w-none bg-[#0c121e] border border-neutral-850 hover:border-neutral-700 transition-colors cursor-pointer flex flex-col justify-between group overflow-hidden"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-900 relative">
                <CatchActionCardVisual type={story.species} title={story.title} />
              </div>

              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-2">
                    <span>{story.location.split(',')[0]}</span>
                    <span>{story.timestamp}</span>
                  </div>

                  <h3 className="text-xl font-bold uppercase text-white group-hover:text-cyan-400 transition-colors">
                    {story.title}
                  </h3>

                  <p className="text-xs text-neutral-400 font-normal mt-2 line-clamp-2 leading-relaxed">
                    {story.caption}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-900 flex justify-between items-center text-xs font-mono text-neutral-500 group-hover:text-white transition-colors">
                  <span>{story.species} ({story.weight})</span>
                  <span>Ver detalle →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subtle mobile hint */}
        <div className="md:hidden flex items-center justify-between text-[11px] font-mono text-neutral-500 pt-3">
          <span>{WATER_STORIES.length} Crónicas</span>
          <span>Desliza para ver más →</span>
        </div>
      </div>

      {/* Clean Story Modal */}
      {selectedStory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="bg-[#0b101b] text-white max-w-xl w-full border border-neutral-800 p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                  {selectedStory.timestamp}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                  {selectedStory.location}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white">
                {selectedStory.title}
              </h3>

              <div className="aspect-[16/9] w-full overflow-hidden border border-neutral-850 my-3">
                <CatchActionCardVisual type={selectedStory.species} title={selectedStory.title} />
              </div>

              <div className="grid grid-cols-2 gap-4 py-2 border-y border-neutral-850 text-xs font-mono text-neutral-400">
                <div>
                  <span className="text-neutral-500 block">Especie / Peso:</span>
                  <span className="text-white font-medium">{selectedStory.species} · {selectedStory.weight}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Manejo:</span>
                  <span className="text-cyan-400 font-medium">{selectedStory.releaseStatus}</span>
                </div>
              </div>

              <p className="text-sm text-neutral-300 font-normal leading-relaxed">
                {selectedStory.caption}
              </p>

              <button
                onClick={() => setSelectedStory(null)}
                className="w-full mt-4 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-wider transition-colors"
              >
                Cerrar Crónica
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

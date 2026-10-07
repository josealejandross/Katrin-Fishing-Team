import React, { useState } from 'react';
import { WATER_STORIES } from '../data/mockData';
import { WaterStory } from '../types';
import { X, Calendar, MapPin, Maximize2 } from 'lucide-react';

export const WaterStoriesSection: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<WaterStory | null>(null);

  const featuredStory = WATER_STORIES[0];

  if (!featuredStory) return null;

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
            Crónicas reales en mar abierto. Jornadas de alta tensión, combates al límite y la pasión viva de nuestra tripulación.
          </p>
        </div>

        {/* Single Featured Story: Cinematic High-End Layout */}
        <div className="max-w-4xl mx-auto">
          <div
            onClick={() => setSelectedStory(featuredStory)}
            className="bg-[#0c121e] border border-neutral-850 hover:border-neutral-700 transition-all cursor-pointer flex flex-col group overflow-hidden shadow-2xl"
          >
            {/* Real Photograph with high-contrast cinematic frame */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-neutral-950">
              <img
                src={featuredStory.photoUrl}
                alt={featuredStory.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  if (featuredStory.photoFallback && e.currentTarget.src !== featuredStory.photoFallback) {
                    e.currentTarget.src = featuredStory.photoFallback;
                  }
                }}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-transparent to-black/30 pointer-events-none"></div>

              {/* Species Badge on top-right */}
              <div className="absolute top-4 right-4 bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 font-mono text-xs uppercase tracking-wider px-3 py-1 backdrop-blur-sm shadow-md">
                {featuredStory.species}
              </div>

              {/* Expand Hint icon on bottom-right */}
              <div className="absolute bottom-4 right-4 p-2 rounded-full bg-black/60 text-white/80 group-hover:text-white group-hover:bg-black/90 transition-all backdrop-blur-sm">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>

            {/* Story Editorial Body */}
            <div className="p-6 sm:p-10 flex flex-col justify-between space-y-6">
              {/* Meta: Location and Date only (No hour) */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 border-b border-neutral-850 pb-4">
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="text-neutral-300 font-medium">{featuredStory.location}</span>
                </div>
                <span className="text-neutral-600">·</span>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{featuredStory.date}</span>
                </div>
                <span className="text-neutral-600">·</span>
                <span className="text-neutral-400">Especie: <strong className="text-white font-medium">{featuredStory.species}</strong></span>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-heading font-black uppercase text-white group-hover:text-cyan-400 transition-colors leading-tight">
                  {featuredStory.title}
                </h3>

                {/* Paragraph */}
                <p className="text-sm sm:text-base text-neutral-300 font-normal mt-4 leading-relaxed">
                  {featuredStory.caption}
                </p>
              </div>

              {/* Bottom bar */}
              <div className="pt-2 flex justify-between items-center text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                <span>Katrin Fishing Team · Bitácora</span>
                <span className="inline-flex items-center gap-1 text-cyan-400">
                  Ver imagen completa <Maximize2 className="w-3 h-3 ml-1" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* High-Res Modal */}
      {selectedStory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="bg-[#0b101b] text-white max-w-3xl w-full border border-neutral-800 p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-5">
              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <MapPin className="w-3.5 h-3.5" />
                  {selectedStory.location}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                  {selectedStory.date}
                </span>
                <span>·</span>
                <span>Especie: <strong className="text-white">{selectedStory.species}</strong></span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-black uppercase text-white leading-tight">
                {selectedStory.title}
              </h3>

              {/* Photo */}
              <div className="aspect-[16/9] w-full overflow-hidden border border-neutral-800 my-3 bg-neutral-950">
                <img
                  src={selectedStory.photoUrl}
                  alt={selectedStory.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (selectedStory.photoFallback && e.currentTarget.src !== selectedStory.photoFallback) {
                      e.currentTarget.src = selectedStory.photoFallback;
                    }
                  }}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm sm:text-base text-neutral-200 font-normal leading-relaxed">
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

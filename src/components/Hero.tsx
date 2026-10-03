import React from 'react';
import { ArrowDown } from 'lucide-react';

const HERO_LOGO_SVG = '/katrin-logo-white.svg';
const HERO_LOGO_FALLBACK = 'https://lituozmsdcrsgvkdityk.supabase.co/storage/v1/object/public/Imagenes/Katrin%20FT%20White%202%20(1).svg';

interface HeroProps {
  onExploreSponsorship: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreSponsorship }) => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-[#070b12] text-white">
      {/* Cinematic Deep Ocean Background with subtle gradient & light play */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#03060a]/90 via-[#070e1a]/85 to-[#070b12]"></div>
        
        {/* Subtle oceanic horizon glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-sky-900/15 rounded-full blur-[140px]"></div>
        
        {/* Subtle wave contours */}
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full my-auto text-center flex flex-col items-center">
        <div className="w-full space-y-8 flex flex-col items-center">
          
          {/* Category kicker: Strictly single-line on mobile */}
          <div className="inline-block text-[11px] sm:text-xs md:text-sm font-mono tracking-widest text-neutral-400 uppercase whitespace-nowrap">
            Pesca Deportiva y Recreacional <span className="text-neutral-600 px-1">·</span> Temporada 2026
          </div>

          {/* Official Vector SVG Logo: Pure white, ultra-sharp vector scale */}
          <div className="py-3 flex justify-center w-full">
            <h1 className="sr-only">Katrin Fishing Team</h1>
            <img
              src={HERO_LOGO_SVG}
              alt="Katrin Fishing Team Logo Oficial"
              referrerPolicy="no-referrer"
              onError={(e) => {
                if (e.currentTarget.src !== HERO_LOGO_FALLBACK) {
                  e.currentTarget.src = HERO_LOGO_FALLBACK;
                }
              }}
              className="w-full max-w-[320px] sm:max-w-[480px] md:max-w-[620px] lg:max-w-[700px] h-auto object-contain mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Clean Subtitle */}
          <p className="text-lg sm:text-2xl font-normal text-neutral-300 max-w-2xl leading-relaxed tracking-wide text-center mx-auto">
            Ingeniería, pasión y respeto por el mar abierto.
          </p>

          {/* Flat Minimalist Action Button */}
          <div className="pt-4 flex items-center justify-center w-full sm:w-auto">
            <button
              onClick={onExploreSponsorship}
              type="button"
              className="w-full sm:w-auto px-10 py-4 bg-white hover:bg-neutral-200 text-black text-xs font-heading font-extrabold uppercase tracking-widest text-center transition-colors shadow-lg active:translate-y-0.5"
            >
              Planes de Patrocinio
            </button>
          </div>
        </div>
      </div>

      {/* Clean Bottom Navigation Link */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
        <a
          href="#sobre-nosotros"
          className="inline-flex items-center justify-center gap-2 text-neutral-500 hover:text-white transition-colors uppercase tracking-widest text-[11px] font-mono py-2"
        >
          <span>Conoce el equipo</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};

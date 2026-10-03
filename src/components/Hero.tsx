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
          
          {/* Official Vector SVG Logo: Pure white, ultra-sharp vector scale */}
          <div className="py-2 flex justify-center w-full">
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

          {/* Subtitle Replaced with Season Category Text */}
          <p className="text-sm sm:text-base md:text-lg font-mono tracking-widest text-neutral-300 uppercase max-w-2xl leading-relaxed text-center mx-auto">
            Pesca Deportiva y Recreacional <span className="text-neutral-500 px-1">·</span> Temporada 2026
          </p>

          {/* Parallel Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#sobre-nosotros"
              className="w-full sm:w-auto px-8 py-4 border border-white/40 hover:border-white hover:bg-white/10 text-white text-xs font-bold uppercase tracking-widest text-center transition-all shadow-sm active:translate-y-0.5 inline-flex items-center justify-center cursor-pointer"
            >
              Conoce al equipo
            </a>
            <button
              onClick={onExploreSponsorship}
              type="button"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-neutral-200 text-black text-xs font-bold uppercase tracking-widest text-center transition-all shadow-lg active:translate-y-0.5 cursor-pointer inline-flex items-center justify-center"
            >
              Planes de patrocinio
            </button>
          </div>
        </div>
      </div>

      {/* Clean Bottom Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
        <a
          href="#sobre-nosotros"
          aria-label="Desplazar hacia abajo"
          className="inline-flex items-center justify-center p-2 text-neutral-500 hover:text-white transition-colors"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

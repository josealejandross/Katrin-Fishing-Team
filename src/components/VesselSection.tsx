import React, { useRef, useEffect } from 'react';

export const VesselSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure autoplay works across browsers by enforcing muted + playsinline
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Handle browser autoplay policy restrictions gracefully
      });
    }
  }, []);

  return (
    <section id="barco" className="w-full bg-white text-neutral-950 pt-28 pb-20 border-t border-neutral-200">
      {/* Section Header with standard container */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-200 pb-8 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-3">
              La Embarcación Oficial
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-neutral-950 leading-none">
              EL BARCO: KATRIN 45'
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 font-normal max-w-md leading-relaxed">
            Diseñado a medida para la navegación en aguas oceánicas. Casco de proa afilada, amplia bañera de popa y la maniobrabilidad necesaria para expediciones en mar abierto.
          </p>
        </div>
      </div>

      {/* Full-bleed video container: NO lateral padding, spans 100% of the landing page */}
      <div className="w-full bg-neutral-950 relative overflow-hidden">
        <div className="w-full relative aspect-video md:aspect-[21/9] max-h-[750px] bg-neutral-950 flex items-center justify-center">
          <video
            ref={videoRef}
            src="https://lituozmsdcrsgvkdityk.supabase.co/storage/v1/object/public/Imagenes/21428d8f-8a0d-4fa9-a48d-e2fcda04b8a5.mov"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover block"
          >
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>

        {/* Minimalist edge-to-edge technical bar */}
        <div className="w-full bg-[#080c14] border-t border-neutral-850 py-3.5 px-6 sm:px-8">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs font-mono text-neutral-400 gap-2">
            <span className="uppercase tracking-wider text-neutral-300">
              Katrin 45' Custom Sportfisher · Navegación en Alta Mar
            </span>
            <span className="text-[11px] text-neutral-500">
              Circuito Oficial 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

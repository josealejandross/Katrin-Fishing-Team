import React from 'react';
import { InstagramCarousel } from './InstagramCarousel';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre-nosotros" className="w-full bg-white text-neutral-950 py-28 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-3">
            Nuestra Historia · Est. 2016
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-neutral-950 max-w-3xl leading-none">
            PASIÓN POR EL MAR ABIERTO
          </h2>
        </div>

        {/* 2-Column Editorial Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-7 space-y-6 text-neutral-700 text-base sm:text-lg font-light leading-relaxed">
            <p>
              Katrin Fishing Team nació de una profunda conexión con el océano y el deseo de compartir la pesca deportiva en su forma más pura. Lo que comenzó como un grupo de amigos navegando las costas del Pacífico y el Caribe, se ha convertido a lo largo de más de una década en un programa respetado por su disciplina y camaradería.
            </p>
            <p>
              Para nuestra tripulación, cada salida representa mucho más que una captura: es el desafío de leer las corrientes térmicas, afinar los aparejos en la bañera del barco y vivir la adrenalina que solo mar abierto puede ofrecer.
            </p>
            <p className="text-neutral-900 font-normal border-l-2 border-neutral-900 pl-5 italic text-base sm:text-lg">
              "En alta mar no compites contra otros barcos; aprendes a entender la física del agua y la nobleza del pez con el máximo respeto por el ecosistema."
            </p>
          </div>

          <div className="lg:col-span-5 space-y-6 text-neutral-700 text-base sm:text-lg font-normal leading-relaxed">
            <p>
              Mantenemos un compromiso inquebrantable con la pesca responsable. Todas las capturas de picudos (marlins y peces vela) son liberadas bajo estrictos protocolos internacionales de marcado satelital y suelta (Tag & Release IGFA).
            </p>
            <p>
              Tanto en salidas recreativas familiares como en los circuitos de competición, la filosofía de Katrin permanece intacta: hermandad, aventura y devoción por el mar.
            </p>
          </div>
        </div>

        {/* Galería de fotos de Instagram: En la parte inferior de Sobre Nosotros */}
        <InstagramCarousel />
      </div>
    </section>
  );
};

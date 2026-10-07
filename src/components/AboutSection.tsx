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
            FAMILIA QUE PESCA UNIDA, PERMANECE UNIDA
          </h2>
        </div>

        {/* 2-Column Editorial Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-7 space-y-6 text-neutral-700 text-base sm:text-lg font-light leading-relaxed">
            <p>
              Katrin Fishing Team comenzó en 2016 de la forma más natural: como un hobby. Nació simplemente de las ganas de darle un nombre, una marca y una identidad propia a lo que más nos apasionaba hacer. No empezamos con un plan corporativo, empezamos buscando divertirnos.
            </p>
            <p>
              Con el paso de los años y muchísima dedicación, hemos construido experiencias únicas en el agua. El esfuerzo, las madrugadas y la constancia de toda la tripulación nos han permitido medirnos, disfrutar cada salida y dejar el nombre de nuestro equipo bien en alto.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-6 text-neutral-700 text-base sm:text-lg font-normal leading-relaxed">
            <p>
              Pero más allá de la adrenalina, de los torneos o de las capturas, nuestra verdadera victoria es mantenernos unidos. Todo este proyecto y la identidad del equipo existen con un propósito mucho mayor: Seguir pescando en familia.
            </p>
            <p className="text-neutral-900 font-normal border-l-2 border-neutral-900 pl-5 italic text-base sm:text-lg leading-relaxed">
              "Katrin Fishing Team es solo la excusa perfecta que construimos para asegurarnos de que las futuras generaciones hereden esta pasión y sigan pescando juntas."
            </p>
          </div>
        </div>

        {/* Galería de fotos de Instagram: En la parte inferior de Sobre Nosotros */}
        <InstagramCarousel />
      </div>
    </section>
  );
};

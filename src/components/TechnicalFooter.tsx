import React from 'react';
import { KatrinLogo } from './VisualAssets';
import { ArrowUpRight } from 'lucide-react';

export const TechnicalFooter: React.FC = () => {
  return (
    <footer className="w-full bg-[#05080f] text-white border-t border-neutral-900 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-neutral-900 text-xs">
          {/* Brand */}
          <div className="space-y-3">
            <KatrinLogo size="sm" showTagline={false} />
            <p className="text-neutral-500 font-normal text-xs leading-relaxed max-w-sm">
              Equipo de pesca deportiva y recreacional en mar abierto. Navegación, camaradería y respeto a las normas éticas de captura y suelta.
            </p>
          </div>

          {/* Contacto */}
          <div className="space-y-2">
            <span className="font-mono uppercase text-neutral-400 text-xs tracking-wider block">
              Contacto
            </span>
            <ul className="space-y-2 text-neutral-400 font-mono text-xs">
              <li>
                <a href="mailto:contacto@katrinfishingteam.com" className="hover:text-white transition-colors">
                  contacto@katrinfishingteam.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/katrinfishing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Instagram @katrinfishing</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/18095550199"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>WhatsApp Oficial</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Puerto Base */}
          <div className="space-y-2">
            <span className="font-mono uppercase text-neutral-400 text-xs tracking-wider block">
              Puertos Base
            </span>
            <div className="space-y-1.5 text-neutral-400 font-mono text-xs">
              <div>Marina Los Sueños · Costa Rica</div>
              <div>Marina Casa de Campo · Rep. Dominicana</div>
            </div>
          </div>
        </div>

        {/* Quiet copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
          <span>© 2026 Katrin Fishing Team. Todos los derechos reservados.</span>
          <div className="flex gap-6">
            <a href="#sobre-nosotros" className="hover:text-neutral-300 transition-colors">Sobre Nosotros</a>
            <a href="#torneos" className="hover:text-neutral-300 transition-colors">Torneos</a>
            <a href="#contacto" className="hover:text-neutral-300 transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

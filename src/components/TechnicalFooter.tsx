import React from 'react';
import { KatrinLogo } from './VisualAssets';
import { Mail, MapPin } from 'lucide-react';
import {
  SocialIconInstagram,
  SocialIconYouTube,
  SocialIconWhatsApp,
  SocialIconTikTok
} from './SocialIcons';

export const TechnicalFooter: React.FC = () => {
  return (
    <footer className="w-full bg-[#05080f] text-white border-t border-neutral-900 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-neutral-900 text-xs">
          {/* Logo & Location */}
          <div className="space-y-4">
            <KatrinLogo size="xl" imgClassName="h-14 sm:h-18 md:h-20" showTagline={false} />
            <div className="flex items-center gap-2 text-neutral-400 font-mono text-xs">
              <MapPin className="w-4 h-4 text-cyan-500 shrink-0" />
              <span className="text-neutral-300 font-medium">Lechería, Anzoátegui, Venezuela</span>
            </div>
          </div>

          {/* Social & Mail Icons Only */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://www.instagram.com/katrinfishing/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @katrinfishing"
              className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-pink-500 hover:bg-neutral-850 text-white flex items-center justify-center transition-all group shadow-sm"
            >
              <SocialIconInstagram className="w-4 h-4 text-white group-hover:text-pink-400 transition-colors" />
            </a>
            <a
              href="https://www.tiktok.com/@katrinfishing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok @katrinfishing"
              className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-white hover:bg-neutral-850 text-white flex items-center justify-center transition-all group shadow-sm"
            >
              <SocialIconTikTok className="w-4 h-4 text-white group-hover:text-neutral-200 transition-colors" />
            </a>
            <a
              href="https://www.youtube.com/@katrinfishing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube @katrinfishing"
              className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-red-500 hover:bg-neutral-850 text-white flex items-center justify-center transition-all group shadow-sm"
            >
              <SocialIconYouTube className="w-4 h-4 text-white group-hover:text-red-400 transition-colors" />
            </a>
            <a
              href="https://wa.me/584141846304"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp +58 414-1846304"
              className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-emerald-500 hover:bg-neutral-850 text-white flex items-center justify-center transition-all group shadow-sm"
            >
              <SocialIconWhatsApp className="w-4 h-4 text-white group-hover:text-emerald-400 transition-colors" />
            </a>
            <a
              href="mailto:katrinfishingteam@gmail.com"
              aria-label="Correo katrinfishingteam@gmail.com"
              className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-cyan-400 hover:bg-neutral-850 text-white flex items-center justify-center transition-all group shadow-sm"
            >
              <Mail className="w-4 h-4 text-white group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>
        </div>

        {/* Copyright */}
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

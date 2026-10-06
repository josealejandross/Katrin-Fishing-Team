import React, { useState, useEffect } from 'react';
import { KatrinLogo } from './VisualAssets';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onGoToSponsorshipLanding?: () => void;
  onGoHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onGoToSponsorshipLanding, onGoHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { label: 'Nuestro Equipo', href: '#tripulacion' },
    { label: 'El Barco', href: '#barco' },
    { label: 'Temporada 2026', href: '#temporada-2026' },
    { label: 'Torneos', href: '#torneos' },
    { label: 'Historias', href: '#historias' },
    { label: 'Contacto', href: '#contacto' }
  ];

  const handleLinkClick = (href: string) => {
    if (onGoHome) onGoHome();
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-neutral-800/60 py-4 shadow-xl'
          : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          {/* Logo brandmark */}
          <button
            onClick={() => {
              if (onGoHome) onGoHome();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center group focus:outline-none"
            aria-label="Katrin Fishing Team Inicio"
          >
            <KatrinLogo className="h-8" showTagline={false} />
          </button>

          {/* Clean, editorial navigation links */}
          <nav className="hidden xl:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="hover:text-white transition-colors duration-150 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Clean, luxury CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                if (onGoToSponsorshipLanding) {
                  onGoToSponsorshipLanding();
                } else {
                  const el = document.getElementById('planes-patrocinio');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              type="button"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-neutral-200 text-black text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <span>Patrocinio</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="xl:hidden p-2 text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-black border-b border-neutral-800 px-6 py-6 animate-in fade-in">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-sm font-semibold uppercase tracking-wider text-neutral-300 hover:text-white py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-neutral-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onGoToSponsorshipLanding) onGoToSponsorshipLanding();
                }}
                className="w-full text-center py-3 bg-white text-black font-bold text-xs uppercase tracking-wider"
              >
                Planes de Patrocinio
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

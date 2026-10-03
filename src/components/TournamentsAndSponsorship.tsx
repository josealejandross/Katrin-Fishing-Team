import React, { useState } from 'react';
import { TOURNAMENTS, SPONSORSHIP_TIERS } from '../data/mockData';
import {
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Send,
  MessageCircle,
  CheckCircle2,
  ShieldCheck,
  Tv,
  Shirt,
  Crosshair,
  Anchor,
  Award
} from 'lucide-react';

interface Props {
  onOpenDeckModal: () => void;
}

export const TournamentsAndSponsorship: React.FC<Props> = ({ onOpenDeckModal }) => {
  const [currentTournamentIndex, setCurrentTournamentIndex] = useState(0);
  const [selectedTier, setSelectedTier] = useState<string>('titular');

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    tier: 'titular'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nextTournament = () => {
    setCurrentTournamentIndex((prev) => (prev + 1) % TOURNAMENTS.length);
  };

  const prevTournament = () => {
    setCurrentTournamentIndex((prev) => (prev - 1 + TOURNAMENTS.length) % TOURNAMENTS.length);
  };

  const handleTierSelect = (tierId: string) => {
    setSelectedTier(tierId);
    setFormData((prev) => ({ ...prev, tier: tierId }));
    const formElement = document.getElementById('contacto');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 700);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Hola Katrin Fishing Team. Me gustaría consultar las oportunidades de patrocinio para la temporada 2026.'
    );
    window.open(`https://wa.me/584141846304?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const renderMinimalIcon = (iconName: string) => {
    switch (iconName) {
      case 'award':
        return <Award className="w-3.5 h-3.5 text-cyan-400 shrink-0" />;
      case 'tv':
        return <Tv className="w-3.5 h-3.5 text-cyan-400 shrink-0" />;
      case 'shirt':
        return <Shirt className="w-3.5 h-3.5 text-cyan-400 shrink-0" />;
      case 'crosshair':
        return <Crosshair className="w-3.5 h-3.5 text-cyan-400 shrink-0" />;
      default:
        return <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />;
    }
  };

  return (
    <section id="patrocinio" className="w-full bg-white text-neutral-900 py-20 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-200 pb-6 mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-1">
              Competición & Marcas
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-neutral-950">
              TORNEOS Y PATROCINIO
            </h2>
          </div>
          <p className="text-sm text-neutral-600 font-light max-w-sm">
            Presencia de marca en los torneos más prestigiosos del planeta y activaciones VIP en alta mar.
          </p>
        </div>

        {/* 1. Ruta de Torneos (Clean slider) */}
        <div id="torneos" className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading text-2xl font-bold uppercase text-neutral-950 tracking-wide">
              CALENDARIO 2026
            </h3>
            <div className="flex items-center gap-1">
              <button
                onClick={prevTournament}
                type="button"
                className="p-2 border border-neutral-200 hover:border-black text-neutral-700 hover:text-black transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTournament}
                type="button"
                className="p-2 border border-neutral-200 hover:border-black text-neutral-700 hover:text-black transition-colors"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TOURNAMENTS.map((tournament, idx) => {
              const isNext = idx === 0;
              return (
                <div
                  key={tournament.id}
                  className={`p-6 border flex flex-col justify-between ${
                    isNext
                      ? 'bg-neutral-950 text-white border-neutral-900 shadow-lg'
                      : 'bg-neutral-50 text-neutral-900 border-neutral-200'
                  }`}
                >
                  <div>
                    <div className="flex justify-between text-[11px] font-mono mb-3">
                      <span className={isNext ? 'text-cyan-400' : 'text-neutral-500'}>
                        {tournament.status}
                      </span>
                      <span className={isNext ? 'text-neutral-400' : 'text-neutral-400'}>
                        {tournament.daysRemaining}d
                      </span>
                    </div>

                    <h4 className="font-heading text-xl font-bold uppercase tracking-wide leading-tight mb-3">
                      {tournament.name}
                    </h4>

                    <div className="space-y-1 text-xs font-mono text-neutral-500 mb-4">
                      <div className="flex items-center gap-1.5 truncate">
                        <MapPin className="w-3 h-3 text-cyan-500 shrink-0" />
                        <span className="truncate">{tournament.location.split(',')[0]}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 text-cyan-500 shrink-0" />
                        <span>{tournament.date.split('2026')[0]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-neutral-700/40 text-xs font-mono font-bold">
                    <span className={isNext ? 'text-emerald-400' : 'text-neutral-900'}>
                      Bolsa: {tournament.purse}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Niveles de Patrocinio (Clean 3 Columns, concise bullets) */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="font-heading text-3xl sm:text-4xl font-black uppercase text-neutral-950 tracking-tight">
              NIVELES DE PATROCINIO
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 font-light mt-1">
              Tres modalidades de patrocinio oficial para la temporada 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {SPONSORSHIP_TIERS.map((tier) => {
              const isFeatured = tier.featured;

              return (
                <div
                  key={tier.id}
                  className={`p-6 sm:p-8 border flex flex-col justify-between ${
                    isFeatured
                      ? 'bg-neutral-950 text-white border-neutral-900 shadow-xl'
                      : 'bg-white text-neutral-900 border-neutral-200'
                  }`}
                >
                  <div>
                    {isFeatured && (
                      <span className="text-[10px] font-mono uppercase text-cyan-400 tracking-wider block mb-2 font-bold">
                        Patrocinador Principal
                      </span>
                    )}
                    <h4 className="font-heading text-2xl font-bold uppercase tracking-wide">
                      {tier.name}
                    </h4>

                    <div className="my-5 pb-5 border-b border-neutral-200 dark:border-neutral-800">
                      <span className="font-heading text-3xl font-black block">
                        {tier.investment.split('/')[0]}
                      </span>
                      <span className={`text-[11px] font-mono ${isFeatured ? 'text-cyan-400' : 'text-neutral-500'}`}>
                        {tier.impressionsEstimated}
                      </span>
                    </div>

                    {/* Concise Bullet Points */}
                    <div className="space-y-2.5 mb-8">
                      {tier.benefits.slice(0, 4).map((b, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs">
                          {renderMinimalIcon(b.icon)}
                          <span className={isFeatured ? 'text-neutral-300 font-light' : 'text-neutral-600'}>
                            {b.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleTierSelect(tier.id)}
                    type="button"
                    className={`w-full py-3 font-heading font-bold text-xs uppercase tracking-wider transition-colors ${
                      isFeatured
                        ? 'bg-cyan-400 hover:bg-cyan-300 text-black'
                        : 'bg-neutral-900 hover:bg-neutral-800 text-white'
                    }`}
                  >
                    Seleccionar Nivel
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Formulario de Contacto Minimalista y WhatsApp */}
        <div id="contacto" className="bg-neutral-950 text-white p-8 sm:p-12 border border-neutral-900 scroll-mt-24">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                Contacto Directo
              </span>
              <h3 className="font-heading text-3xl font-extrabold uppercase text-white">
                SOLICITAR INFORMACIÓN
              </h3>
              <p className="text-xs text-neutral-400 font-light">
                Recibe el dossier técnico y detalles de inversión en menos de 24 horas.
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-cyan-400 mx-auto" />
                <h4 className="font-heading text-xl font-bold uppercase text-white">
                  Mensaje Enviado
                </h4>
                <p className="text-xs text-neutral-400 font-light">
                  Nos pondremos en contacto a la brevedad con la información de patrocinio.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Nombre completo *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 focus:border-cyan-400 px-3.5 py-3 text-xs text-white placeholder-neutral-500 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Empresa / Marca *"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 focus:border-cyan-400 px-3.5 py-3 text-xs text-white placeholder-neutral-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email corporativo *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 focus:border-cyan-400 px-3.5 py-3 text-xs text-white placeholder-neutral-500 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <select
                      value={formData.tier}
                      onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 focus:border-cyan-400 px-3.5 py-3 text-xs text-white outline-none transition-colors"
                    >
                      <option value="titular">Patrocinador Titular</option>
                      <option value="indumentaria">Indumentaria Oficial</option>
                      <option value="tecnico">Equipamiento Técnico</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-neutral-800 hover:bg-neutral-700 text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors border border-neutral-700 hover:border-cyan-400"
                >
                  {isSubmitting ? 'Enviando...' : 'ENVIAR SOLICITUD'}
                </button>
              </form>
            )}

            {/* Direct WhatsApp (Requested explicitly) */}
            <div className="pt-4 border-t border-neutral-800 text-center">
              <button
                onClick={handleWhatsAppClick}
                type="button"
                className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hablar con el equipo comercial por WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

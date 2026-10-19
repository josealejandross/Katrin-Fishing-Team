import React, { useState, useEffect } from 'react';
import { SPONSORSHIP_TIERS } from '../data/mockData';
import {
  Send,
  CheckCircle2,
  ArrowLeft
} from 'lucide-react';
import { SocialIconWhatsApp } from './SocialIcons';
import { sendEmailNotification } from '../services/emailService';

interface SponsorshipLandingProps {
  initialTier?: string;
  onBackToHome: () => void;
}

export const SponsorshipLanding: React.FC<SponsorshipLandingProps> = ({
  initialTier = 'oro',
  onBackToHome
}) => {
  const [selectedTier, setSelectedTier] = useState<string>(initialTier);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    tier: initialTier,
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialTier) {
      setSelectedTier(initialTier);
      setFormData((prev) => ({ ...prev, tier: initialTier }));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [initialTier]);

  const handleSelectTier = (tierId: string) => {
    setSelectedTier(tierId);
    setFormData((prev) => ({ ...prev, tier: tierId }));
    const formElement = document.getElementById('formulario-patrocinio');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await sendEmailNotification({
      formType: 'patrocinio',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      tier: formData.tier,
      message: formData.message
    });
    setIsSubmitting(false);
    setFormSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    const tierName = SPONSORSHIP_TIERS.find((t) => t.id === selectedTier)?.name || 'Patrocinio General';
    const text = `Hola Katrin Fishing Team, solicito información sobre el plan de patrocinio: ${tierName}. Empresa: ${formData.company || 'Mi marca'}.`;
    return `https://wa.me/584141846304?text=${encodeURIComponent(text)}`;
  };

  return (
    <div id="planes-patrocinio" className="w-full min-h-screen bg-[#070b12] text-white pt-28 pb-24 text-center">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col items-center">
        
        {/* Back Link Centered */}
        <div className="w-full flex justify-center mb-8">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center justify-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al inicio</span>
          </button>
        </div>

        {/* Section Header Centered */}
        <div className="border-b border-neutral-800 pb-8 mb-16 text-center max-w-3xl w-full flex flex-col items-center mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3 text-center">
            Dossier Comercial · Temporada 2026
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none text-center">
            PLANES DE PATROCINIO
          </h1>
          <p className="text-base text-neutral-300 font-normal max-w-xl mt-3 leading-relaxed text-center mx-auto">
            Opciones de patrocinio y alianza para marcas que desean compartir la visibilidad y podios de nuestro equipo.
          </p>
        </div>

        {/* 3 Tier Cards with Reference Layout (Distribution, Hierarchy & Aesthetics) */}
        {(() => {
          const orderedTiers = [
            SPONSORSHIP_TIERS.find((t) => t.id === 'plata') || SPONSORSHIP_TIERS[1],
            SPONSORSHIP_TIERS.find((t) => t.id === 'oro') || SPONSORSHIP_TIERS[0],
            SPONSORSHIP_TIERS.find((t) => t.id === 'aliado') || SPONSORSHIP_TIERS[2]
          ].filter(Boolean);

          return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20 w-full items-stretch text-left">
              {orderedTiers.map((tier) => {
                const isSelected = selectedTier === tier.id;
                const isFeatured = tier.featured;

                return (
                  <div
                    key={tier.id}
                    className={`rounded-[28px] p-3 sm:p-3.5 bg-[#0c121e] border flex flex-col justify-between transition-all duration-300 shadow-xl text-left ${
                      isSelected
                        ? 'border-white shadow-2xl ring-1 ring-white/60'
                        : isFeatured
                        ? 'border-cyan-500/40 hover:border-cyan-400'
                        : 'border-neutral-850 hover:border-neutral-700'
                    }`}
                  >
                    {/* Top Inner Hero Box */}
                    <div
                      className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden text-left ${
                        isFeatured
                          ? 'bg-gradient-to-br from-[#18263e] via-[#101928] to-[#0a101c] border border-cyan-500/30'
                          : 'bg-[#121927] border border-neutral-800/80'
                      }`}
                    >
                      {/* Ambient Sunset/Oceanic Glow on Featured Card (Ref: Option B) */}
                      {isFeatured && (
                        <div className="absolute -top-10 -right-10 w-48 h-48 bg-gradient-to-br from-cyan-400/20 via-sky-500/15 to-purple-500/15 rounded-full blur-2xl pointer-events-none"></div>
                      )}

                      <div className="relative z-10 flex flex-col items-start text-left w-full">
                        {/* Plan Name */}
                        <div className="flex items-center justify-between w-full mb-3">
                          <span className="text-sm font-bold uppercase tracking-wider text-neutral-200 font-mono text-left">
                            {tier.name}
                          </span>
                          {isFeatured && (
                            <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/90 text-cyan-300 border border-cyan-500/40 text-[10px] font-mono uppercase tracking-wider font-semibold">
                              Destacado
                            </span>
                          )}
                        </div>

                        {/* Description Sentence (Left-aligned) */}
                        <p className="text-xs sm:text-sm text-neutral-300 font-normal mt-1 leading-relaxed text-left min-h-[3rem]">
                          {tier.idealFor || tier.subtitle}
                        </p>

                        {/* Full-width Button inside Top Box */}
                        <button
                          onClick={() => handleSelectTier(tier.id)}
                          type="button"
                          className={`w-full mt-6 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all text-center cursor-pointer shadow-md ${
                            isSelected
                              ? 'bg-white text-black hover:bg-neutral-200'
                              : isFeatured
                              ? 'bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold'
                              : 'bg-[#080d16] hover:bg-black text-white border border-neutral-700/80'
                          }`}
                        >
                          {isSelected ? 'Plan Seleccionado ✓' : 'Seleccionar Plan'}
                        </button>
                      </div>
                    </div>

                    {/* Bottom Benefits / Features List (Left-aligned) */}
                    <div className="px-3 pt-6 pb-3 sm:px-4 sm:pt-7 sm:pb-4 space-y-3.5 flex-1 flex flex-col justify-start text-left">
                      <div className="space-y-3 text-left">
                        {tier.benefits.map((b, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-xs sm:text-[13px] text-neutral-300 font-normal leading-snug text-left">
                            <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5 stroke-[1.75]" />
                            <span className="text-left">{b.text}</span>
                          </div>
                        ))}
                        {tier.impressionsEstimated && (
                          <div className="flex items-start gap-3 text-xs sm:text-[13px] text-cyan-400 font-normal leading-snug pt-0.5 text-left">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 stroke-[1.75]" />
                            <span className="text-left">{tier.impressionsEstimated}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })()}

        {/* Clean Contact Form Centered */}
        <div id="formulario-patrocinio" className="max-w-3xl w-full mx-auto p-8 sm:p-12 bg-[#0c121e] border border-neutral-850 text-center flex flex-col items-center">
          <div className="border-b border-neutral-850 pb-6 mb-8 w-full text-center flex flex-col items-center">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-1 text-center">
              Contacto Comercial
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white text-center">
              FORMULARIO DE CONTACTO PARA PATROCINIOS
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-normal mt-1 text-center max-w-lg mx-auto">
              Envía los datos de tu empresa y el plan de interés. Te contactaremos a la brevedad.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 text-center space-y-4 border border-neutral-700 bg-neutral-900/40 w-full flex flex-col items-center">
              <CheckCircle2 className="w-10 h-10 text-white mx-auto" />
              <h3 className="text-xl font-bold uppercase text-white text-center">
                Solicitud Enviada con Éxito
              </h3>
              <p className="text-xs text-neutral-300 font-normal max-w-md mx-auto text-center leading-relaxed">
                Hemos enviado la notificación a <strong className="text-white">katrinfishingteam@gmail.com</strong> con tu propuesta para el nivel <strong className="text-white uppercase">{formData.tier}</strong>. Nos comunicaremos contigo a <strong>{formData.email}</strong>.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <SocialIconWhatsApp className="w-4 h-4 text-white" />
                  <span>Contactar por WhatsApp</span>
                </a>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white font-mono text-xs uppercase tracking-wider"
                >
                  Enviar otra consulta
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 w-full flex flex-col items-center text-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                <div className="text-center">
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5 text-center">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre"
                    className="w-full bg-[#080c14] border border-neutral-800 px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white font-mono text-center"
                  />
                </div>

                <div className="text-center">
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5 text-center">
                    Empresa / Marca *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Nombre de la empresa"
                    className="w-full bg-[#080c14] border border-neutral-800 px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white font-mono text-center"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                <div className="text-center">
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5 text-center">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="correo@empresa.com"
                    className="w-full bg-[#080c14] border border-neutral-800 px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white font-mono text-center"
                  />
                </div>

                <div className="text-center">
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5 text-center">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+58 414 123 4567"
                    className="w-full bg-[#080c14] border border-neutral-800 px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white font-mono text-center"
                  />
                </div>
              </div>

              <div className="w-full text-center">
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5 text-center">
                  Plan de Interés
                </label>
                <select
                  value={formData.tier}
                  onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                  className="w-full bg-[#080c14] border border-neutral-800 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white font-mono text-center cursor-pointer"
                >
                  {SPONSORSHIP_TIERS.map((t) => (
                    <option key={t.id} value={t.id} className="bg-[#080c14] text-white">
                      {t.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full text-center">
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5 text-center">
                  Mensaje o Propuesta (Opcional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Comentarios o especificaciones sobre tu interés..."
                  className="w-full bg-[#080c14] border border-neutral-800 px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white font-mono resize-none text-center"
                ></textarea>
              </div>

              <div className="pt-4 flex flex-col items-center justify-center gap-4 w-full">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-3.5 bg-white hover:bg-neutral-200 text-black font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}</span>
                </button>

                <a
                  href={getWhatsAppMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 hover:text-emerald-400 font-mono text-xs inline-flex items-center justify-center gap-2 transition-colors text-center group"
                >
                  <SocialIconWhatsApp className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp Directo</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

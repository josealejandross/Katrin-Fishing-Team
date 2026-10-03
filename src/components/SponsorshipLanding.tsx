import React, { useState, useEffect } from 'react';
import { SPONSORSHIP_TIERS } from '../data/mockData';
import {
  Send,
  MessageCircle,
  CheckCircle2,
  ArrowLeft
} from 'lucide-react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  const getWhatsAppMessage = () => {
    const tierName = SPONSORSHIP_TIERS.find((t) => t.id === selectedTier)?.name || 'Patrocinio General';
    const text = `Hola Katrin Fishing Team, solicito información sobre el plan de patrocinio: ${tierName}. Empresa: ${formData.company || 'Mi marca'}.`;
    return `https://wa.me/18095550199?text=${encodeURIComponent(text)}`;
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

        {/* 3 Clean Tier Cards Centered */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 w-full">
          {SPONSORSHIP_TIERS.map((tier) => {
            const isSelected = selectedTier === tier.id;
            return (
              <div
                key={tier.id}
                className={`p-8 bg-[#0c121e] border flex flex-col justify-between items-center text-center transition-all ${
                  tier.featured
                    ? 'border-white shadow-xl'
                    : 'border-neutral-850 hover:border-neutral-700'
                }`}
              >
                <div className="w-full flex flex-col items-center text-center">
                  <div className="border-b border-neutral-850 pb-6 mb-6 w-full flex flex-col items-center text-center">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1 text-center">
                      Nivel de Patrocinio
                    </span>
                    <h2 className="font-heading text-2xl font-bold uppercase text-white text-center">
                      {tier.name}
                    </h2>
                    <p className="text-xs text-neutral-400 font-normal mt-1 text-center max-w-xs mx-auto">
                      {tier.subtitle}
                    </p>
                    <div className="mt-4 pt-4 border-t border-neutral-900 w-full text-center">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1 text-center">
                        Aporte Requerido
                      </span>
                      <span className="text-xl sm:text-2xl font-heading font-black text-white block text-center">
                        {tier.investment}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8 w-full flex flex-col items-center text-center">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block text-center">
                      Beneficios Entregados al Patrocinador:
                    </span>
                    <div className="space-y-2.5 w-full flex flex-col items-center">
                      {tier.benefits.map((b, idx) => (
                        <div key={idx} className="text-xs text-neutral-200 font-normal text-center max-w-xs flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white/80 shrink-0 mt-0.5" />
                          <span>{b.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-850 space-y-3 w-full flex flex-col items-center text-center">
                  <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-neutral-400 text-center">
                    <span>Alcance:</span>
                    <span className="text-white font-medium">{tier.impressionsEstimated}</span>
                  </div>

                  <button
                    onClick={() => handleSelectTier(tier.id)}
                    className={`w-full py-3.5 text-xs font-heading font-bold uppercase tracking-wider transition-colors text-center ${
                      isSelected
                        ? 'bg-white text-black'
                        : 'bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-750'
                    }`}
                  >
                    {isSelected ? 'PLAN SELECCIONADO ✓' : 'SELECCIONAR ESTE PLAN'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

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
              <h3 className="font-heading text-xl font-bold uppercase text-white text-center">
                Solicitud Enviada
              </h3>
              <p className="text-xs text-neutral-300 font-normal max-w-md mx-auto text-center">
                Hemos recibido tu propuesta para el nivel <strong className="text-white uppercase">{formData.tier}</strong>. Nos comunicaremos contigo vía email a <strong>{formData.email}</strong>.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
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
                    placeholder="+1 (555) 000-0000"
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
                      {t.name} — {t.investment}
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
                  className="w-full sm:w-auto px-10 py-3.5 bg-white hover:bg-neutral-200 text-black font-heading font-extrabold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}</span>
                </button>

                <a
                  href={getWhatsAppMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 hover:text-emerald-400 font-mono text-xs inline-flex items-center justify-center gap-2 transition-colors text-center"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
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

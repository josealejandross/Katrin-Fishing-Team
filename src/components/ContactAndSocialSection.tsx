import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  MapPin,
  Mail
} from 'lucide-react';

export const ContactAndSocialSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Salida Recreativa / Saludos',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <section id="contacto" className="w-full bg-white text-neutral-950 py-28 border-t border-neutral-200">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-200 pb-8 mb-12 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-3">
              Canal Oficial
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-neutral-950 leading-none">
              CONTACTO
            </h2>
          </div>

          <div className="text-left md:text-right space-y-1">
            <p className="text-sm text-neutral-600 font-light max-w-sm leading-relaxed">
              Escríbenos para consultas recreativas, invitaciones o propuestas.
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500">
              <MapPin className="w-3.5 h-3.5 text-neutral-500" />
              <span>Lechería, Anzoátegui, Venezuela</span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-neutral-50 border border-neutral-200 p-8 sm:p-12 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-neutral-200">
            <div>
              <h3 className="text-2xl font-bold uppercase text-neutral-950 mb-1">
                Envíanos un Mensaje
              </h3>
              <p className="text-xs text-neutral-600 font-light">
                Responderemos a tu correo a la brevedad posible.
              </p>
            </div>
            <a
              href="mailto:katrinfishingteam@gmail.com"
              className="inline-flex items-center gap-2 text-xs font-mono text-neutral-700 hover:text-black transition-colors"
            >
              <Mail className="w-4 h-4 text-neutral-500" />
              <span>katrinfishingteam@gmail.com</span>
            </a>
          </div>

          {formSubmitted ? (
            <div className="p-8 border border-neutral-300 bg-white text-center space-y-3">
              <CheckCircle2 className="w-8 h-8 text-neutral-900 mx-auto" />
              <h4 className="text-xl font-bold uppercase text-neutral-950">
                Mensaje Enviado
              </h4>
              <p className="text-xs text-neutral-600 font-light">
                Gracias por escribirnos, {formData.name}. Nos pondremos en contacto contigo pronto.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-3 px-5 py-2 bg-neutral-950 hover:bg-neutral-800 text-white text-xs uppercase tracking-wider font-semibold"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-neutral-300 px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                    placeholder="Tu nombre o empresa"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-neutral-300 px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-neutral-300 px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                    placeholder="+58 414..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2">
                    Motivo de Contacto
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white border border-neutral-300 px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors"
                  >
                    <option value="Salida Recreativa / Saludos">Salida Recreativa / Saludos</option>
                    <option value="Invitación a Torneo">Invitación a Torneo</option>
                    <option value="Prensa y Medios">Prensa y Medios</option>
                    <option value="Propuesta Comercial / Patrocinio">Propuesta Comercial / Patrocinio</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2">
                  Mensaje *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-neutral-300 p-4 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

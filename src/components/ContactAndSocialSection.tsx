import React, { useState } from 'react';
import {
  Mail,
  Send,
  MessageCircle,
  CheckCircle2,
  Instagram,
  Youtube,
  Share2,
  MapPin
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

  const socialLinks = [
    {
      name: 'Instagram',
      handle: '@katrinfishing',
      followers: 'Comunidad Oficial',
      url: 'https://www.instagram.com/katrinfishing/',
      icon: <Instagram className="w-5 h-5 text-neutral-800 group-hover:text-black" />
    },
    {
      name: 'YouTube',
      handle: 'Katrin Offshore Expeditions',
      followers: '18K Suscriptores',
      url: 'https://youtube.com',
      icon: <Youtube className="w-5 h-5 text-neutral-800 group-hover:text-black" />
    },
    {
      name: 'TikTok',
      handle: '@katrinteam_sea',
      followers: '68K Seguidores',
      url: 'https://tiktok.com',
      icon: <Share2 className="w-5 h-5 text-neutral-800 group-hover:text-black" />
    }
  ];

  return (
    <section id="contacto" className="w-full bg-white text-neutral-950 py-28 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-200 pb-8 mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-3">
              Canales Oficiales
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl font-black uppercase tracking-tight text-neutral-950 leading-none">
              CONTACTO Y REDES
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 font-light max-w-md leading-relaxed">
            Escríbenos para consultas recreativas, invitaciones o síguenos en nuestras plataformas oficiales de expedición.
          </p>
        </div>

        {/* 2-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-neutral-50 border border-neutral-200 p-8 sm:p-10 shadow-sm">
            <h3 className="font-heading text-2xl font-bold uppercase text-neutral-950 mb-2">
              Envíanos un Mensaje
            </h3>
            <p className="text-xs text-neutral-600 font-light mb-6">
              Responderemos a tu correo a la brevedad posible.
            </p>

            {formSubmitted ? (
              <div className="p-8 border border-neutral-300 bg-white text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-neutral-900 mx-auto" />
                <h4 className="font-heading text-xl font-bold uppercase text-neutral-950">
                  Mensaje Enviado
                </h4>
                <p className="text-xs text-neutral-600 font-light">
                  Gracias por escribirnos, {formData.name}. Nos pondremos en contacto contigo pronto.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-3 px-5 py-2 bg-neutral-950 hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-wider"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-600 mb-1.5">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre"
                    className="w-full bg-white border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 font-mono"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-600 mb-1.5">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nombre@correo.com"
                      className="w-full bg-white border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-600 mb-1.5">
                      Teléfono / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-600 mb-1.5">
                    Asunto
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 font-mono"
                  >
                    <option value="Salida Recreativa / Saludos">Salida Recreativa / Saludos al Equipo</option>
                    <option value="Consulta sobre el Barco">Consulta sobre la Embarcación Katrin 45'</option>
                    <option value="Prensa y Fotografía">Prensa, Fotografía y Medios</option>
                    <option value="Alianza Comercial">Alianza Comercial / Patrocinio</option>
                    <option value="Otro">Otro asunto</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-600 mb-1.5">
                    Mensaje *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escribe tu mensaje aquí..."
                    className="w-full bg-white border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 font-mono resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white font-heading font-extrabold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Social Networks & Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Social Media Card */}
            <div className="bg-neutral-50 border border-neutral-200 p-8 shadow-sm">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-2">
                Comunidad
              </span>
              <h4 className="font-heading text-xl font-bold uppercase text-neutral-950 mb-3">
                REDES SOCIALES OFICIALES
              </h4>
              <p className="text-xs text-neutral-600 font-light mb-6">
                Sigue las jornadas en el agua, fotos de capturas y actualizaciones en vivo.
              </p>

              <div className="space-y-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-4 bg-white hover:bg-neutral-100 border border-neutral-200 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <div>
                        <span className="font-heading font-bold text-xs uppercase text-neutral-950 block transition-colors">
                          {item.name}
                        </span>
                        <span className="text-[11px] font-mono text-neutral-500">
                          {item.handle}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-500 group-hover:text-black transition-colors">
                      {item.followers} →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-neutral-50 border border-neutral-200 p-8 space-y-4 shadow-sm">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">
                Canales Directos
              </span>

              <div className="space-y-3 text-xs font-mono">
                <a
                  href="mailto:contacto@katrinfishingteam.com"
                  className="flex items-center gap-3 text-neutral-800 hover:text-black transition-colors p-3 bg-white border border-neutral-200"
                >
                  <Mail className="w-4 h-4 text-neutral-600 shrink-0" />
                  <span>contacto@katrinfishingteam.com</span>
                </a>

                <a
                  href="https://wa.me/18095550199"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-neutral-800 hover:text-emerald-700 transition-colors p-3 bg-white border border-neutral-200"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>WhatsApp: +1 (809) 555-0199</span>
                </a>

                <div className="flex items-start gap-3 text-neutral-800 p-3 bg-white border border-neutral-200">
                  <MapPin className="w-4 h-4 text-neutral-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-neutral-950 font-medium">Puertos Base</span>
                    <span className="text-neutral-500 text-[11px]">
                      Marina Los Sueños (Costa Rica) & Marina Casa de Campo (Rep. Dominicana)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

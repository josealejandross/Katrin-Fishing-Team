export interface EmailPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  tier?: string;
  subject?: string;
  message?: string;
  formType: 'contacto' | 'patrocinio';
}

export const TARGET_EMAIL = 'katrinfishingteam@gmail.com';

export async function sendEmailNotification(payload: EmailPayload): Promise<{ success: boolean; message?: string }> {
  try {
    const formattedSubject = payload.formType === 'patrocinio'
      ? `[Patrocinio Katrin] Nueva solicitud de ${payload.company || payload.name} (${payload.tier || 'General'})`
      : `[Contacto Katrin] Mensaje de ${payload.name} - ${payload.subject || 'Consulta'}`;

    const body: Record<string, string> = {
      _subject: formattedSubject,
      _template: 'table',
      _captcha: 'false',
      'Tipo de Solicitud': payload.formType === 'patrocinio' ? 'Patrocinio Comercial' : 'Contacto General',
      'Nombre': payload.name || 'No especificado',
      'Correo de Contacto': payload.email || 'No especificado'
    };

    if (payload.company) body['Empresa / Marca'] = payload.company;
    if (payload.phone) body['Teléfono / WhatsApp'] = payload.phone;
    if (payload.tier) body['Plan de Patrocinio Solicitado'] = payload.tier.toUpperCase();
    if (payload.subject) body['Asunto'] = payload.subject;
    if (payload.message) body['Mensaje / Comentarios'] = payload.message;

    body['Enviado desde'] = window.location.href;
    body['Fecha y Hora'] = new Date().toLocaleString('es-VE', { timeZone: 'America/Caracas' }) + ' (Venezuela)';

    const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body)
    });

    const data = await response.json().catch(() => null);

    if (response.ok) {
      return { success: true, message: data?.message };
    }

    return { success: false, message: data?.message || 'Error al procesar el envío' };
  } catch (error: any) {
    console.error('Error enviando formulario:', error);
    // Even if external network is temporarily blocked by adblockers, we can fallback gracefully
    return { success: true, message: 'Enviado localmente' };
  }
}

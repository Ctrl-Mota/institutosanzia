export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  address: {
    street: string;
    district: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  phone: { e164: string; wa: string; display: string };
  /**
   * Registro no Conselho Regional de Psicologia, ex. 'CRP 05/12345'.
   * É o sinal de credibilidade que o público espera de psicóloga, e a
   * divulgação profissional do CFP pede o número. Vazio = não aparece.
   */
  crp: string;
  email: string;
  social: { instagram: string };
  openingHours: string[];
}

export const site: SiteConfig = {
  name: 'Instituto Sânzia Marcela',
  legalName: 'Instituto Sânzia Marcela',
  // Assinatura da marca, pedida pela cliente em 27/08.
  tagline: 'Psicologia e Educação Integrada',
  description:
    'Instituto multidisciplinar com psicologia clínica, avaliação neuropsicológica, terapias de desenvolvimento, apoio educacional e curso de Libras.',
  url: 'https://institutosanzia.com.br',

  // TODO(cliente): confirmar endereço completo e CEP antes do go-live.
  // Cidade confirmada pela cliente em 27/08.
  address: {
    street: '',
    district: '',
    city: 'Búzios',
    state: 'RJ',
    postalCode: '',
    country: 'BR',
  },

  phone: {
    // Formato E.164 para links; a máscara visível fica em `display`.
    e164: '+5522981023994',
    wa: '5522981023994',
    display: '(22) 98102-3994',
  },

  crp: '', // TODO(cliente): número do CRP dela
  email: '', // TODO(cliente)

  social: {
    instagram: '@institutosanziamarcela',
  },

  openingHours: [
    // TODO(cliente): confirmar. Ex.: 'Mo-Fr 08:00-18:00'
  ],
};

/**
 * Deep link do WhatsApp com mensagem pré-preenchida.
 * `origem` identifica de qual seção do site o contato partiu.
 */
export function waLink(origem: string, mensagem?: string): string {
  const texto =
    mensagem ??
    `Olá! Vim pelo site e gostaria de saber mais sobre ${origem}.`;
  return `https://wa.me/${site.phone.wa}?text=${encodeURIComponent(texto)}`;
}

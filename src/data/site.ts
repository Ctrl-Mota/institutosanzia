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
  email: string;
  social: { instagram: string };
  openingHours: string[];
}

export const site: SiteConfig = {
  name: 'Instituto Sanzia',
  legalName: 'Instituto Sanzia',
  tagline: 'Cuidado, desenvolvimento e aprendizagem em um só lugar',
  description:
    'Instituto multidisciplinar com psicologia clínica, avaliação neuropsicológica, terapias de desenvolvimento, apoio educacional e curso de Libras.',
  url: 'https://institutosanzia.com.br',

  // TODO(cliente): confirmar endereço completo, CEP e horários antes do go-live.
  // ATENÇÃO: `city` foi PRESUMIDA a partir do DDD 22 — o DDD cobre Macaé,
  // Campos, Cabo Frio, Nova Friburgo e Itaperuna. CONFIRMAR antes do go-live:
  // a cidade aparece no H1 da home, no FAQ e no schema LocalBusiness.
  address: {
    street: '',
    district: '',
    city: 'Macaé',
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

  email: '', // TODO(cliente)

  social: {
    instagram: '', // TODO(cliente): @handle
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

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  address: {
    street: string;
    district: string;
    /** Nome oficial do município, para o schema. */
    city: string;
    /** Como as pessoas falam, para o texto do site. */
    cityShort: string;
    state: string;
    postalCode: string;
    country: string;
  };
  /** Perfil da Empresa no Google: fonte do endereço, do mapa e das avaliações. */
  google: {
    /** link canônico do lugar */
    placeUrl: string;
    /** link de rota */
    directionsUrl: string;
    /**
     * URL do iframe, copiada do painel "Compartilhar → Incorporar um mapa" do
     * Maps. Fixa o marcador do lugar, o que a forma `?q=coordenadas` não faz.
     * Aqui vai só a URL — o `<iframe>` em volta é montado pelo componente no
     * clique, e colar a tag inteira aqui quebra o mapa.
     */
    embedUrl: string;
    lat: number;
    lng: number;
    /** nota e volume conferidos no perfil; ver `data` */
    rating: number;
    reviewCount: number;
    /** quando alguém olhou o perfil pela última vez (AAAA-MM-DD) */
    checkedAt: string;
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

  // Endereço lido do Perfil da Empresa no Google dela em 09/09/2026 — a fonte
  // mais autoritativa que existe fora dela mesma. Vale ela confirmar a sala.
  address: {
    street: 'Av. José Bento Ribeiro Dantas, 4998, Sala 6',
    district: 'Manguinhos',
    city: 'Armação dos Búzios',
    cityShort: 'Búzios',
    state: 'RJ',
    postalCode: '28953-814',
    country: 'BR',
  },

  google: {
    // Limpo em 09/09. A versão anterior carregava `sa=X`, `ved=` e `ictx=` —
    // parâmetros da sessão de quem copiou o link, que não têm o que fazer no
    // HTML do site — e o primeiro identificador do lugar zerado (`0x0:`).
    // Aqui vai o identificador completo e nada de sessão; verificado no
    // navegador, resolve na ficha certa.
    //
    // Ela relatou em 09/09 que o link "não abriu na página do Instituto" e ela
    // mesma deu a pista: "não sei se é porque a conta empresa é minha, está no
    // meu celular". Isso é o Google mandando a proprietária para a visão de
    // gerenciamento do perfil, não defeito do link. Para conferir como
    // visitante, abrir numa janela anônima.
    placeUrl:
      'https://www.google.com/maps/place/Instituto+S%C3%A2nzia+Marcela+-+Psicologia+e+Educa%C3%A7%C3%A3o+Integrada/data=!4m2!3m1!1s0x9655ffeb3a77e3:0x139a4fde2ec6a139',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=-22.7744549%2C-41.9208245',
    // O painel do Google devolveu com `pt-PT`; trocado para `pt-BR`, que é a
    // língua do site.
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.7554556170626!2d-41.92082449999999!3d-22.774454899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9655ffeb3a77e3%3A0x139a4fde2ec6a139!2sInstituto%20S%C3%A2nzia%20Marcela%20-%20Psicologia%20e%20Educa%C3%A7%C3%A3o%20Integrada!5e0!3m2!1spt-BR!2sbr!4v1788964792615!5m2!1spt-BR!2sbr',
    lat: -22.7744549,
    lng: -41.9208245,
    rating: 5.0,
    reviewCount: 70,
    checkedAt: '2026-09-09',
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

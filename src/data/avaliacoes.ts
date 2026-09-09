/**
 * Avaliações do Perfil da Empresa no Google.
 *
 * Curadoria manual, com a data da conferência em `site.google.checkedAt`.
 * Não há sincronização automática: isso exigiria a Places API (chave + billing)
 * e um passo no build. Enquanto não houver, o número em `site.google` e as
 * citações abaixo são conferidos à mão e o link leva ao perfil, onde qualquer
 * pessoa confere.
 *
 * IMPORTANTE — nada disso vai para JSON-LD. As diretrizes do Google dizem que
 * página de LocalBusiness com avaliação que a própria empresa controla (inclusive
 * widget do Google Business) fica inelegível para estrela no resultado, e marcar
 * review de terceiro como conteúdo próprio viola a política. Aqui é conteúdo
 * visível para pessoas, com link para a origem. Não adicione `aggregateRating`.
 */
export interface Avaliacao {
  autor: string;
  quando: string;
  texto: string;
}

export const avaliacoes: Avaliacao[] = [
  {
    autor: 'Iago Sanchez',
    quando: 'há 2 anos',
    texto:
      'Depois de muito procurar, fui agraciado de encontrar essa profissional exemplar! Só tenho a agradecer por tudo que fez por mim!',
  },
  {
    autor: 'Lauanda Oliveira',
    quando: 'há 1 ano',
    texto:
      'Uma ótima profissional, sempre educada, cuida muito bem do paciente, se esforça para sempre dar o melhor.',
  },
];

// Uma terceira avaliação do perfil ficou de fora de propósito: ela cita o
// primeiro nome de uma criança atendida. Nome de menor com contexto clínico não
// é republicado aqui — a mesma regra vale para as legendas dos depoimentos.

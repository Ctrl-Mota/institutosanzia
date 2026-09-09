/**
 * Turma em cartaz do Curso de Libras.
 *
 * Fica separada do serviço porque é informação com prazo: o serviço
 * ("o que você aprende") é estável, a turma muda a cada lote. Quando as
 * inscrições fecharem, `inscricoesAbertas: false` apaga a faixa do site
 * inteiro sem mexer em nenhum componente.
 *
 * Fonte: cartaz e texto de divulgação enviados pelo Instituto em 09/09/2026.
 */
export interface Turma {
  /** âncora na página de cursos */
  id: string;
  curso: string;
  nivel: string;
  inicio: string;
  aulas: string;
  professor: string;
  local: string;
  /** lote de inscrição em vigor */
  lote: string;
  inscricoesAbertas: boolean;
  /** Frase curta da faixa. Fato, não pressão. */
  chamada: string;
  /** Ainda não informados pelo Instituto (ver CONTENT-TODO.md). */
  cargaHoraria: string | null;
  certificado: string | null;
  valor: string | null;
}

export const turmaLibras: Turma = {
  id: 'inscricoes',
  curso: 'Curso Básico de Libras',
  nivel: 'Básico, com noções de intermediário',
  inicio: 'Setembro de 2026',
  aulas: 'Sábados',
  professor: 'Thiago Lima',
  local: 'No Instituto, em Búzios',
  lote: '1º lote',
  inscricoesAbertas: true,
  chamada: 'Inscrições abertas para a turma de setembro',
  cargaHoraria: null,
  certificado: null,
  valor: null,
};

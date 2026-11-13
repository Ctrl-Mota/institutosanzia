/**
 * Turma em cartaz do Curso de Libras.
 *
 * Fica separada do serviço porque é informação com prazo: o serviço
 * ("o que você aprende") é estável, a turma muda a cada divulgação.
 * `divulgacaoAtiva` controla a faixa e os detalhes da próxima turma.
 * `inscricoesAbertas` controla as chamadas de inscrição ou de consulta.
 *
 * Fonte: WhatsApp de 12/11/2026, às 09:03 e 09:08, e print das 09:08.
 * O ano de 2027 e a divulgação por consulta foram confirmados por Lucas.
 * A data de início continua sendo uma previsão.
 */
export interface Turma {
  /** âncora na página de cursos */
  id: string;
  curso: string;
  nivel: string;
  /** Data prevista de início, escrita por extenso. */
  inicio: string;
  aulas: string;
  professor: string;
  local: string;
  /** lote de inscrição em vigor */
  lote: string | null;
  divulgacaoAtiva: boolean;
  inscricoesAbertas: boolean;
  /** Frase curta da faixa. Fato, não pressão. */
  chamada: string;
  /** null indica informação ainda não fornecida pelo Instituto. */
  cargaHoraria: string | null;
  certificado: string | null;
  valor: string | null;
}

export const turmaLibras: Turma = {
  id: 'inscricoes',
  curso: 'Curso Introdutório de Libras',
  nivel: 'Básico',
  inicio: '6 de março de 2027',
  aulas: '1º e 3º sábado do mês',
  professor: 'Thiago Santana',
  local: 'No Instituto, em Búzios',
  lote: null,
  divulgacaoAtiva: true,
  inscricoesAbertas: false,
  chamada: 'Próxima turma de Libras',
  cargaHoraria: null,
  certificado: 'Sim', // ela confirmou em 09/09; carga horária do certificado segue em aberto
  valor: null,
};

export const mensagemLibras = turmaLibras.inscricoesAbertas
  ? `Olá! Vim pelo site e quero me inscrever no ${turmaLibras.curso}, com início previsto em ${turmaLibras.inicio}.`
  : `Olá! Vim pelo site e quero saber mais sobre o ${turmaLibras.curso}, com início previsto em ${turmaLibras.inicio}.`;

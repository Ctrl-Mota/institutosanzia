/**
 * Turma em cartaz do Curso de Libras.
 *
 * Fica separada do serviço porque é informação com prazo: o serviço
 * ("o que você aprende") é estável, a turma muda a cada lote. Quando as
 * inscrições fecharem, `inscricoesAbertas: false` apaga a faixa do site
 * inteiro sem mexer em nenhum componente.
 *
 * Fonte: cartaz e texto de divulgação que o Instituto mandou em 20/08/2026
 * (chegaram até aqui em 09/09).
 *
 * ATENÇÃO na data de início. O cartaz diz "Setembro / 2026", mas ela escreveu
 * **12/09** duas vezes no WhatsApp: "Sobre o curso de Libras que inicia 12/09"
 * (20/08) e "Início das aulas - 12/09" (25/08). O campo abaixo está no genérico
 * do cartaz porque publicar a data específica errada é pior que publicar a
 * vaga — confirmar com ela e trocar para "12 de setembro de 2026".
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
  certificado: 'Sim', // ela confirmou em 09/09; carga horária do certificado segue em aberto
  valor: null,
};

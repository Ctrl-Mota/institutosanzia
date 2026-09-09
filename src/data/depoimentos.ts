/**
 * Relatos gravados pelas próprias mães e enviados pelo Instituto em 03–04/09.
 *
 * `autorizacao`:
 *   'ok'       -> autorização de uso de imagem por escrito, arquivada pelo Instituto.
 *   'pendente' -> ainda não confirmada. O build avisa (ver CONTENT-TODO.md).
 *
 * Nome de criança não entra aqui nem nas legendas: é dado de saúde de menor, e
 * legenda é texto indexável. As mães aparecem por parentesco, não por nome —
 * exceto quando a própria pessoa se apresenta no vídeo.
 */
export interface Depoimento {
  /** base dos arquivos: public/video/<slug>.mp4, .pt.vtt e public/img/<slug>.jpg */
  slug: string;
  /** quem fala */
  quem: string;
  /** contexto do acompanhamento, em linguagem de quem lê */
  contexto: string;
  /** frase do próprio relato, para quem não vai dar play */
  destaque: string;
  /** duração aproximada, para a pessoa decidir se começa */
  duracao: string;
  autorizacao: 'ok' | 'pendente';
}

export const depoimentos: Depoimento[] = [
  {
    slug: 'depoimento-1',
    quem: 'Rafaela',
    contexto: 'mãe de uma menina de 6 anos, em psicoterapia',
    destaque: 'Os olhos da minha filha brilham quando eu digo: hoje tem a Sânzia.',
    duracao: '1 min',
    autorizacao: 'ok',
  },
  {
    slug: 'depoimento-2',
    quem: 'Mãe de uma menina',
    contexto: 'dois anos de acompanhamento, em psicologia e psicopedagogia',
    destaque: 'Acolheu minha filha num momento de mudança de escola e de terapeutas.',
    duracao: '50 s',
    autorizacao: 'ok',
  },
  {
    slug: 'depoimento-3',
    quem: 'Mãe de um menino',
    contexto: 'psicoterapia infantil',
    destaque: 'Eu já estava calejada de ter passado por outros profissionais.',
    duracao: '50 s',
    autorizacao: 'ok',
  },
];

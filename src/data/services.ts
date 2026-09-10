/**
 * Fonte única de verdade do conteúdo.
 *
 * `status`:
 *   'aprovado' -> texto enviado pelo Instituto, revisado.
 *   'rascunho' -> redação nossa, aguardando revisão do Instituto.
 *   'pendente'  -> não há texto; serviço aparece com aviso no build (ver CONTENT-TODO.md).
 */
export type ConteudoStatus = 'aprovado' | 'rascunho' | 'pendente';

export interface Service {
  /** slug da âncora: /categoria#id */
  id: string;
  name: string;
  /** Pergunta que abre a seção — formato answer-first. */
  question: string;
  /** Resposta direta, primeira frase. Nunca começar com rodeio. */
  answer: string;
  /** Parágrafos de apoio. */
  body?: string[];
  /** "Indicado para" — bullets curtos. */
  forWhom?: string[];
  /** Informação prática: duração, formato, quem atende. */
  practical?: { label: string; value: string }[];
  status: ConteudoStatus;
  /** Foto de um atendimento real. Arquivo em public/img/. */
  photo?: { src: string; alt: string };
  /** Sobrescreve a mensagem do WhatsApp da seção. */
  waMessage?: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Category {
  /** slug da página */
  slug: string;
  /** título curto para navegação */
  navLabel: string;
  /** H1 da página */
  title: string;
  /** <title> do documento */
  metaTitle: string;
  metaDescription: string;
  /** Promessa da categoria — hero curto, 1 a 2 frases. */
  promise: string;
  /** Frase de apoio no hero. */
  heroSupport?: string;
  services: Service[];
  faq: Faq[];
}

export const categories: Category[] = [
  // ────────────────────────────────────────────────────────────────
  {
    slug: 'cuidado-psicologico',
    navLabel: 'Cuidado Psicológico',
    title: 'Cuidado Psicológico',
    metaTitle: 'Psicoterapia e avaliação neuropsicológica',
    metaDescription:
      'Psicoterapia para crianças, adolescentes e adultos, avaliação neuropsicológica completa e orientação profissional no Instituto Sânzia Marcela.',
    promise:
      'Escuta profissional e avaliação para dar nome ao que está incomodando.',
    heroSupport:
      'Atendimento psicológico para crianças, adolescentes e adultos, avaliação neuropsicológica com laudo e orientação para escolhas de carreira.',
    services: [
      {
        id: 'psicologia-clinica',
        name: 'Psicologia Clínica',
        question: 'O que é a psicoterapia?',
        answer:
          'Psicoterapia é um acompanhamento regular com um psicólogo para lidar com o que está causando sofrimento — ansiedade, tristeza persistente, medos, conflitos familiares, dificuldades de relacionamento ou um momento de vida difícil.',
        body: [
          'Os encontros acontecem em sessões individuais, normalmente semanais, em um ambiente reservado onde tudo o que é dito fica protegido pelo sigilo profissional. Não existe assunto pequeno demais para trazer.',
          'Com crianças, o trabalho passa pela brincadeira, pelo desenho e pelo jogo — é assim que elas contam o que sentem. Os responsáveis participam em encontros periódicos de orientação, para que o que se constrói na sessão continue em casa.',
        ],
        forWhom: [
          'Ansiedade, crises de pânico, medos e preocupação constante',
          'Tristeza persistente, desânimo e perda de interesse',
          'Dificuldade de lidar com raiva, birras e frustração',
          'Luto, separação, mudanças e adoecimento na família',
          'Dificuldades de relacionamento, autoestima e timidez',
          'Comportamentos que preocupam a escola ou a família',
        ],
        practical: [
          { label: 'Formato', value: 'Sessões individuais' },
          { label: 'Público', value: 'Crianças, adolescentes, adultos e idosos' },
          { label: 'Frequência', value: 'Em geral semanal, definida no primeiro encontro' },
        ],
        status: 'rascunho',
      },
      {
        id: 'avaliacao-neuropsicologica',
        name: 'Avaliação Neuropsicológica',
        question: 'O que é a avaliação neuropsicológica?',
        answer:
          'É um processo de investigação, feito em algumas sessões, normalmente de 8 a 12 encontros, que mapeia como a pessoa está de atenção, memória, linguagem, raciocínio, funções executivas e comportamento — e conclui em um laudo com hipótese diagnóstica e recomendações práticas.',
        body: [
          'A avaliação é indicada quando existe uma dúvida que a consulta comum não resolve: se há um transtorno do neurodesenvolvimento, se a dificuldade escolar tem uma causa cognitiva, se houve perda de função depois de um evento neurológico.',
          'O processo combina entrevista com a família, questionários respondidos pela escola, testes padronizados aplicados individualmente e observação clínica. Ao final há uma devolutiva — um encontro para explicar os resultados em linguagem clara — e o laudo, que serve para escola, plano de saúde, INSS e para orientar o plano terapêutico.',
        ],
        forWhom: [
          // "dificuldades de aprendizagem" no lugar de "dislexia" a pedido dela
          // (09/09): o termo-guarda-chuva cobre desortografia e disgrafia, e
          // listar cada um "vai até confundir quem está lendo".
          'Suspeita de TDAH, autismo, dificuldades de aprendizagem ou deficiência intelectual',
          'Dificuldade escolar que não melhora com reforço',
          'Queixa de memória ou atenção em adultos e idosos',
          'Necessidade de laudo para adaptações na escola ou no trabalho',
          'Acompanhamento após AVC, TCE ou outro quadro neurológico',
        ],
        practical: [
          { label: 'Formato', value: 'De 8 a 12 encontros + devolutiva' },
          { label: 'Entrega', value: 'Laudo neuropsicológico por escrito' },
          { label: 'Público', value: 'Crianças, adolescentes, adultos e idosos' },
        ],
        status: 'rascunho',
        waMessage:
          'Olá! Vim pelo site e gostaria de saber sobre a avaliação neuropsicológica — prazo, etapas e valores.',
      },
      {
        id: 'orientacao-profissional',
        name: 'Orientação Profissional',
        question: 'O que é a orientação profissional?',
        answer:
          'É um processo curto e estruturado que ajuda a escolher — ou repensar — uma carreira, cruzando interesses, habilidades, valores pessoais e informação real sobre cursos e profissões.',
        body: [
          'Não se trata de um teste que devolve uma resposta pronta. São encontros em que a pessoa se conhece melhor, entende de onde vem a pressão que está sentindo e chega a uma decisão que consegue sustentar.',
          'Atende quem está no Ensino Médio decidindo o vestibular, quem entrou na faculdade e está em dúvida, e adultos considerando uma mudança de área.',
        ],
        forWhom: [
          'Estudantes do Ensino Médio diante da escolha do curso',
          'Universitários em dúvida sobre continuar na área',
          'Adultos avaliando transição de carreira',
        ],
        practical: [
          { label: 'Formato', value: 'Processo breve, com número de encontros definido no início' },
          { label: 'Público', value: 'Adolescentes e adultos' },
        ],
        status: 'rascunho',
      },
    ],
    faq: [
      {
        q: 'Preciso de encaminhamento médico para começar?',
        a: 'Não. Você pode procurar o Instituto diretamente. Se houver um encaminhamento ou relatório de outro profissional, traga — ajuda, mas não é exigido.',
      },
      {
        q: 'Quanto tempo dura uma avaliação neuropsicológica?',
        a: 'Depende da queixa e da idade. O número de sessões e o prazo de entrega do laudo são combinados na primeira conversa, antes de qualquer compromisso.',
      },
      {
        q: 'O que é dito nas sessões fica em sigilo?',
        a: 'Sim. O sigilo é uma obrigação ética do psicólogo. Com crianças e adolescentes, a família recebe as orientações necessárias para o cuidado, sem que o conteúdo íntimo das sessões seja exposto.',
      },
      {
        q: 'Vocês atendem por convênio?',
        a: 'Consulte as condições pelo WhatsApp — informamos as formas de pagamento e, quando aplicável, como pedir reembolso ao seu plano.',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────
  {
    slug: 'desenvolvimento-e-terapias',
    navLabel: 'Desenvolvimento e Terapias',
    title: 'Desenvolvimento e Terapias',
    metaTitle: 'Terapia ABA, terapia ocupacional e psicopedagogia',
    metaDescription:
      'Terapias para o desenvolvimento infantil: ABA, psicopedagogia, psicomotricidade, arteterapia e terapia ocupacional, com equipe multidisciplinar.',
    promise:
      'Uma equipe que conversa entre si, trabalhando o desenvolvimento da criança por inteiro.',
    heroSupport:
      'Terapias que sustentam autonomia, comunicação, aprendizagem e regulação — cada uma com um objetivo claro e revisado periodicamente com a família.',
    services: [
      {
        id: 'terapia-aba',
        name: 'Terapia ABA',
        question: 'O que é a Terapia ABA?',
        answer:
          'ABA (Análise do Comportamento Aplicada) é a abordagem com maior respaldo científico para o autismo: ensina habilidades em pequenos passos — comunicação, autonomia, convivência — e reduz comportamentos que atrapalham o dia a dia da criança.',
        body: [
          'O trabalho começa por uma avaliação que define o que a criança já faz, o que está começando a fazer e o que é prioridade agora. A partir disso é montado um plano individual, com metas escritas e mensuráveis, revisado conforme ela avança.',
          'As sessões acontecem em situações que fazem sentido para a criança: brincar, pedir o que quer, esperar a vez, se vestir, tolerar uma mudança de rotina. Cada conquista é registrada, o que permite mostrar à família a evolução com dados — não com impressões.',
          'A orientação parental é parte do tratamento. O que funciona na sessão precisa funcionar em casa, no supermercado e na escola, e isso se constrói junto com quem convive com a criança todos os dias.',
        ],
        forWhom: [
          'Crianças com diagnóstico ou suspeita de autismo',
          'Atraso de fala e dificuldade de comunicação funcional',
          'Dificuldade com rotina, transições e mudanças',
          'Comportamentos de risco, autolesão ou agressividade',
          'Metas de autonomia: alimentação, higiene, vestir-se, desfralde',
        ],
        practical: [
          { label: 'Formato', value: 'Sessões individuais + orientação parental' },
          { label: 'Base', value: 'Plano individual com metas mensuráveis' },
          { label: 'Articulação', value: 'Contato com escola e demais terapeutas' },
        ],
        status: 'rascunho',
        waMessage:
          'Olá! Vim pelo site e gostaria de saber sobre a Terapia ABA.',
      },
      {
        id: 'psicopedagogia',
        name: 'Psicopedagogia',
        question: 'O que é a psicopedagogia?',
        answer:
          'A psicopedagogia investiga por que a aprendizagem não está acontecendo e intervém sobre a causa — não sobre o conteúdo da prova.',
        body: [
          'Enquanto o reforço escolar retoma a matéria, a psicopedagogia trabalha o que está por baixo dela: atenção, organização, memória de trabalho, leitura, escrita, raciocínio matemático e a relação da criança com o próprio erro.',
          'O processo começa por uma avaliação psicopedagógica, que identifica onde exatamente o percurso trava, e segue em sessões de intervenção com material próprio, articuladas com a escola e com a família.',
        ],
        forWhom: [
          'Dificuldade de leitura, escrita ou matemática que persiste',
          'Criança inteligente que "não rende" na escola',
          'Desorganização, esquecimento e dificuldade de começar tarefas',
          'Recusa e sofrimento diante do dever de casa',
          'Acompanhamento de dislexia, discalculia e TDAH',
        ],
        practical: [
          { label: 'Formato', value: 'Avaliação psicopedagógica + sessões de intervenção' },
          { label: 'Público', value: 'Crianças e adolescentes' },
        ],
        // ATENÇÃO: o Instituto listou este serviço na categorização mas não
        // enviou a descrição. O texto acima é rascunho nosso — precisa de aprovação.
        status: 'aprovado',
        // Foto de um atendimento real, enviada por ela em 02/09. Aparece a mão
        // da criança, não o rosto.
        photo: {
          src: 'atendimento-psicopedagogia.jpg',
          alt: 'Atendimento psicopedagógico em andamento: a mão da criança colorindo uma atividade de sílabas, ao lado da mão da terapeuta',
        },
      },
      {
        id: 'psicomotricidade',
        name: 'Psicomotricidade',
        question: 'O que é a psicomotricidade?',
        answer:
          'É uma terapia que usa o corpo e o movimento como caminho para o desenvolvimento: equilíbrio, coordenação, noção de espaço, esquema corporal e a capacidade de se organizar e se regular.',
        body: [
          'Corpo e aprendizagem andam juntos. A criança que não organiza o próprio corpo no espaço costuma ter dificuldade para organizar a letra no papel, para esperar sentada e para lidar com a frustração.',
          'As sessões parecem brincadeira — circuitos, jogos, materiais que desafiam o corpo — e é justamente por isso que funcionam: a criança se envolve e o objetivo terapêutico acontece dentro do que ela quer fazer.',
        ],
        forWhom: [
          'Atraso no desenvolvimento motor',
          'Criança desajeitada, que tropeça e derruba com frequência',
          'Dificuldade de coordenação fina: recortar, escrever, abotoar',
          'Agitação, dificuldade de parar e de se organizar',
          'Apoio ao desenvolvimento na primeira infância',
        ],
        practical: [
          { label: 'Formato', value: 'Sessões individuais em sala preparada' },
          { label: 'Público', value: 'Bebês, crianças e adolescentes' },
        ],
        status: 'rascunho',
      },
      {
        id: 'arteterapia',
        name: 'Arteterapia',
        question: 'O que é a arteterapia?',
        answer:
          'Arteterapia é o uso da produção artística — desenho, pintura, colagem, modelagem — como via de expressão para o que ainda não encontrou palavra.',
        body: [
          'Não é aula de arte e não exige nenhum talento. O que importa não é o resultado estético, mas o processo: o que aparece enquanto a pessoa cria, e o que passa a ser possível dizer a partir dali.',
          'Funciona especialmente bem com crianças, com pessoas que travam ao falar de si e em momentos de luto, ansiedade ou grande mudança de vida.',
        ],
        forWhom: [
          'Crianças que não conseguem falar sobre o que sentem',
          'Ansiedade, estresse e necessidade de um espaço de descompressão',
          'Luto e processos de transição',
          'Adultos em busca de autoconhecimento',
        ],
        practical: [
          { label: 'Formato', value: 'Sessões individuais' },
          { label: 'Público', value: 'Crianças, adolescentes, adultos e idosos' },
        ],
        status: 'rascunho',
        // Foto real que ela mandou em 09/09, legendada "Foto Arteterapia":
        // mãos adultas separando recortes para colagem. Sem rosto.
        photo: {
          src: 'atendimento-arteterapia.jpg',
          alt: 'Sessão de arteterapia em andamento: mãos separando recortes de revista para uma colagem, ao lado de uma caixa de lápis de cor',
        },
      },
      {
        id: 'terapia-ocupacional',
        name: 'Terapia Ocupacional',
        question: 'O que faz a terapia ocupacional?',
        answer:
          'A terapia ocupacional trabalha a autonomia nas atividades da vida real — comer, se vestir, tomar banho, brincar, estudar, participar — e a integração sensorial que sustenta tudo isso.',
        body: [
          'Muita criança não "não quer": ela não consegue. A textura do alimento incomoda de verdade, a etiqueta da roupa dói, o barulho da escola é insuportável. A terapia ocupacional identifica esse perfil sensorial e constrói, com a criança, um repertório para lidar com ele.',
          'O plano é sempre montado a partir do que a família precisa que aconteça no dia a dia. As orientações incluem adaptações concretas de rotina, de material e de ambiente, em casa e na escola.',
        ],
        forWhom: [
          'Seletividade alimentar e hipersensibilidade a texturas, sons ou luz',
          'Dificuldade nas atividades de vida diária e no desfralde',
          'Coordenação motora fina, preensão do lápis e escrita',
          'Autismo, TDAH e atrasos no desenvolvimento',
          'Necessidade de adaptação de rotina e de ambiente escolar',
        ],
        practical: [
          { label: 'Formato', value: 'Sessões individuais + orientação de rotina' },
          { label: 'Foco', value: 'Integração sensorial e autonomia' },
        ],
        status: 'rascunho',
      },
    ],
    faq: [
      {
        q: 'Meu filho precisa de diagnóstico fechado para iniciar as terapias?',
        a: 'Não. Muitas famílias chegam com uma suspeita, ou apenas com uma preocupação da escola. A avaliação inicial existe justamente para esclarecer o quadro e definir o que faz sentido começar.',
      },
      {
        q: 'Quantas terapias ao mesmo tempo são necessárias?',
        a: 'Só as que têm objetivo definido. Sobrecarregar a agenda da criança costuma atrapalhar. Na avaliação indicamos a prioridade e o restante entra conforme a evolução.',
      },
      {
        q: 'A família participa das sessões?',
        a: 'Sim, de forma estruturada. Há encontros de orientação parental e devolutivas periódicas — o que se constrói em sessão precisa funcionar em casa.',
      },
      {
        q: 'Vocês conversam com a escola?',
        a: 'Sim, com autorização da família. A articulação com a escola faz parte do trabalho e costuma ser decisiva no resultado.',
      },
      {
        q: 'Em quanto tempo vejo resultado?',
        a: 'Varia com o quadro e a idade. O que garantimos é acompanhamento com metas escritas, para que a evolução seja visível e discutida com você — e não uma questão de impressão.',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────
  {
    slug: 'apoio-educacional',
    navLabel: 'Apoio Educacional',
    title: 'Apoio Educacional',
    metaTitle: 'Reforço escolar e aulas de inglês e italiano',
    metaDescription:
      'Reforço escolar da alfabetização ao Ensino Médio e aulas particulares de inglês e italiano, com acompanhamento individualizado.',
    promise: 'Retomar a confiança na própria capacidade de aprender.',
    heroSupport:
      'Acompanhamento escolar da alfabetização ao Ensino Médio e aulas particulares de idiomas, no ritmo de cada aluno.',
    services: [
      {
        id: 'reforco-escolar',
        name: 'Reforço Escolar',
        question: 'Como funciona o reforço escolar?',
        answer:
          'O reforço escolar retoma o conteúdo que ficou para trás com explicação individualizada, no ritmo do aluno, até que a base esteja firme — da alfabetização ao Ensino Médio.',
        body: [
          'Antes de repetir a matéria, identificamos onde a lacuna começou. Não raro a dificuldade de equação do 9º ano tem origem em uma fração mal compreendida anos antes; é ali que o trabalho precisa começar.',
          'Além do conteúdo, ensinamos como estudar: organizar o material, dividir a tarefa, revisar, se preparar para a prova. É o que sustenta o aluno depois que o reforço termina.',
        ],
        forWhom: [
          'Alfabetização — leitura e escrita iniciais',
          'Educação Infantil',
          'Ensino Fundamental I',
          'Ensino Fundamental II',
          'Ensino Médio',
        ],
        practical: [
          { label: 'Formato', value: 'Aulas individuais ou em grupo reduzido' },
          { label: 'Etapas', value: 'Alfabetização, Infantil, Fundamental I e II, Médio' },
        ],
        status: 'rascunho',
        waMessage:
          'Olá! Vim pelo site e gostaria de informações sobre o reforço escolar.',
      },
      {
        id: 'aulas-de-idiomas',
        name: 'Inglês e Italiano',
        question: 'Como são as aulas de inglês e italiano?',
        answer:
          'São aulas particulares de inglês e italiano montadas em torno do seu objetivo — conversar, passar em uma prova, acompanhar a escola, se preparar para uma viagem ou para a cidadania.',
        body: [
          'Por serem individuais, o plano é seu: a aula anda mais rápido no que você já domina e para o tempo necessário no que trava. Ninguém fica esperando a turma.',
          'Atendemos desde quem nunca estudou o idioma até quem quer destravar a fala depois de anos de curso.',
        ],
        forWhom: [
          'Crianças e adolescentes com dificuldade no idioma da escola',
          'Adultos começando do zero',
          'Quem quer destravar a conversação',
          'Preparação para viagem, trabalho ou cidadania italiana',
        ],
        practical: [
          { label: 'Idiomas', value: 'Inglês e italiano' },
          { label: 'Formato', value: 'Aulas particulares' },
        ],
        status: 'rascunho',
      },
    ],
    faq: [
      {
        q: 'O reforço escolar substitui a psicopedagogia?',
        a: 'Não. O reforço retoma o conteúdo; a psicopedagogia investiga e trata a causa da dificuldade de aprender. Quando a dificuldade persiste apesar do reforço, é sinal de que a psicopedagogia é o caminho.',
      },
      {
        q: 'As aulas são individuais ou em grupo?',
        a: 'Os idiomas são individuais. O reforço escolar pode ser individual ou em grupo reduzido, conforme a etapa e a necessidade do aluno.',
      },
      {
        q: 'Vocês acompanham as tarefas e provas da escola?',
        a: 'Sim. Trabalhamos com o material e o calendário da escola do aluno, incluindo preparação para avaliações.',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────
  {
    slug: 'cursos-e-eventos',
    navLabel: 'Cursos e Eventos',
    title: 'Cursos e Eventos',
    metaTitle: 'Curso Básico de Libras',
    metaDescription:
      'Curso Básico de Libras no Instituto Sânzia Marcela: comunicação em Língua Brasileira de Sinais desde a primeira aula, com prática desde o começo.',
    promise: 'Formação aberta à comunidade, começando pela língua que aproxima.',
    heroSupport:
      'Cursos e encontros abertos ao público. A programação atual traz o Curso Básico de Libras.',
    services: [
      {
        id: 'curso-libras',
        name: 'Curso Básico de Libras',
        question: 'O que você aprende no Curso Básico de Libras?',
        answer:
          'Você aprende a se comunicar em Libras nas situações do dia a dia — se apresentar, perguntar, responder, falar de família, trabalho e rotina — junto com a base gramatical da língua e a cultura surda.',
        body: [
          'Libras é uma língua completa, com gramática própria, e não uma versão gestual do português. O curso parte desse princípio e trabalha desde a primeira aula com a prática de sinalização, não apenas com teoria.',
          'É indicado para quem convive com pessoas surdas, para profissionais de saúde e educação que querem atender melhor, e para qualquer pessoa interessada em aprender.',
        ],
        forWhom: [
          'Familiares e amigos de pessoas surdas',
          'Professores e profissionais de educação',
          'Profissionais de saúde e de atendimento ao público',
          'Qualquer pessoa interessada, sem conhecimento prévio',
        ],
        // Dados da turma em cartaz ficam em src/data/turmas.ts, que é o que a
        // faixa e a seção de inscrição leem. Aqui fica só o que é estável.
        practical: [
          { label: 'Nível', value: 'Básico, com noções de intermediário' },
          { label: 'Pré-requisito', value: 'Nenhum' },
          { label: 'Aulas', value: 'Sábados, no Instituto' },
          { label: 'Professor', value: 'Thiago Lima' },
          { label: 'Carga horária', value: 'A confirmar' }, // TODO(cliente)
          { label: 'Certificado', value: 'Sim' }, // confirmado por ela em 09/09
        ],
        status: 'rascunho',
        waMessage:
          'Olá! Vim pelo site e quero me inscrever no Curso Básico de Libras.',
      },
    ],
    faq: [
      {
        q: 'Preciso saber alguma coisa de Libras para começar?',
        a: 'Não. O curso é básico e parte do zero.',
      },
      {
        q: 'Quando começa a próxima turma?',
        a: 'A turma em cartaz começa em setembro de 2026, com aulas aos sábados e o professor Thiago Lima. As inscrições estão abertas — os detalhes estão no começo desta página.',
      },
      {
        q: 'O curso é presencial?',
        a: 'Sim, presencial no Instituto — Libras é uma língua visual e a prática presencial faz diferença no aprendizado.',
      },
    ],
  },
];

export const categoryBySlug = new Map(categories.map((c) => [c.slug, c]));

export const allServices = categories.flatMap((c) =>
  c.services.map((s) => ({ ...s, categorySlug: c.slug, categoryTitle: c.title })),
);

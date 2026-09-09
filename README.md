# Instituto Sânzia Marcela — site

Astro em export estático, publicado na Cloudflare Pages. Sem servidor, sem
build no runtime: todo HTML é gerado no deploy e servido do cache de borda.

## Rodar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # serve dist/ localmente
npm run check    # type-check dos .astro
```

Requer Node 22+ (`nvm use 22`).

## Arquitetura — Home + 4 páginas

| Rota | Conteúdo |
|------|----------|
| `/` | Porta de entrada: os 3 pilares + curso de Libras, redireciona para as internas |
| `/cuidado-psicologico` | Psicologia Clínica, Avaliação Neuropsicológica, Orientação Profissional |
| `/desenvolvimento-e-terapias` | Terapia ABA, Psicopedagogia, Psicomotricidade, Arteterapia, Terapia Ocupacional |
| `/apoio-educacional` | Reforço Escolar, Inglês e Italiano |
| `/cursos-e-eventos` | Curso Básico de Libras |

Cada serviço é uma seção com âncora própria dentro da página da categoria —
`/desenvolvimento-e-terapias#terapia-aba`. Isso dá **11 serviços endereçáveis**
(link direto divulgável no Instagram, cada um com o seu `Service` no JSON-LD) ao
custo de renderizar 4 páginas.

As 4 páginas de categoria vêm de uma rota única, `src/pages/[category].astro`,
alimentada por `src/data/services.ts`. Adicionar um serviço é adicionar um
objeto ao array — a âncora, a navegação, o rodapé, o sitemap e o schema saem de
graça. Adicionar uma categoria é adicionar um item ao array `categories`.

## Onde mexer

```
src/data/services.ts     ← TODO O CONTEÚDO dos serviços e FAQs
src/data/depoimentos.ts  ← relatos das mães + estado da autorização de imagem
src/data/site.ts         ← contato, endereço, WhatsApp, helper waLink()
src/styles/global.css    ← tokens de cor, tipografia, espaço, forma
src/components/          ← blocos reutilizáveis
src/pages/[category].astro ← o molde das 4 páginas de categoria
src/pages/index.astro    ← home (única página com layout próprio)
public/img/              ← fotos do espaço real
```

Conteúdo não fica em `.astro`. Se você está editando texto de serviço dentro de
um componente, está no arquivo errado.

## Decisões de design

O público é mãe ou pai buscando ajuda para um filho com suspeita de autismo,
dificuldade de aprendizagem ou sofrimento emocional. O estado emocional é
ansiedade e, com frequência, culpa. O layout precisa **reduzir ansiedade** e
transmitir competência serena — o oposto do padrão de e-commerce.

Portanto, deliberadamente **ausentes**: popup de saída, contador de urgência,
"últimas vagas", banner pulsante, chat que abre sozinho.

- **Paleta** — azul-marinho, azul-petróleo, cinza, preto e branco. A primeira
  versão tinha um neutro quente (areia) para tirar a frieza clínica; **a cliente
  pediu para retirar** no áudio de 01/09: *"esse amarelinho, se conseguir deixar
  azul, cinza, preto e branco, pra ficar mais na tabela do Instituto mesmo"*.
  A calma passou a vir da forma e do respiro, e a madeira das fotos do espaço
  real carrega o que o tom quente carregava. Os tokens são `--grey-25` (fundo),
  `--grey-50` (faixas), `--grey-100` (alternância) e `--white` (superfícies) —
  trocar os quatro valores reverte a decisão.
- **Formas** — curvas orgânicas nas divisões de seção (`OrganicDivider`), cantos
  arredondados generosos, sombras muito suaves.
- **Tipografia** — Source Serif 4 (serifada humanista) nos títulos, Inter no
  corpo a 17–18px com entrelinha 1.72. Fontes self-hosted via `@fontsource`:
  zero requisição externa, zero layout shift.
- **Espaço** — `--section-y` de 3.5 a 6.5rem. Espaço em branco aqui comunica
  calma, não desperdício.
- **Copy** — *answer-first*: cada seção abre com a pergunta ("O que é a Terapia
  ABA?") respondida na primeira frase. Bom para o leitor ansioso, bom para
  featured snippet e para citação por LLM.
- **CTA** — "Tirar uma dúvida no WhatsApp", nunca "Agende agora". O CTA do
  header saiu no desktop: o botão flutuante está sempre visível e o hero repete
  a mesma ação, então era a terceira cópia.

### O que foi deliberadamente removido

Uma passada com a skill `frontend-design` mostrou que a primeira versão gastava
escolhas livres nos padrões mais reconhecíveis de página gerada. O briefing
manda no que ele fixou (areia, serifada, curvas, cantos, sombras suaves); o
resto foi cortado:

- **acento terracota** (`--accent`) — creme + serifada de alto contraste +
  terracota é o cluster mais identificável. Estava morto no código. No lugar
  entrou `--paper: #fffdf9`, que resolve de verdade o branco frio das
  superfícies sobre areia.
- **eyebrows ALL-CAPS** acima de cada título — 9 deles. Onde carregavam
  informação, a informação ficou: a cidade foi para a lede do hero, e o nome do
  serviço virou `.svc__name` em caixa normal (as pílulas de âncora e os links do
  rodapé usam o nome, e em 2 dos 11 serviços ele não aparece na pergunta).
- **`→` colado no texto do link** e **`·` unindo strings de meta**.
- **elevação no `:hover` dos botões** — trocada por `:active`, que responde a uma
  ação em vez de decorar. Para este público o CTA deve parecer firme.
- **três variantes de onda → uma** curva só, espelhada com `flip` no par de
  entrada/saída da faixa marinho. Uma forma reconhecível lê como assinatura.
- **blob orgânico atrás da foto do hero** — o briefing pediu forma orgânica nas
  divisões de seção, que é outra coisa.
- **sombra em todo card** — agora há dois níveis com significado: `.card` é
  destino clicável (só os 3 pilares da home), `.panel` é informação e fica
  quieta. O FAQ virou uma lista agrupada em vez de pilha de caixas. Sombra por
  página de categoria caiu de ~5 para 0.

A ousadia se concentra em um lugar: a **faixa marinho do Curso de Libras**, com
o maior corpo de tipo da página depois do H1.

### Rolagem: nada de suave, e a régua só mexe em si mesma

Duas decisões que existem para evitar um bug de rolagem, e que parecem
"faltando" para quem chegar depois:

- **Não há `scroll-behavior: smooth`.** Com a régua de âncoras, o clique
  iniciava uma animação que brigava com a roda do mouse e com o observer da
  régua. Salto direto não tem como conflitar. O `scroll-padding-top` no `html`
  continua tirando a seção de trás das barras fixas — verificado: a seção para a
  144px, com 140px de barras.
- **A régua de âncoras nunca chama `scrollIntoView`.** Havia um, e era o
  problema: por especificação ele rola toda a cadeia de ancestrais, não só o
  contêiner rolável mais próximo, e o observer o chamava a cada disparo.
  `AnchorNav.astro` agora calcula e atribui `scrollLeft` só da própria régua, e
  só quando a seção ativa muda de verdade.

Se for preciso reintroduzir rolagem suave, faça por gesto (`scrollTo` no
handler do clique), nunca global no `html`, e mantenha o observer longe de
qualquer API que role ancestrais.

### Depoimentos em vídeo

Seção "O que as mães contam" na home, alimentada por `src/data/depoimentos.ts`.
Três relatos gravados pelas próprias mães.

- **Auto-hospedado, não YouTube.** Um iframe do Google numa página onde uma mãe
  clica para saber de autismo infantil entrega esse clique para terceiro. Aqui o
  custo do embed é de privacidade, não só de performance.
- **`preload="none"` + poster.** Os 8 MB de vídeo custam **zero byte** no
  carregamento da home. Nada toca sozinho, nada pulsa.
- **Legenda `.vtt` ligada por padrão**, com o nome das crianças substituído por
  "minha filha" / "meu filho": legenda é texto indexável, e nome de menor junto
  de informação clínica não deveria ir para busca.
- **Citação em texto** ao lado de cada vídeo, para quem não vai dar play — a
  prova social não depende de apertar um botão.
- Re-encode e recorte foram feitos com `ffmpeg`; o comando está no histórico do
  `CONTENT-TODO.md`, seção 6.

A autorização de uso de imagem de cada mãe é bloqueador de go-live e está
rastreada no campo `autorizacao`, com aviso no build enquanto estiver pendente.

## Acessibilidade

Não é conformidade, é coerência: um instituto que ensina Libras e faz Terapia
Ocupacional precisa de site acessível. E é argumento de venda com esse público.

- Contraste AA verificado nos tokens (texto de apoio 5.3:1, CTA 7.2:1)
- Controle de tamanho de texto visível no header, com preferência persistida e
  aplicada antes da primeira pintura (sem flash)
- Navegação por teclado completa; menu mobile fecha com `Esc` e devolve o foco
- `:focus-visible` sempre visível, nunca removido
- Skip link, landmarks semânticos, `aria-current` na página atual
- `alt` descritivo em toda imagem (o placeholder de foto ausente usa
  `role="img"` + `aria-label`, então o texto alternativo já existe antes da foto)
- O FAQ agrupado **não** usa `overflow: hidden` no container: um ancestral que
  corta comeria o anel de foco (`outline` 3px + offset 3px) de todo `<summary>`.
  Os cantos ficam no primeiro/último `summary`.
- `prefers-reduced-motion` e `prefers-contrast: more` respeitados

## SEO

- `Service` individual por seção, com `@id` na âncora e `provider` apontando
  para a organização
- `MedicalClinic` + `EducationalOrganization` na home, com `hasOfferCatalog`
  espelhando as 4 categorias
- `FAQPage` por página de categoria, `BreadcrumbList` nas internas
- Sitemap automático, canonical em toda página, OG para preview no WhatsApp

## Deploy — Cloudflare Pages

| Campo | Valor |
|-------|-------|
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | `22` (variável `NODE_VERSION`) |

`public/_headers` define o cache de borda: assets com hash em `immutable` por um
ano, HTML com `must-revalidate` para que a publicação apareça na hora.

`build.format: 'file'` + `trailingSlash: 'never'` fazem a URL ser
`/cuidado-psicologico`, sem barra final e sem `.html`.

## Pendências

Ver [CONTENT-TODO.md](CONTENT-TODO.md). O build imprime um aviso por texto não
aprovado e por foto ausente — o log limpo é o critério de go-live.
# institutosanzia

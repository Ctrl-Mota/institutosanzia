# Instituto Sanzia — site

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
| `/cuidado-psicologico` | Psicologia Clínica · Avaliação Neuropsicológica · Orientação Profissional |
| `/desenvolvimento-e-terapias` | Terapia ABA · Psicopedagogia · Psicomotricidade · Arteterapia · Terapia Ocupacional |
| `/apoio-educacional` | Reforço Escolar · Inglês e Italiano |
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

- **Paleta** — azul-marinho e azul-petróleo do material dela, com areia/off-white
  (`--sand`) somado para tirar a frieza clínica.
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
- **CTA** — "Tirar uma dúvida no WhatsApp", nunca "Agende agora".

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

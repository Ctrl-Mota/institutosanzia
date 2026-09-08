# Pendências de conteúdo — Instituto Sanzia

O build imprime um aviso para cada item pendente. Nada aqui impede publicar,
mas tudo aqui precisa ser resolvido antes do go-live.

## 1. Bloqueadores de go-live

| # | Item | Onde | Situação |
|---|------|------|----------|
| 1 | **Cidade** | `src/data/site.ts` → `address.city` | **PRESUMIDA** como Macaé a partir do DDD 22. O DDD cobre Macaé, Campos, Cabo Frio, Nova Friburgo e Itaperuna. Aparece no H1 da home, no FAQ e no schema. **Confirmar.** |
| 2 | Endereço completo + CEP | `src/data/site.ts` → `address` | vazio |
| 3 | Horário de funcionamento | `src/data/site.ts` → `openingHours` | vazio (formato schema.org, ex. `'Mo-Fr 08:00-18:00'`) |
| 4 | E-mail de contato | `src/data/site.ts` → `email` | vazio |
| 5 | @ do Instagram | `src/data/site.ts` → `social.instagram` | vazio (entra no `sameAs` do schema) |
| 6 | Domínio final | `astro.config.mjs` → `site` e `public/robots.txt` | assumido `institutosanzia.com.br` |

## 2. Textos dos serviços

`status` em `src/data/services.ts` controla isto:

- `'pendente'` — **não há texto do Instituto.** O que está no site é rascunho nosso.
- `'rascunho'` — redação nossa a partir da categorização, aguardando revisão.
- `'aprovado'` — texto do Instituto, revisado. Ninguém está aqui ainda.

### Pendente de verdade

- **Psicopedagogia** (`desenvolvimento-e-terapias#psicopedagogia`) — foi listada na
  categorização, mas a descrição não veio. O texto atual é nosso e precisa de
  aprovação ou substituição.

### Pergunta em aberto

- **Musicoterapia** — estava na proposta comercial e **não aparece** na lista de
  serviços que ela enviou. Saiu do portfólio ou foi esquecida? Se voltar, entra
  em `desenvolvimento-e-terapias` como uma nova entrada em `services`.

### Rascunhos aguardando revisão dela

Todos os outros. Ela enviou as descrições de oito serviços; os textos do site
foram redigidos no formato *answer-first* (a resposta na primeira frase) para
performar em busca e em resposta de IA. Precisam do aval dela em duas frentes:
precisão técnica e tom de voz.

## 3. Dados do Curso de Libras

Em `services.ts` → `cursos-e-eventos#curso-libras` → `practical`:

- Carga horária — `'A confirmar'`
- Datas / periodicidade das turmas — `'A confirmar'`
- Certificado (emite? de quantas horas?) — `'A confirmar'`
- Valor e forma de pagamento

## 4. Fotografia

Cada foto ausente vira um placeholder identificado no layout e um aviso no
build — não quebra nada. Salvar em `public/img/` com o nome exato:

| Arquivo | Uso | Proporção |
|---------|-----|-----------|
| `espaco-recepcao.jpg` | Hero da home | 4:5 (vertical) |
| `curso-libras.jpg` | Bloco do curso na home | 3:2 |
| `espaco-sala-1.jpg` | Sala de atendimento infantil | 4:3 |
| `espaco-sala-2.jpg` | Sala de psicoterapia | 4:3 |
| `og-default.jpg` | Preview de link (WhatsApp, Instagram) | 1200×630 |

Sem `og-default.jpg` o link compartilhado no WhatsApp aparece sem imagem —
é o primeiro contato de boa parte do público, então vale prioridade.

Faltam também os ícones de marca, que dependem do logo em vetor:

| Arquivo | Uso |
|---------|-----|
| `public/favicon.svg` | provisório, feito a partir do "S" — trocar pelo logo real |
| `public/apple-touch-icon.png` | 180×180, atalho no iOS (a tag no `<head>` só volta quando o arquivo existir) |

Ainda faltam pedir: mais 3 ou 4 ambientes reais (sala de terapia ocupacional,
espaço de psicomotricidade, fachada, sala do reforço). Foto do espaço real vale
mais que banco de imagens — e o público reconhece foto de estoque.

**Não usar** foto de estoque de criança sorrindo.

## 5. Antes de publicar

- [ ] Preencher itens 1 a 6 da seção 1
- [ ] Substituir/aprovar todos os `status` para `'aprovado'`
- [ ] Colocar as 5 fotos da seção 4
- [ ] Rodar `npm run build` e confirmar **zero avisos** no log
- [ ] Testar os deep links do WhatsApp em um celular real
- [ ] Rodar Lighthouse (a11y e SEO em 100) e um teste de leitor de tela no menu

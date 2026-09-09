# Pendências de conteúdo — Instituto Sânzia Marcela

O build imprime um aviso por item pendente. Log limpo é o critério de go-live.
Hoje: **15 avisos** — 11 textos de serviço, 1 foto e 3 autorizações de imagem.

## Resolvido com a mídia de 27/08 → 04/09

- [x] **Nome da marca** → `Instituto Sânzia Marcela` (o print de 27/08 marcava em
      vermelho onde entrava o "Marcela")
- [x] **Subtítulo** → `Psicologia e Educação Integrada`
- [x] **Cidade** → Búzios (o print marcava "MACAÉ" de verde)
- [x] **Instagram** → `@institutosanziamarcela`, entra no `sameAs` do schema
- [x] **Iniciais maiúsculas** → as 4 categorias em Title Case. O print do menu
      tinha um ponto verde na segunda palavra de cada item: "psicológico",
      "terapias", "educacional", "eventos". Era isso mesmo.
- [x] **Paleta** → azul, cinza, preto e branco. No áudio de 01/09: *"esse
      amarelinho, se conseguir deixar azul, cinza, preto e branco, pra ficar
      mais na tabela do Instituto mesmo"*. O neutro quente (areia) saiu.
- [x] **3 fotos reais do espaço** + **1 foto de atendimento** (ver seção 5)
- [x] **3 vídeos de depoimento** publicados na home (ver seção 6)

## 1. Bloqueadores de go-live

| # | Item | Onde | Situação |
|---|------|------|----------|
| 1 | Endereço completo + CEP | `src/data/site.ts` → `address` | vazio |
| 2 | Horário de funcionamento | `src/data/site.ts` → `openingHours` | vazio (formato schema.org) |
| 3 | E-mail de contato | `src/data/site.ts` → `email` | vazio |
| 4 | Domínio final | `astro.config.mjs`, `public/robots.txt` | assumido `institutosanzia.com.br`; o Instagram é `institutosanziamarcela` — **confirmar** |

Autorização dos depoimentos: **liberada em 08/09**, os três em
`autorizacao: 'ok'`.

## 2. Ainda falta pedir

- **O texto de Psicopedagogia.** A imagem de 02/09 legendada "Atendimento
  Psicopedagógico" era uma **foto do atendimento**, não a descrição do serviço.
  O serviço segue em `status: 'pendente'` com rascunho nosso.
- **Um áudio de 27/08 12:49:50** não veio no reexport (veio o de 12:50:45).
- **Foto da recepção.** No áudio de 01/09 ela diz que um rapaz ia fotografar a
  recepção. Enquanto não chega, o hero usa a foto vertical da sala.
- **Foto do Curso de Libras** (`curso-libras.jpg`) — é o único aviso de foto no
  build.

## 3. Textos dos serviços

`status` em `src/data/services.ts`:

- `'pendente'` — **Psicopedagogia** (ver seção 2).
- `'rascunho'` — os outros 10. Redação nossa em formato answer-first,
  aguardando o aval dela em precisão técnica e tom.
- `'aprovado'` — ninguém ainda.

**Musicoterapia** continua em aberto: estava na proposta comercial e não aparece
na lista de serviços que ela enviou. Saiu do portfólio?

## 4. Dados do Curso de Libras

Em `services.ts` → `cursos-e-eventos#curso-libras` → `practical`, tudo
`'A confirmar'`: carga horária, datas das turmas, certificado. Falta também
valor e forma de pagamento.

## 5. Fotografia

| Arquivo | Uso | Origem | Situação |
|---------|-----|--------|----------|
| `espaco-sala-vertical.jpg` | Hero da home | 02/09 12:15 | **pronta** |
| `espaco-sala-1.jpg` | Diferenciais | 04/09 13:09 | **pronta** |
| `espaco-sala-2.jpg` | Diferenciais | 02/09 12:16 | **pronta** |
| `atendimento-psicopedagogia.jpg` | Seção de Psicopedagogia | 02/09 11:07 | **pronta** |
| `og-default.jpg` | Preview de link no WhatsApp | gerado da marca | **pronta** |
| `espaco-recepcao.jpg` | (reservado, se a foto da recepção chegar) | — | falta |

O `og-default.jpg` **não é foto**: é um card de marca 1200×630 (marinho, nome em
Source Serif, a curva de assinatura). A fonte editável está em
`src/assets/og-default.svg`; para regerar, com `ffmpeg` e `qlmanage`:

```
qlmanage -t -s 1200 -o /tmp src/assets/og-default.svg
ffmpeg -y -i /tmp/og-default.svg.png -vf "crop=1200:630:0:0" -q:v 2 public/img/og-default.jpg
```

### Foto de turma de Libras: não existe mais esse slot

O bloco do Curso de Libras na home tinha um placeholder de foto de turma. Foto de
aula de Libras exige rosto e mão de aluno real, com autorização de cada um — e
uma imagem genérica pesaria contra justamente nesse bloco, que é o momento mais
forte da página. O espaço passou a carregar **informação**: o painel "Para quem
é", alimentado por `services.ts` → `curso-libras.forWhom`.

Se ela mandar uma foto real de turma (com autorização), vale reavaliar; hoje o
bloco não depende de foto nenhuma.

### Duas fotos NÃO usadas, de propósito

`-0000040` (sala com brinquedos) e `-0000038` (materiais de psicomotricidade)
ficaram fora. No áudio de 27/08 12:50 ela explica a origem: *"eu mandei a foto
do espaço e pedi o chat para colocar elementos que associassem à psicologia
infantil"*. São composições geradas por IA sobre a foto real, e ela mesma nota
que ficaram no mesmo ângulo, repetitivas.

Imagem de interior gerada por IA no site de uma clínica real é risco de
credibilidade: quem visita o espaço percebe que não corresponde. E ela já tinha
a solução melhor, dita no mesmo áudio: *"posso mandar uma foto, tipo a mãozinha
da criança e algumas coisas na mesa"* — que é exatamente
`atendimento-psicopedagogia.jpg`, foto real, sem rosto de criança.

Se quiser mais fotos "em ação" nesse formato, é o caminho: mão, material,
recorte fechado. Um serviço pode receber uma em
`services.ts` → `photo: { src, alt }`.

**Não usar** foto de estoque nem composição de IA.

Ícones de marca, que dependem do logo em vetor:

| Arquivo | Uso |
|---------|-----|
| `public/favicon.svg` | provisório, feito a partir do "S" — trocar pelo logo real |
| `public/apple-touch-icon.png` | 180×180; a tag no `<head>` só volta quando o arquivo existir |

## 6. Depoimentos — no ar, mas com pendência jurídica

Seção **"O que as mães contam"** na home, entre os diferenciais e o FAQ.
Dados em `src/data/depoimentos.ts`.

Três mães gravaram por conta própria. Pelo áudio de 03/09, ela escolheu mães
"mais comunicativas" de frentes diferentes (uma de psicologia, uma de
psicopedagogia); a terceira gravou de Friburgo, em viagem.

**O que já foi tratado:**

- **Peso.** 30 MB → 8 MB (h264 CRF 30, 400×712). Com `preload="none"`, o
  carregamento da home busca **zero byte** de vídeo — só os `.vtt`, poucos KB.
  Nada toca sozinho.
- **Recorte pedido.** No áudio de 03/09: *"vê se tem como cortar a parte da
  parede ali"*. `depoimento-1` teve 110px de parede removidos acima da cabeça.
  Os outros dois ficaram como foram gravados — você disse no áudio que *"quanto
  mais artesanal, melhor"*.
- **Legendas** em `*.pt.vtt`, ligadas por padrão. Num instituto que ensina
  Libras, legenda não é extra.
- **Nome de criança fora.** As mães dizem o nome dos filhos em áudio. Legenda é
  texto indexável, então os nomes foram substituídos por "minha filha" / "meu
  filho", e a atribuição na tela é por parentesco, não por nome. O áudio em si
  não dá para alterar sem reeditar.

**Autorização:** liberada em 08/09, os três em `autorizacao: 'ok'`. O campo
continua no lugar — se qualquer uma das mães pedir para sair, é uma linha por
depoimento e o vídeo pode ser removido de `public/video/` junto.

O arquivo da autorização escrita de cada mãe fica com o Instituto, não no repo.

## 7. Antes de publicar

- [x] Autorização dos depoimentos (08/09)
- [x] `og-default.jpg`
- [ ] Preencher os 4 itens da seção 1
- [ ] Pedir o texto de Psicopedagogia e passar os `status` para `'aprovado'`
- [ ] `npm run build` com **zero avisos** (hoje: 11, todos de texto de serviço)
- [ ] Testar os deep links do WhatsApp e os 3 vídeos em um celular real, no 4G
- [ ] Lighthouse (a11y e SEO em 100) e um teste de leitor de tela no menu

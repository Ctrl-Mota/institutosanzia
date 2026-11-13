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
      "terapias", "educacional", "eventos". Era isso mesmo.institutosanziamarcela
- [x] **Paleta** → azul, cinza, preto e branco. No áudio de 01/09: *"esse
      amarelinho, se conseguir deixar azul, cinza, preto e branco, pra ficar
      mais na tabela do Instituto mesmo"*. O neutro quente (areia) saiu.
- [x] **3 fotos reais do espaço** + **1 foto de atendimento** (ver seção 5)
- [x] **3 vídeos de depoimento** publicados na home (ver seção 6)

## 1. Bloqueadores de go-live

| # | Item | Onde | Situação |
|---|------|------|----------|
| 1 | Horário de funcionamento | `src/data/site.ts` → `openingHours` | vazio. O perfil do Google mostra "fecha 17:00", mas a semana toda não estava visível — pedir a ela. |
| 2 | E-mail de contato | `src/data/site.ts` → `email` | vazio |
| 3 | Domínio final | `astro.config.mjs`, `public/robots.txt` | assumido `institutosanzia.com.br`; o Instagram é `institutosanziamarcela` — **confirmar** |
| 4 | Carga horária, certificado e valor do curso | `src/data/turmas.ts` | `null`, e aparecem como "a confirmar" na seção de inscrição |

**Endereço resolvido** em 09/09/2026, lido do Perfil da Empresa no Google:
Av. José Bento Ribeiro Dantas, 4998, Sala 6 — Manguinhos, Armação dos Búzios,
RJ, 28953-814. Vale ela confirmar o número da sala.

> **Uma oportunidade de graça:** o perfil dela no Google ainda mostra
> "Adicionar website" — não tem site cadastrado. Depois do go-live, colocar o
> endereço do site no Perfil da Empresa é o caminho de tráfego mais barato que
> existe para negócio local, e leva dois minutos no painel dela.
| 5 | **Número do CRP** | `src/data/site.ts` → `crp` | vazio. É o sinal de credibilidade que o público espera de psicóloga e que a divulgação profissional do CFP pede. Preenchido, aparece no rodapé sozinho. |

### A foto de capa é uma das composições de IA

A capa atual, `public/img/sala-com-brinquedos.jpeg`, é **pixel a pixel idêntica**
(SSIM 1,000) ao arquivo `-0000038-PHOTO-2026-08-27-12-51-04.jpg` do WhatsApp —
uma das duas que ela descreveu no áudio de 27/08: *"mandei a foto do espaço e
pedi o chat para colocar elementos que associassem à psicologia infantil… aí eu
fui pedir uma de psicomotricidade"*.

Está no ar porque foi escolha deliberada. Mas vale saber que é o oposto do que a
pesquisa de conversão indica para este nicho: em site de terapeuta, foto
original do consultório supera imagem genérica de forma consistente — e a capa é
onde a confiança se ganha ou se perde. Como composição de IA sobre a sala real,
ela também não corresponde ao que a pessoa encontra ao visitar.

Trocar é uma linha em `src/pages/index.astro`. As reais disponíveis:

| Arquivo | O que é | Proporção |
|---|---|---|
| `espaco-sala-vertical.jpg` | sala real, vertical — encaixa direto no hero | 1080×1426 |
| `atendimento-psicopedagogia.jpg` | mão da criança em atendimento, sem rosto — a mais forte para converter, mas é 16:9 e pediria ajuste no layout do hero | 1599×899 |

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

Em `turmas.ts`, continuam pendentes a carga horária, o valor e a forma de
pagamento. O certificado foi confirmado em 09/09. A programação foi atualizada
com os pedidos de 12/11/2026, incluindo o início previsto em 6 de março de 2027.

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

### Imagens ilustrativas de Libras e do Café com Prosa

Lucas pediu fotos ilustrativas de IA em 13/11/2026. As duas imagens foram
geradas com a ferramenta integrada `imagegen`, otimizadas em JPEG de 1200×800
e incluídas na home e na página de Cursos e Eventos, com a legenda
"Imagem ilustrativa gerada por IA." e texto alternativo equivalente.

| Arquivo | Conteúdo |
|---------|----------|
| `public/img/curso-libras-ilustracao-ia.jpg` | Adultos praticando comunicação visual em uma aula fictícia de Libras |
| `public/img/cafe-com-prosa-ilustracao-ia.jpg` | Mulheres conversando em uma mesa de café, em uma cena fictícia |

Prompts utilizados na geração das imagens.

**Libras**

Use case: photorealistic-natural. Asset type: imagem ilustrativa para o Curso Introdutório de Libras no site do Instituto Sânzia Marcela. Criar uma fotografia editorial horizontal, proporção 3:2, de uma pequena aula de Libras para adultos em um ambiente educativo acolhedor. Três adultos brasileiros com diversidade de tons de pele e idades em torno de uma mesa, praticando comunicação visual com as mãos, expressões atentas e espontâneas. Enquadramento de meio corpo que permita ver os rostos e as mãos, anatomia natural e mãos coerentes. Luz natural suave, madeira clara, detalhes azul-marinho, branco e cinza, fundo simples, textura fotográfica realista. Mostrar uma situação genérica de aprendizagem, sem representar um sinal específico como instrução didática. Personagens e local fictícios, sem nomes, letras, cartazes legíveis, marcas, logotipos ou marca d'água. A imagem receberá no site uma legenda identificando que foi gerada por IA.

**Café**

Use case: photorealistic-natural. Asset type: imagem ilustrativa para o projeto Café com Prosa para Mulheres no site do Instituto Sânzia Marcela. Criar uma fotografia editorial horizontal, proporção 3:2, de quatro mulheres brasileiras adultas de idades e tons de pele diversos, reunidas em uma pequena mesa de café, conversando e ouvindo umas às outras com expressões naturais e acolhedoras. Xícaras de cerâmica e café na mesa, ambiente comunitário simples e confortável, luz natural suave. Enquadramento de meio corpo, rostos e mãos naturais, sem pose de campanha publicitária. Madeira clara, tons neutros, roupas azul-marinho, azul acinzentado e branco, composição fotográfica com texturas reais. Personagens e ambiente fictícios. Sem associar a cena a terapia ou a pacientes, sem crianças, sem nomes, letras, logotipos, cartazes legíveis ou marca d'água. A imagem receberá no site uma legenda identificando que foi gerada por IA.

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

As ilustrações de Libras e do Café com Prosa foram autorizadas por Lucas em
13/11/2026 e recebem identificação visível. As imagens dos atendimentos e do
espaço seguem documentadas acima.

Os ícones do site foram gerados a partir de `public/icon.png`.

| Arquivo | Uso |
|---------|-----|
| `public/favicon.png` | 64×64 para a aba do navegador |
| `public/apple-touch-icon.png` | 180×180 para a tela inicial do iOS |
| `public/icon-192.png` e `public/icon-512.png` | ícones declarados no manifesto do site |

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

## 7. Curso de Libras: turma em cartaz

Os dados da turma vivem em `src/data/turmas.ts` e alimentam a faixa da home,
os detalhes, as informações práticas, o FAQ e as mensagens do WhatsApp.
Fonte atualizada com as mensagens de 12/11/2026, às 09:03 e 09:08, e o print
das 09:08. O Curso Introdutório de Libras é de nível básico, com Thiago Santana,
aulas no 1º e 3º sábado do mês e início previsto em 6 de março de 2027.
Lucas confirmou o ano de 2027 e a divulgação para consulta pelo WhatsApp.

`divulgacaoAtiva: false` oculta a faixa e os detalhes da próxima turma.
`inscricoesAbertas: false` mantém as chamadas para consulta, com a programação
visível enquanto a divulgação estiver ativa. O lote atual é `null`.

O Café com Prosa para Mulheres usa os dados de `src/data/eventos.ts`, também
compartilhados pela home, detalhes e FAQ. A mensagem de 12/11/2026, às 09:06,
informa encontros no segundo sábado de cada mês, às 10h, valor de R$ 25,00
e retorno previsto em 13 de fevereiro de 2027, com o ano confirmado por Lucas.

## 8. Antes de publicar

- [x] Autorização dos depoimentos (08/09)
- [x] `og-default.jpg`
- [ ] Preencher os 4 itens da seção 1
- [ ] Pedir o texto de Psicopedagogia e passar os `status` para `'aprovado'`
- [ ] `npm run build` com **zero avisos** (hoje: 11, todos de texto de serviço)
- [ ] Testar os deep links do WhatsApp e os 3 vídeos em um celular real, no 4G
- [ ] Lighthouse (a11y e SEO em 100) e um teste de leitor de tela no menu

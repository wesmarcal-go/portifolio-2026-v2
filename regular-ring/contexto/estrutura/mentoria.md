# Estrutura da tela: mentoria

> Gerado pela skill design-forma / impeccable. Fonte de verdade da composição
> de `/mentoria` (servida em `mentoria.wesmarcal.com`). Manter sincronizado ao
> editar `MentoriaContent.astro`, `mentoria.css` ou `mentoria.ts`.

## Direção

Surface concept seed `b88b4497` (scope `surface`, mode `persuade`), candidata 6
da lista ordenada por ressonância: **A Carta**. Ver o contrato de direção
completo no comentário de abertura de `MentoriaContent.astro`.

A página inteira é uma carta em primeira pessoa do Wes, não uma landing page
convencional. Sem `site-header`/`site-footer` — o letterhead faz as vezes de
header, a assinatura faz as vezes de footer.

## Blocos (ordem no DOM)

1. **Letterhead** (`.mentoria-letterhead`, grid rail 222px + conteúdo)
   - Rail: `identity` (linka pro portfólio, `wesmarcal.com`) + bloco "DE:"
     (nome, cargo, empresas)
   - Conteúdo: fieldset "PARA:" com 4 `mentoria-chip` (radio group,
     `name="destinatario"`), saudação + abertura da carta (variam por
     destinatário via `[data-variant]` + CSS `:has()`), link "↓ ir direto pra
     resposta" ancorando em `#responder`
2. **`<main>`** com cinco `letter-movement`, alternando fixo/variável por
   destinatário:
   - `01 — O QUE EU VEJO` (variável)
   - `02 — O QUE EU FIZ` (fixo — prova em primeira pessoa, trajetória real)
   - `03 — COMO A GENTE TRABALHA` (variável)
   - `04 — O QUE VOCÊ LEVA` (variável)
   - `05 — O QUE ISSO NÃO É` (fixo — desqualificador)
   - Assinatura (`.mentoria-signature`) — fecho da carta, links (LinkedIn,
     portfólio, e-mail)
   - `reply-card` (o P.S.) — `#responder`

## Troca de destinatário

Pura CSS, sem JS. Os quatro `mentoria-chip` são radios reais dentro de um
`<fieldset>`; toda variante de texto já está no DOM (`[data-variant="pd-jr"]`
etc.) e `mentoria.css` decide qual mostra via
`.mentoria-letter:has(#dest-{id}:checked) [data-variant="{id}"]`. Sem suporte
a `:has()` (ou com JS desligado), a regra base `[data-variant="pd-jr"] {
display: block }` garante uma carta completa e coerente — o destinatário
default é sempre `pd-jr`.

O `<select>` "trilha" dentro do `reply-card` começa sincronizado com o chip
marcado (via `src/scripts/mentoria-form.ts`, JS progressivo — o formulário
funciona sem essa sincronia também) e continua editável.

## Formulário e captação

`reply-card` é o único objeto com glass mesh na página (mesmo material do
`writing-section` da home). Estados: `idle` (o form) → `pending` (botão
desabilitado, label troca) → `success` ou `error` (`data-state` no card, CSS
esconde form + intro, mostra o resultado correspondente). Erro mostra um link
`mailto:` pré-preenchido com o que a pessoa digitou, pra não perder o lead.

Anti-spam sem captcha: honeypot (`empresa`, `tabindex="-1"`, oculto) + time-
trap de 2,5s — os dois descartam silenciosamente e fingem sucesso, sem
alertar quem está tentando abusar do form.

Endpoint configurável via `PUBLIC_LEADS_ENDPOINT` (`.env`) — Apps Script Web
App ou webhook Make/n8n, mesma implementação client-side pras duas opções.
Detalhes de deploy: `regular-ring/integracoes/mentoria-leads/README.md`.

## Responsivo

- **≤900px**: letterhead vira coluna única (rail em row acima do conteúdo);
  `letter-movement`, assinatura e `reply-card` empilham (marginália vira
  micro-label inline acima do texto, mesmo idioma do `case-measurement`)
- **≤480px**: escala de espaçamento reduzida (`--spacing-lg: 24px`,
  `--spacing-xl: 40px`, redeclaradas em `.mentoria-letter`), `padding-inline`
  zerado nos frames (mesmo idioma de `page-home`/`case-ifood`), chips viram
  grid 2×2
- `reply-card` colapsa o grid de campos de 2 → 1 coluna por *container query*
  (`container-type: inline-size`), não por viewport — reage ao espaço do
  próprio card, não da tela

## Acessibilidade

- `<main>` como landmark
- Chips: `<fieldset>` + `<legend>` visível ("PARA:") + radios reais — setas do
  teclado navegam entre eles nativamente
- Cada campo do form tem `<label>` associado; erro de validação usa
  `aria-invalid="true"` + `role="alert"` + foco movido pro primeiro campo
  inválido
- Resultado do envio (`success`/`error`) usa `role="status"` / `role="alert"`
- Erro de campo sinalizado por hairline + texto peach (não só cor) contra o
  botão peach sólido — mesma família de sinal, pesos diferentes
- `prefers-reduced-motion`: entradas caem pra fade puro
- `prefers-reduced-transparency`: `reply-card` vira mistura sólida de ink,
  sem blur

## Pendências (conteúdo do Wes)

Todo o texto dos cinco movimentos e das quatro variantes de saudação/abertura
foi escrito em fidelidade de produção em `src/i18n/mentoria.ts`, mas é
conteúdo provisório — revisar/substituir antes de divulgar a página. Nenhum
preço, depoimento ou métrica foi inventado (`PRODUCT.md` proíbe).

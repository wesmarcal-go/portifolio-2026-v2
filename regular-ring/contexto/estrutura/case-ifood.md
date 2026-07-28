# Estrutura: portfólio Wes Marçal — case iFood

> Documento gerado pela skill design-forma / `/impeccable`.
> Camada FORMA · slug canônico: `case-ifood` · pages: `cases/ifood.astro` (pt) e `en/cases/ifood.astro` (en)
> Markup compartilhado entre os dois idiomas via `src/components/CaseIfoodContent.astro`.
> Direção: "bancada de diagnóstico" — seed impeccable `975b8bb9` (`--scope surface --mode read`), índice 5.

## Blocos principais

- **header**: idêntico ao das outras telas, componente `site-header` — `activePage="cases"` mantém "cases" ativo; `langHrefs` aponta o troca-idioma para o case equivalente no outro locale, não para a home
- **hero**: coluna identidade (`identity`) + intro com link "voltar para cases" + headline (H1, título do roteiro) + régua de metadados (`dl`, 6 tags: ano, duração, ferramentas, contexto, indústria, meu papel) — a régua fecha o hero como um "bezel" de instrumento
- **video banner** (`figure.page-case__video-banner`): full-bleed com margem lateral 16px, altura 300px, `border-radius: 8px`; placeholder até o vídeo (ffmpeg) estar pronto
- **sete medições** (`<main>`, uma `case-measurement` cada, `<h2>` cada uma): Resumo · O problema · Workflow · Princípios de design · Tangibilização · Impacto · Retrospectiva — índice `01`–`07` + label uppercase na trilha esquerda, conteúdo à direita
- **footer**: idêntico às outras telas, componente `site-footer`

## Componentes que se repetem nesta tela

- **site-header** → `src/components/SiteHeader.astro`: `activePage="cases"`, `langHrefs={{ pt: casesUnlockedHref.pt, en: casesUnlockedHref.en }}`
- **identity** → `src/components/Identity.astro`: mesmo componente da home/carreira/cases
- **site-footer** → `src/components/SiteFooter.astro`: mesmo componente das outras telas

(Detalhes em `contexto/dicionario.md`.)

## Elementos únicos nesta tela

- **case-measurement** (`src/components/CaseMeasurement.astro`): wrapper de seção — trilha esquerda sticky (índice + label) + conteúdo; borda hairline no topo; as sete medições + footer vivem num campo contínuo `.page-case__field` (`--color-parchment` / `#f5ebe0`, texto ink + cognac); header e hero permanecem no campo ink
- **case-media-slot** (`src/components/CaseMediaSlot.astro`): moldura graticule (grade + cantos + crosshair) com `figcaption` — Tangibilização ainda placeholder; Workflow usa vídeo dedicado (`page-case__workflow-media` + `/videos/workflow-ai.mp4`)
- régua de metadados do hero (`dl.page-case__readout`): 6 pares label/valor do roteiro, 3 colunas → 2 → 1
- cards de "O problema": Problema (prosa) + Evidências (lista de 4 itens, marcador `–` em cognac)
- pilares de "Princípios de design": 3 itens numerados (Visibilidade, Autonomia, Padronização), numeral fantasma serif
- cards planos de "Tangibilização": 3 frases curtas em grade
- cards planos de "Impacto": título + 3 frases curtas em grade (placeholder)

## Decisões de design

- Página é o próprio instrumento: cada seção é uma "medição" rotulada, não um capítulo de scroll editorial — recusa deliberadamente o rail de capítulos + pull-quotes da categoria.
- Cognac carrega o registro reativo (problema/evidências); pine carrega o proativo (princípios/solução) — os dois já existiam como tokens, cognac já em uso, pine estreado aqui.
- Conteúdo textual em `--measure` (645px); mídia e grades de card podem correr até a largura do `.page-frame`.
- Nenhum conteúdo é inventado — todo texto vem de `regular-ring/public/roteiro-apresentacao-case.md` (mesma fonte movida depois para `src/i18n/case-ifood.ts`) ou é sua tradução fiel para EN.
- Mídia: Workflow com `/videos/workflow-ai.mp4` (play on visible, sem loop, via `play-on-visible.ts`); Tangibilização ainda placeholder. Resumo é só prosa (sem slot de mídia).
- Motion: stagger no hero (back → headline → régua); cada `case-measurement` revela via `IntersectionObserver` (fade + translateY 8px, 280ms) — mesmo script (`src/scripts/reveal.ts`) usado pela timeline da carreira.

## Transição de página

`astro:transitions` (`ClientRouter`, em `Layout.astro`) com `fade({ duration: 280 })` na raiz `.page-case`.

## Internacionalização

- Rotas: `pt` em `/cases/ifood`, `en` em `/en/cases/ifood` (`src/i18n/strings.ts` → `casesUnlockedHref`, já reservado antes desta tela existir)
- Textos de página/meta vêm de `src/i18n/strings.ts` (chaves `caseIfood*`); conteúdo estruturado (metadados, parágrafos, cards, pilares) vem de `src/i18n/case-ifood.ts`
- `CaseIfoodContent.astro` recebe `locale` como prop e não tem texto hardcoded
- `Layout.astro`: `page="case-ifood"` resolve canonical/hreflang para `casesUnlockedHref` (antes caía no fallback de carreira)

## Estados de tela a cobrir

- **cheio**: header + hero + 7 medições + footer — pt e en
- **menu mobile aberto**: mesmo `mobile-menu`, com "cases" ativo
- **`prefers-reduced-motion`**: hero e medições caem para fade puro, sem translateY
- **`prefers-reduced-transparency`**: moldura do `case-media-slot` perde a leve transparência do fundo

## Estados de tela fora do escopo

- os 3 assets de mídia reais (GIF resumo, GIF workflow, vídeo/imagens tangibilização) — placeholders rotulados até Wes entregar
- carregando / erro

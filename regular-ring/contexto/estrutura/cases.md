# Estrutura: portfólio Wes Marçal — cases

> Documento gerado pela skill design-forma.
> Camada FORMA · slug canônico: `cases` · pages: `cases.astro` (pt) e `en/cases.astro` (en)
> Markup compartilhado entre os dois idiomas via `src/components/CasesContent.astro`.

## Blocos principais

- **header**: idêntico ao das outras telas, componente `site-header` — `activePage="cases"` deixa "cases" ativo
- **hero**: identidade (`identity`) + eyebrow "melhores trabalhos" + headline de posicionamento — mesmo padrão estrutural de home/carreira
- **stage / grade de prévia**: grade 3×1 — tile 1 liberado (nítido, link para case futuro), tiles 2–3 em breve (blur suave + scrim + rótulo centrado)
- **footer**: idêntico às outras telas, componente `site-footer` (contato / pedido de acesso vive no footer)

## Componentes que se repetem nesta tela

- **site-header** → `src/components/SiteHeader.astro`: `activePage="cases"`
- **identity** → `src/components/Identity.astro`: mesmo componente da home/carreira
- **site-footer** → `src/components/SiteFooter.astro`: mesmo componente da home/carreira

(Detalhes em `contexto/dicionario.md`.)

## Elementos únicos nesta tela

- grade de prévia (`cases-preview-grid` → `CasesPreviewGrid.astro`): tile iFood em vídeo (`/videos/case-ifood-thumb.mp4`) + 2 imagens locked (`slide-ze-delivery.png`, `slide-grupo-globo.png`); CSS em `src/styles/cases-preview.css`
- tile liberado: link `casesUnlockedHref` (`/cases/ifood` · `/en/cases/ifood`) — ver `contexto/estrutura/case-ifood.md`; legenda inferior com título + tags (`casesUnlockedTitle`, `casesUnlockedTags`)
- tiles em breve: blur suave + scrim + rótulo `casesLockedLabel` (“Em breve” / “Coming soon”)

## Decisões de design

- Grade é o conteúdo do stage: 1 liberado + 2 bloqueados comunica hierarquia de acesso sem card/modal de gate.
- Rótulo “em breve” nos tiles com blur suave sinaliza cases ainda não publicados; pedido de acesso fica no footer (e-mail / LinkedIn).
- Motion: stagger nos tiles; `prefers-reduced-motion` → só fade.
- Mobile ≤700px: 1 coluna — liberado, depois bloqueados.

## Transição de página

`astro:transitions` (`ClientRouter`, em `Layout.astro`) com `fade({ duration: 280 })` na raiz `.page-cases`.

## Internacionalização

- Rotas: `pt` em `/cases`, `en` em `/en/cases` (`src/i18n/strings.ts` → `navCasesHref`)
- Textos de página vêm de `src/i18n/strings.ts` (`t(locale)`)
- `CasesContent.astro` recebe `locale` como prop e não tem texto hardcoded (exceto assets)

## Estados de tela a cobrir

- **cheio**: header + hero + grade 3×1 (1 liberado + 2 bloqueados com cadeado) + footer — pt e en
- **menu mobile aberto**: mesmo `mobile-menu`, com "cases" ativo
- **`prefers-reduced-motion`**: entradas só com fade
- **`prefers-reduced-transparency`**: scrim mais opaco nos tiles bloqueados

## Estados de tela fora do escopo

- autenticação / unlock do blur
- carregando / erro

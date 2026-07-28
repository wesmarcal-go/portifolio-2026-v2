# Dicionário do projeto: portfólio Wes Marçal

> Gerado pela skill design-forma.
> Contrato linguístico designer ↔ agente. Acumula a cada tela.
> kebab-case no contrato; arquivo Astro em PascalCase.

## arrow-icon

- **Arquivo**: `src/components/ArrowIcon.astro`
- **Estrutura**: seta SVG 16×16 (`currentColor`, sem props) — mesmo glifo usado em todo o site
- **Variações**: nenhuma; tamanho/cor controlados pelo elemento pai (`width`/`height`/`color` via CSS, `svg { width:100%; height:100% }`)
- **Onde aparece**: `nav-item`, `mobile-menu` (nav home/carreira/cases), headline da tela carreira (`career-content`, substitui o "—" por uma seta inline no meio da frase)

## nav-item

- **Arquivo**: `src/components/NavItem.astro`
- **Estrutura**: link de navegação com ícone de seta (`arrow-icon`) + label de rota
- **Variações**: ativo | inativo — prop(s): `active: boolean`
- **Onde aparece**: header (home, carreira, cases)

## card-reel

- **Arquivo**: `src/components/CardReel.astro`
- **Estrutura**: mídia do case (imagem) + nome do projeto abaixo
- **Variações**: nenhuma estrutural — prop(s): `title: string`, `image: ImageMetadata`, `alt?: string`, `ariaHidden?: boolean` (usado no set duplicado do carrossel, ver abaixo)
- **Onde aparece**: bloco reels — carrossel automático (marquee), cada case renderizado duas vezes (set real + set duplicado com `aria-hidden`) para permitir o loop contínuo sem salto

## link-social

- **Arquivo**: `src/components/LinkSocial.astro`
- **Estrutura**: ícone da rede + texto do handle/URL
- **Variações**: por rede via ícone; gap ícone–texto — prop(s): `label: string`, `href: string`, `icon: ImageMetadata`, `gap?: 7 | 8`
- **Onde aparece**: footer (LinkedIn gap 7, Substack gap 8) e dentro do menu mobile (`mobile-menu`)

## lang-switch

- **Arquivo**: `src/components/LangSwitch.astro`
- **Estrutura**: par de links `pt | en` — link funcional para a página traduzida correspondente
- **Variações**: ativo | inativo por locale — prop(s): `locale: 'pt' | 'en'`, `label: string`, `ptHref?: string`, `enHref?: string` (default: `/` e `/en/`, a home; sobrescrito por telas com rota própria — carreira, cases, case-ifood — para apontar ao equivalente exato no outro idioma)
- **Onde aparece**: header (sempre visível, desktop e mobile)

## mobile-menu

- **Arquivo**: `src/components/MobileMenu.astro`
- **Estrutura**: botão hambúrguer (trigger) + overlay full-page (dialog) contendo `lang-switch` (topo, alinhado ao X), nav (home/carreira/cases, estilo igual ao desktop, item ativo em accent) e os links sociais do footer (`link-social`, variante `large`)
- **Variações**: aberto | fechado — controlado por JS (classe `is-open`, `aria-expanded`, `hidden`); foco preso no diálogo, fecha com Escape ou clique no link. Nav ativo/inativo — prop `activePage: 'home' | 'career' | 'cases'` (mesmo contrato do `nav-item` desktop)
- **Onde aparece**: dentro de `site-header`, visível apenas em telas ≤900px (troca de lugar com `nav-item` inline)
- **Contrato de idioma**: recebe todos os textos como props, computados por `site-header` via `t(locale)`

## identity

- **Arquivo**: `src/components/Identity.astro`
- **Estrutura**: avatar circular + wordmark ("wes marçal") — a marca pessoal do Wes
- **Variações**: `locale: 'pt' | 'en'` — só troca os `alt` (`avatarAlt`/`wordmarkAlt`); entra com fade + translateY staggered (avatar, depois wordmark +60ms), único padding-top próprio (20px desktop, 0 em ≤900px) para alinhar com o texto ao lado
- **Onde aparece**: hero de `home-content`, `career-content` e `cases-content` — mesma marca nas três telas

## site-header

- **Arquivo**: `src/components/SiteHeader.astro`
- **Estrutura**: nav desktop (`nav-item` × 3) + `mobile-menu` + `lang-switch` — compõe o header inteiro a partir de `locale` e `activePage`
- **Variações**: `activePage: 'home' | 'career' | 'cases'` — decide qual `nav-item` fica ativo; `langHrefs?: { pt: string; en: string }` — repassado para `lang-switch` e `mobile-menu` quando a tela tem rota própria fora da home
- **Onde aparece**: topo de `home-content`, `career-content`, `cases-content` e `case-ifood-content` (fonte única de verdade do header)

## site-footer

- **Arquivo**: `src/components/SiteFooter.astro`
- **Estrutura**: `link-social` × 2 (LinkedIn, Substack) + bloco de CTA (texto de disponibilidade + e-mail)
- **Variações**: `locale: 'pt' | 'en'` — troca todos os textos via `src/i18n/strings.ts`
- **Onde aparece**: rodapé de `home-content`, `career-content` e `cases-content` (fonte única de verdade do footer)

## timeline-entry

- **Arquivo**: `src/components/TimelineEntry.astro`
- **Estrutura**: linha de currículo — período (coluna esquerda, desktop) + empresa/cargo/descrição (coluna direita); empilha em mobile (≤900px)
- **Variações**: descrição pode vir só como parágrafo, ou parágrafo + lista de destaques (marcador "–" em accent) — prop(s): `company: string`, `role: string`, `period: string`, `description: string`, `highlights?: string[]`, `index: number` (define o delay do stagger de entrada)
- **Onde aparece**: bloco de trajetória da tela carreira, uma por experiência (`src/i18n/career.ts`); sem link/href — não representa um case clicável

## home-content

- **Arquivo**: `src/components/HomeContent.astro`
- **Estrutura**: corpo completo da home (`site-header`, hero, reels, `site-footer`), parametrizado por `locale` — usado pelas duas páginas de idioma para evitar duplicar markup
- **Variações**: `locale: 'pt' | 'en'` — troca todos os textos via `src/i18n/strings.ts`
- **Onde aparece**: `src/pages/index.astro` (pt) e `src/pages/en/index.astro` (en)

## career-content

- **Arquivo**: `src/components/CareerContent.astro`
- **Estrutura**: corpo completo da tela carreira (`site-header`, hero curto de trajetória com `arrow-icon` inline na headline, lista de `timeline-entry`, `site-footer`), parametrizado por `locale`
- **Variações**: `locale: 'pt' | 'en'` — troca textos via `src/i18n/strings.ts` e a lista via `src/i18n/career.ts`
- **Onde aparece**: `src/pages/carreira.astro` (pt) e `src/pages/en/career.astro` (en)

## cases-content

- **Arquivo**: `src/components/CasesContent.astro`
- **Estrutura**: corpo completo da tela cases (`site-header`, hero com `identity` + eyebrow/headline, stage com grade 3×1 de prévia, `site-footer`), parametrizado por `locale`
- **Variações**: `locale: 'pt' | 'en'` — troca textos via `src/i18n/strings.ts`
- **Onde aparece**: `src/pages/cases.astro` (pt) e `src/pages/en/cases.astro` (en)

## cases-preview-grid

- **Arquivo**: markup inline em `CasesContent.astro` (`data-component="cases-preview-grid"`)
- **Estrutura**: grade 3×1 — tile 1 liberado (nítido, link para case futuro), tiles 2–3 bloqueados (blur + scrim + ícone de cadeado centrado via `icon-lock.svg`)
- **Variações**: responsivo — 3 colunas no desktop, 1 coluna em ≤700px
- **Onde aparece**: bloco principal de `cases-content`

## case-ifood-content

- **Arquivo**: `src/components/CaseIfoodContent.astro`
- **Estrutura**: "bancada de diagnóstico" — corpo completo do case iFood: `site-header` (`activePage="cases"`), hero (identity + intro com link de volta, headline, régua de metadados `dl`), `<main>` com sete `case-measurement` em sequência (Resumo, O problema, Workflow, Princípios de design, Tangibilização, Impacto, Retrospectiva), `site-footer`
- **Variações**: `locale: 'pt' | 'en'` — troca textos via `src/i18n/strings.ts` (chaves `caseIfood*`) e conteúdo estruturado via `src/i18n/case-ifood.ts`
- **Onde aparece**: `src/pages/cases/ifood.astro` (pt) e `src/pages/en/cases/ifood.astro` (en)

## case-measurement

- **Arquivo**: `src/components/CaseMeasurement.astro`
- **Estrutura**: wrapper de seção — trilha esquerda fixa (índice `01`–`07` + label uppercase, `sticky` no desktop) + conteúdo à direita (`<slot/>`); borda hairline no topo (graticule); campo de fundo tonal opcional
- **Variações**: `register?: 'ink' | 'copper' | 'pine' | 'linen'` (default `ink`) — copper para o registro reativo (problema/evidências), pine para o proativo (princípios/tangibilização), linen para campo claro (workflow + diagrama); entra via `data-reveal` + `IntersectionObserver` (fade + translateY, `astro:page-load`) — prop(s): `id: string`, `index: number`, `label: string`
- **Onde aparece**: as sete seções de `case-ifood-content`

## case-media-slot

- **Arquivo**: `src/components/CaseMediaSlot.astro`
- **Estrutura**: `<figure>` — moldura ruled em graticule (grade 40px, cantos em cognac, crosshair central) + `<figcaption>` visível; com `src` preenchido, a grade some e o asset ocupa a moldura (`object-fit: contain`, fundo `--color-linen`)
- **Variações**: `ratio: string` (aspect-ratio CSS quando placeholder), `caption: string`, `src?: ImageMetadata`, `alt?: string` — com `src`, o ratio deriva de `width/height` do asset
- **Onde aparece**: seção Tangibilização (placeholder) de `case-ifood-content`; Workflow usa vídeo em `page-case__workflow-media`

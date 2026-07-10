# Estrutura: portfólio Wes Marçal — carreira

> Documento gerado pela skill design-forma.
> Camada FORMA · slug canônico: `carreira` · pages: `carreira.astro` (pt) e `en/career.astro` (en)
> Markup compartilhado entre os dois idiomas via `src/components/CareerContent.astro`.

## Blocos principais

- **header**: idêntico ao da home, componente `site-header` — `activePage="career"` deixa "carreira"/"career" ativo em vez de "home"
- **hero**: identidade (avatar + wordmark, componente `identity` — a mesma marca da home) + eyebrow + headline curtos e objetivos, lado a lado (mesmo layout de linha do hero da home, empilha em mobile)
- **trajetória**: lista de `timeline-entry`, mais recente primeiro, cada uma com período, empresa, cargo e descrição de uma linha; entra com fade + translateY staggered ao rolar até a viewport (`IntersectionObserver`)
- **footer**: idêntico ao da home, componente `site-footer` (mesmos links sociais e CTA)

## Componentes que se repetem nesta tela

- **site-header** → `src/components/SiteHeader.astro`: mesmo componente da home, `activePage="career"`
- **site-footer** → `src/components/SiteFooter.astro`: mesmo componente da home
- **identity** → `src/components/Identity.astro`: mesmo componente da home (avatar + wordmark)
- **timeline-entry** → `src/components/TimelineEntry.astro`: uma por experiência profissional

(Detalhes em `contexto/dicionario.md`.)

## Elementos únicos nesta tela

- eyebrow + headline de trajetória (markup em `CareerContent.astro`, texto vem de `src/i18n/strings.ts`: `careerEyebrow`, `careerHeadline`)
- conteúdo da trajetória: `src/i18n/career.ts` (`careerTimeline`, 7 experiências, pt/en). A experiência mais recente (iFood) tem `highlights` (lista de destaques) além do parágrafo `description`; as demais são só parágrafo
- animação de entrada em scroll da trajetória (script inline em `CareerContent.astro`, `IntersectionObserver` + classe `is-visible`, stagger de 40ms por item)

## Decisões de design

- Sem logos de empresa na timeline: só 6 das 7 experiências têm asset correspondente em `src/assets/slide-*.png` (falta MJV); usar logo em quase tudo menos um item quebraria a objetividade pedida. Timeline 100% tipográfica.
- Entradas da timeline não são links/cards clicáveis — não existe case study por trás de cada item, então não simula affordance de clique.

## Transição de página

`astro:transitions` (`ClientRouter`, em `Layout.astro`) com `fade({ duration: 280 })` aplicado à raiz `.page-career` — mesma transição usada na home, navegação para `/` e `/en/` cruza-desvanece.

## Internacionalização

- Rotas: `pt` em `/carreira`, `en` em `/en/career` (`src/i18n/strings.ts` → `navCareerHref`)
- Textos de página vêm de `src/i18n/strings.ts` (`t(locale)`); conteúdo da timeline vem de `src/i18n/career.ts` (`careerTimeline[locale]`)
- `CareerContent.astro` recebe `locale` como prop e não tem texto hardcoded

## Estados de tela a cobrir

- **cheio**: header + hero + 7 entradas da timeline + footer (happy path) — pt e en
- **menu mobile aberto**: idêntico ao da home (mesmo componente `mobile-menu`), com "career"/"carreira" ativo
- **timeline sob `prefers-reduced-motion`**: entradas aparecem só com fade (sem `translateY`), sem stagger de delay perceptível

## Estados de tela fora do escopo

- carregando: fora do objetivo do protótipo nesta rodada
- erro: fora do objetivo do protótipo nesta rodada

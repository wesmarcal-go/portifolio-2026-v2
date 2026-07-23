# Estrutura: portfólio Wes Marçal — cases

> Documento gerado pela skill design-forma.
> Camada FORMA · slug canônico: `cases` · pages: `cases.astro` (pt) e `en/cases.astro` (en)
> Markup compartilhado entre os dois idiomas via `src/components/CasesContent.astro`.

## Blocos principais

- **header**: idêntico ao das outras telas, componente `site-header` — `activePage="cases"` deixa "cases" ativo
- **hero**: identidade (`identity`) + eyebrow "melhores trabalhos" + headline sobre transformar ideias ambiciosas em produtos — mesmo padrão estrutural de home/carreira
- **stage**: área principal com a grade privada como *background* (absoluta) e o card de acesso centrado por cima
- **gate / card de acesso**: flutuando sobre a grade — omitidos por confidencialidade, senha ilustrativa e links de contato
- **grade privada (backdrop)**: grid 3×2 com as imagens dos reels da home (5 slides ciclados até 6 células), todas com blur + scrim — lê como fundo privado atrás do card
- **footer**: idêntico às outras telas, componente `site-footer`

## Componentes que se repetem nesta tela

- **site-header** → `src/components/SiteHeader.astro`: `activePage="cases"`
- **identity** → `src/components/Identity.astro`: mesmo componente da home/carreira
- **site-footer** → `src/components/SiteFooter.astro`: mesmo componente da home/carreira

(Detalhes em `contexto/dicionario.md`.)

## Elementos únicos nesta tela

- card de acesso (`data-component="cases-access-card"`): título, subtítulo (“entre em contato”), formulário de senha (input + botão na mesma linha), `link-social` (e-mail + LinkedIn) — textos em `src/i18n/strings.ts`; ícones em `src/assets/icon-email.svg` e `icon-linkedin.svg`
- grade privada (`data-component="cases-private-grid"`): imagens de `src/assets/slide-*.png`, CSS em `src/styles/cases.css`
- formulário ilustrativo: `preventDefault` no submit (`astro:page-load`) — não destrava o blur

## Decisões de design

- Grade como background absoluto do stage; card centrado por cima (hierarquia de modal: scrim + superfície flutuante).
- Material do card: superfície translúcida (`backdrop-filter`) alinhada a apple-design; fallback sólido sob `prefers-reduced-transparency`.
- Motion (emil-design-eng): entrada do card com `scale(0.95)` + opacity; botão `:active scale(0.97)`; stagger nos tiles; `prefers-reduced-motion` → só fade.
- Sem unlock real nesta rodada — o gate comunica confidencialidade e canal de contato.

## Transição de página

`astro:transitions` (`ClientRouter`, em `Layout.astro`) com `fade({ duration: 280 })` na raiz `.page-cases`.

## Internacionalização

- Rotas: `pt` em `/cases`, `en` em `/en/cases` (`src/i18n/strings.ts` → `navCasesHref`)
- Textos de página vêm de `src/i18n/strings.ts` (`t(locale)`)
- `CasesContent.astro` recebe `locale` como prop e não tem texto hardcoded (exceto assets)

## Estados de tela a cobrir

- **cheio**: header + hero + card de acesso + grade 3×2 blur/scrim + footer — pt e en
- **menu mobile aberto**: mesmo `mobile-menu`, com "cases" ativo
- **`prefers-reduced-motion`**: entradas só com fade
- **`prefers-reduced-transparency`**: card sem blur, fundo sólido

## Estados de tela fora do escopo

- autenticação / unlock do blur
- carregando / erro

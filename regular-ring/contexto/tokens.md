# Tokens de design: portfólio Wes Marçal

> Gerado pela skill design-forma.
> Valores → CSS custom properties em `src/styles/tokens.css`.
> Acumula a cada tela. Sem Tailwind.

## Cores

Paleta normativa (print / `DESIGN.md` — Copper Briefing Room). Tokens nomeados + aliases semânticos usados no CSS.

| Token CSS | Valor | Uso |
|---|---|---|
| `--color-ink` | `#08100C` | fundo / campo escuro |
| `--color-pine` | `#304d53` | secundário frio (contrapeso estrutural) |
| `--color-linen` | `#d8bfa0` | texto principal / headline |
| `--color-taupe` | `#9b7f58` | labels muted |
| `--color-cognac` | `#944929` | accent em repouso (nav inativo) |
| `--color-peach` | `#e98154` | accent ativo (nav, eyebrow, CTA, focus) |
| `--color-background` | `var(--color-ink)` | alias — fundo da página |
| `--color-text` | `var(--color-linen)` | alias — texto principal |
| `--color-accent` | `var(--color-peach)` | alias — accent ativo |
| `--color-accent-muted` | `var(--color-cognac)` | alias — nav inativo |
| `--color-text-muted` | `var(--color-taupe)` | alias — labels dos reels |
| `--color-surface` | `var(--color-linen)` | alias — superfície das thumbs |

## Tipografia

| Token CSS | Valor | Uso |
|---|---|---|
| `--font-family-serif` | Merriweather, Georgia, serif | hero, CTA |
| `--font-family-sans` | Heebo, system-ui, sans-serif | nav, labels, links |
| `--font-size-sm` | `14px` | links sociais, e-mail |
| `--font-size-base` | `16px` | labels de reel |
| `--font-size-lg` | `20px` | nav, idioma, eyebrow, CTA |
| `--font-size-nav` | `var(--font-size-lg)` | alias — itens de nav |
| `--font-size-cta` | `var(--font-size-lg)` | alias — texto de disponibilidade |
| `--font-size-xl` | `34px` | headline do hero |
| `--font-weight-light` | `300` | links sociais |
| `--font-weight-normal` | `400` | labels / hero |
| `--font-weight-bold` | `700` | nav, idioma ativo |

## Espaçamentos

| Token CSS | Valor | Uso |
|---|---|---|
| `--spacing-xs` | `4px` | gap ícone–label |
| `--spacing-sm` | `8px` | gaps internos pequenos |
| `--spacing-md` | `12px` | avatar → wordmark |
| `--spacing-lg` | `50px` (`24px` ≤480px) | padding horizontal da page — sobrescrito em telas muito pequenas |
| `--spacing-xl` | `76px` (`40px` ≤480px) | gap coluna identidade ↔ conteúdo, paddings do menu mobile, margin-top do footer (`site-footer`) |
| `--spacing-reel` | `30px` | gap entre cards do reel |
| `--spacing-hero-height` | `221px` | altura do bloco hero (inclui os 40px de padding-top que alinham home ao gap header→conteúdo já usado na carreira) |
| `--spacing-reels-height` | `570px` | altura do bloco reels |
| `--spacing-footer-height` | `115px` | altura do bloco footer |
| `--line-height-reel-label` | `54px` | altura/line-height do nome no card-reel |

## Raios e bordas

| Token CSS | Valor | Uso |
|---|---|---|
| `--radius-md` | `11px` | thumbs do card-reel |
| `--radius-full` | `9999px` | avatar |
| `--border-width` | `1px` | espessura padrão |

## Movimento

| Token CSS | Valor | Uso |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.23, 1, 0.32, 1)` | curva padrão de entrada/interação (hero, press states, menu mobile) |
| `--ease-in-out` | `cubic-bezier(0.77, 0, 0.175, 1)` | reservada para movimento on-screen (A→B) |
| `--ease-drawer` | `cubic-bezier(0.32, 0.72, 0, 1)` | reservada para drawers/sheets estilo iOS |
| `--duration-press` | `140ms` | feedback de toque (`:active`, scale) |
| `--duration-fast` | `200ms` | transições de cor/hover, ícone do hambúrguer |
| `--duration-base` | `280ms` | entrada do hero (fade + translateY, staggered) |
| `--duration-menu-enter` | `320ms` | abertura do menu mobile full-page |
| `--duration-menu-exit` | `220ms` | fechamento do menu mobile (mais rápido que a abertura) |
| `--duration-marquee` | `48s` | volta completa do carrossel de reels (linear, direita → esquerda) |

Todas as animações respeitam `prefers-reduced-motion` por componente (ver `src/styles/layout.css` e `MobileMenu.astro`): o hero cai para fade puro, o carrossel desliga a animação (volta a ser scroll manual) e o menu mobile remove a translação/escala mantendo só o crossfade de opacidade. Fora isso, o carrossel de reels roda continuamente — sem pausa por hover, toque ou controle manual.

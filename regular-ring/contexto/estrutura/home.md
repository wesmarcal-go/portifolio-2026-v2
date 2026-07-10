# Estrutura: portfólio Wes Marçal — home

> Documento gerado pela skill design-forma.
> Camada FORMA · slug canônico: `home` · pages: `index.astro` (pt) e `en/index.astro` (en)
> Markup compartilhado entre os dois idiomas via `src/components/HomeContent.astro`.

## Blocos principais

- **header**: Navegação principal (home / carreira) + seletor de idioma (sempre visível) + trigger do menu mobile (≤900px, substitui a navegação inline) — componente `site-header`, compartilhado com a tela carreira
- **hero**: Identidade (avatar + wordmark, componente `identity` — mesma marca usada na tela carreira) + headline de posicionamento — entra com fade + translateY staggered no load
- **reels**: Faixa full-bleed (100% da viewport) / carrossel automático (marquee) que se move devagar da direita para a esquerda, contínuo, sem controle de pausa
- **footer**: Links sociais + CTA de disponibilidade e e-mail — componente `site-footer`, compartilhado com a tela carreira
- **mobile-menu**: Overlay full-page (≤900px) com nav (home/carreira) + links sociais do footer (LinkedIn, Substack)

## Componentes que se repetem nesta tela

- **site-header** → `src/components/SiteHeader.astro`: monta nav + mobile-menu + lang-switch a partir de `locale`/`activePage`
- **site-footer** → `src/components/SiteFooter.astro`: monta socials + CTA a partir de `locale`
- **identity** → `src/components/Identity.astro`: avatar + wordmark, a marca do Wes — compartilhado com a tela carreira
- **nav-item** → `src/components/NavItem.astro`: ativo | inativo
- **card-reel** → `src/components/CardReel.astro`: cada case renderizado 2x (set real + set duplicado `aria-hidden` para o loop do marquee)
- **link-social** → `src/components/LinkSocial.astro`: ícone por rede — usado no `site-footer` e dentro do `mobile-menu`
- **lang-switch** → `src/components/LangSwitch.astro`: link funcional pt/en, ativo conforme locale atual

(Detalhes em `contexto/dicionario.md`.)

## Elementos únicos nesta tela

- eyebrow + headline do hero (markup em `HomeContent.astro`, texto vem de `src/i18n/strings.ts`)
- overlay do menu mobile (`src/components/MobileMenu.astro`, inclui o trigger hambúrguer)

## Transição de página

`astro:transitions` (`ClientRouter`, em `Layout.astro`) com `fade({ duration: 280 })` aplicado à raiz `.page-home` — navegação para `/carreira` e `/en/career` cruza-desvanece em vez de recarregar a página inteira.

## Internacionalização

- Astro i18n nativo: `pt` é o locale padrão (`/`), `en` vive em `/en/` (`astro.config.mjs`, `routing.prefixDefaultLocale: false`)
- Todos os textos vêm de `src/i18n/strings.ts` (`t(locale)`); `HomeContent.astro` recebe `locale` como prop e não tem texto hardcoded
- `LangSwitch` aponta para `localePaths.pt` / `localePaths.en`; `navCareerHref` (`/carreira`, `/en/career`) leva à tela carreira — ver `contexto/estrutura/carreira.md`

## Estados de tela a cobrir

- **cheio**: Header + hero + reels com cases + footer (happy path) — pt e en
- **menu mobile aberto**: overlay full-page com foco preso, fecha com Escape/clique/link
- **reels sob `prefers-reduced-motion`**: marquee desliga e volta a ser scroll manual (único caso em que a faixa não roda continuamente)

## Estados de tela fora do escopo

- reels-vazio: fora do objetivo do protótipo nesta rodada
- carregando: fora do objetivo do protótipo nesta rodada
- erro: fora do objetivo do protótipo nesta rodada

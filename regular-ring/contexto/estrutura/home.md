# Estrutura: portfólio Wes Marçal — home

> Documento gerado pela skill design-forma.
> Camada FORMA · slug canônico: `home` · page: `index.astro`

## Blocos principais

- **header**: Navegação principal (home / carreira) + seletor de idioma
- **hero**: Identidade (avatar + wordmark) + headline de posicionamento
- **reels**: Faixa full-bleed (100% da viewport) / track de carrossel horizontal de cases
- **footer**: Links sociais + CTA de disponibilidade e e-mail

## Componentes que se repetem nesta tela

- **nav-item** → `src/components/NavItem.astro`: ativo | inativo
- **card-reel** → `src/components/CardReel.astro`: sem variações estruturais
- **link-social** → `src/components/LinkSocial.astro`: ícone por rede

(Detalhes em `contexto/dicionario.md`.)

## Elementos únicos nesta tela

- seletor de idioma (`pt | en`) (markup na page)
- identidade do hero: avatar circular + wordmark (markup na page)
- eyebrow + headline do hero (markup na page)
- CTA do footer: texto de disponibilidade + e-mail (markup na page)

## Estados de tela a cobrir

- **cheio**: Header + hero + reels com cases + footer (happy path)

## Estados de tela fora do escopo

- reels-vazio: fora do objetivo do protótipo nesta rodada
- carregando: fora do objetivo do protótipo nesta rodada
- erro: fora do objetivo do protótipo nesta rodada

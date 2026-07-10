# Dicionário do projeto: portfólio Wes Marçal

> Gerado pela skill design-forma.
> Contrato linguístico designer ↔ agente. Acumula a cada tela.
> kebab-case no contrato; arquivo Astro em PascalCase.

## nav-item

- **Arquivo**: `src/components/NavItem.astro`
- **Estrutura**: link de navegação com ícone de seta + label de rota
- **Variações**: ativo | inativo — prop(s): `active: boolean`
- **Onde aparece**: header (home, carreira)

## card-reel

- **Arquivo**: `src/components/CardReel.astro`
- **Estrutura**: mídia do case (imagem) + nome do projeto abaixo
- **Variações**: nenhuma estrutural — prop(s): `title: string`, `image: ImageMetadata`, `alt?: string`
- **Onde aparece**: bloco reels (N instâncias na faixa)

## link-social

- **Arquivo**: `src/components/LinkSocial.astro`
- **Estrutura**: ícone da rede + texto do handle/URL
- **Variações**: por rede via ícone; gap ícone–texto — prop(s): `label: string`, `href: string`, `icon: ImageMetadata`, `gap?: 7 | 8`
- **Onde aparece**: footer (LinkedIn gap 7, Substack gap 8)

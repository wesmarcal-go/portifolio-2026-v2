# CLAUDE.md

Guia para o Claude Code trabalhar neste repositório. Este projeto foi iniciado no Cursor usando o padrão **Agent Skills**, não `.cursorrules`.

## Layout do repositório

A raiz **não** é o app — é onde vivem as ferramentas de Agent Skills (Cursor) e a config do Claude Code. O app Astro real está em `regular-ring/`, como uma subpasta comum (não é um workspace npm).

```
.
├── AGENTS.md              # registro de Agent Skills do Cursor (leia antes de usar /skill-name)
├── .agents/skills/        # skills do Cursor: design-forma, apple-design, create-a-context, etc.
├── skills-lock.json       # lockfile de skills importadas de github.com/emilkowalski/skill
└── regular-ring/          # app Astro real (ver abaixo)
```

Não existe `package.json`, `astro.config.mjs` ou `tsconfig.json` na raiz — todos ficam dentro de `regular-ring/`.

## O app (`regular-ring/`)

- **Stack**: Astro 7 (`^7.0.7`), sem React/Vue/Svelte, **sem Tailwind** (decisão deliberada), CSS puro com custom properties. TypeScript via `astro/tsconfigs/strict`. Package manager: npm.
- **Comandos** (rodar de dentro de `regular-ring/`, não da raiz):
  - `npm run dev` → `astro dev` — prefira modo background: `astro dev --background`, e gerencie com `astro dev stop` / `astro dev status` / `astro dev logs`
  - `npm run build` → `astro build`
  - `npm run preview` → `astro preview`
  - Sem scripts de teste ou lint configurados.
- **Arquivos protegidos** — nunca recriar ou sobrescrever `regular-ring/package.json`, `astro.config.mjs` ou `tsconfig.json` (regra explícita do skill `design-forma`).

### Estrutura de `regular-ring/src/`

```
src/
├── assets/        # imagens/ícones — sempre importados via ESM estático, nunca por string path
├── components/    # flat, PascalCase (.astro): CardReel.astro, LinkSocial.astro, NavItem.astro
├── layouts/       # Layout.astro — shell HTML, reset global, importa tokens.css
├── pages/         # index.astro (única página hoje)
└── styles/
    ├── tokens.css # design tokens em CSS custom properties (:root)
    └── layout.css # classes de layout por página (page-home__*)
```

Convenções: kebab-case para `data-component` e classes CSS; PascalCase para arquivos `.astro`; markup único de uma página fica inline na própria página, não vira componente.

### Docs de design (`regular-ring/contexto/`)

Gerados pelo skill `design-forma` — fonte de verdade para design, manter sincronizados ao editar componentes/tokens:
- `dicionario.md` — dicionário de componentes
- `tokens.md` — espelha `src/styles/tokens.css`
- `estrutura/home.md` — estrutura da tela home (blocos, componentes, estados)

`regular-ring/README.md` é o boilerplate padrão do Astro e não reflete o projeto — ignore.

## Skills e outros arquivos de agente

- `AGENTS.md` (raiz) é o registro das Agent Skills do Cursor em `.agents/skills/*` — inclui `design-forma` (protótipo Astro a partir de leitura de estrutura), `apple-design`, `animation-vocabulary`, `review-animations`, `grill-me`, `write-a-skill`.
- `regular-ring/CLAUDE.md` (symlink de `regular-ring/AGENTS.md`) já documenta o modo background do dev server e links da doc do Astro — consulte-o para detalhes de dev server em vez de duplicar aqui.
- O skill `.agents/skills/create-a-context` gera um CLAUDE.md **diferente**: um perfil de identidade pessoal/profissional do usuário via entrevista. Este arquivo aqui é sobre o repositório/código, não sobre o usuário.

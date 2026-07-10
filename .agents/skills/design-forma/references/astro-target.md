# Alvo Astro — Camada FORMA

Mapa canônico e checklist de geração. O ritual conversacional vive em [SKILL.md](../SKILL.md); este arquivo é a referência de *onde* e *em que ordem* escrever código.

## Path absoluto do app

```
/Users/wes/Documents/02_projetos-dev/portifolio-2026-v2/regular-ring
```

Tudo que a skill gera (contexto + UI) fica **dentro** desse diretório.

## Gate no início da sessão

Antes dos cinco movimentos (ou antes de gerar código, se o ritual já estiver no rascunho):

1. Confirmar que o path acima existe.
2. Ler `package.json` e verificar dependência `astro` na major **7** (ex.: `^7.x`).
3. Se o path não existir ou não for Astro 7: **parar** e avisar. Não gerar HTML/Vite paralelo. Não inventar outro app.

## O que não tocar

- `package.json` (não recriar, não acrescentar deps na FORMA)
- `astro.config.mjs`
- `tsconfig.json` (salvo necessidade pontual já existente no projeto)

## Árvore canônica

```
regular-ring/
├── contexto/
│   ├── _rascunho.md          # progresso parcial; apagar ao finalizar
│   ├── dicionario.md         # acumulativo entre telas
│   ├── tokens.md             # acumulativo entre telas
│   └── estrutura/
│       └── [slug].md         # um arquivo por tela (slug canônico)
├── public/                   # não usar para mídia de componente na FORMA
├── src/
│   ├── assets/               # imagens via import ESM estático
│   ├── components/           # flat; um .astro por item do dicionário
│   ├── layouts/
│   │   └── Layout.astro      # shell limpo + tokens (+ layout.css se houver)
│   ├── pages/
│   │   ├── index.astro       # tela de entrada do fluxo (se marcada como entrada)
│   │   └── [slug].astro      # demais telas
│   └── styles/
│       ├── tokens.css        # :root com custom properties
│       └── layout.css        # opcional — grid de blocos da page
└── …
```

## Naming

| Camada | Forma | Exemplo |
| --- | --- | --- |
| Dicionário / CSS / `data-component` | kebab-case | `card-pedido` |
| Arquivo do componente | PascalCase | `CardPedido.astro` |
| Slug de tela / `estrutura/[slug].md` | kebab-case | `lista-pedidos` |
| Page da entrada do produto | `index.astro` | URL `/` — doc continua `estrutura/lista-pedidos.md` |

## CSS

- Tokens globais: `src/styles/tokens.css`, importados no `Layout.astro`.
- Layout de blocos (se não couber na page): `src/styles/layout.css`.
- Pele do componente: `<style>` scoped no próprio `.astro`.
- Tipografia: só `font-family` + fallbacks no CSS — **não** baixar arquivos de fonte na FORMA.
- Sem Tailwind. Sem animações/transições de motion (fora do escopo FORMA).

## Assets (`src/assets/`)

- Gravar mídia real aqui; no `.astro`, **import estático** e usar `img.src` / `width` / `height`.
- Preferir `<img src={foto.src} width={foto.width} height={foto.height} alt="…" />` (não obrigar `<Image />`).
- **Proibido** passar path string como prop de imagem. A page importa e passa `ImageMetadata`, ou o componente importa o asset fixo.
- Fallback se não houver arquivo: placeholder CSS (sem `<img>` inventado).
- Na **primeira** FORMA do app: remover assets órfãos do starter (`astro.svg`, `background.svg`, etc.) junto com o wipe do Welcome.

## Componentes vs page

- Item no `dicionario.md` → `src/components/[Pascal].astro` com `interface Props`.
- Elemento **único** (não está no dicionário) → markup direto na page.
- Pasta de componentes: **flat** (`src/components/`).
- Telas seguintes: reutilizar `.astro` existente; só alterar se a leitura aprovou estrutura/variações novas.

## Estados de tela (Movimento 5)

- Happy path visível na page.
- Demais estados cobertos: mesma page, ocultos (classe) ou comentados — não criar rotas `?estado=` / `/vazio`.

## Checklist de geração (após Movimento 5)

Ordem obrigatória:

1. **Gate** Astro 7 no path absoluto (se ainda não rodou nesta sessão).
2. Garantir pasta `contexto/` (e `contexto/estrutura/`).
3. Salvar/atualizar `contexto/estrutura/[slug].md`, `dicionario.md`, `tokens.md`.
4. Apagar `contexto/_rascunho.md` se existir.
5. Se **primeira** FORMA neste app: limpar starter (`Welcome.astro`, assets do template); reescrever `Layout.astro` (shell + import de `tokens.css`); criar `src/styles/tokens.css`.
6. Se **tela seguinte**: não reescrever `Layout.astro`; só acumular tokens novos em `tokens.css` / `tokens.md`.
7. Criar/atualizar componentes do dicionário em `src/components/`.
8. Criar/atualizar a page (`index.astro` se entrada, senão `[slug].astro`); `layout.css` só se necessário.
9. Baixar/copiar assets para `src/assets/` e gerar imports estáticos.
10. Critério de qualidade mental (ver SKILL.md) → mensagem final com `npm run dev` em `regular-ring`.

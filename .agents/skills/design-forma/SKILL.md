---
name: design-forma
description: |
  Conduz a leitura da estrutura de uma tela ou fluxo (Camada FORMA) e gera contexto markdown plus protótipo no app Astro 7 em regular-ring (pages, components, tokens CSS, assets). Use when the designer starts a prototype from Figma, image, screenshot, or a written description, or asks to "ler a estrutura", "preparar a Camada FORMA", "fazer leitura da tela", or similar. If contexto/ already exists, accumulates dictionary and tokens for a new screen instead of restarting.
---

# Skill: Leitura da estrutura para a Camada FORMA

Esta skill conduz o designer pelos cinco movimentos da Camada FORMA do método de prototipação funcional. Ao final, gera documentos de contexto e implementa o protótipo no app **Astro 7** do monorepo.

**Neste repositório o método termina na FORMA.** Não há Camada FUNÇÃO nem skill equivalente. Motion/polish depois, se o designer pedir, via skills relacionadas — a FORMA **não** as invoca.

Alvo de código e checklist de geração: [references/astro-target.md](references/astro-target.md).

A skill trabalha em modo **conversa guiada**: o agente lê o ponto de partida, propõe uma leitura preenchida, e o designer corrige, completa ou aprova. Não é questionário em branco.

---

## Princípios de execução

### 1. Adaptar à entrada do designer

Identifique o tipo de entrada antes de começar:

- **Figma via MCP**: link/frame + MCP conectado. Leia os frames e proponha a partir do que vê; para tokens, extraia valores reais. Mídia: download para `src/assets/` quando possível.
- **Imagem ou screenshot**: analise visualmente e proponha a leitura.
- **Descrição em palavras**: perguntas mínimas para entender a estrutura, depois proponha.
- **Combinação**: use todos os inputs.

Se não trouxe nada concreto: *"Para começar a leitura, me mostra a tela: pode ser frame do Figma, imagem, print ou uma descrição rápida em palavras."*

### 2. Propor versão preenchida em bloco, nunca questionário em branco

A cada movimento, proponha uma leitura **completa**. O designer revisa em bloco.

Usar: *"Olhei o que você trouxe. Proponho ler assim…"* · *"Aqui está o dicionário inteiro. Revisa em bloco…"*

Evitar: *"Quais blocos você vê?"* · negociar componente a componente.

### 3. Cinco movimentos em sequência, com retomada

Idealmente uma sessão (15–25 min). No início:

> "Vamos fazer a leitura da estrutura em cinco movimentos: blocos, componentes, dicionário, tokens e estados. Leva entre 15 e 25 minutos. Se precisar pausar, eu salvo em `contexto/_rascunho.md` e a gente retoma."

Ao final de cada movimento, salvar progresso em `regular-ring/contexto/_rascunho.md`. Ao gerar os arquivos finais, apagar o rascunho.

---

## Gate e pergunta inicial

### Gate do app (obrigatório)

Antes de conduzir (ou antes de gerar, se retomando rascunho): validar o app Astro 7 no path absoluto. Ver [references/astro-target.md](references/astro-target.md). Se falhar, parar.

### Escopo da tela

Verificar se já existe `regular-ring/contexto/dicionario.md`:

- **Não existe** (primeiro uso): *"É uma tela única ou um fluxo com várias telas?"*
- **Já existe**: *"Vamos adicionar uma nova tela ao projeto. Qual é o nome dela?"* — acumular dicionário e tokens.

Em ambos os casos, **propor slug kebab-case** (preenchido) e confirmar:

- Slug canônico da tela (ex.: `lista-pedidos`) → `contexto/estrutura/[slug].md` e, se não for entrada, `src/pages/[slug].astro`.
- *"Essa tela é a entrada do produto/protótipo?"* Se sim → page em `src/pages/index.astro`, mas o doc permanece `estrutura/[slug].md`.

`dicionario.md` e `tokens.md` sempre acumulam. Estrutura: **sempre** um arquivo por tela em `contexto/estrutura/[slug].md` (não perguntar formato alternativo).

---

## Os cinco movimentos

### Movimento 1: Blocos (containers da tela)

**Escopo**: áreas/containers — header, lista, sidebar, filtros, rodapé. **Não entra conteúdo.**

**Frase-guia**: "se a tela fosse uma planta baixa, quais seriam os cômodos?"

Propor 3–6 blocos com nome funcional + função em uma linha. Ajustar com o designer.

**Critério de fechamento**: lista de blocos aprovada.

---

### Movimento 2: Componentes (o que se repete)

**Escopo**: o que está **dentro** dos blocos e se repete — cards, chips, itens. Separar o que é único.

**Frase-guia**: "agora dentro de cada cômodo, o que aparece mais de uma vez?"

**Critério de fechamento**: separação componentes vs únicos confirmada.

Na geração: únicos ficam na **page**; só o que entrar no dicionário vira `.astro` em `src/components/`.

---

### Movimento 3: Dicionário (consolidação)

**Escopo**: nomes canônicos, estrutura, variações, onde aparece.

**Frase-guia**: "como vou chamar cada componente daqui em diante?"

Para cada componente: nome kebab-case específico, descrição **estrutural** (não estilística), variações, onde aparece.

Apresentar o **dicionário inteiro de uma vez**. Se já existe dicionário, reutilizar nomes; só adicionar o novo.

**Ajuste Astro (leve)**: na proposta, incluir o mapping de arquivo:

> `card-pedido` → `src/components/CardPedido.astro` · classe / `data-component="card-pedido"`

Variações (ex. status) → na implementação, **uma prop tipada** + classes/`data-*`; a page instancia N vezes. Não criar um arquivo por variação.

**Critério de fechamento**: dicionário aprovado em bloco.

---

### Movimento 4: Tokens visuais

**Escopo**: cores, tipografia (tamanhos/pesos/família como nome + fallback), espaçamentos, raios.

- Figma MCP: valores reais.
- Imagem: aproximados.
- Só texto: paleta proposta + confirmação.

Apresentar por categoria em bloco. Acumular se `tokens.md` já existe.

**Tipografia**: registrar família em `tokens.md` e aplicar via `font-family` + fallbacks no CSS. **Não** baixar arquivos de fonte na FORMA.

Sem Tailwind. Tokens viram CSS custom properties em `src/styles/tokens.css`.

**Critério de fechamento**: tokens aprovados.

---

### Movimento 5: Estados de tela

**Escopo**: estados da **tela inteira** — cheio, vazio, carregando, erro, sem resultado. Não confundir com variações de componente (Movimento 3).

Propor a lista; o designer marca o que entra no protótipo. Se marcar tudo sem critério, provocar pelo objetivo do teste.

**Ajuste Astro (leve)**: deixar explícito na proposta:

> No código, o happy path fica visível; os outros estados cobertos entram na **mesma page** (ocultos ou comentados), sem rotas extras.

**Critério de fechamento**: quais estados entram / ficam fora, de forma explícita.

---

## Geração e salvamento

Quando os cinco movimentos estão concluídos, gerar **na sequência, sem pedir confirmação** — contexto + Astro. Ordem e paths: checklist em [references/astro-target.md](references/astro-target.md).

### Progresso parcial

`contexto/_rascunho.md` guarda tela, último movimento concluído e conteúdo aprovado. Na retomada: *"Vejo que paramos no Movimento [N] da tela [nome]. Quer continuar daí ou recomeçar?"*

### O que gerar no Astro (resumo)

| Artefato | Regra |
| --- | --- |
| `contexto/estrutura/[slug].md` | Movimentos 1, 2, 5 |
| `contexto/dicionario.md` | Movimento 3 (acumula) |
| `contexto/tokens.md` | Movimento 4 (acumula) |
| `Layout.astro` | 1ª FORMA: reescrever limpo + `tokens.css`. Depois: não reescrever |
| `src/styles/tokens.css` | `:root` com todos os tokens; acumular nas telas seguintes |
| `src/styles/layout.css` | Opcional |
| `src/components/*.astro` | Um por item do dicionário; `interface Props`; `<style>` scoped; `data-component` kebab |
| `src/pages/…` | Entrada → `index.astro`; senão `[slug].astro`. Únicos inline. Happy path + estados ocultos/comentados |
| `src/assets/` | Mídia com import estático; ver reference |
| JS | **Nenhum** dedicado na FORMA |
| `package.json` / `astro.config.mjs` | **Não** criar nem reescrever |

**Primeira FORMA**: substituir starter (`Welcome`, `index` de boas-vindas, assets do template).

**Telas seguintes**: delta — novas pages/componentes; atualizar `.astro` existente só se a leitura aprovou mudança de estrutura/variações; acumular tokens.

**Copy e mídia**: fieis à entrada. Placeholder CSS só se asset indisponível.

**A11y**: HTML semântico, `aria` onde fizer sentido, foco visível — sem auditoria formal.

### Critério de qualidade (antes de confirmar)

1. Cada item do dicionário tem `.astro` com classe/`data-component` kebab e `Props` tipadas quando há variações?
2. `tokens.css` cobre `tokens.md`?
3. Imports de asset são estáticos (sem path string em props)?
4. Page da entrada é `index.astro` quando combinado; doc em `estrutura/[slug].md`?
5. Sem JS de fluxo; sem mexer em `package.json` / `astro.config.mjs`?

### Mensagem final padrão

> Pronto. Contexto e protótipo Astro salvos em `regular-ring`:
>
> **Contexto:**
> - `contexto/estrutura/[slug].md`
> - `contexto/dicionario.md`
> - `contexto/tokens.md`
>
> **UI:**
> - `src/pages/…`
> - `src/components/…`
> - `src/styles/tokens.css` (+ `layout.css` se houver)
> - `src/assets/…` (se houver mídia)
>
> Para visualizar, no diretório `regular-ring`: `npm run dev` (ou `astro dev`) e abra a URL do servidor.
>
> Neste repo a Camada FORMA encerra o pipeline de prototipação. Se depois quiser motion/gesto no estilo Apple, use `/apple-design`; para nomear um efeito, `/animation-vocabulary`; para revisar craft de animação, `/review-animations`.

---

## Skills relacionadas

Documentação de handoff. A FORMA **não** lê nem executa estas skills durante o ritual.

| Skill | Quando o designer pode querer depois |
| --- | --- |
| `apple-design` | Construir/revisar UI com springs, gestos, sheets, profundidade no estilo Apple |
| `animation-vocabulary` | Nomear um efeito de motion a partir de descrição vaga |
| `review-animations` | Review de craft de animação (só via `/review-animations`) |

---

## Templates dos arquivos de contexto

### `contexto/estrutura/[slug].md`

```markdown
# Estrutura: [nome do projeto] — [nome-tela]

> Documento gerado pela skill design-forma.
> Camada FORMA · slug canônico: `[slug]` · page: `[index.astro | [slug].astro]`

## Blocos principais

- **[nome-bloco]**: [descrição funcional em uma linha]

## Componentes que se repetem nesta tela

- **[nome-componente]** → `src/components/[PascalCase].astro`: [variações]

(Detalhes em `contexto/dicionario.md`.)

## Elementos únicos nesta tela

- [nome-elemento] (markup na page)

## Estados de tela a cobrir

- **[nome-estado]**: [descrição em uma linha]

## Estados de tela fora do escopo

- [nome-estado]: [motivo]
```

### `contexto/dicionario.md`

```markdown
# Dicionário do projeto: [nome do projeto]

> Gerado pela skill design-forma.
> Contrato linguístico designer ↔ agente. Acumula a cada tela.
> kebab-case no contrato; arquivo Astro em PascalCase.

## [nome-componente-1]

- **Arquivo**: `src/components/[PascalCase].astro`
- **Estrutura**: [descrição estrutural curta, não estilística]
- **Variações**: [lista] — prop(s): `[prop]: …`
- **Onde aparece**: [telas / contextos]
```

### `contexto/tokens.md`

```markdown
# Tokens de design: [nome do projeto]

> Gerado pela skill design-forma.
> Valores → CSS custom properties em `src/styles/tokens.css`.
> Acumula a cada tela. Sem Tailwind.

## Cores

| Token CSS | Valor | Uso |
|---|---|---|
| `--color-primary` | [valor ou `[definir]`] | ação principal |
| `--color-surface` | … | fundo de cards / painéis |
| `--color-background` | … | fundo da página |
| `--color-border` | … | bordas e divisores |
| `--color-text` | … | texto principal |
| `--color-text-muted` | … | texto secundário |

## Tipografia

| Token CSS | Valor | Uso |
|---|---|---|
| `--font-family-sans` | [nome], [fallbacks] | texto da UI |
| `--font-size-sm` | … | auxiliar |
| `--font-size-base` | … | corrido |
| `--font-size-lg` | … | títulos de componente |
| `--font-size-xl` | … | títulos de tela |
| `--font-weight-normal` | … | |
| `--font-weight-medium` | … | |
| `--font-weight-bold` | … | |

## Espaçamentos

| Token CSS | Valor | Uso |
|---|---|---|
| `--spacing-xs` | … | mínimo |
| `--spacing-sm` | … | pequeno |
| `--spacing-md` | … | padrão |
| `--spacing-lg` | … | grande |
| `--spacing-xl` | … | entre blocos |

## Raios e bordas

| Token CSS | Valor | Uso |
|---|---|---|
| `--radius-sm` | … | botões e chips |
| `--radius-md` | … | cards |
| `--radius-lg` | … | painéis |
| `--border-width` | … | espessura padrão |
```

---

## Erros comuns a evitar

1. **Misturar blocos com componentes** (Movimento 1 vs 2).
2. **Descrever visualmente** no dicionário em vez de estruturalmente — estilo é token (Movimento 4).
3. **Confundir variações de componente com estados de tela** (3 vs 5).
4. **Nomes genéricos** (`card`, `item`) — use nomes específicos do domínio.
5. **Puxar interação, fluxo ou motion** para dentro da FORMA — redirecione: estrutura visual agora; motion depois via skills relacionadas se quiser.
6. **Gerar Astro antes de fechar os cinco movimentos** (ou sem gate Astro 7).
7. **Recomeçar do zero** quando existe `_rascunho.md`.
8. **Criar Vite/HTML estático** ou segundo app fora de `regular-ring`.
9. **Path string de imagem em props** — só import ESM estático / `ImageMetadata`.
10. **Reescrever `package.json` ou `astro.config.mjs`**, ou instalar Tailwind/font files na FORMA.

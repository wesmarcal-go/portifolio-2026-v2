---
name: create-a-context
description: Cria um arquivo CLAUDE.md personalizado via entrevista guiada — captura identidade profissional, princípios, workflows, stack, frameworks e padrões de comunicação do usuário, e entrega o arquivo na raiz do projeto. Opcionalmente, em uma Fase 2, conduz uma segunda entrevista para gerar um arquivo de contexto de produto/serviço (personas, métricas, decisões recentes, competidores e anti-positioning). Use quando o usuário pedir para criar/construir seu CLAUDE.md, montar seu contexto profissional para o Claude, gerar um manual do usuário, configurar perfil pessoal, preencher um perfil que oriente como o Claude deve responder em todas as conversas, ou criar um contexto do produto/serviço que ele trabalha.
---

# Create a Context

Conduz uma entrevista guiada com o usuário, salva progresso por seção e entrega um `CLAUDE.md` preenchido na raiz do projeto atual com a voz do usuário.

## Fluxo (siga em ordem)

### 1. Apresente o objetivo
Antes de qualquer pergunta, exiba esta mensagem ao usuário (verbatim):

> Este documento é o **"manual do usuário"** que você entrega ao Claude para que ele te conheça profundamente e responda no seu estilo, com seus frameworks e seu contexto. Quanto mais específico e honesto você for, melhor o output.

Aguarde confirmação ou qualquer resposta para prosseguir.

### 2. Verifique rascunho existente
- Procure `./.claude/context-draft.json` na raiz do projeto.
- Se existir: pergunte se quer **retomar** (continuar de onde parou) ou **recomeçar** (apagar rascunho).
- Se não existir: prossiga.

### 3. Confirme local do output
- Output padrão: `./CLAUDE.md` (raiz do projeto atual, cwd).
- Se já existir `CLAUDE.md` ou `claude.md` na raiz: pergunte se quer **sobrescrever**, **fundir** (usar como base) ou **salvar com outro nome**.

### 4. Pergunte o estilo da entrevista
Use `AskUserQuestion` apresentando 3 opções:
- **Seção por seção, conversacional** (recomendado) — 1–3 perguntas por seção, espera resposta, segue.
- **Uma pergunta por vez** — máxima granularidade, mais turnos.
- **Bloco grande por seção** — todas as perguntas da seção de uma vez, menos turnos.

### 5. Conduza a entrevista
Use [QUESTIONS.md](QUESTIONS.md) como guia detalhado. Para cada seção, na ordem listada em §5:
1. Faça as perguntas no estilo escolhido.
2. Seções opcionais (ensino, contexto pessoal etc.): pergunte normalmente; aceite `pular`, `não se aplica` ou `n/a` como respostas válidas.
3. Resposta vaga → 1 follow-up específico ("pode dar um exemplo concreto?"). Não insista mais que isso.
4. **Salve o rascunho** em `./.claude/context-draft.json` ao final de cada seção:
   ```json
   {
     "interview_style": "...",
     "sections_completed": ["identidade", "principios", ...],
     "current_section": "...",
     "answers": { "identidade": { ... }, ... }
   }
   ```
5. Crie `.claude/` se não existir.

### 6. Ordem das seções
1. Cabeçalho (nome, cargo, empresa, papéis secundários)
2. Quem sou eu (identidade, referências, analogias)
3. Princípios de produto/trabalho
4. Stack de ferramentas
5. Workflows padrão
6. Contexto da empresa/produto/setor
7. Padrões de comunicação (tom + formatos)
8. Frameworks e metodologias
9. Estilo de ensino (opcional — pergunta-gate antes)
10. O que NÃO fazer
11. Rede de colaboradores
12. Metas ativas
13. Comandos rápidos
14. Notas para o agente
15. Princípios inegociáveis
16. Contexto pessoal

### 7. Montagem final
- Use [TEMPLATE.md](TEMPLATE.md) como esqueleto do arquivo final.
- Substitua cada `{{placeholder}}` pelas respostas do usuário (literal, sem suavizar).
- Seções puladas: remova a seção inteira (título + conteúdo), não deixe placeholders vazios.
- Escreva o resultado em `./CLAUDE.md` (ou nome combinado em §2).
- Apague (ou pergunte se pode apagar) `./.claude/context-draft.json`.

### 8. Entrega
- Confirme o caminho do arquivo final.
- Sugira revisar antes de commitar.
- Sugira revisitar o documento a cada 3 meses, já que identidade profissional evolui.

### 9. Ofereça a Fase 2 — contexto de produto
Logo após a entrega, pergunte (use `AskUserQuestion`):

> "Quer construir agora um **contexto de produto/serviço** que você trabalha? É um segundo arquivo (separado do CLAUDE.md) que descreve seu produto: personas, métricas atuais, decisões recentes, competidores e o que ele NÃO é. Útil para que o Claude entenda o negócio onde você opera, não só você."

Opções: **Sim, vamos** / **Agora não, talvez depois** / **Não, encerre aqui**.

- Se **sim** → siga para a **Fase 2** abaixo.
- Se **não / depois** → encerre. Lembre que essa fase pode ser disparada a qualquer momento pedindo "criar contexto de produto" (a skill `create-a-context` aceita iniciar direto na Fase 2 se já existir um `CLAUDE.md`).

## Fase 2 — Contexto de produto/serviço

Segunda entrevista, independente do CLAUDE.md pessoal, focada no produto/serviço que o usuário toca no trabalho. Gera um arquivo separado.

### F2.1. Entrada na Fase 2
Pode chegar aqui de duas formas:
- **Continuação da Fase 1** (cenário comum) — usuário disse "sim" no passo §9.
- **Entrada direta** — usuário pediu explicitamente "criar contexto de produto" sem fazer Fase 1. Nesse caso, verifique se existe `CLAUDE.md` na raiz; se não houver, ofereça primeiro fazer a Fase 1 (mas respeite se o usuário insistir em ir direto).

### F2.2. Apresente o objetivo
Exiba ao usuário (verbatim):

> Este arquivo descreve **o produto/serviço onde você opera** — não você. É o que o Claude lê para entender personas, métricas, decisões recentes e competidores antes de te ajudar com tarefas de negócio. Use números reais (mesmo que aproximados) e nomes específicos. Vago aqui = inútil depois.

### F2.3. Verifique rascunho de produto existente
- Procure `./.claude/product-context-draft.json` na raiz.
- Se existir: pergunte se quer **retomar** ou **recomeçar**.
- Se não existir: prossiga.

### F2.4. Confirme o nome e local do output
- Output padrão: `./PRODUCT_CONTEXT.md` na raiz.
- Pergunte se quer customizar o nome (ex: `PRODUCT_CONTEXT_GRANA.md`, `02_CONTEXTO_PRODUTO.md`). Útil quando o usuário gerencia mais de um produto.
- Se já existir arquivo com o nome combinado: pergunte se quer **sobrescrever**, **fundir** ou **salvar com outro nome**.

### F2.5. Pergunte o estilo da entrevista
Use `AskUserQuestion` com as mesmas 3 opções do passo §4 (seção por seção / uma por vez / bloco grande). Se o usuário já escolheu na Fase 1, ofereça reutilizar a mesma escolha por padrão.

### F2.6. Conduza a entrevista de produto
Use [PRODUCT_QUESTIONS.md](PRODUCT_QUESTIONS.md) como guia detalhado. Para cada seção, na ordem listada em §F2.7:
1. Faça as perguntas no estilo escolhido, **sempre incluindo os exemplos** (entre parênteses ou após "ex:") — eles calibram o nível de especificidade.
2. Resposta vaga → 1 follow-up específico. Não insista mais que isso.
3. **Salve o rascunho** em `./.claude/product-context-draft.json` ao final de cada seção:
   ```json
   {
     "interview_style": "...",
     "output_filename": "PRODUCT_CONTEXT.md",
     "sections_completed": ["produto", "personas", ...],
     "current_section": "...",
     "answers": { "produto": { ... }, "personas": [ ... ], ... }
   }
   ```

### F2.7. Ordem das seções (Fase 2)
1. O Produto (nome, público, problema, diferencial)
2. Personas Principais (2-4 personas com demografia, dor, JTBD)
3. Métricas Atuais (com mês/ano de referência)
4. Decisões Recentes (últimos 3-6 meses, com data)
5. Competidores (tabela)
6. O Que NÃO É (anti-positioning)

### F2.8. Montagem final
- Use [PRODUCT_TEMPLATE.md](PRODUCT_TEMPLATE.md) como esqueleto.
- Substitua cada `{{placeholder}}` pelas respostas, literal.
- Para personas, repita a subseção quantas vezes o usuário tiver mapeado.
- Escreva o resultado no caminho combinado em §F2.4.
- Apague (ou pergunte se pode apagar) `./.claude/product-context-draft.json`.

### F2.9. Entrega
- Confirme o caminho do arquivo final.
- Sugira revisar os números antes de commitar (métricas envelhecem rápido).
- Sugira revisitar **a cada trimestre** — métricas, decisões e competidores mudam mais rápido que identidade pessoal.

## Convenções

- **Voz do usuário, não a sua.** Cite trechos literais quando possível. Não generalize, não polia.
- **Específico > genérico.** Se o usuário diz "uso ferramentas de produto", pergunte quais. Se diz "evito chavões", peça exemplo.
- **Tom da entrevista:** direto. Sem "ótima pergunta!", sem disclaimers.
- **Salvamento robusto:** persistir sempre após cada seção. Nunca perder mais que 1 seção em caso de interrupção.
- **Idioma:** português brasileiro por padrão (pergunte se preferir outro).

## Detalhes por seção

Veja [QUESTIONS.md](QUESTIONS.md) para perguntas específicas, follow-ups recomendados e formato de output de cada seção. Veja [TEMPLATE.md](TEMPLATE.md) para o esqueleto do arquivo final.

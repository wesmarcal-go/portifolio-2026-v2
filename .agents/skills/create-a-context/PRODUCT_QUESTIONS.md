# Perguntas da Entrevista — Fase 2: Contexto de Produto/Serviço

Guia detalhado por seção. Para cada uma: (a) perguntas centrais com exemplos para orientar o usuário, (b) follow-ups para respostas vagas, (c) formato de output no arquivo final.

Quando fizer as perguntas, **sempre inclua os exemplos** (entre parênteses ou após "ex:") — eles calibram o nível de especificidade esperado. Vago aqui = inútil depois.

---

## 1. O Produto

**Perguntas:**
- Qual o nome do produto/serviço? (ex: "App Grana", "Plataforma Atlas", "Studio de design Norte")
- Para quem é? Faixa etária + perfil em 1 frase. (ex: "Jovens adultos 22-35 anos com renda CLT entre R$3-7k", "PMEs do varejo com 10-50 funcionários", "Times de produto em startups Série A+")
- Que problema você resolve? 1-2 frases, voz humana. (ex: "Ajuda a sair do vermelho, construir reserva de emergência e desenvolver hábitos financeiros saudáveis")
- Qual o diferencial principal — o que vocês fazem que ninguém faz? (ex: "Metas automatizadas via Open Banking e educação financeira contextual — no momento certo, não em curso genérico")

**Follow-ups se vago:**
- "'Para todo mundo' não conta — quem é o cliente que te paga mais e fica mais tempo?"
- "Se eu tirasse esse diferencial, o cliente trocaria por um competidor? Se não, qual é o real?"

**Output:** subseção `## O Produto` com 2-3 frases conectando público + problema + diferencial, em prosa.

---

## 2. Personas Principais

**Pergunta-gate:** "Quantas personas principais você quer mapear? (recomendado: 2-4 — mais que isso vira lista, menos vira monocultura)"

**Para cada persona, pergunte (nesta ordem):**

- **Nome arquétipo:** um nome próprio + apelido descritivo de 2-4 palavras. (ex: "Lucas — O Endividado Esperançoso", "Mariana — A Poupadora Insegura", "Rafael — O Comparador Técnico")
- **Demografia rápida:** idade, profissão, regime (CLT/PJ/freela), renda. (ex: "27 anos, analista de marketing, CLT, R$4.500/mês")
- **Situação atual / dor:** 1-3 bullets concretos do estado em que essa pessoa chega. (ex: "Deve R$8.000 no cartão (parcelou eletrônicos e viagens)", "Já tentou planilha, desistiu em 2 semanas")
- **O que ela quer:** na voz dela, entre aspas, evitando jargão. (ex: "Sair do vermelho sem sentir que estou me punindo", "Guardar dinheiro sem precisar virar especialista em finanças")
- **Job To Be Done:** "Quando [situação], preciso de [ação/solução] para [resultado]". (ex: "Quando recebo o salário, preciso de um plano automático para pagar dívidas sem eu precisar pensar")

**Follow-ups se vago:**
- "Persona ficou genérica — me dá um nome de cliente real (anonimizado) que ela representa."
- "JTBD precisa começar com 'Quando...' e descrever a situação-gatilho. Refraseia?"
- "Renda 'média' não conta — chuta uma faixa (R$X-Y/mês)."

**Output:** seção `## Nossas Personas Principais` com uma subseção `### Nome — Apelido` por persona, contendo bullets de demografia, dor, "quer" e JTBD.

---

## 3. Métricas Atuais

**Perguntas:**

- Qual o **mês/ano de referência** destas métricas? (ex: Maio 2026)
- Liste os números atuais. Vou passar por categorias comuns — pula as que não fizerem sentido para seu produto:
  - **Volume/escala:** (ex: MAU 180k, DAU 25k, contas ativas, GMV)
  - **Engajamento:** (ex: % MAU com ação X, frequência média de uso, sessões/semana)
  - **Conversão/funil:** (ex: ativação 23%, taxa de conclusão de meta, checkout 4.1%)
  - **Retenção/churn:** (ex: churn D30 38%, retenção W4 45%, LTV em meses)
  - **Satisfação:** (ex: NPS 47, CSAT 8.2, ticket support por usuário)
  - **Economia unitária:** (ex: CAC R$22, LTV R$186, LTV/CAC 8.5x, payback 4 meses)
  - **Receita:** (ex: ticket médio R$320/mês, ARPU, MRR, ARR)
- Destas, qual é a métrica que é **o problema principal hoje** — a que tira o sono do time? (ex: "Churn D30 — é o que estamos atacando neste trimestre")

**Follow-ups se vago:**
- "Sem número não conta — chuta a ordem de grandeza (10k? 100k? 1M?)."
- "Tem alguma métrica que você reporta para investidor/board mas não está nessa lista?"
- "Se o time pudesse mover uma única métrica em 3 meses, qual seria?"

**Output:** seção `## Métricas Atuais ({{mes_ano}})` com bullets `- Métrica: valor`. Marcar a métrica-problema com "(problema principal)" ao final da linha.

---

## 4. Decisões Recentes

**Perguntas:**

- Liste decisões importantes dos **últimos 3-6 meses**, com data (mês/ano). Tipos comuns para te ajudar a lembrar:
  - **Lançamentos** (ex: "Abr/26: Lançamos integração Open Banking — automação de categorização de gastos")
  - **Pivots / mudanças de posicionamento** (ex: "Mar/26: Pivotamos de 'app de investimento' para 'app de saúde financeira'")
  - **Cortes de feature / kills** (ex: "Fev/26: Cortamos feature de social (ranking entre amigos) — métricas não justificavam")
  - **Descobertas que mudaram prioridade** (ex: "Jan/26: Identificamos que 62% do churn D30 acontece porque o usuário não configura a 1ª meta")
- Inclua o **porquê** em 1 linha sempre que possível — sem o porquê, decisão vira lore.

**Follow-ups se vago:**
- "Tem decisão que ainda está sendo discutida e talvez mude nas próximas semanas?"
- "Sem data, decisão vira folclore — chuta o mês."

**Output:** seção `## Decisões Recentes` com bullets em **ordem cronológica reversa** (mais recente primeiro): `- Mês/AA: Decisão — porquê`.

---

## 5. Competidores

**Perguntas:**

- Liste 3-5 competidores mais relevantes. Pode incluir indiretos (que roubam atenção/orçamento mesmo sendo de categoria diferente).
- Para cada um:
  - **Nome** (ex: Nubank, Mobills, Organizze, GuiaBolso)
  - **Nível de ameaça:** Alta / Média / Baixa
  - **Diferencial deles:** o que eles fazem melhor que você (ex: "Ecossistema completo (conta, cartão, investimento)", "Marca forte em educação financeira")
  - **Seu diferencial vs eles:** por que cliente escolhe você (ex: "Foco exclusivo em comportamento financeiro", "Automação real via Open Banking")

**Follow-ups se vago:**
- "Tem competidor indireto que rouba atenção/orçamento? (ex: para um app de finanças pode ser o próprio Excel)"
- "Se o diferencial deles é o mesmo que o seu, um dos dois está errado — qual?"

**Output:** seção `## Competidores` com tabela markdown 4 colunas:

```
| Competidor | Ameaça | Diferencial deles | Nosso diferencial |
|------------|--------|-------------------|-------------------|
| Nome       | Alta   | ...               | ...               |
```

---

## 6. O Que NÃO É Nosso Produto (Anti-positioning)

**Perguntas:**

- Liste 3-5 coisas que seu produto **NÃO é** — onde clientes/parceiros costumam te confundir, ou tentações de escopo que vocês conscientemente recusam. (ex: "Não somos banco — não oferecemos conta ou cartão", "Não somos consultoria financeira — não damos aconselhamento personalizado", "Não somos app de investimento — não vendemos produtos financeiros")
- Frase de fechamento — **o que vocês então são**, em uma linha. (ex: "Somos ferramenta de mudança de comportamento financeiro")

**Follow-ups se vago:**
- "Já perdeu cliente por essa confusão? Conta o caso."
- "Se o anti-positioning está vazio, olha sua lista de competidores — o que eles fazem que vocês escolheram NÃO fazer?"

**Output:** seção `## O Que NÃO É Nosso Produto` com bullets `- Não somos X (...)` + 1 linha de fechamento em prosa: `Somos Y`.

---

## Heurísticas gerais durante a entrevista (Fase 2)

- **Persona sem nome próprio + idade + renda:** insista. Persona genérica é tão útil quanto não ter persona.
- **Métrica sem número:** peça ao menos a ordem de grandeza ou intervalo (ex: "entre 100k e 200k MAU").
- **Decisão sem data:** peça mês/ano. Sem data, decisão recente vira lore.
- **Diferencial idêntico ao do competidor:** desafie — se é igual, não é diferencial.
- **Anti-positioning vazio:** oferte exemplos baseados nos competidores que o usuário acabou de listar.
- **Usuário entrega uma persona "ideal" sem dor:** persona sem dor não compra — pergunte qual frustração trouxe ela até o produto.
- **Usuário lista MAU sem qualificar:** "MAU = quem fez o quê? Abriu o app? Concluiu ação X?" — definição de métrica importa.
- **Métricas batem demais (todas em verde):** desconfie — pergunte qual é a métrica que o time evita olhar.

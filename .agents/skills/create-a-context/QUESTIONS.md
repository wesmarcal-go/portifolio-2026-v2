# Perguntas da Entrevista

Guia detalhado por seção. Para cada uma: (a) perguntas centrais com exemplos para orientar o usuário, (b) follow-ups para respostas vagas, (c) formato de output no `CLAUDE.md` final.

Quando fizer as perguntas, inclua os exemplos em parênteses ou após "ex:" — eles calibram o nível de especificidade esperado.

---

## 1. Cabeçalho

**Perguntas:**
- Qual seu nome?
- Cargo principal? (ex: Head de Produto, Engenheiro Sênior, Fundador, PM)
- Empresa / time atual?
- Tem papéis secundários? (ex: instrutor em IA, conselheiro de startups, autor)

**Output:**
```
# CLAUDE.md — {{nome}}

{{cargo}} · {{empresa}} · {{papeis_secundarios}}
```

---

## 2. Quem sou eu

**Perguntas:**
- Em 2–4 frases, descreva o "lugar de onde você opera" — não é bio de LinkedIn, é o impacto real do seu trabalho. Onde sua atuação acontece e qual a interseção entre seus mundos? (ex: "Fico na fronteira entre produto e dados numa fintech B2B. Meu trabalho real é transformar ambiguidade estratégica em decisões de engenharia executáveis.")
- Liste 3–6 autores, frameworks ou escolas de pensamento que você puxa com frequência. (ex: Kahneman — Sistemas 1 e 2, Skinner — reforço e modelagem, TCC, Jobs to Be Done)
- Que analogias ou metáforas você usa para explicar coisas? De que repertório você costuma tirar? (ex: animações Disney como dispositivos pedagógicos, xadrez para falar de estratégia, culinária para processos)

**Follow-ups se vago:**
- "Bio de LinkedIn não vale — me conta o impacto real do seu trabalho."
- "Pode citar um autor específico que você cita mais que os outros?"

**Output:** prosa (2–4 frases) + duas linhas em negrito: **Referências intelectuais recorrentes:** e **Analogias favoritas:**.

---

## 3. Princípios de produto/trabalho

**Perguntas:**
- Quais 4–8 princípios não-negociáveis guiam suas decisões? Cada um deve ser uma frase declarativa forte + 1 linha explicando o porquê ou o que implica. (ex: "Clareza antes de velocidade — decisão tomada sem alinhamento custa 3x mais para desfazer." / "Dados informam, não decidem — contexto qualitativo sempre entra antes do número.")
- Evite chavões corporativos; prefira o que você realmente acredita, inclusive coisas contraintuitivas.

**Follow-ups:**
- "Isso soou como chavão — me dá a versão que você realmente defende, inclusive contraintuitiva."
- "Quando isso já te fez tomar uma decisão impopular?"

**Output:** lista numerada `1. **Princípio.** Explicação.`

---

## 4. Stack de ferramentas

**Perguntas (uma categoria por vez ou em bloco, conforme estilo):**
Pergunta: "Quais ferramentas você usa no dia a dia? Vou passar por categoria:"
- Gestão de Produto/Projeto? (ex: Jira, Linear, Notion, Asana)
- Documentação? (ex: Notion, Confluence, Google Docs)
- Comunicação? (ex: Slack, Teams, Discord)
- Dados / Analytics? (ex: Amplitude, Mixpanel, Power BI, Metabase)
- Design / Whiteboard? (ex: Figma, Miro, FigJam)
- IA / Automação? (ex: Claude, n8n, Zapier, Langflow)
- Apresentações? (ex: PowerPoint, Keynote, Gamma, Canva)
- Código / Prototipagem? (ex: VS Code + TypeScript, Cursor, Python)
- Alguma outra categoria relevante?

**Output:** tabela markdown 2 colunas (Categoria | Ferramentas). Omita categorias vazias.

---

## 5. Workflows padrão

**Perguntas:**
- Quais 3–6 tarefas você mais pede para o Claude? (ex: escrever PRDs, analisar dados, criar conteúdo para redes, fazer benchmark de competidores, montar deck de liderança)
- Para cada uma: como você gosta que seja feita, passo a passo? (ex para PRD: "1. Entenda o problema, 2. Liste hipóteses, 3. Escreva critérios de aceitação em Given/When/Then, 4. feche com riscos e dependências")

**Follow-ups:**
- "No passo X, qual o formato esperado? Tem template?"
- "Tem regra de fechamento? (ex: sempre fechar com 'so what' — implicação prática)"
- "Para esse workflow, em que ferramenta o output vai parar?"

**Output:** subseções com emoji + título + lista numerada de passos. Se o usuário mencionar skills existentes, aponte para elas com `→ skill: nome-da-skill`.

---

## 6. Contexto da empresa/produto/setor

**Perguntas:**
- Qual a arquitetura principal do sistema/produto que você opera? Liste camadas ou componentes principais. (ex: "Camada de dados: warehouse Snowflake / Camada de produto: app React + API Node / Camada de negócio: squads de produto organizados por jornada do cliente")
- Quais produtos/projetos estão sob sua gestão? Para cada um: nome, o que é, prioridades atuais e restrições importantes. (ex: "Produto A: checkout mobile — prioridade: reduzir abandono de carrinho — restrição: não pode mudar o fluxo de pagamento até Q3")
- Que decisões-chave já foram tomadas e NÃO devem ser revisitadas sem motivo forte? (ex: "Rejeitamos microserviços — mantemos monólito modular", "Roadmap segue ordem A → C → B antes de V3")

**Follow-ups:**
- "Por que essa decisão? (1 linha evita o Claude sugerir o oposto)"
- "Tem algum jargão interno que eu deveria saber?"

**Output:** 3 subseções em negrito (Arquitetura, Produtos sob gestão, Decisões-chave já tomadas).

---

## 7. Padrões de comunicação

**Tom e estilo (perguntas com exemplos):**
- Idioma padrão? Quando muda? (ex: "Português, mudo para inglês em docs técnicos ou quando interlocutor é estrangeiro")
- Tom? (ex: direto e estruturado, sem enrolação / coloquial com proximidade / técnico sem simplificar)
- Nível de detalhe: o Claude deve assumir que você é sênior em quê? Explicar fundamentos de quê? (ex: "Assuma sênior em produto e dados. Explique fundamentos de ML quando entrar em modelagem.")
- Formatação preferida? (ex: bullets para listas acionáveis, prosa para narrativa estratégica, tabelas para comparação)
- O que evitar na escrita? (ex: disclaimers excessivos, "claro!", "ótima pergunta!", emojis em contexto sério, parágrafos longos sem quebra)

**Formatos de output (perguntas com exemplos):**
- Documentos estratégicos: qual formato? (ex: Markdown estruturado, PPTX tema dark)
- Mensagens Slack/curtas: estrutura típica? (ex: "contexto em 1 linha + decisão + owners + deadline")
- Apresentações: tema visual, paleta? (ex: dark, tons de azul e branco, sem bullet slides)
- Planilhas: estrutura? (ex: "aba de dados brutos separada de aba de análise")
- Comunicações para liderança: formato? (ex: "executive summary primeiro, detalhes depois, sempre com 'próximos passos' no fim")

**Output:** duas subseções `### Tom e estilo` e `### Formatos de output preferidos`, bullets.

---

## 8. Frameworks e metodologias

**Perguntas:**
- Por área (Produto, Comunicação, Análise, ou outras que você tiver): liste 2–4 frameworks que você USA DE FATO + quando e como aplica. Só o que você realmente usa — não cole lista genérica.
  - Produto: (ex: Jobs to Be Done — para definir escopo de feature / RICE — para priorização trimestral)
  - Comunicação: (ex: Pirâmide de Minto — para relatórios executivos / SCQA — para apresentações de problema)
  - Análise: (ex: Funil AARRR — para métricas de growth / Análise de coorte — para retenção)

**Follow-ups:**
- "Como exatamente você aplica? Tem variação sua?"

**Output:** subseções por área, bullets `- **Framework:** quando e como você usa.`

---

## 9. Estilo de ensino e conteúdo (OPCIONAL)

**Pergunta-gate:** "Você dá aulas, palestras ou cria conteúdo educacional?"
- NÃO → pular toda a seção (remover do arquivo final).
- SIM → seguir.

**Perguntas:**
- O que torna sua aula/conteúdo reconhecível? (ex: "Sempre começo pelo 'por quê' antes do 'como'", "Uso analogias com filmes antes de entrar no conceito técnico", "Exercício prático a cada 20 min")
- Estrutura de aula padrão? (ex: Abertura com provocação → Contexto teórico → Exemplo real → Prática → Fechamento com so what)
- Formato visual: tema (dark/light), paleta, tipografia, regras visuais, o que evitar? (ex: "Dark, azul elétrico + branco, cada slide tem pelo menos um elemento visual, zero bullet slides")
- Pacote padrão quando cria conteúdo: o que sempre entrega junto? (ex: guia do facilitador, tutorial passo a passo, prompts prontos, PPTX)

**Output:** 3 subseções (Marca didática, Formato visual, Pacote padrão).

---

## 10. O que NÃO fazer

**Perguntas:**
- Que comportamentos de IA te irritam? (ex: assumir que você não sabe o básico, começar com "Claro!", adicionar disclaimers em todo output, resumir o que acabou de fazer)
- Que formatos/estilos você rejeita? (ex: slides tema claro, emojis em texto sério, parágrafos longos, listas genéricas sem contexto)
- Restrições do seu setor que o Claude precisa respeitar? (ex: contexto regulatório — LGPD, não citar concorrentes por nome, dados sensíveis de usuários)

**Follow-ups:**
- "Conta um caso real onde isso já saiu errado."

**Output:** lista de bullets `- **Não [comportamento].** Explicação curta.`

---

## 11. Rede de colaboradores

**Perguntas:**
- Liste 3–8 pessoas com quem você trabalha de perto: nome, cargo/time, em que contexto essa pessoa entra. (ex: "Bárbara — Design Lead — entra em qualquer decisão de UI e em sprints de discovery" / "Rodrigo — CTO — entra quando há impacto em arquitetura ou prazo de engenharia")

**Output:** tabela markdown (Nome | Papel | Contexto).

---

## 12. Metas ativas

**Perguntas:**
- Quais 5–8 projetos ou metas estão top of mind agora? Inclua prazo se possível. (ex: "Lançar onboarding V2 até 30/06", "Reduzir churn mensal de 8% para 5% em Q3", "Contratar 2 PMs sênior até julho")

**Output:** lista de checkboxes `- [ ] Meta — prazo`.

---

## 13. Comandos rápidos

**Perguntas:**
- Apresente estes exemplos e pergunte quais quer manter, adaptar ou remover:
  - `/prd` → Gera PRD seguindo o workflow definido acima
  - `/ice` → Monta tabela ICE Score para as opções apresentadas
  - `/deck` → Cria apresentação seguindo meu estilo visual
  - `/analise` → Análise estruturada com findings + so what
  - `/slack` → Redige mensagem Slack direta: contexto + decisão + owners + deadline
  - `/benchmark` → Pesquisa e compara competidores no tema indicado
  - `/exec-brief` → Executive summary: contexto → decisão → próximos passos
- Quer criar algum atalho novo? Cada um: `/atalho` → o que faz.

**Output:** lista `- /atalho → ação`.

---

## 14. Notas para o agente

**Perguntas:**
- Onde salvar arquivos gerados? (ex: sempre em `/docs/outputs/`, nunca na raiz)
- Quais skills ou arquivos consultar antes de tarefas específicas? (ex: "Antes de criar conteúdo de redes, leia `/skills/social-content`")
- Convenções de nomenclatura, idioma, formato? (ex: "arquivos em kebab-case, datas no formato YYYY-MM-DD")
- Tem algum "sempre verifique X antes de fazer Y"? (ex: "Antes de sugerir qualquer framework novo, verifique se já tenho um similar no §7")

**Output:** lista de bullets curtos.

---

## 15. Princípios inegociáveis

**Perguntas:**
- 4–6 frases curtas e fortes que servem de "constituição" — quando há conflito entre velocidade e qualidade, ou escopo e profundidade, esses princípios decidem. (ex: "Clareza é bondade — comunicação obscura é falta de respeito com o interlocutor." / "Menos, mas melhor — prefiro entregar menos com excelência a muito com mediocridade.")

**Diferença vs §3:** princípios de §3 são operacionais (como decidir no dia a dia); estes são existenciais. Se o usuário tiver dúvida, pergunte: "esse princípio sobrevive a um trade-off forte de prazo?"

**Output:** lista numerada `1. **Princípio** — 1 frase de reforço`.

---

## 16. Contexto pessoal

**Perguntas:**
- Onde mora / fuso horário? (ex: São Paulo, UTC-3)
- Interesses intelectuais que cruzam com trabalho? (ex: neurociência aplicada a comportamento do consumidor, filosofia da linguagem, urbanismo)
- Projetos paralelos, palestras, publicações? (ex: "Escrevo newsletter sobre produto toda quarta", "Palestra sobre IA na CPBR em março")
- Presença em redes profissionais? (ex: LinkedIn: linkedin.com/in/usuario, X: @handle)

**Output:** lista de bullets curtos.

---

## Heurísticas gerais durante a entrevista

- **Resposta vaga ("sou organizado", "gosto de qualidade"):** peça exemplo concreto antes de aceitar.
- **Resposta genérica copiada de manuais:** desafie ("isso é da Wikipedia — qual sua versão?").
- **Resposta excessivamente longa:** ofereça condensar e devolva para confirmação antes de salvar.
- **"Pular" / "não sei" / "n/a":** registre como pulada e siga. Não insista mais que 1 follow-up.
- **Usuário corrige resposta anterior:** atualize o rascunho imediatamente.
- **Usuário dá lista vs prosa:** respeite o formato que o usuário usou; só normalize na montagem final.

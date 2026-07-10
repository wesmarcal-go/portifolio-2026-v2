# Agent guidance (Cursor)

This repo uses **Agent Skills** (open standard). Cursor auto-discovers them from `.agents/skills/` and surfaces them in Agent chat via `/skill-name` or by matching the skill `description` to the task.

**How to use skills here:**
1. Prefer the skill’s own `SKILL.md` — read it and follow it exactly when the task matches.
2. Invoke explicitly with `/skill-name` when you want a guaranteed run (especially skills with `disable-model-invocation: true`).
3. Do not invent parallel workflows; the skill file is the source of truth.
4. Skill paths are relative to the project root: `.agents/skills/<name>/SKILL.md`.

---

## Project skills

| Skill | Invoke | Auto? | When to use |
| --- | --- | --- | --- |
| `create-a-context` | `/create-a-context` | yes | Guided interview → `CLAUDE.md` / product context |
| `grill-me` | `/grill-me` | yes | Stress-test a plan or design; “me grila” |
| `write-a-skill` | `/write-a-skill` | yes | Author a new project skill under `.agents/skills/` |
| `design-forma` | `/design-forma` | yes | Camada FORMA: ler estrutura → contexto + protótipo Astro 7 em `regular-ring` |
| `apple-design` | `/apple-design` | yes | UI/motion no estilo Apple (springs, gestures, depth) |
| `animation-vocabulary` | `/animation-vocabulary` | yes | Nomear um efeito de motion a partir de descrição vaga |
| `review-animations` | `/review-animations` | **no** | Review de motion/craft (só via `/` — ver nota abaixo) |

### Trigger phrases (fallback)

Use these if the user does not type `/…` but clearly wants the workflow:

**create-a-context** — PT: "cria meu CLAUDE.md", "monta meu contexto", "cria contexto profissional", "criar contexto de produto", "configura meu perfil" · EN: "create my CLAUDE.md", "build my context", "create a context", "set up my profile"  
→ `.agents/skills/create-a-context/SKILL.md` (+ QUESTIONS.md, TEMPLATE.md, PRODUCT_*)

**grill-me** — PT: "me grila", "stress-test esse plano", "questiona meu design", "me interroga sobre isso" · EN: "grill me", "stress-test this plan", "challenge my design", "interrogate my plan"  
→ `.agents/skills/grill-me/SKILL.md`

**write-a-skill** — PT: "escreve uma skill", "cria uma skill", "constrói uma skill para", "empacota isso como skill" · EN: "write a skill", "create a skill", "build a skill for", "package this as a skill"  
→ `.agents/skills/write-a-skill/SKILL.md`  
(Prefer Cursor’s built-in `/create-skill` for Cursor-native packaging; use this skill when the user wants the project’s Agent Skills layout under `.agents/skills/`.)

**design-forma** — PT: "ler a estrutura", "preparar a Camada FORMA", "fazer leitura da tela", "protótipo Astro"  
→ `.agents/skills/design-forma/SKILL.md` (+ `references/astro-target.md`)

**apple-design** — building/reviewing gesture UI, springs, sheets, translucent materials, Apple-like motion  
→ `.agents/skills/apple-design/SKILL.md`

**animation-vocabulary** — "what's it called when…", "como se chama o efeito…", naming a motion without designing it  
→ `.agents/skills/animation-vocabulary/SKILL.md`

**review-animations** — "review animations", "revisa o motion", craft review of animation code  
→ `.agents/skills/review-animations/SKILL.md`  
Note: frontmatter has `disable-model-invocation: true` — **only** runs when the user invokes `/review-animations` (or `@` attaches it). Do not auto-apply.

---

## Cursor vs this file

| Layer | Role in this repo |
| --- | --- |
| `AGENTS.md` (this file) | Thin always-on registry + Cursor usage notes |
| `.agents/skills/*/SKILL.md` | Full workflows (progressive disclosure) |
| `.cursor/rules/*.mdc` | Optional: scoped/always rules (globs, coding standards) — not a skill substitute |
| Built-in Cursor skills | `/create-skill`, `/create-rule`, `/canvas`, etc. — prefer when the task is Cursor-product specific |

Keep this file short. Put long procedures in skills, not here.

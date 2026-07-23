---
target: cases page
total_score: 17
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
timestamp: 2026-07-23T19-10-35Z
slug: regular-ring-src-pages-cases-astro
---
Method: dual-agent (A: 7ab26a59-a821-4370-b3b7-4f1634a3f8f0 · B: bbea39c7-b215-45d6-9d3e-f1ef6240178e)

#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 1 | Password submit dá zero feedback |
| 2 | Match System / Real World | 3 | Gate familiar; senha como CTA primário não casa com “contato destrava” |
| 3 | User Control and Freedom | 3 | Saída via nav OK; loop no-op no form |
| 4 | Consistency and Standards | 3 | Visual coerente; interação contradiz DESIGN/PRODUCT |
| 5 | Error Prevention | 1 | UI convida senha sem avisar que é ilustrativa |
| 6 | Recognition Rather Than Recall | 3 | Contato visível; senha exige recall de algo nunca dado |
| 7 | Flexibility and Efficiency | n/a | Experience/portfolio |
| 8 | Aesthetic and Minimalist Design | 3 | Forte; modelo dual de unlock é o excesso |
| 9 | Error Recovery | 0 | Sem erro, recovery ou redirect após submit |
| 10 | Help and Documentation | n/a | Experience/portfolio |
| **Total** | | **17/32** | **Acceptable (53%)** |

#### Design Specificity Verdict

**LLM assessment:** Authored for Copper Briefing Room — not interchangeable. Identity + Merriweather + peach eyebrow, blur grid + ink scrim + glass gate match DESIGN.md’s locked confidentiality signature. Interaction intent is muddier: peach “Visualizar cases” performs like a real unlock while product rule says contact unlocks.

**Deterministic scan:** CLI `detect.mjs` on CasesContent/cases pages + cases.css → `[]`, exit 0. Browser inject of detect.js succeeded; console: “No anti-patterns found.” Zero overlays drawn (expected with zero findings). Detector did not catch the silent-form UX failure (behavioral, not a visual anti-pattern).

**Visual overlays:** Script inject succeeded; no finding markers (clean detector run). No reliable finding overlays to show.

#### Overall Impression

The locked stage is a strong, on-brand metaphor. The biggest opportunity is fixing the gate interaction so contact is unmistakably primary and the password path stops lying by silence.

#### What's Working

1. **Signature locked stage** — blur + scrim + glass gate is distinctive and on-strategy.
2. **Brand-first hero** — Identity + peach eyebrow + serif H1 before the stage.
3. **Preference-aware craft** — reduced-motion and reduced-transparency handled.

#### Priority Issues

- **[P1] Silent password failure**
  - **Why:** `preventDefault` only; feels broken, damages craft trust.
  - **Fix:** On submit, surface plain-language feedback (and/or remove fake success path); `aria-live` + optional `aria-invalid`.
  - **Suggested command:** `/impeccable clarify` or `/impeccable harden`

- **[P1] Primary CTA contradicts unlock path**
  - **Why:** Body says contact; dominant peach button says “Visualizar cases.”
  - **Fix:** Make contact (“Pedir acesso” / mailto) the peach primary; demote password to quiet disclosure if kept.
  - **Suggested command:** `/impeccable clarify` + `/impeccable layout`

- **[P1] Mobile: real unlock nearly below first fold**
  - **Why:** Contact ~clipped on 390×812 while password row is fully visible.
  - **Fix:** Recompose first viewport so contact lands in thumb/first screen; tighten hero or stage.
  - **Suggested command:** `/impeccable adapt` or `/impeccable layout`

- **[P2] Cramped password row on narrow**
  - **Why:** ~107px input vs ~137px submit looks broken.
  - **Fix:** Stack field + button on small widths.
  - **Suggested command:** `/impeccable adapt`

- **[P2] H1 doesn’t bridge to lock**
  - **Why:** Ambition headline over-promises visible work before the hard lock.
  - **Fix:** Cases-specific bridge line into confidentiality.
  - **Suggested command:** `/impeccable clarify`

#### Persona Red Flags

- **Jordan:** Believes a password exists; silent failure; unsure whether to email.
- **Riley:** Empty/wrong submits forever; concludes the craft page is careless.
- **Casey:** Contact clipped; squeezed form; must scroll for intended unlock.
- **Morgan (HM, 3‑min):** Blur ≠ scannable proof; peach CTA wastes the minute; may bounce.

#### Minor Observations

- EN body thinner than PT; submit focus-visible weaker than input; 6 cells / 5 assets → duplicate under blur; no “Peça acesso” micro-heading on contact block.

#### Questions to Consider

1. If contact is the real unlock, why is the only peach button a password submit that cannot succeed?
2. Would a hiring manager trust NDA discipline from a form that lies by silence?
3. What if the gate had one primary — “Pedir acesso” — and password only as “Já tenho senha”?
4. Should the first viewport end on contact, with blur as backdrop?
5. Does “melhores trabalhos” over-promise when the page’s job is to refuse showing them?

# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters, hiring managers, and product/design leaders evaluating Wes Marçal for a role, partnership, mentorship, or strategic consulting. They arrive with limited time, scan for seniority and proof, then decide whether to reach out.

## Product Purpose

Personal portfolio site for Wes Marçal. It makes possible a fast, credible evaluation of his craft and impact, then a conversation (email / LinkedIn). Success is when the right visitor understands the positioning, trusts the trajectory and case signal, and contacts him.

## Positioning

Senior product designer / design engineer who uses design and AI to turn complex product problems into clear, fast decisions — proven through Staff-level work on products at scale (iFood, Zé Delivery, Globo Ads, Conta Simples, Accenture), not through generic UI showcases. A neighboring portfolio could not honestly claim this specific combination of trajectory, named employers, and AI-augmented problem-framing stance.

## Operating Context

- Three public surfaces: home (identity + case reel), carreira/career (timeline), cases (gated previews).
- Bilingual: Portuguese (default) and English (`/en/`).
- App lives in `regular-ring/` (Astro 7). Repo root also holds Agent Skills tooling.
- Outbound channels: LinkedIn, Substack, email (`wes.marcal@gmail.com`). CTA emphasizes availability for partnerships, mentoring, and strategic consulting.
- Cases page communicates confidentiality with a locked stage (blur + gate card). Cases remain locked by design — no unlock/auth; the gate routes to contact (email primary, LinkedIn secondary) to request access.

## Capabilities and Constraints

- **Stack:** Astro 7 with CSS custom properties (`tokens.css`) and scoped/component CSS. Tailwind is permitted for new work if useful, but the incumbent system is not being migrated wholesale.
- **Surfaces to preserve:** home, carreira/career, cases — shared header/footer/identity.
- **Cases access:** stay locked; do not build unlock, auth, password gates, or reveal private case content in-product. Contact is the only access path.
- **i18n:** all visitor-facing copy via `src/i18n/` (`pt` / `en`); no hardcoded page strings in content components.
- **Brand name:** «wes marçal» / Wes Marçal; site URL `https://wesmarcal.com`.
- **Open:** any additional channels or surfaces beyond the three current ones.

## Brand Commitments

- Personal brand: Wes Marçal — Designer especialista · Design engineer (EN: Senior product designer · Design engineer).
- Voice on site: direct, first-person, lightly informal in PT CTAs; professional and clear in EN.
- Identity assets: avatar + wordmark used as the hero brand signal across surfaces.
- Social proof employers shown in the reel: iFood, Zé Delivery, Grupo Globo, Conta Simples, Accenture.

## Evidence on Hand

- Career timeline content: `regular-ring/src/i18n/career.ts` (roles, periods, descriptions, iFood highlights).
- Case reel imagery: `regular-ring/src/assets/slide-*.png` (employer-labeled slides).
- Structure docs: `regular-ring/contexto/` (home, carreira, cases, tokens, dictionary).
- Contact and socials: `regular-ring/src/lib/site.ts`, footer/cases copy in `strings.ts`.
- **Do not fabricate:** testimonials, metrics, client quotes, unlocked case narratives, or employers not already listed.

## Product Principles

1. Lead with identity and positioning — the brand is the product of this site.
2. Proof before pitch: trajectory and real employers beat abstract claims.
3. Respect confidentiality: cases stay locked; the gate routes to contact — never invent or reveal case detail in-product.
4. Bilingual parity: PT and EN are first-class, not an afterthought.
5. Make contact the clear next step when the visitor is convinced.

## Accessibility & Inclusion

Honor `prefers-reduced-motion` and `prefers-reduced-transparency` where the UI already does (marquee, overlays, translucent surfaces). No additional product-specific a11y standard was set beyond that.

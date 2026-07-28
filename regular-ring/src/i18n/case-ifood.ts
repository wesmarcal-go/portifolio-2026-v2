import type { Locale } from './strings';

export interface CaseMetaTag {
  label: string;
  value: string;
}

export interface CasePillar {
  title: string;
  body: string;
}

export interface CaseIfood {
  metaTags: CaseMetaTag[];
  summary: {
    label: string;
    paragraphs: string[];
  };
  problem: {
    label: string;
    problemTitle: string;
    problemBody: string;
    evidenceTitle: string;
    evidence: string[];
  };
  workflow: {
    label: string;
    mediaAlt: string;
    paragraphs: string[];
  };
  principles: {
    label: string;
    pillars: CasePillar[];
  };
  tangible: {
    label: string;
    thesis: string;
    cards: string[];
    mediaCaption: string;
  };
  impact: {
    label: string;
    title: string;
    cards: string[];
  };
  retrospective: {
    label: string;
    heading: string;
    cardTitle: string;
    cardBody: string;
  };
}

export const caseIfood: Record<Locale, CaseIfood> = {
  pt: {
    metaTags: [
      { label: 'Ano', value: '2025' },
      { label: 'Duração', value: '3 semanas' },
      { label: 'Ferramentas', value: 'Figma, entrevistas e AI' },
      { label: 'Contexto', value: 'Parceiros via API · catálogo e pedido' },
      { label: 'Indústria', value: 'Marketplace · Varejo' },
      { label: 'Meu papel', value: 'Diagnóstico e visão de solução' },
    ],
    summary: {
      label: 'Resumo',
      paragraphs: [
        'Mercados, atacados e farmácias chegam ao iFood por integração via API. O núcleo dessa relação é a operação de catálogo e pedido — e a qualidade dela define se o pedido chega completo, sem substituições e no prazo.',
        'Em três semanas, conduzi o diagnóstico e a visão de solução: pesquisa com stakeholders, parceiros e integradoras; auditoria da operação vigente; e protótipos das hipóteses mais fortes para entrar na priorização das squads.',
      ],
    },
    problem: {
      label: 'O problema',
      problemTitle: 'Sintoma',
      problemBody:
        'O varejo de mercado e farmácia cresceu rápido no marketplace. Com o crescimento, a operação do parceiro ficou mais complexa — e problemas de integração passaram a comprometer os KPIs de qualidade: pedido completo, sem substituições, no tempo certo.',
      evidenceTitle: 'Evidências',
      evidence: [
        'Problemas de redes grandes pulavam o suporte e chegavam à liderança como pedido de socorro — sem rastreabilidade.',
        'Mais parceiros ficavam indisponíveis por sanções temporárias de qualidade.',
        'Pouca instrumentação para monitorar a integração de forma proativa; transparência limitada.',
        'Parceiros integrados respondiam por cerca de 1/3 do GMV da vertical — impacto direto no resultado financeiro.',
      ],
    },
    workflow: {
      label: 'Método',
      mediaAlt:
        'Diagrama do método: espaço do problema (pesquisa e discovery) e espaço da solução (visão de design e implementação), com AI nas três junções do fluxo',
      paragraphs: [
        'Usei AI para acelerar etapas de rigor técnico — e mantive "human in the loop" no que importa: cruzar informações e decidir. Automação ganhou velocidade; julgamento humano ficou no centro.',
        'O desafio real não é gerar output. É orquestrar a cadeia decisória: quais critérios usamos, e quais tradeoffs aceitamos.',
      ],
    },
    principles: {
      label: 'Princípios',
      pillars: [
        {
          title: 'Visibilidade',
          body: 'Parceiros só agiam quando o problema já estava tarde. Sem visibilidade no momento crítico da operação, autonomia é impossível.',
        },
        {
          title: 'Autonomia',
          body: 'Autonomia é inteligência para decidir melhor. Parceiros certeiros na resolução melhoram a experiência deles e a do consumidor.',
        },
        {
          title: 'Padronização',
          body: 'Ações calibradas por maturidade do parceiro economizam recurso interno e elevam a qualidade da integração ao longo do tempo.',
        },
      ],
    },
    tangible: {
      label: 'A visão',
      thesis:
        'Dar a parceiros e integradoras as informações e ferramentas para identificar e resolver problemas de integração sozinhos.',
      cards: [
        'Painéis claros e ações direcionadas sobre a saúde da integração.',
        'Experiência adaptada ao parceiro e à empresa integradora.',
        'Módulos focados nos momentos que mais importam no dia a dia.',
      ],
      mediaCaption: 'Interfaces do protótipo (placeholder)',
    },
    impact: {
      label: 'Impacto',
      title: 'Priorização e desdobramento',
      cards: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      ],
    },
    retrospective: {
      label: 'Retrospectiva',
      heading: 'O que eu aprendi',
      cardTitle: 'Amostra qualitativa foi o ponto fraco',
      cardBody:
        'Validar hipóteses com parceiros é difícil: quem opera a integração prioriza o problema do dia. Ainda assim, conversei com 4 empresas — e elas trouxeram o que a pesquisa anterior não tinha visto: autodidatismo para contornar falhas nas ferramentas de integração.',
    },
  },
  en: {
    metaTags: [
      { label: 'Year', value: '2025' },
      { label: 'Duration', value: '3 weeks' },
      { label: 'Tools', value: 'Figma, interviews, and AI' },
      { label: 'Context', value: 'API partners · catalog and order' },
      { label: 'Industry', value: 'Marketplace · Retail' },
      { label: 'My role', value: 'Diagnosis and solution vision' },
    ],
    summary: {
      label: 'Summary',
      paragraphs: [
        "Grocery chains, wholesalers, and pharmacies reach iFood through API integration. Catalog and order operations sit at the core of that relationship — and their quality decides whether orders arrive complete, without substitutions, and on time.",
        'Over three weeks, I led the diagnosis and solution vision: research with stakeholders, partners, and integrators; an audit of the live operation; and prototypes of the strongest hypotheses for squad prioritization.',
      ],
    },
    problem: {
      label: 'The problem',
      problemTitle: 'Symptom',
      problemBody:
        'Grocery and pharmacy retail grew fast inside the marketplace. With growth came more complex partner operations — and integration issues started hitting quality KPIs: complete orders, no substitutions, on time.',
      evidenceTitle: 'Evidence',
      evidence: [
        'Problems at large chains skipped support and reached leadership as an SOS — with no traceability.',
        'More partners went offline under temporary quality sanctions.',
        'Little instrumentation for proactive monitoring; limited visibility into their own integrations.',
        "Integrated partners accounted for roughly a third of the vertical's GMV — a direct financial hit.",
      ],
    },
    workflow: {
      label: 'Method',
      mediaAlt:
        'Method diagram: problem space (research and discovery) and solution space (design vision and implementation), with AI at the three junctions of the flow',
      paragraphs: [
        'I used AI to speed up steps that used to demand technical rigor — and kept "human in the loop" where it matters: cross-checking information and deciding. Automation bought speed; human judgment stayed central.',
        "The real challenge isn't generating output. It's orchestrating the decision chain: which criteria we use, and which tradeoffs we accept.",
      ],
    },
    principles: {
      label: 'Principles',
      pillars: [
        {
          title: 'Visibility',
          body: "Partners only acted once the problem was already late. Without visibility at the hottest moment of the operation, autonomy is impossible.",
        },
        {
          title: 'Autonomy',
          body: 'Autonomy is intelligence to decide better. Precise partner resolution improves both the partner and the consumer experience.',
        },
        {
          title: 'Standardization',
          body: "Actions tuned to each partner's maturity save internal resources and raise integration quality over time.",
        },
      ],
    },
    tangible: {
      label: 'The vision',
      thesis:
        'Give partners and integrators the information and tools to spot and fix integration problems on their own.',
      cards: [
        'Clear dashboards and directed actions on integration health.',
        'Experience adapted for both the partner and the integrator.',
        'Modules focused on the moments that matter most day to day.',
      ],
      mediaCaption: 'Prototype interfaces (placeholder)',
    },
    impact: {
      label: 'Impact',
      title: 'Prioritization and rollout',
      cards: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      ],
    },
    retrospective: {
      label: 'Retrospective',
      heading: 'What I learned',
      cardTitle: 'The qualitative sample was the weak point',
      cardBody:
        "Validating hypotheses with partners is hard: people running integrations prioritize today's fire. Still, I spoke with 4 companies — and they surfaced what earlier research missed: partners teaching themselves workarounds for gaps in the integration tooling.",
    },
  },
};

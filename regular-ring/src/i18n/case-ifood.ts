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
    mediaCaption: string;
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
    mediaCaption: string;
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
      { label: 'Contexto', value: 'Parceiros integrados via API · catálogo e pedido' },
      { label: 'Indústria', value: 'Marketplace · Varejo' },
      { label: 'Meu papel', value: 'Condução do diagnóstico e da visão' },
    ],
    summary: {
      label: 'Resumo',
      paragraphs: [
        'Para mercados, atacadões e farmácias conseguirem atuar na maior marketplace com delivery do Brasil, é necessário algum tipo de comunicação operacional. Estamos falando sobre operações de catálogo e pedido que são o core na interface com esses parceiros. Esse case é sobre o diagnóstico e visão de design para parceiros que operam via API, como eles operam com o iFood e sobre KPIs de qualidade nessa relação.',
        'Fui o responsável por conduzir o diagnóstico e liderar o desenho da visão de solução: pesquisa com stakeholders internos, parceiros e integradoras, audit da operação vigente, e tangibilizar as melhores hipóteses de solução em protótipos — pra que mais tarde entrasse na priorização das squads.',
        'A integração em geral contribui para que as informações trocadas pelo iFood e o parceiro estejam corretamente relacionadas, desde a vinculação do catálogo, order do pedido até a conciliação financeira.',
      ],
      mediaCaption: 'Loop animado — visão geral da operação de catálogo e pedido',
    },
    problem: {
      label: 'O problema',
      problemTitle: 'Problema',
      problemBody:
        'O segmento de varejo no mercado e farmácia cresceu rápido dentro do marketplace, e junto com as dores do crescimento vieram mais complexidade na operação do parceiro. O resultado foi cada vez mais parceiros tendo problemas operacionais que estavam afetando os KPIs de qualidade (pedido completo, sem substituições e no tempo certo).',
      evidenceTitle: 'Evidências',
      evidence: [
        'Problemas operacionais de redes de mercados cortando protocolos e chegando na alta liderança como um pedido de socorro — sem rastreabilidade.',
        'Taxa de parceiros indisponíveis por sanções temporárias de qualidade aumentando.',
        'Parceiros com baixa instrumentação de monitoramento proativo e limitada transparência sobre as integrações.',
        'Parceiros integrados representavam cerca de 1/3 do GMV da vertical — ou seja, impacto nos KPIs financeiros.',
      ],
    },
    workflow: {
      label: 'Workflow',
      mediaCaption: 'Diagrama — fluxo de trabalho com AI e human-in-the-loop',
      mediaAlt:
        'Diagrama do workflow: Problem Space (pesquisas com usuários e product discovery) e Solution Space (visão de design e implementação), com AI nas três junções do fluxo',
      paragraphs: [
        'Com a AI em jogo, um princípio que não abro mão é o "human in the loop". Por isso, consegui acesso a insights de forma mais rápida. Etapas de rigor técnico se tornaram automações, e cruzar informações se tornou o toque humano mais valioso no meu processo.',
        'O verdadeiro desafio em trabalhar com AI é a cadeia decisória que é preciso orquestrar. Decisões vêm com tradeoffs — quais os critérios que usamos para tomar decisões.',
      ],
    },
    principles: {
      label: 'Princípios de design',
      pillars: [
        {
          title: 'Visibilidade',
          body: 'Parceiro não conseguia agir sobre os problemas de integração principalmente porque só ficava sabendo deles tarde demais. O alicerce pra entregar autonomia é dar visibilidade pra quem estava no momento mais quente da operação.',
        },
        {
          title: 'Autonomia',
          body: 'Entregar autonomia é mais do que tudo entregar inteligência para tomar decisões melhores. Com parceiros conseguindo ser certeiros na resolução de problemas, a experiência do parceiro e do consumidor eram afetadas.',
        },
        {
          title: 'Padronização',
          body: 'Ações personalizadas para diferentes níveis de maturidade de parceiros pouparia recursos internos e qualidade nas implementações e manutenção das integrações.',
        },
      ],
    },
    tangible: {
      label: 'Tangibilização',
      thesis:
        'Oferecer aos parceiros e integradoras as informações e ferramentas necessárias para identificar e resolver problemas de integração de forma autônoma.',
      cards: [
        'Painéis claros e ações direcionadas sobre a saúde da integração.',
        'Adaptar tanto para o parceiro quanto para a empresa integradora.',
        'Modular para os momentos que mais importam nas ferramentas de uso.',
      ],
      mediaCaption: 'Imagens ou vídeo em loop das interfaces do protótipo',
    },
    retrospective: {
      label: 'Retrospectiva',
      heading: 'O que eu aprendi nesse projeto',
      cardTitle: 'A amostra qualitativa foi o ponto fraco',
      cardBody:
        'Enfrentei um desafio de amostra qualitativa pra conseguir validar as hipóteses com as empresas parceiras. É complicado porque a agenda das pessoas envolvidas na integração dá prioridade aos problemas do dia a dia delas. Apesar disso, consegui falar de forma quali com 4 empresas, que trouxeram insights que não tinham aparecido nas outras etapas da pesquisa, como o comportamento de autodidatismo pra contornar problemas nas ferramentas de integração.',
    },
  },
  en: {
    metaTags: [
      { label: 'Year', value: '2025' },
      { label: 'Duration', value: '3 weeks' },
      { label: 'Tools', value: 'Figma, interviews and AI' },
      { label: 'Context', value: 'API-integrated partners · catalog and order' },
      { label: 'Industry', value: 'Marketplace · Retail' },
      { label: 'My role', value: 'Led the diagnosis and the vision' },
    ],
    summary: {
      label: 'Summary',
      paragraphs: [
        "For grocery chains, wholesalers, and pharmacies to operate on Brazil's largest delivery marketplace, some form of operational communication is required. We're talking about catalog and order operations — the core interface with these partners. This case is about the diagnosis and design vision for partners who operate via API: how they work with iFood, and the quality KPIs that govern that relationship.",
        'I was responsible for leading the diagnosis and the solution vision: research with internal stakeholders, partners and system integrators, an audit of the existing operation, and turning the strongest hypotheses into prototypes — so they could later enter squad prioritization.',
        'Integration, broadly, ensures that the information exchanged between iFood and the partner stays correctly linked — from catalog binding, to order flow, to financial reconciliation.',
      ],
      mediaCaption: 'Animated loop — overview of the catalog and order operation',
    },
    problem: {
      label: 'The problem',
      problemTitle: 'Problem',
      problemBody:
        "The grocery and pharmacy retail segment grew fast inside the marketplace, and growing pains brought more complexity to partner operations. The result: a growing number of partners hitting operational problems that hurt quality KPIs (complete orders, no substitutions, on time).",
      evidenceTitle: 'Evidence',
      evidence: [
        'Operational problems at grocery chains cutting through support protocols and reaching senior leadership as an SOS — with no traceability.',
        'A rising rate of partners suspended by temporary quality sanctions.',
        "Partners with little proactive monitoring instrumentation and limited visibility into their own integrations.",
        "Integrated partners represented roughly a third of the vertical's GMV — a direct hit to financial KPIs.",
      ],
    },
    workflow: {
      label: 'Workflow',
      mediaCaption: 'Diagram — AI + human-in-the-loop workflow',
      mediaAlt:
        'Workflow diagram: Problem Space (user research and product discovery) and Solution Space (design vision and implementation), with AI at the three junctions of the flow',
      paragraphs: [
        'With AI in the mix, one principle I never give up is "human in the loop." It let me reach insight faster: steps that used to demand technical rigor became automations, and cross-referencing information became the most valuable human touch in my process.',
        'The real challenge in working with AI is the decision chain you have to orchestrate. Decisions come with tradeoffs — what criteria do we use to make them?',
      ],
    },
    principles: {
      label: 'Design principles',
      pillars: [
        {
          title: 'Visibility',
          body: "Partners couldn't act on integration problems mainly because they only found out too late. The foundation for delivering autonomy is giving visibility to whoever is closest to the hottest moment of the operation.",
        },
        {
          title: 'Autonomy',
          body: 'Delivering autonomy is, above all, delivering the intelligence to make better decisions. As partners became more precise at resolving problems, the partner and consumer experience were directly affected.',
        },
        {
          title: 'Standardization',
          body: "Tailoring actions to each partner's maturity level would save internal resources and raise the quality of how integrations are implemented and maintained.",
        },
      ],
    },
    tangible: {
      label: 'Making it tangible',
      thesis:
        'Give partners and integrators the information and tools they need to identify and resolve integration problems on their own.',
      cards: [
        'Clear dashboards and directed actions on integration health.',
        'Adapted for both the partner and the integrator company.',
        'Modular for the moments that matter most in day-to-day tooling.',
      ],
      mediaCaption: 'Looping images or video of the prototype interfaces',
    },
    retrospective: {
      label: 'Retrospective',
      heading: 'What I learned from this project',
      cardTitle: 'The qualitative sample was the weak point',
      cardBody:
        "I ran into a qualitative sample challenge trying to validate hypotheses with partner companies. It's tricky because the people involved in integration prioritize their own day-to-day problems over research requests. Even so, I managed to talk qualitatively with 4 companies, and they surfaced insights that hadn't come up in earlier research stages — like partners teaching themselves workarounds for problems in the integration tooling.",
    },
  },
};

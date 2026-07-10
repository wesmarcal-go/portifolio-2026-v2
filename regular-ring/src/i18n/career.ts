import type { Locale } from './strings';

export interface CareerEntry {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights?: string[];
}

export const careerTimeline: Record<Locale, CareerEntry[]> = {
  pt: [
    {
      company: 'iFood',
      role: 'Staff Designer',
      period: 'Mai 2025 – Mai 2026',
      description:
        'Atuação transversal no time de Multicategoria, ao lado de Design Managers e Product Managers, estruturando o diagnóstico de problemas em operações de parceiros antes de qualquer solução ser desenhada.',
      highlights: [
        'Defini pilares de investigação antes da pesquisa começar, decidindo o que valia a pena investigar em vez de executar uma pesquisa já definida por outra área.',
        'Conectei Operações, BizDev e Produto em conversas estruturadas para formar uma visão compartilhada do problema, em vez de aceitar o problema como veio definido.',
        'Traduzi pesquisa qualitativa e quantitativa, incluindo benchmarking com concorrentes, em pilares estratégicos nomeados que orientaram múltiplos times de produto e engenharia ao mesmo tempo.',
        'Separei a visão de design de longo prazo do plano tático de curto prazo, considerando viabilidade técnica e esforço de coordenação entre áreas.',
        'Usei IA pra me auxiliar e dar tração nos meus planos antes de qualquer entrega, além de usar ferramentas de automação com AI e de prototipação (como figma make).',
      ],
    },
    {
      company: 'Badaró Design / Globo Ads',
      role: 'Product & Service Designer',
      period: 'Nov 2024 – Mai 2025',
      description:
        'Designer responsável taticamente pelo contexto da experiência do executivo de vendas dentro da estrutura do Globo Ads, em um produto interno.',
    },
    {
      company: 'Conta Simples',
      role: 'Senior Service Designer',
      period: 'Fev 2024 – Jul 2024',
      description:
        'Atuação em produto interno, contribuindo para uma visão mais holística através de práticas de design de serviço.',
    },
    {
      company: 'Zé Delivery / Ambev',
      role: 'Senior Service & Product Designer',
      period: 'Abr 2020 – Jun 2023',
      description:
        'Em contexto de DTC (Direct to Consumer), atuação estratégica e tática em um produto interno de pagamentos. Também contribuiu para repensar processos do capítulo de design e evoluir sua maturidade.',
    },
    {
      company: 'Accenture Interactive',
      role: 'UX Design Lead',
      period: 'Nov 2018 – Mar 2020',
      description:
        'Papel de liderança técnica e gestão de pessoas, com evolução de habilidades de mentoria e gestão de projetos, trazendo consciência estratégica e visão de negócios.',
    },
    {
      company: 'Accenture Interactive',
      role: 'UX Designer Specialist',
      period: 'Fev 2017 – Nov 2018',
      description: 'Consultor de UX para diversas indústrias atendidas pela Accenture Interactive.',
    },
    {
      company: 'MJV Tecnologia e Inovação',
      role: 'UX Designer',
      period: 'Out 2015 – Fev 2017',
      description:
        'Responsável por desenhar experiências digitais para uma das maiores seguradoras da América Latina.',
    },
  ],
  en: [
    {
      company: 'iFood',
      role: 'Staff Designer',
      period: 'May 2025 – May 2026',
      description:
        'Cross-functional work within the Multicategory team, alongside Design Managers and Product Managers, structuring the problem diagnosis in partner operations before any solution was designed.',
      highlights: [
        'Defined investigation pillars before research began, deciding what was worth investigating instead of executing research already framed by another team.',
        'Connected Operations, BizDev and Product in structured conversations to build a shared view of the problem, instead of accepting it as originally framed.',
        'Translated qualitative and quantitative research, including competitor benchmarking, into named strategic pillars that guided multiple product and engineering teams at once.',
        'Separated the long-term design vision from the short-term tactical plan, weighing technical feasibility and cross-team coordination effort.',
        'Used AI to support and give traction to my plans before any delivery, alongside AI automation and prototyping tools (like Figma Make).',
      ],
    },
    {
      company: 'Badaró Design / Globo Ads',
      role: 'Product & Service Designer',
      period: 'Nov 2024 – May 2025',
      description:
        "Tactically responsible for the sales executive experience within Globo Ads' internal product.",
    },
    {
      company: 'Conta Simples',
      role: 'Senior Service Designer',
      period: 'Feb 2024 – Jul 2024',
      description:
        'Worked on an internal product, contributing to a more holistic view through service design practices.',
    },
    {
      company: 'Zé Delivery / Ambev',
      role: 'Senior Service & Product Designer',
      period: 'Apr 2020 – Jun 2023',
      description:
        "In a DTC (Direct to Consumer) context, strategic and tactical work on an internal payments product. Also helped rethink the design chapter's processes and grow its maturity.",
    },
    {
      company: 'Accenture Interactive',
      role: 'UX Design Lead',
      period: 'Nov 2018 – Mar 2020',
      description:
        'Technical leadership and people management role, developing mentoring and project management skills while building strategic and business awareness.',
    },
    {
      company: 'Accenture Interactive',
      role: 'UX Designer Specialist',
      period: 'Feb 2017 – Nov 2018',
      description: 'UX consultant across multiple industries served by Accenture Interactive.',
    },
    {
      company: 'MJV Tecnologia e Inovação',
      role: 'UX Designer',
      period: 'Oct 2015 – Feb 2017',
      description:
        "Responsible for designing digital experiences for one of Latin America's largest insurance companies.",
    },
  ],
};

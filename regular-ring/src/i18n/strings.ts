export const locales = ['pt', 'en'] as const;
export type Locale = (typeof locales)[number];

export const localePaths: Record<Locale, string> = {
  pt: '/',
  en: '/en/',
};

export const strings = {
  pt: {
    pageTitle: 'Wes Marçal — Home',
    metaDescription: 'Portfólio de Wes Marçal — Designer especialista · Designer engineer',
    navPrimary: 'Principal',
    navHome: 'home',
    navCareer: 'carreira',
    navCareerHref: '/carreira',
    navCases: 'cases',
    navCasesHref: '/cases',
    langLabel: 'Idioma',
    hero: 'Apresentação',
    avatarAlt: 'Retrato de Wes Marçal',
    wordmarkAlt: 'wes marçal',
    eyebrow: 'Designer especialista • Designer engineer',
    headline:
      'Uso design e AI para transformar problemas complexos de produto em decisões claras e rápidas.',
    cases: 'Cases',
    ctaText:
      'tô disponível para novas parcerias, mentorias e consultoria estratégica, vamos conversar!',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
    menuLabel: 'Menu',
    careerPageTitle: 'Wes Marçal — Carreira',
    careerMetaDescription:
      'Trajetória profissional de Wes Marçal — Designer especialista · Designer engineer',
    careerEyebrow: 'Trajetória',
    careerHeadlineBefore: '10+ anos conectando design, estratégia e execução em produtos de escala',
    careerHeadlineAfter: 'de UX Designer a Staff Designer.',
    careerTimelineLabel: 'Trajetória profissional',
    casesPageTitle: 'Wes Marçal — Cases',
    casesMetaDescription:
      'Cases selecionados de Wes Marçal — sob confidencialidade; peça acesso por e-mail',
    casesEyebrow: 'melhores trabalhos',
    casesHeadline:
      'Transformo ideias ambiciosas em produtos que as pessoas gostam de usar e negócios lucram.',
    casesGridLabel: 'Prévia dos cases',
    casesUnlockedHref: '/cases/ifood',
    casesUnlockedLabel: 'Abrir case iFood',
    casesLockedLabel: 'Case privado',
    caseIfoodPageTitle: 'Wes Marçal — Case iFood',
    caseIfoodMetaDescription:
      'Diagnóstico e visão de design para parceiros via API no iFood: de operação reativa para proativa.',
    caseIfoodHeadline: 'De reativa para proativa: a operação de parceiros via API no iFood',
    caseBackLabel: 'Voltar para cases',
    caseVideoBannerLabel: 'Vídeo do case',
    caseVideoPlaceholder: 'Vídeo em breve',
  },
  en: {
    pageTitle: 'Wes Marçal — Home',
    metaDescription: "Wes Marçal's portfolio — Senior product designer · Design engineer",
    navPrimary: 'Main',
    navHome: 'home',
    navCareer: 'career',
    navCareerHref: '/en/career',
    navCases: 'cases',
    navCasesHref: '/en/cases',
    langLabel: 'Language',
    hero: 'Introduction',
    avatarAlt: 'Portrait of Wes Marçal',
    wordmarkAlt: 'wes marçal',
    eyebrow: 'Senior product designer • Design engineer',
    headline: 'I use design and AI to turn complex product problems into clear, fast decisions.',
    cases: 'Case studies',
    ctaText: "I'm available for new partnerships, mentoring and strategic consulting — let's talk!",
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    menuLabel: 'Menu',
    careerPageTitle: 'Wes Marçal — Career',
    careerMetaDescription: "Wes Marçal's professional journey — Senior product designer · Design engineer",
    careerEyebrow: 'Career path',
    careerHeadlineBefore: '10+ years connecting design, strategy and execution in products at scale',
    careerHeadlineAfter: 'from UX Designer to Staff Designer.',
    careerTimelineLabel: 'Professional journey',
    casesPageTitle: 'Wes Marçal — Cases',
    casesMetaDescription:
      "Wes Marçal's selected case studies — confidential; request access by email",
    casesEyebrow: 'best work',
    casesHeadline:
      'I turn ambitious ideas into products people love to use — and businesses that profit.',
    casesGridLabel: 'Case previews',
    casesUnlockedHref: '/en/cases/ifood',
    casesUnlockedLabel: 'Open iFood case',
    casesLockedLabel: 'Private case',
    caseIfoodPageTitle: 'Wes Marçal — iFood Case',
    caseIfoodMetaDescription:
      "Diagnosis and design vision for iFood's API partners: from reactive to proactive operations.",
    caseIfoodHeadline: "From reactive to proactive: iFood's API partner operations",
    caseBackLabel: 'Back to cases',
    caseVideoBannerLabel: 'Case video',
    caseVideoPlaceholder: 'Video coming soon',
  },
} satisfies Record<Locale, Record<string, string>>;

export function t(locale: Locale) {
  return strings[locale];
}

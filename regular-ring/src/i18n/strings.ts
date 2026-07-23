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
      'Cases selecionados de Wes Marçal — acesso sob confidencialidade',
    casesEyebrow: 'melhores trabalhos',
    casesHeadline:
      'Transformo ideias ambiciosas em produtos que as pessoas gostam de usar e negócios lucram.',
    casesCardTitle: 'Por ora, os cases estão omitidos por questão de confidencialidade.',
    casesCardBody: 'Para ter acesso, entre em contato.',
    casesPasswordLabel: 'Senha de acesso',
    casesPasswordPlaceholder: 'Digite a senha',
    casesSubmitLabel: 'Visualizar cases',
    casesContactEmail: 'wes.marcal@gmail.com',
    casesGridLabel: 'Prévia dos cases (conteúdo privado)',
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
      "Wes Marçal's selected case studies — access under confidentiality",
    casesEyebrow: 'best work',
    casesHeadline:
      'I turn ambitious ideas into products people love to use — and businesses that profit.',
    casesCardTitle: 'For now, the cases are omitted for confidentiality.',
    casesCardBody: 'To get access, get in touch.',
    casesPasswordLabel: 'Access password',
    casesPasswordPlaceholder: 'Enter password',
    casesSubmitLabel: 'View cases',
    casesContactEmail: 'wes.marcal@gmail.com',
    casesGridLabel: 'Case previews (private content)',
  },
} satisfies Record<Locale, Record<string, string>>;

export function t(locale: Locale) {
  return strings[locale];
}

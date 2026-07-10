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
  },
  en: {
    pageTitle: 'Wes Marçal — Home',
    metaDescription: "Wes Marçal's portfolio — Senior product designer · Design engineer",
    navPrimary: 'Main',
    navHome: 'home',
    navCareer: 'career',
    navCareerHref: '/en/career',
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
  },
} satisfies Record<Locale, Record<string, string>>;

export function t(locale: Locale) {
  return strings[locale];
}

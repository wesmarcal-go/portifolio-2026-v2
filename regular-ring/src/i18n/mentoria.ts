export type Recipient = 'pd-jr' | 'pd-pleno' | 'sd-jr' | 'sd-pleno';

export const defaultRecipient: Recipient = 'pd-jr';

interface RecipientCopy {
  id: Recipient;
  chipLabel: string;
  greeting: string;
  hook: string;
}

interface FixedMovement {
  id: string;
  marginLabel: string;
  body: string[];
}

interface VariantMovement {
  id: string;
  marginLabel: string;
  variants: Record<Recipient, string[]>;
}

export const meta = {
  pageTitle: 'Wes Marçal — Mentoria para product & service designers',
  metaDescription:
    'Mentoria 1:1 com Wes Marçal, Staff Designer, para product designers e service designers júnior e pleno que querem dar o próximo passo com clareza.',
};

export const letterhead = {
  fromLabel: 'DE:',
  fromName: 'Wes Marçal',
  fromRole: 'Staff Designer',
  fromCompanies: ['iFood', 'Zé Delivery', 'Grupo Globo', 'Conta Simples', 'Accenture'],
  toLabel: 'PARA:',
  jumpToReply: '↓ ir direto pra resposta',
};

export const recipients: RecipientCopy[] = [
  {
    id: 'pd-jr',
    chipLabel: 'product design jr',
    greeting: 'Pra quem tá começando em product design e sente que falta um chão.',
    hook:
      'Você não tá travado por falta de talento. Tá travado porque ninguém te mostrou como um problema de produto vira uma decisão de design.',
  },
  {
    id: 'pd-pleno',
    chipLabel: 'product design pleno',
    greeting: 'Pra quem já entrega sozinho, mas ainda não sabe o que separa isso de ser sênior.',
    hook:
      'Você já sabe fazer. O que ainda não apareceu com clareza é o motivo por trás de cada escolha — e é esse motivo que separa pleno de sênior.',
  },
  {
    id: 'sd-jr',
    chipLabel: 'service design jr',
    greeting: 'Pra quem tá entrando em service design e não sabe por onde o problema começa.',
    hook:
      'Você aprendeu a mapear jornada. O que ainda não aprendeu é a decidir o que fazer com o que o mapa mostrou.',
  },
  {
    id: 'sd-pleno',
    chipLabel: 'service design pleno',
    greeting: 'Pra quem já desenha o serviço inteiro, mas trabalha sozinho, sem alguém pra puxar o próximo degrau.',
    hook:
      'Você já desenha o serviço de ponta a ponta. O que falta é alguém que já fez isso em escala pra revisar onde o seu raciocínio ainda é frágil.',
  },
];

export const movements: (FixedMovement | VariantMovement)[] = [
  {
    id: 'o-que-eu-vejo',
    marginLabel: '01 — O QUE EU VEJO',
    variants: {
      'pd-jr': [
        'Vejo o mesmo padrão em quase todo designer júnior que passa por mim: domina a ferramenta, entende de heurística, monta um Figma bonito — e trava na hora de defender por que aquela tela é a certa. Não é falta de talento, é falta de repertório de decisão.',
        'A entrevista de emprego pede portfólio. O trabalho pede argumento. Ninguém te ensinou a diferença, e é aí que a insegurança mora.',
      ],
      'pd-pleno': [
        'Vejo o mesmo teto em quase todo pleno: entrega bem, conduz um projeto sozinho, mas quando alguém pergunta "por que essa direção e não outra", a resposta ainda soa como opinião, não como raciocínio.',
        'Sênior não é fazer mais. É saber, antes de desenhar, qual pergunta o negócio realmente precisa que o design responda. Isso não se aprende sozinho — se aprende revisando decisão com alguém que já errou nelas.',
      ],
      'sd-jr': [
        'Vejo júnior de service design que sabe fazer blueprint bonito, mas fica perdido quando o mapa aponta cinco problemas ao mesmo tempo e alguém pergunta "e agora, por onde a gente começa?".',
        'O mapa é ferramenta, não resposta. O que falta é o critério pra escolher onde intervir primeiro — e isso vem de ter feito essa escolha errada algumas vezes, com alguém do lado pra te mostrar onde o raciocínio quebrou.',
      ],
      'sd-pleno': [
        'Vejo pleno de service design isolado — geralmente o único da função no time, sem ninguém sênior pra revisar se a leitura do serviço tá certa antes de apresentar pro negócio.',
        'Esse isolamento custa caro: sem contraponto, é fácil confundir "o serviço que eu mapeei" com "o serviço que meu viés de designer queria enxergar". É esse ponto cego que eu ajudo a fechar.',
      ],
    },
  },
  {
    id: 'o-que-eu-fiz',
    marginLabel: '02 — O QUE EU FIZ',
    body: [
      'Dez anos fazendo essa transição na prática, não na teoria: comecei como UX Designer e virei Staff Designer passando por iFood, Zé Delivery, Grupo Globo, Conta Simples e Accenture.',
      'No iFood, peguei uma operação de parceiros via API que vivia apagando incêndio e ajudei a levar ela do reativo pro proativo — o tipo de virada que só acontece quando alguém para de desenhar tela e começa a desenhar decisão. É esse degrau, especificamente, que eu ensino: não fazer mais bonito, fazer o argumento certo, na hora certa, pra pessoa certa.',
    ],
  },
  {
    id: 'como-a-gente-trabalha',
    marginLabel: '03 — COMO A GENTE TRABALHA',
    variants: {
      'pd-jr': [
        'Sessões 1:1, quinzenais, sobre o que você tá vivendo agora — não um curso genérico. Você traz um problema real do seu trabalho ou do seu processo seletivo, a gente desmonta junto: o que a tela resolve, o que ela ainda esconde, e como você defenderia isso numa sala.',
        'Entre sessões, você aplica. Na próxima, a gente revisa o que travou. É repetição com feedback específico — o jeito que decisão vira reflexo.',
      ],
      'pd-pleno': [
        'Sessões 1:1, quinzenais, focadas em decisão, não em execução. Você já sabe fazer a tela; a gente trabalha o antes e o depois dela — como você chega na direção certa e como você a defende pra stakeholder que não pensa em design.',
        'Trago casos reais da minha trajetória (inclusive o do iFood) como referência de raciocínio, nunca como modelo pra copiar. O objetivo é você desenvolver seu próprio critério, mais rápido do que sozinho.',
      ],
      'sd-jr': [
        'Sessões 1:1, quinzenais, ancoradas nos problemas que você tá mapeando agora. A gente pega seu blueprint e testa: esse mapa aponta pra uma decisão, ou só descreve o que já existe?',
        'O objetivo não é te ensinar mais ferramenta de service design — é te ensinar a sair do mapa com uma recomendação que alguém do negócio consiga aprovar.',
      ],
      'sd-pleno': [
        'Sessões 1:1, quinzenais, no formato de revisão de par sênior — o contraponto que falta quando você é o único service designer no time. Você traz a leitura do serviço, eu questiono onde ela pode estar enviesada.',
        'Também entra estratégia de carreira: como comunicar impacto de service design pra lideranças que só enxergam produto. É isso que costuma travar o próximo degrau.',
      ],
    },
  },
  {
    id: 'o-que-voce-leva',
    marginLabel: '04 — O QUE VOCÊ LEVA',
    variants: {
      'pd-jr': [
        'Um jeito de olhar pra qualquer tela e responder "por quê" antes de "como". Isso muda entrevista, muda review, muda a forma como você se apresenta como designer — de alguém que executa pra alguém que decide.',
      ],
      'pd-pleno': [
        'Clareza sobre o que especificamente falta pra virar sênior no seu contexto — não uma lista genérica de skills, mas o gap real, nomeado, com plano pra fechar.',
      ],
      'sd-jr': [
        'A capacidade de sair de um mapa de jornada com uma recomendação defensável, não só um diagnóstico bonito. É essa virada que separa quem faz workshop de quem influencia decisão.',
      ],
      'sd-pleno': [
        'Um par sênior pra revisar sua leitura do serviço antes dela virar recomendação — e um vocabulário pra comunicar isso pra quem decide orçamento e prioridade.',
      ],
    },
  },
  {
    id: 'o-que-isso-nao-e',
    marginLabel: '05 — O QUE ISSO NÃO É',
    body: [
      'Não é curso gravado, não é review de portfólio avulsa, não é atalho pra título de sênior sem o trabalho por trás. Não prometo vaga, não prometo salário — prometo repertório de decisão, e isso leva sessões, não uma conversa.',
      'Se o que você procura é alguém que só valide o que você já pensa, não sou eu. Eu questiono. Se isso serve pra você, segue pro P.S.',
    ],
  },
];

export const signature = {
  closing: 'Um abraço,',
  name: 'Wes Marçal',
  role: 'Staff Designer',
  linkedinLabel: 'LinkedIn',
  portfolioLabel: 'portfólio',
  emailLabel: 'e-mail',
};

export const reply = {
  eyebrow: 'P.S.',
  heading: 'me conta onde você trava hoje',
  body: 'Sem formulário de vinte campos. Me conta quem você é e onde dói — eu respondo pessoalmente, por e-mail, com os próximos passos.',
  fields: {
    name: { label: 'nome', placeholder: 'seu nome' },
    email: { label: 'e-mail', placeholder: 'seu@email.com' },
    track: { label: 'trilha' },
    context: {
      label: 'onde você trava hoje',
      placeholder: 'em uma ou duas frases — o que te fez abrir essa página?',
    },
    honeypot: { label: 'empresa' },
  },
  submitLabel: 'responder',
  submitLabelPending: 'enviando…',
  success: {
    heading: 'recebido.',
    body: 'Vou ler com calma e te respondo por e-mail em até 2 dias úteis — com os próximos passos, não com um pitch.',
  },
  error: {
    heading: 'não consegui enviar por aqui.',
    body: 'Sem problema — me manda direto, o e-mail já vem com o que você escreveu:',
    mailLinkLabel: 'abrir e-mail preenchido',
  },
  validation: {
    nameRequired: 'me diz seu nome',
    emailRequired: 'preciso de um e-mail pra te responder',
    emailInvalid: 'esse e-mail não parece completo',
    contextRequired: 'conta rapidinho onde você trava — é o que eu leio primeiro',
  },
};

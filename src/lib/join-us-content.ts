import type { Locale } from '../i18n/ui';

export type JoinFaqItem = { question: string; answer: string };

export type JoinUsContent = {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  ctaTry: string;
  ctaContact: string;
  ctaAllRehearsals: string;
  ctaEventDetail: string;
  forWhoTitle: string;
  forWhoBody: string;
  whenWhereTitle: string;
  whenWhereIntro: string;
  noRehearsalMsg: string;
  nextRehearsalLabel: string;
  bringTitle: string;
  bringBody: string;
  faqTitle: string;
  faqs: JoinFaqItem[];
  closingTitle: string;
  closingBody: string;
  closingInstagram: string;
  heroImageAlt: string;
  sideImageAlt: string;
};

const content: Record<Locale, JoinUsContent> = {
  va: {
    metaTitle: "Uneix-te a la Muixeranga d'Elx – Vine a provar, sense experiència",
    metaDescription:
      "Vols formar part de la colla? Vine a un assaig obert a Elx: no cal experiència, només ganes de participar. Consulta el pròxim assaig i contacta'ns.",
    heroTitle: "T'agradaria formar part de la Muixeranga d'Elx?",
    heroSubtitle:
      'Conéixer gent nova, compartir bons moments i formar part d’una tradició viva. T’esperem amb els braços oberts.',
    ctaTry: 'Vine a provar',
    ctaContact: 'Vull apuntar-me',
    ctaAllRehearsals: 'Veure tots els assajos',
    ctaEventDetail: 'Veure fitxa de l’esdeveniment',
    forWhoTitle: 'Per a qui és?',
    forWhoBody:
      'No cal experiència ni estar en forma: pots començar des de zero. Ací cap gent de totes les edats i condicions, i el que de veritat importa són les ganes de participar, aprendre i passar-ho bé. Cada persona hi té el seu lloc, perquè cada figura, siga alta o complexa, només s’alça quan tots fem pinya.',
    whenWhereTitle: 'Quan i on assagem?',
    whenWhereIntro:
      'Els dies i hores d’assaig canvien segons la setmana. Consulta sempre el calendari o el pròxim assaig publicat:',
    noRehearsalMsg:
      'Ara mateix no tenim cap assaig publicat al calendari. Escriu-nos i et direm quan és el pròxim.',
    nextRehearsalLabel: 'Pròxim assaig',
    bringTitle: 'Què has de portar?',
    bringBody:
      'Només una camisa i, si pots, uns pantalons texans (vaqueros). Res més. Millor camisa que samarreta: la part de dalt no ha de ser elàstica.',
    faqTitle: 'Preguntes freqüents',
    faqs: [
      {
        question: 'Necessite experiència o estar en forma?',
        answer:
          'No es requereix cap experiència ni estar en forma. Sempre cal gent en posicions diferents, així que ven i junts veiem on encaixes millor.',
      },
      {
        question: 'Quina roba porto?',
        answer:
          'Una camisa i texans. Samarreta no, perquè necessitem que la peça superior no siga elàstica.',
      },
      {
        question: 'Poden vindre xiquets i xiquetes?',
        answer:
          'Clar que sí! Xiquets i xiquetes són més que benvinguts: són part fonamental de la colla, i tenim exercicis i espais específics per a ells. A més, les pràctiques es fan en un entorn segur.',
      },
      {
        question: 'Té algun cost?',
        answer:
          'Provar és totalment gratuït. Si més endavant vols unir-te, el primer any l’únic gasto és comprar la indumentària; a partir del segon any la quota és de 20 € l’any.',
      },
      {
        question: 'He d’avisar abans de vindre?',
        answer:
          'Si és possible, sí: t’hem de donar accés a les instal·lacions i planificar l’assaig. Si no pots avisar i l’assaig és al carrer, acosta’t i ho veiem.',
      },
    ],
    closingTitle: 'Anima’t i contacta amb nosaltres!',
    closingBody:
      'Estarem encantats de resoldre els teus dubtes i explicar-te com pots formar part de la nostra colla. Perquè juntes i junts fem pinya, fem cultura i fem poble.',
    closingInstagram: 'Segueix-nos a Instagram',
    heroImageAlt: 'Assaig de la Muixeranga d’Elx en un espai interior',
    sideImageAlt:
      'Assaig de la Muixeranga d’Elx en un pavelló: persones de diferents edats formen una torre humana amb un xiquet a dalt i adults sostenint la pinya a la base',
  },
  es: {
    metaTitle: "Únete a la Muixeranga d'Elx – Ven a probar, sin experiencia",
    metaDescription:
      '¿Te apetece formar parte de la colla en Elche? Ven a un ensayo abierto: no hace falta experiencia, solo ganas de participar. Mira el próximo ensayo y escríbenos.',
    heroTitle: '¿Te gustaría formar parte de la Muixeranga d\'Elx?',
    heroSubtitle:
      'Conocer gente nueva, compartir buenos momentos y sumarte a una tradición viva. Aquí te esperamos.',
    ctaTry: 'Ven a probar',
    ctaContact: 'Quiero apuntarme',
    ctaAllRehearsals: 'Ver todos los ensayos',
    ctaEventDetail: 'Ver ficha del evento',
    forWhoTitle: '¿Para quién es?',
    forWhoBody:
      'No hace falta experiencia: puedes empezar desde cero. Lo importante son las ganas de participar, aprender y disfrutar juntas y juntos. Hay sitio para personas de todas las edades y condiciones. En la colla (el grupo de la muixeranga, la tradición de torres humanas valenciana) nos importa la pinya —fer pinya es sostener la figura juntos, hombro con hombro— y el buen rollo más que la estatura o la forma física.',
    whenWhereTitle: '¿Cuándo y dónde ensayamos?',
    whenWhereIntro:
      'Los días y horas de ensayo cambian según la semana. Lo más fiable es mirar el calendario o el próximo ensayo publicado:',
    noRehearsalMsg:
      'Ahora mismo no hay ningún ensayo publicado en el calendario. Escríbenos y te decimos cuándo es el próximo.',
    nextRehearsalLabel: 'Próximo ensayo',
    bringTitle: '¿Qué traer?',
    bringBody:
      'Solo una camisa y, si puedes, un pantalón vaquero. Nada más. Mejor camisa que camiseta: la prenda de arriba no debe ser elástica.',
    faqTitle: 'Preguntas frecuentes',
    faqs: [
      {
        question: '¿Necesito experiencia o estar en forma?',
        answer:
          'No se requiere ninguna experiencia ni estar en forma. Siempre se necesita gente en distintas posiciones, así que ven y juntos vemos dónde encajas mejor.',
      },
      {
        question: '¿Qué ropa llevo?',
        answer:
          'Una camisa y vaqueros. Camiseta no, ya que necesitamos que tu prenda superior no sea elástica.',
      },
      {
        question: '¿Pueden venir niños y niñas?',
        answer:
          '¡Claro que sí! Niños y niñas son más que bienvenidos: son parte fundamental de la colla, y tenemos ejercicios y espacios específicos para ellos. Además, las prácticas se realizan en un entorno seguro.',
      },
      {
        question: '¿Tiene algún coste?',
        answer:
          'Probar es totalmente gratuito. Si más adelante quieres unirte, el primer año el único gasto es comprar la indumentaria; a partir del segundo año la cuota es de 20 € al año.',
      },
      {
        question: '¿Tengo que avisar antes de venir?',
        answer:
          'Si es posible, sí: tenemos que darte acceso a las instalaciones y planificar el ensayo. Si no puedes avisar y el ensayo es en la calle, acércate y lo vemos.',
      },
    ],
    closingTitle: '¡Anímate y escríbenos!',
    closingBody:
      'Estaremos encantados de resolver tus dudas y explicarte cómo puedes formar parte de nuestra colla. Porque juntas y juntos hacemos pinya, cultura y pueblo.',
    closingInstagram: 'Síguenos en Instagram',
    heroImageAlt: 'Ensayo de la Muixeranga d\'Elx en un espacio cubierto',
    sideImageAlt:
      'Ensayo de la Muixeranga d\'Elx en un pabellón: personas de distintas edades forman una torre humana con un niño arriba y adultos sosteniendo la pinya en la base',
  },
  en: {
    metaTitle: "Join Muixeranga d'Elx – Come and try, no experience needed",
    metaDescription:
      'Want to join the colla in Elx (Elche)? Come to an open rehearsal: no experience required, just willingness to take part. See the next rehearsal and get in touch.',
    heroTitle: "Would you like to be part of Muixeranga d'Elx?",
    heroSubtitle:
      'Meet new people, share good moments and join a living tradition. We are waiting for you with open arms.',
    ctaTry: 'Come and try',
    ctaContact: 'I want to sign up',
    ctaAllRehearsals: 'See all rehearsals',
    ctaEventDetail: 'View event details',
    forWhoTitle: 'Who is it for?',
    forWhoBody:
      'No experience is needed — you can start from scratch. What matters is wanting to take part, learn and enjoy together. There is room for people of all ages and backgrounds. In the colla (the muixeranga group — the Valencian human-tower tradition) we care about the pinya (the base of people standing shoulder to shoulder to support the figure) and the team spirit more than height or fitness.',
    whenWhereTitle: 'When and where do we rehearse?',
    whenWhereIntro:
      'Rehearsal days and times change from week to week. Check the calendar or the next published rehearsal:',
    noRehearsalMsg:
      'There is no rehearsal published on the calendar right now. Message us and we will tell you when the next one is.',
    nextRehearsalLabel: 'Next rehearsal',
    bringTitle: 'What to bring',
    bringBody:
      'Just a shirt and, if you can, jeans. Nothing else. A shirt works better than a T-shirt: your top layer should not be stretchy.',
    faqTitle: 'Frequently asked questions',
    faqs: [
      {
        question: 'Do I need experience or to be fit?',
        answer:
          'No experience or special fitness is required. We always need people in different positions, so come along and together we will see where you fit best.',
      },
      {
        question: 'What should I wear?',
        answer:
          'A shirt and jeans. Not a T-shirt — we need your upper garment to be non-stretchy.',
      },
      {
        question: 'Can children come?',
        answer:
          'Absolutely! Children are more than welcome — they are a vital part of the colla, and we have exercises and spaces just for them. Rehearsals take place in a safe environment.',
      },
      {
        question: 'Is there a cost?',
        answer:
          'Trying it out is completely free. If you later decide to join, the only cost in your first year is buying the costume; from the second year onwards the membership fee is €20 per year.',
      },
      {
        question: 'Do I need to let you know before coming?',
        answer:
          'If you can, yes — we need to grant access to the venue and plan the rehearsal. If you cannot notify us and the rehearsal is in the street, just come over and we will figure it out.',
      },
    ],
    closingTitle: 'Take the step and contact us!',
    closingBody:
      'We will be happy to answer your questions and explain how you can become part of our colla. Together we build pinya, culture and community.',
    closingInstagram: 'Follow us on Instagram',
    heroImageAlt: 'Muixeranga d\'Elx rehearsal indoors',
    sideImageAlt:
      'Muixeranga d\'Elx rehearsal in a sports hall: people of different ages building a human tower with a child at the top and adults supporting the pinya at the base',
  },
};

export function getJoinUsContent(locale: Locale): JoinUsContent {
  return content[locale] ?? content.va;
}

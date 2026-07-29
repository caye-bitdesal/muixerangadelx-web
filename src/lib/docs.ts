export type DocType = 'protocols' | 'guies' | 'assegurances' | 'altres';

export type DocItem = {
  id: string;
  title: string;
  description: string;
  issuer: string;
  date: string;
  type: DocType;
  thumbnail: string;
};

export const placeholderDocs: DocItem[] = [
  {
    id: '1',
    title: "Protocol d'actuació en pors i caigudes",
    description: "Muixeranga d'Elx",
    issuer: "Muixeranga d'Elx",
    date: '2025-01-12',
    type: 'protocols',
    thumbnail: '/images/placeholders/doc.svg',
  },
  {
    id: '2',
    title: 'Guia de bones pràctiques',
    description: 'Federació Coordinadora de Muixerangues (FCM)',
    issuer: 'FCM',
    date: '2024-11-03',
    type: 'guies',
    thumbnail: '/images/placeholders/doc.svg',
  },
  {
    id: '3',
    title: "Protocol d'actuació contra agressions sexistes",
    description: "Muixeranga d'Elx",
    issuer: "Muixeranga d'Elx",
    date: '2024-09-20',
    type: 'protocols',
    thumbnail: '/images/placeholders/doc.svg',
  },
  {
    id: '4',
    title: "Declaració assegurança d'accidents",
    description: "Muixeranga d'Elx",
    issuer: "Muixeranga d'Elx",
    date: '2025-03-01',
    type: 'assegurances',
    thumbnail: '/images/placeholders/doc.svg',
  },
  {
    id: '5',
    title: 'Manual de figures bàsiques',
    description: "Muixeranga d'Elx",
    issuer: "Muixeranga d'Elx",
    date: '2024-06-15',
    type: 'guies',
    thumbnail: '/images/placeholders/doc.svg',
  },
  {
    id: '6',
    title: 'Normativa interna de la colla',
    description: "Muixeranga d'Elx",
    issuer: "Muixeranga d'Elx",
    date: '2023-12-01',
    type: 'altres',
    thumbnail: '/images/placeholders/doc.svg',
  },
  {
    id: '7',
    title: 'Protocol de protecció de menors',
    description: "Muixeranga d'Elx",
    issuer: "Muixeranga d'Elx",
    date: '2025-02-10',
    type: 'protocols',
    thumbnail: '/images/placeholders/doc.svg',
  },
  {
    id: '8',
    title: "Guia d'assajos oberts",
    description: "Muixeranga d'Elx",
    issuer: "Muixeranga d'Elx",
    date: '2024-05-22',
    type: 'guies',
    thumbnail: '/images/placeholders/doc.svg',
  },
  {
    id: '9',
    title: 'Pòlissa de responsabilitat civil',
    description: "Muixeranga d'Elx",
    issuer: "Muixeranga d'Elx",
    date: '2025-01-01',
    type: 'assegurances',
    thumbnail: '/images/placeholders/doc.svg',
  },
  {
    id: '10',
    title: 'Dossier de presentació',
    description: "Muixeranga d'Elx",
    issuer: "Muixeranga d'Elx",
    date: '2024-04-08',
    type: 'altres',
    thumbnail: '/images/placeholders/doc.svg',
  },
  {
    id: '11',
    title: 'Protocol meteorològic',
    description: 'FCM',
    issuer: 'FCM',
    date: '2023-08-14',
    type: 'protocols',
    thumbnail: '/images/placeholders/doc.svg',
  },
  {
    id: '12',
    title: 'Guia de vestuari',
    description: "Muixeranga d'Elx",
    issuer: "Muixeranga d'Elx",
    date: '2024-02-28',
    type: 'guies',
    thumbnail: '/images/placeholders/doc.svg',
  },
  {
    id: '13',
    title: 'Fitxa de socis i sòcies',
    description: "Muixeranga d'Elx",
    issuer: "Muixeranga d'Elx",
    date: '2025-04-01',
    type: 'altres',
    thumbnail: '/images/placeholders/doc.svg',
  },
];

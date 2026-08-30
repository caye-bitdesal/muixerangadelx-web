export type DocType = 'manuales' | 'entrevistas';

export type DocItem = {
  id: string;
  title: string;
  description: string;
  issuer: string;
  date: string;
  type: DocType;
  thumbnail: string;
  file: string;
};

export const docs: DocItem[] = [
  {
    id: 'vocabulari-visual-avl',
    title: 'Vocabulari visual de la muixeranga (AVL)',
    description: "Amunt al cel — Muixeranga d'Elx a la pàg. 24, amb la figura Palmera",
    issuer: 'Acadèmia Valenciana de la Llengua',
    date: '2026-01-05',
    type: 'manuales',
    thumbnail: '/images/documents/vocabulari-visual-muixeranga-avl.jpg',
    file: '/documents/vocabulari-visual-muixeranga-avl.pdf',
  },
  {
    id: 'aqui-entrevista-muixeranga-elx-2025',
    title: "AQUÍ entrevista la Muixeranga d'Elx",
    description: '«Muixeranga es equilibrio, hermandad y respeto a nuestra cultura» — Joan Andreu, mestre i secretari',
    issuer: 'AQUÍ',
    date: '2025-11-01',
    type: 'entrevistas',
    thumbnail: '/images/documents/aqui-entrevista-muixeranga-elx-2025.jpg',
    file: '/documents/aqui-entrevista-muixeranga-elx-2025.pdf',
  },
  {
    id: 'levante-muixeranga-elx-entrevista',
    title: "La Muixeranga d'Elx pot aportar una riquesa cultural i lingüística importantíssima a la ciutat",
    description: 'Entrevista a Àlex Agulló, president de la Muixeranga d\'Elx',
    issuer: 'Levante - El mercantil valencià',
    date: '2022-12-23',
    type: 'entrevistas',
    thumbnail: '/images/documents/levante-muixeranga-elx-entrevista.jpg',
    file: '/documents/levante-muixeranga-elx-entrevista.pdf',
  },
];

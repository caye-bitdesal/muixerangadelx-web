import type { Locale } from '../i18n/ui';

export const HISTORIA_ELX_IMAGE = '/images/historia/muixeranga-elx-placa.jpg';

/** Hero (autoplay silenciat): https://www.youtube.com/watch?v=f4wZ26RoBUk */
export const HISTORIA_HERO_YOUTUBE_ID = 'f4wZ26RoBUk';

/** Vídeo després del bloc d’Algemesí: https://www.youtube.com/watch?v=Wf9i8J1sdeM */
export const HISTORIA_ALGEMESI_YOUTUBE_URL = 'https://www.youtube.com/watch?v=Wf9i8J1sdeM';

export type HistoriaSection = {
  heading: string;
  paragraphs: string[];
  /** Standard YouTube embed (with controls) after this section. */
  embedYoutube?: boolean;
};

export type HistoriaContent = {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImageAlt: string;
  algemesiYoutubeTitle: string;
  intro: string;
  sections: HistoriaSection[];
  closing: string;
};

const content: Record<Locale, HistoriaContent> = {
  va: {
    metaTitle: "La nostra història | Muixeranga d'Elx",
    metaDescription:
      "Origen de la muixeranga a la Corona d'Aragó, el seu significat, Algemesí, la recuperació recent i la història de la Muixeranga d'Elx des de 2022.",
    heroTitle: 'La nostra història',
    heroSubtitle: 'Una dansa que ve de lluny',
    heroImageAlt:
      'Actuació de la Muixeranga d’Elx a la plaça, amb la colla en indumentària roja i blava alçant figures davant la basílica de Santa Maria',
    algemesiYoutubeTitle: 'Vídeo sobre la muixeranga i Algemesí',
    intro:
      'La muixeranga naix d’una antiga dansa que es ballava en bona part de la Corona d’Aragó. Ja a principis del segle XVI es parla de les «boixigangues» a la ciutat de València, i a Algemesí està documentada almenys des del segle XVIII. Amb el temps va rebre molts noms: muixeranga, moixiganga, ball de negrets o de locos. Moltes de les poblacions que la ballaven la van perdre, però en uns pocs pobles valencians va sobreviure, i en cada un va prendre un caràcter propi.',
    sections: [
      {
        heading: 'Què és una muixeranga?',
        paragraphs: [
          'La paraula té tres significats: la torre humana, la colla que la fa i la tradició sencera. Una actuació no és només pujar alt. Hi ha els balls, que combinen moviment i quadres plàstics, i les figures, construccions on el que compta és l’equilibri, l’harmonia i la bellesa tant com l’altura. Al costat de les torres de diversos pisos hi ha figures horitzontals, amb moviment o amb remats que no tenen equivalent en cap altra tradició. Tot sosté sobre la pinya: desenes de persones que, des de baix, fan possible que la figura s’alce.',
          'I res d’això s’entén sense la música. La dolçaina i el tabal toquen la melodia de la Muixeranga d’Algemesí, que acompanya cada construcció i que molts valencians reconeixen com un símbol del seu poble. La indumentària tradicional, de tela de ratlles amb la faixa ben cenyida, completa una estampa inconfusible.',
          'A diferència dels castells catalans, que en són parents pròxims, la muixeranga no competeix: és festa, ofrena i comunitat.',
        ],
      },
      {
        heading: 'Algemesí, el cor que mai va deixar de bategar',
        embedYoutube: true,
        paragraphs: [
          'Durant segles, la muixeranga va resistir sobretot a Algemesí, lligada a les Festes de la Mare de Déu de la Salut del 7 i 8 de setembre. Va passar moments difícils, i en algun any dels setanta ni tan sols va eixir a la processó. Tot i així, la tradició va aguantar, i el 28 de novembre de 2011 la UNESCO va declarar la Festa de la Salut Patrimoni Cultural Immaterial de la Humanitat, amb la muixeranga com un dels seus actes més emblemàtics. El 1997 havia nascut la Nova Muixeranga d’Algemesí, la primera a incorporar les dones a les figures.',
        ],
      },
      {
        heading: 'L’esclat: de tradició local a patrimoni de tot un poble',
        paragraphs: [
          'Als anys noranta van començar els primers intents de recuperar la muixeranga fora d’Algemesí. L’esclat de veritat, però, va arribar a la dècada de 2010. Castelló i Vinaròs el 2013, Alacant i València el 2014, i després moltes més, van formar colles noves que agafaven el repertori d’Algemesí com a punt de partida. La muixeranga es va convertir en una manera de viure la cultura valenciana al carrer, en valencià i amb gent de totes les edats. Avui la Federació Coordinadora de Muixerangues reuneix 25 colles d’arreu del territori.',
        ],
      },
      {
        heading: "La Muixeranga d'Elx",
        paragraphs: [
          'La nostra colla va nàixer el setembre de 2022 amb un objectiu clar: difondre la cultura, la llengua i les costums valencianes a través de la muixeranga. Hui som unes 50 persones de totes les edats, de bebés a jubilats. Ens reconeixereu per la nostra indumentària: camisa roja, pantalons blaus i faixa amb la senyera, en homenatge als colors de la bandera d’Elx.',
          'Som la muixeranga més al sud del País Valencià. Elx està a tocar del límit meridional del territori de parla valenciana, en una ciutat on el valencià conviu amb el castellà i on mantindre’l viu és una tasca de cada dia. Per això ens sentim primera línia: cada assaig, cada actuació i cada figura que alcem a plaça és una manera de dir que ací també es parla, es viu i es fa cultura en valencià. Som el referent de la muixeranga per a la ciutat d’Elx i per a les comarques del sud.',
        ],
      },
    ],
    closing: 'Perquè, com diem nosaltres, fem pinya com una tabala.',
  },
  es: {
    metaTitle: "Nuestra historia | Muixeranga d'Elx",
    metaDescription:
      'Origen de la muixeranga en la Corona de Aragón, qué es, el papel de Algemesí, la ola de recuperación y la historia de la Muixeranga d\'Elx desde 2022.',
    heroTitle: 'Nuestra historia',
    heroSubtitle: 'Una danza que viene de lejos',
    heroImageAlt:
      'Actuación de la Muixeranga d\'Elx en la plaza, con la colla con indumentaria roja y azul levantando figuras ante la basílica de Santa María',
    algemesiYoutubeTitle: 'Vídeo sobre la muixeranga y Algemesí',
    intro:
      'La muixeranga nace de una antigua danza que se bailaba en buena parte de la Corona de Aragón. Ya a principios del siglo XVI se habla de las «boixigangues» en la ciudad de Valencia, y en Algemesí está documentada al menos desde el siglo XVIII. Con el tiempo recibió muchos nombres: muixeranga, moixiganga, baile de negros o de locos. Muchos pueblos que la bailaban la perdieron, pero en unos pocos enclaves valencianos sobrevivió, y en cada uno tomó un carácter propio.',
    sections: [
      {
        heading: '¿Qué es una muixeranga?',
        paragraphs: [
          'La palabra tiene tres significados: la torre humana, la colla (el grupo que la levanta) y la tradición en conjunto. Una actuación no es solo subir alto. Están los bailes, que combinan movimiento y composiciones plásticas, y las figuras, construcciones en las que importan el equilibrio, la armonía y la belleza tanto como la altura. Junto a torres de varios pisos hay figuras horizontales, con movimiento o remates que no tienen equivalente en ninguna otra tradición. Todo se sostiene sobre la pinya: decenas de personas que, desde abajo, hacen posible que la figura se alce.',
          'Nada de esto se entiende sin la música. La dolçaina y el tabal (dulzaina y tambor) tocan la melodía de la Muixeranga d\'Algemesí, que acompaña cada construcción y que muchos valencianos reconocen como símbolo de su pueblo. La indumentaria tradicional, de tela a rayas con la faixa (faja) bien ceñida, completa una imagen inconfundible.',
          'A diferencia de los castells catalanes, parientes cercanos, la muixeranga no compite: es fiesta, ofrenda y comunidad.',
        ],
      },
      {
        heading: 'Algemesí, el corazón que nunca dejó de latir',
        embedYoutube: true,
        paragraphs: [
          'Durante siglos, la muixeranga resistió sobre todo en Algemesí, ligada a las Fiestas de la Mare de Déu de la Salut del 7 y 8 de septiembre. Pasó momentos difíciles, y en algún año de los setenta ni siquiera salió en la procesión. Aun así, la tradición aguantó, y el 28 de noviembre de 2011 la UNESCO declaró la Fiesta de la Salut Patrimonio Cultural Inmaterial de la Humanidad, con la muixeranga como uno de sus actos más emblemáticos. En 1997 había nacido la Nova Muixeranga d\'Algemesí, la primera en incorporar a las mujeres en las figuras.',
        ],
      },
      {
        heading: 'El despegue: de tradición local a patrimonio de un pueblo entero',
        paragraphs: [
          'En los años noventa empezaron los primeros intentos de recuperar la muixeranga fuera de Algemesí. El verdadero despegue llegó en la década de 2010. Castellón y Vinaròs en 2013, Alicante y Valencia en 2014, y después muchas más, formaron collas nuevas que tomaban el repertorio de Algemesí como punto de partida. La muixeranga se convirtió en una forma de vivir la cultura valenciana en la calle, en valenciano y con gente de todas las edades. Hoy la Federación Coordinadora de Muixerangues reúne a 25 collas de todo el territorio.',
        ],
      },
      {
        heading: "La Muixeranga d'Elx",
        paragraphs: [
          'Nuestra colla nació en septiembre de 2022 con un objetivo claro: difundir la cultura, la lengua y las costumbres valencianas a través de la muixeranga. Hoy somos unas 50 personas de todas las edades, de bebés a jubilados. Nos reconoceréis por nuestra indumentaria: camisa roja, pantalones azules y faixa con la senyera, en homenaje a los colores de la bandera de Elche.',
          'Somos la muixeranga más al sur del País Valenciano. Elche está al límite meridional del territorio de habla valenciana, en una ciudad donde el valenciano convive con el castellano y mantenerlo vivo es tarea de cada día. Por eso nos sentimos en primera línea: cada ensayo, cada actuación y cada figura que levantamos en la plaza es una manera de decir que aquí también se habla, se vive y se hace cultura en valenciano. Somos el referente de la muixeranga para la ciudad de Elche y para las comarcas del sur.',
        ],
      },
    ],
    closing: 'Porque, como decimos nosotros, hacemos piña como una tabala.',
  },
  en: {
    metaTitle: "Our history | Muixeranga d'Elx",
    metaDescription:
      'The origins of the muixeranga in the Crown of Aragon, what it means, Algemesí’s role, the recent revival, and Muixeranga d\'Elx since 2022.',
    heroTitle: 'Our history',
    heroSubtitle: 'A dance from long ago',
    heroImageAlt:
      'Muixeranga d\'Elx performance in the town square, the colla in red and blue costume building figures in front of the basilica of Santa Maria',
    algemesiYoutubeTitle: 'Video about the muixeranga and Algemesí',
    intro:
      'The muixeranga grew out of an ancient dance performed across much of the Crown of Aragon. As early as the beginning of the 16th century, «boixigangues» are mentioned in the city of Valencia, and in Algemesí the tradition is documented at least since the 18th century. Over time it was known by many names: muixeranga, moixiganga, ball de negrets or de locos. Many towns that once danced it lost the custom, but in a few Valencian communities it survived, each with its own character.',
    sections: [
      {
        heading: 'What is a muixeranga?',
        paragraphs: [
          'The word has three meanings: the human tower, the colla (the group that builds it), and the tradition as a whole. A performance is not only about going high. There are dances combining movement and visual tableaux, and figures — structures where balance, harmony and beauty matter as much as height. Alongside multi-level towers there are horizontal figures, with movement or finishes unlike anything else in comparable traditions. Everything rests on the pinya: dozens of people at the base who make it possible for the figure to rise.',
          'None of this works without music. The dolçaina and tabal play the melody of the Muixeranga d\'Algemesí, accompanying each build — a tune many Valencians recognise as a symbol of their people. Traditional costume, striped cloth and a tightly worn faixa (sash), completes an unmistakable picture.',
          'Unlike Catalan castells, close cousins, the muixeranga is not competitive: it is celebration, offering and community.',
        ],
      },
      {
        heading: 'Algemesí, the heart that never stopped beating',
        embedYoutube: true,
        paragraphs: [
          'For centuries the muixeranga endured above all in Algemesí, tied to the Festes de la Mare de Déu de la Salut on 7 and 8 September. It went through hard times; in one year in the seventies it did not even appear in the procession. Even so the tradition held on, and on 28 November 2011 UNESCO inscribed the Festa de la Salut as Intangible Cultural Heritage of Humanity, with the muixeranga among its most emblematic acts. In 1997 the Nova Muixeranga d\'Algemesí was founded — the first to include women in the figures.',
        ],
      },
      {
        heading: 'The surge: from local tradition to heritage for a whole people',
        paragraphs: [
          'In the nineties came the first attempts to revive the muixeranga outside Algemesí. The real surge arrived in the 2010s. Castelló and Vinaròs in 2013, Alacant and València in 2014, then many more towns formed new colles taking Algemesí’s repertoire as their starting point. The muixeranga became a way to live Valencian culture in the street, in the Valencian language and with people of all ages. Today the Federació Coordinadora de Muixerangues brings together 25 colles across the territory.',
        ],
      },
      {
        heading: "Muixeranga d'Elx",
        paragraphs: [
          'Our colla was founded in September 2022 with a clear aim: to spread Valencian culture, language and customs through the muixeranga. Today we are around 50 people of all ages, from babies to retirees. You will know us by our costume: red shirt, blue trousers and faixa with the senyera, honouring the colours of the flag of Elx (Elche).',
          'We are the southernmost muixeranga in the Valencian Country. Elx lies near the southern edge of the Valencian-speaking area, in a city where Valencian lives alongside Spanish and keeping the language alive is everyday work. That is why we see ourselves on the front line: every rehearsal, every performance and every figure we raise in the square says that here too people speak, live and make culture in Valencian. We are the muixeranga benchmark for the city of Elx and the southern regions.',
        ],
      },
    ],
    closing: 'Because, as we say, we stand together like a tabala — we make pinya.',
  },
};

export function getHistoriaContent(locale: Locale): HistoriaContent {
  return content[locale] ?? content.va;
}

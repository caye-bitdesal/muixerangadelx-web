import type { LegalPageData } from '../types';
import {
  LEGAL_EMAIL,
  LEGAL_ENTITY,
  LEGAL_LAST_UPDATED,
  LEGAL_WEBSITE,
} from '../site-info';

export const cookies: Record<'va' | 'es' | 'en', LegalPageData> = {
  va: {
    title: 'Ús de cookies',
    lastUpdated: LEGAL_LAST_UPDATED,
    sections: [
      {
        title: '1. Què són les cookies?',
        paragraphs: [
          "Les cookies són fitxers que es descarreguen al dispositiu de l'usuari en accedir a determinades pàgines web. Permeten emmagatzemar i recuperar informació sobre la navegació i, segons el cas, identificar l'usuari. També s'utilitzen tecnologies similars (píxels, emmagatzematge local, identificadors del dispositiu).",
        ],
      },
      {
        title: '2. Tipus de cookies utilitzades',
        paragraphs: [
          "En aquest lloc web s'utilitzen, o es poden utilitzar, les categories següents:",
          "• Cookies tècniques o necessàries: permeten el funcionament bàsic del lloc i la seguretat. No requereixen consentiment.",
          "• Cookies de preferències: recorden opcions de l'usuari (si s'implementen en el futur).",
          "• Cookies de tercers: alguns serveis integrats poden instal·lar cookies al dispositiu de l'usuari en accedir-hi o interactuar-hi.",
        ],
      },
      {
        title: '3. Cookies de tercers',
        paragraphs: [
          `${LEGAL_WEBSITE} pot incloure contingut o serveis de tercers que poden utilitzar cookies:`,
          "• Google Fonts: tipografies servides des de servidors de Google LLC.",
          "• Google Maps: mapa interactiu incrustat en la pàgina de contacte quan l'usuari el sol·licita.",
          "• Serveis en el núvol (p. ex. consulta d'esdeveniments o enviament del formulari de contacte): poden generar registres tècnics o cookies associades a la infraestructura del proveïdor.",
          "• Enllaços a xarxes socials (Instagram, Facebook, X/Twitter, YouTube): en accedir-hi, s'aplicaran les polítiques de cookies de cada plataforma.",
          "Recomanem consultar les polítiques de privacitat i cookies d'aquests tercers per a més informació.",
        ],
      },
      {
        title: '4. Base jurídica i consentiment',
        paragraphs: [
          "Les cookies tècniques es basen en l'interès legítim i la necessitat de prestar el servei sol·licitat per l'usuari.",
          "Les cookies no necessàries, si s'incorporaren, es desplegaran únicament després d'obtenir el consentiment de l'usuari mitjançant el mecanisme informatiu corresponent, d'acord amb la LSSI-CE i el RGPD.",
        ],
      },
      {
        title: '5. Com gestionar o desactivar les cookies',
        paragraphs: [
          "Pot permetre, bloquejar o eliminar les cookies instal·lades al seu dispositiu mitjançant la configuració del navegador:",
          "• Google Chrome: Configuració → Privacitat i seguretat → Cookies",
          "• Mozilla Firefox: Opcions → Privacitat i seguretat",
          "• Safari: Preferències → Privacitat",
          "• Microsoft Edge: Configuració → Cookies i permisos del lloc",
          "Si desactiva les cookies, algunes funcionalitats del lloc poden no funcionar correctament.",
        ],
      },
      {
        title: '6. Actualitzacions',
        paragraphs: [
          `${LEGAL_ENTITY} pot actualitzar aquesta Política de cookies quan s'incorporin nous serveis o canvie la normativa aplicable. La data de l'última actualització es indica al final d'aquest document.`,
          "Per a qualsevol dubte sobre l'ús de cookies, pot contactar a través de " + LEGAL_EMAIL + ".",
        ],
      },
    ],
  },
  es: {
    title: 'Uso de cookies',
    lastUpdated: LEGAL_LAST_UPDATED,
    sections: [
      {
        title: '1. ¿Qué son las cookies?',
        paragraphs: [
          'Las cookies son archivos que se descargan en el dispositivo del usuario al acceder a determinadas páginas web. Permiten almacenar y recuperar información sobre la navegación y, en su caso, identificar al usuario. También se utilizan tecnologías similares (píxeles, almacenamiento local, identificadores del dispositivo).',
        ],
      },
      {
        title: '2. Tipos de cookies utilizadas',
        paragraphs: [
          'En este sitio web se utilizan, o pueden utilizarse, las siguientes categorías:',
          '• Cookies técnicas o necesarias: permiten el funcionamiento básico del sitio y la seguridad. No requieren consentimiento.',
          '• Cookies de preferencias: recuerdan opciones del usuario (si se implementan en el futuro).',
          '• Cookies de terceros: algunos servicios integrados pueden instalar cookies en el dispositivo del usuario al acceder o interactuar con ellos.',
        ],
      },
      {
        title: '3. Cookies de terceros',
        paragraphs: [
          `${LEGAL_WEBSITE} puede incluir contenido o servicios de terceros que pueden utilizar cookies:`,
          '• Google Fonts: tipografías servidas desde servidores de Google LLC.',
          '• Google Maps: mapa interactivo incrustado en la página de contacto cuando el usuario lo solicita.',
          '• Servicios en la nube (p. ej. consulta de eventos o envío del formulario de contacto): pueden generar registros técnicos o cookies asociadas a la infraestructura del proveedor.',
          '• Enlaces a redes sociales (Instagram, Facebook, X/Twitter, YouTube): al acceder a ellas, se aplicarán las políticas de cookies de cada plataforma.',
          'Recomendamos consultar las políticas de privacidad y cookies de estos terceros para más información.',
        ],
      },
      {
        title: '4. Base jurídica y consentimiento',
        paragraphs: [
          'Las cookies técnicas se basan en el interés legítimo y la necesidad de prestar el servicio solicitado por el usuario.',
          'Las cookies no necesarias, si se incorporaran, se desplegarían únicamente tras obtener el consentimiento del usuario mediante el mecanismo informativo correspondiente, de acuerdo con la LSSI-CE y el RGPD.',
        ],
      },
      {
        title: '5. Cómo gestionar o desactivar las cookies',
        paragraphs: [
          'Puede permitir, bloquear o eliminar las cookies instaladas en su dispositivo mediante la configuración del navegador:',
          '• Google Chrome: Configuración → Privacidad y seguridad → Cookies',
          '• Mozilla Firefox: Opciones → Privacidad y seguridad',
          '• Safari: Preferencias → Privacidad',
          '• Microsoft Edge: Configuración → Cookies y permisos del sitio',
          'Si desactiva las cookies, algunas funcionalidades del sitio pueden no funcionar correctamente.',
        ],
      },
      {
        title: '6. Actualizaciones',
        paragraphs: [
          `${LEGAL_ENTITY} puede actualizar esta Política de cookies cuando se incorporen nuevos servicios o cambie la normativa aplicable. La fecha de la última actualización se indica al final de este documento.`,
          'Para cualquier duda sobre el uso de cookies, puede contactar a través de ' + LEGAL_EMAIL + '.',
        ],
      },
    ],
  },
  en: {
    title: 'Cookie policy',
    lastUpdated: LEGAL_LAST_UPDATED,
    sections: [
      {
        title: '1. What are cookies?',
        paragraphs: [
          'Cookies are files downloaded to the user’s device when accessing certain websites. They store and retrieve browsing information and, in some cases, identify the user. Similar technologies are also used (pixels, local storage, device identifiers).',
        ],
      },
      {
        title: '2. Types of cookies used',
        paragraphs: [
          'This website uses, or may use, the following categories:',
          '• Technical or necessary cookies: enable basic site operation and security. They do not require consent.',
          '• Preference cookies: remember user choices (if implemented in the future).',
          '• Third-party cookies: some integrated services may install cookies on the user’s device when accessed or used.',
        ],
      },
      {
        title: '3. Third-party cookies',
        paragraphs: [
          `${LEGAL_WEBSITE} may include third-party content or services that may use cookies:`,
          '• Google Fonts: fonts served from Google LLC servers.',
          '• Google Maps: embedded interactive map on the contact page when requested by the user.',
          '• Cloud services (e.g. event listings or contact form submission): may generate technical logs or cookies associated with the provider’s infrastructure.',
          '• Links to social networks (Instagram, Facebook, X/Twitter, YouTube): when visiting them, each platform’s cookie policy applies.',
          'We recommend reviewing these third parties’ privacy and cookie policies for further information.',
        ],
      },
      {
        title: '4. Legal basis and consent',
        paragraphs: [
          'Technical cookies are based on legitimate interest and the need to provide the service requested by the user.',
          'Non-essential cookies, if added, will only be deployed after obtaining user consent through the appropriate notice mechanism, in accordance with the LSSI-CE and GDPR.',
        ],
      },
      {
        title: '5. How to manage or disable cookies',
        paragraphs: [
          'You can allow, block or delete cookies installed on your device through your browser settings:',
          '• Google Chrome: Settings → Privacy and security → Cookies',
          '• Mozilla Firefox: Options → Privacy & Security',
          '• Safari: Preferences → Privacy',
          '• Microsoft Edge: Settings → Cookies and site permissions',
          'If you disable cookies, some site features may not work properly.',
        ],
      },
      {
        title: '6. Updates',
        paragraphs: [
          `${LEGAL_ENTITY} may update this Cookie Policy when new services are added or applicable law changes. The date of the last update is shown at the end of this document.`,
          'For any questions about cookie use, please contact ' + LEGAL_EMAIL + '.',
        ],
      },
    ],
  },
};

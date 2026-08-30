import type { LegalPageData } from '../types';
import {
  LEGAL_ADDRESS,
  LEGAL_EMAIL,
  LEGAL_ENTITY,
  LEGAL_LAST_UPDATED,
  LEGAL_WEBSITE,
} from '../site-info';

export const privacy: Record<'va' | 'es' | 'en', LegalPageData> = {
  va: {
    title: 'Política de privacitat',
    lastUpdated: LEGAL_LAST_UPDATED,
    sections: [
      {
        title: '1. Responsable del tractament',
        paragraphs: [
          `Responsable: ${LEGAL_ENTITY}. Domicili: ${LEGAL_ADDRESS}. Correu electrònic: ${LEGAL_EMAIL}. Lloc web: ${LEGAL_WEBSITE}.`,
        ],
      },
      {
        title: '2. Finalitats i base jurídica',
        paragraphs: [
          "Tractem les dades personals per a les finalitats següents:",
          "• Gestionar les consultes i sol·licituds enviades a través del formulari de contacte (base jurídica: consentiment de l'interessat i, si escau, interès legítim en donar resposta).",
          "• Mantindre la relació amb membres, simpatitzants i persones interessades en les activitats del grup (base jurídica: consentiment, execució de mesures precontractuals o interès legítim).",
          "• Complir obligacions legals aplicables (base jurídica: obligació legal).",
          "• Garantir la seguretat del lloc web i prevenir abusos (base jurídica: interès legítim).",
        ],
      },
      {
        title: '3. Dades que es poden tractar',
        paragraphs: [
          "Segons el servei utilitzat, es poden tractar: nom, adreça de correu electrònic, missatge o consulta, i dades tècniques de connexió (adreça IP, tipus de navegador, data i hora d'accés) quan siga necessari per a la seguretat o el funcionament del lloc.",
          "No sol·licitem dades especialment protegides excepte que l'usuari les incloga voluntàriament en el missatge; en eixe cas, es tractaran únicament per atendre la sol·licitud.",
        ],
      },
      {
        title: '4. Termini de conservació',
        paragraphs: [
          "Les dades del formulari de contacte es conservaran el temps necessari per gestionar la consulta i, posteriorment, durant els terminis exigits per la legislació o fins que l'interessat sol·licite la seua supressió, si no existeix obligació legal de conservació.",
          "Les dades de navegació associades a la seguretat es conservaran durant el termini estrictament necessari.",
        ],
      },
      {
        title: '5. Destinataris i encarregats del tractament',
        paragraphs: [
          "No es cediran dades a tercers llevat d'obligació legal o quan siga necessari per a la prestació del servei.",
          "Per al funcionament del lloc web es poden utilitzar proveïdors tecnològics (allotjament web, serveis en el núvol per al formulari de contacte o la consulta d'esdeveniments) que actuen com a encarregats del tractament i han subscrit els corresponents acords segons el Reglament (UE) 2016/679 (RGPD).",
          "Alguns d'aquests proveïdors poden estar ubicats fora de l'Espai Econòmic Europeu; en eixe cas, s'adoptaran les garanties adequades previstes per la normativa (clàusules contractuals tipus, decisions d'adequació o altres mecanismes permesos).",
        ],
      },
      {
        title: '6. Drets de les persones interessades',
        paragraphs: [
          "Pot exercir els drets d'accés, rectificació, supressió, oposició, limitació del tractament i portabilitat enviant un correu a " + LEGAL_EMAIL + ", acreditant la seua identitat.",
          "Té dret a retirar el consentiment en qualsevol moment, sense que afecte la licitud del tractament basat en el consentiment previ a la retirada.",
          "Si considera que els seus drets no han estat atesos adequadament, pot presentar una reclamació davant l'Agència Espanyola de Protecció de Dades (AEPD): https://www.aepd.es",
        ],
      },
      {
        title: '7. Mesures de seguretat',
        paragraphs: [
          `${LEGAL_ENTITY} aplica mesures tècniques i organitzatives apropiades per a protegir les dades personals contra la destrucció accidental o il·lícita, la pèrdua, l'alteració, la divulgació o l'accés no autoritzat.`,
        ],
      },
      {
        title: '8. Menors d\'edat',
        paragraphs: [
          "Aquest lloc no està dirigit de manera específica a menors de 14 anys. Si un menor ha facilitat dades personals sense consentiment parental o del titular de la patria potestat, pot sol·licitar-ne la supressió a través del correu electrònic indicat.",
        ],
      },
      {
        title: '9. Canvis en aquesta política',
        paragraphs: [
          "Ens reservem el dret de modificar la present Política de privacitat per adaptar-la a novetats legislatives o jurisprudencials. En cas de canvis rellevants, s'informarà a través d'aquest lloc web.",
        ],
      },
    ],
  },
  es: {
    title: 'Política de privacidad',
    lastUpdated: LEGAL_LAST_UPDATED,
    sections: [
      {
        title: '1. Responsable del tratamiento',
        paragraphs: [
          `Responsable: ${LEGAL_ENTITY}. Domicilio: ${LEGAL_ADDRESS}. Correo electrónico: ${LEGAL_EMAIL}. Sitio web: ${LEGAL_WEBSITE}.`,
        ],
      },
      {
        title: '2. Finalidades y base jurídica',
        paragraphs: [
          'Tratamos los datos personales para las siguientes finalidades:',
          '• Gestionar las consultas y solicitudes enviadas a través del formulario de contacto (base jurídica: consentimiento del interesado y, en su caso, interés legítimo en dar respuesta).',
          '• Mantener la relación con miembros, simpatizantes y personas interesadas en las actividades del grupo (base jurídica: consentimiento, ejecución de medidas precontractuales o interés legítimo).',
          '• Cumplir obligaciones legales aplicables (base jurídica: obligación legal).',
          '• Garantizar la seguridad del sitio web y prevenir abusos (base jurídica: interés legítimo).',
        ],
      },
      {
        title: '3. Datos que pueden tratarse',
        paragraphs: [
          'Según el servicio utilizado, pueden tratarse: nombre, dirección de correo electrónico, mensaje o consulta, y datos técnicos de conexión (dirección IP, tipo de navegador, fecha y hora de acceso) cuando sea necesario para la seguridad o el funcionamiento del sitio.',
          'No solicitamos datos especialmente protegidos salvo que el usuario los incluya voluntariamente en el mensaje; en ese caso, se tratarán únicamente para atender la solicitud.',
        ],
      },
      {
        title: '4. Plazo de conservación',
        paragraphs: [
          'Los datos del formulario de contacto se conservarán el tiempo necesario para gestionar la consulta y, posteriormente, durante los plazos exigidos por la legislación o hasta que el interesado solicite su supresión, si no existe obligación legal de conservación.',
          'Los datos de navegación asociados a la seguridad se conservarán durante el plazo estrictamente necesario.',
        ],
      },
      {
        title: '5. Destinatarios y encargados del tratamiento',
        paragraphs: [
          'No se cederán datos a terceros salvo obligación legal o cuando sea necesario para la prestación del servicio.',
          'Para el funcionamiento del sitio web pueden utilizarse proveedores tecnológicos (alojamiento web, servicios en la nube para el formulario de contacto o la consulta de eventos) que actúan como encargados del tratamiento y han suscrito los correspondientes acuerdos conforme al Reglamento (UE) 2016/679 (RGPD).',
          'Algunos de estos proveedores pueden estar ubicados fuera del Espacio Económico Europeo; en ese caso, se adoptarán las garantías adecuadas previstas por la normativa (cláusulas contractuales tipo, decisiones de adecuación u otros mecanismos permitidos).',
        ],
      },
      {
        title: '6. Derechos de las personas interesadas',
        paragraphs: [
          'Puede ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad enviando un correo a ' + LEGAL_EMAIL + ', acreditando su identidad.',
          'Tiene derecho a retirar el consentimiento en cualquier momento, sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.',
          'Si considera que sus derechos no han sido atendidos adecuadamente, puede presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD): https://www.aepd.es',
        ],
      },
      {
        title: '7. Medidas de seguridad',
        paragraphs: [
          `${LEGAL_ENTITY} aplica medidas técnicas y organizativas apropiadas para proteger los datos personales contra la destrucción accidental o ilícita, la pérdida, la alteración, la divulgación o el acceso no autorizado.`,
        ],
      },
      {
        title: '8. Menores de edad',
        paragraphs: [
          'Este sitio no está dirigido de manera específica a menores de 14 años. Si un menor ha facilitado datos personales sin consentimiento parental o del titular de la patria potestad, puede solicitar su supresión a través del correo electrónico indicado.',
        ],
      },
      {
        title: '9. Cambios en esta política',
        paragraphs: [
          "Nos reservamos el derecho de modificar la presente Política de privacidad para adaptarla a novedades legislativas o jurisprudenciales. En caso de cambios relevantes, se informará a través de este sitio web.",
        ],
      },
    ],
  },
  en: {
    title: 'Privacy policy',
    lastUpdated: LEGAL_LAST_UPDATED,
    sections: [
      {
        title: '1. Data controller',
        paragraphs: [
          `Controller: ${LEGAL_ENTITY}. Address: ${LEGAL_ADDRESS}. Email: ${LEGAL_EMAIL}. Website: ${LEGAL_WEBSITE}.`,
        ],
      },
      {
        title: '2. Purposes and legal basis',
        paragraphs: [
          'We process personal data for the following purposes:',
          '• To manage enquiries and requests sent through the contact form (legal basis: data subject consent and, where applicable, legitimate interest in responding).',
          '• To maintain the relationship with members, supporters and people interested in the group’s activities (legal basis: consent, pre-contractual measures or legitimate interest).',
          '• To comply with applicable legal obligations (legal basis: legal obligation).',
          '• To ensure website security and prevent abuse (legal basis: legitimate interest).',
        ],
      },
      {
        title: '3. Data that may be processed',
        paragraphs: [
          'Depending on the service used, we may process: name, email address, message or enquiry, and technical connection data (IP address, browser type, date and time of access) when necessary for security or site operation.',
          'We do not request special categories of data unless the user voluntarily includes them in a message; in that case, they will be processed only to handle the request.',
        ],
      },
      {
        title: '4. Retention period',
        paragraphs: [
          'Contact form data will be kept for as long as necessary to handle the enquiry and thereafter for the periods required by law or until the data subject requests erasure, where no legal retention obligation applies.',
          'Navigation data related to security will be kept for the strictly necessary period.',
        ],
      },
      {
        title: '5. Recipients and processors',
        paragraphs: [
          'Data will not be disclosed to third parties except where legally required or necessary to provide the service.',
          'Technology providers may be used to operate the website (web hosting, cloud services for the contact form or event listings) acting as processors with appropriate agreements under Regulation (EU) 2016/679 (GDPR).',
          'Some providers may be located outside the European Economic Area; in such cases, appropriate safeguards under applicable law will be adopted (standard contractual clauses, adequacy decisions or other permitted mechanisms).',
        ],
      },
      {
        title: '6. Data subject rights',
        paragraphs: [
          'You may exercise your rights of access, rectification, erasure, objection, restriction of processing and portability by emailing ' + LEGAL_EMAIL + ' and verifying your identity.',
          'You have the right to withdraw consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.',
          'If you believe your rights have not been properly addressed, you may lodge a complaint with the Spanish Data Protection Agency (AEPD): https://www.aepd.es',
        ],
      },
      {
        title: '7. Security measures',
        paragraphs: [
          `${LEGAL_ENTITY} applies appropriate technical and organisational measures to protect personal data against accidental or unlawful destruction, loss, alteration, disclosure or unauthorised access.`,
        ],
      },
      {
        title: '8. Minors',
        paragraphs: [
          'This site is not specifically directed at children under 14. If a minor has provided personal data without parental or guardian consent, erasure may be requested via the email address provided.',
        ],
      },
      {
        title: '9. Changes to this policy',
        paragraphs: [
          'We reserve the right to amend this Privacy Policy to reflect legislative or case-law developments. Material changes will be announced on this website.',
        ],
      },
    ],
  },
};

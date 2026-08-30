import type { LegalPageData } from '../types';
import {
  LEGAL_ADDRESS,
  LEGAL_EMAIL,
  LEGAL_ENTITY,
  LEGAL_LAST_UPDATED,
  LEGAL_TAX_ID,
  LEGAL_WEBSITE,
} from '../site-info';

const taxLine = {
  va: LEGAL_TAX_ID
    ? `CIF/NIF: ${LEGAL_TAX_ID}.`
    : "La identificació fiscal de l'entitat titular pot obtindre's sol·licitant-la a través del correu electrònic indicat.",
  es: LEGAL_TAX_ID
    ? `CIF/NIF: ${LEGAL_TAX_ID}.`
    : 'La identificación fiscal del titular puede obtenerse solicitándola a través del correo electrónico indicado.',
  en: LEGAL_TAX_ID
    ? `Tax ID (CIF/NIF): ${LEGAL_TAX_ID}.`
    : 'The tax identification of the website owner can be obtained on request via the email address provided.',
};

export const legal: Record<'va' | 'es' | 'en', LegalPageData> = {
  va: {
    title: 'Avís legal',
    lastUpdated: LEGAL_LAST_UPDATED,
    sections: [
      {
        title: '1. Dades identificatives',
        paragraphs: [
          `En compliment de la Llei 34/2002, d'11 de juliol, de serveis de la societat de la informació i de comerç electrònic (LSSI-CE), s'informa que el titular d'aquest lloc web és ${LEGAL_ENTITY}, amb domicili a ${LEGAL_ADDRESS}. Correu electrònic de contacte: ${LEGAL_EMAIL}. Lloc web: ${LEGAL_WEBSITE}. ${taxLine.va}`,
        ],
      },
      {
        title: '2. Objecte',
        paragraphs: [
          `Aquest lloc web té com a finalitat informar sobre les activitats, notícies, esdeveniments i documentació relacionats amb ${LEGAL_ENTITY}, associació cultural dedicada a la muixeranga i la promoció de la cultura i la llengua valencianes a Elx.`,
        ],
      },
      {
        title: '3. Condicions d\'ús',
        paragraphs: [
          "L'accés i la utilització del lloc web atribueixen la condició d'usuari i impliquen l'acceptació plena i sense reserves de les presents condicions. L'usuari es compromet a fer un ús adequat dels continguts i a no emprar-los per a activitats il·lícites, lesives de drets de tercers o que puguen danyar, inutilitzar o sobrecarregar el lloc.",
        ],
      },
      {
        title: '4. Propietat intel·lectual i industrial',
        paragraphs: [
          `Els continguts d'aquest lloc (textos, imatges, logotips, disseny, codi font i, en general, qualsevol obra o material) són propietat de ${LEGAL_ENTITY} o de tercers que han autoritzat el seu ús, i estan protegits per la legislació espanyola i de la Unió Europea en matèria de propietat intel·lectual i industrial.`,
          "Queda prohibida la reproducció, distribució, comunicació pública, transformació o qualsevol altra explotació sense autorització prèvia i per escrit del titular, excepte en els casos permesos per la llei o per a ús privat i no comercial amb cita de la font.",
        ],
      },
      {
        title: '5. Responsabilitat',
        paragraphs: [
          `${LEGAL_ENTITY} no es fa responsable dels danys derivats de l'ús del lloc web, de la impossibilitat d'accés, de la presència de virus informàtics o d'incidents tècnics aliens al seu control raonable.`,
          "No es garantix l'absència d'errors en els continguts, tot i que es procurarà corregir-los tan prompte com es detecten. Els enllaços a llocs de tercers tenen finalitat informativa; el titular no controla ni assumeix responsabilitat pels continguts o polítiques d'aquests llocs externs.",
        ],
      },
      {
        title: '6. Enllaços',
        paragraphs: [
          "L'establiment d'enllaços cap a aquest lloc web des de pàgines externes requerix autorització prèvia i per escrit, excepte enllaços que únicament faciliten l'accés a la pàgina d'inici.",
          "Aquest lloc pot contenir enllaços a xarxes socials i altres webs de tercers. L'ús d'aquests enllaços és responsabilitat exclusiva de l'usuari.",
        ],
      },
      {
        title: '7. Protecció de dades i cookies',
        paragraphs: [
          "El tractament de dades personals es regeix per la Política de privacitat d'aquest lloc. L'ús de cookies i tecnologies similars es descriu a la Política de cookies.",
        ],
      },
      {
        title: '8. Legislació aplicable i jurisdicció',
        paragraphs: [
          "Les presents condicions es regixen per la legislació espanyola i, en el que corresponga, pel Dret de la Unió Europea. Per a la resolució de qualsevol controvèrsia, les parts es sotmeten als jutjats i tribunals d'Elx, llevat que la normativa de consumidors i usuaris en dispose altra cosa.",
        ],
      },
    ],
  },
  es: {
    title: 'Aviso legal',
    lastUpdated: LEGAL_LAST_UPDATED,
    sections: [
      {
        title: '1. Datos identificativos',
        paragraphs: [
          `En cumplimiento de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE), se informa de que el titular de este sitio web es ${LEGAL_ENTITY}, con domicilio en ${LEGAL_ADDRESS}. Correo electrónico de contacto: ${LEGAL_EMAIL}. Sitio web: ${LEGAL_WEBSITE}. ${taxLine.es}`,
        ],
      },
      {
        title: '2. Objeto',
        paragraphs: [
          `Este sitio web tiene como finalidad informar sobre las actividades, noticias, eventos y documentación relacionados con ${LEGAL_ENTITY}, asociación cultural dedicada a la muixeranga y a la promoción de la cultura y la lengua valencianas en Elche.`,
        ],
      },
      {
        title: '3. Condiciones de uso',
        paragraphs: [
          "El acceso y uso del sitio web atribuyen la condición de usuario e implican la aceptación plena y sin reservas de las presentes condiciones. El usuario se compromete a hacer un uso adecuado de los contenidos y a no emplearlos para actividades ilícitas, lesivas de derechos de terceros o que puedan dañar, inutilizar o sobrecargar el sitio.",
        ],
      },
      {
        title: '4. Propiedad intelectual e industrial',
        paragraphs: [
          `Los contenidos de este sitio (textos, imágenes, logotipos, diseño, código fuente y, en general, cualquier obra o material) son propiedad de ${LEGAL_ENTITY} o de terceros que han autorizado su uso, y están protegidos por la legislación española y de la Unión Europea en materia de propiedad intelectual e industrial.`,
          "Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra explotación sin autorización previa y por escrito del titular, salvo en los casos permitidos por la ley o para uso privado y no comercial con cita de la fuente.",
        ],
      },
      {
        title: '5. Responsabilidad',
        paragraphs: [
          `${LEGAL_ENTITY} no se hace responsable de los daños derivados del uso del sitio web, de la imposibilidad de acceso, de la presencia de virus informáticos o de incidencias técnicas ajenas a su control razonable.`,
          "No se garantiza la ausencia de errores en los contenidos, aunque se procurará corregirlos tan pronto como se detecten. Los enlaces a sitios de terceros tienen finalidad informativa; el titular no controla ni asume responsabilidad por los contenidos o políticas de dichos sitios externos.",
        ],
      },
      {
        title: '6. Enlaces',
        paragraphs: [
          "El establecimiento de enlaces hacia este sitio web desde páginas externas requerirá autorización previa y por escrito, salvo enlaces que únicamente faciliten el acceso a la página de inicio.",
          "Este sitio puede contener enlaces a redes sociales y otras webs de terceros. El uso de estos enlaces es responsabilidad exclusiva del usuario.",
        ],
      },
      {
        title: '7. Protección de datos y cookies',
        paragraphs: [
          "El tratamiento de datos personales se rige por la Política de privacidad de este sitio. El uso de cookies y tecnologías similares se describe en la Política de cookies.",
        ],
      },
      {
        title: '8. Legislación aplicable y jurisdicción',
        paragraphs: [
          "Las presentes condiciones se rigen por la legislación española y, en su caso, por el Derecho de la Unión Europea. Para la resolución de cualquier controversia, las partes se someten a los juzgados y tribunales de Elche, salvo que la normativa de consumidores y usuarios disponga otra cosa.",
        ],
      },
    ],
  },
  en: {
    title: 'Legal notice',
    lastUpdated: LEGAL_LAST_UPDATED,
    sections: [
      {
        title: '1. Identification details',
        paragraphs: [
          `In compliance with Spanish Law 34/2002 of 11 July on information society services and electronic commerce (LSSI-CE), you are informed that the owner of this website is ${LEGAL_ENTITY}, with registered address at ${LEGAL_ADDRESS}. Contact email: ${LEGAL_EMAIL}. Website: ${LEGAL_WEBSITE}. ${taxLine.en}`,
        ],
      },
      {
        title: '2. Purpose',
        paragraphs: [
          `This website aims to provide information about the activities, news, events and documentation related to ${LEGAL_ENTITY}, a cultural association dedicated to muixeranga and the promotion of Valencian culture and language in Elx/Elche.`,
        ],
      },
      {
        title: '3. Terms of use',
        paragraphs: [
          "Access to and use of this website confer user status and imply full and unreserved acceptance of these terms. Users agree to make appropriate use of the contents and not to use them for unlawful activities, infringement of third-party rights, or actions that may damage, disable or overload the site.",
        ],
      },
      {
        title: '4. Intellectual and industrial property',
        paragraphs: [
          `The contents of this site (texts, images, logos, design, source code and, in general, any work or material) are owned by ${LEGAL_ENTITY} or by third parties who have authorised their use, and are protected under Spanish and European Union intellectual and industrial property law.`,
          "Reproduction, distribution, public communication, transformation or any other exploitation is prohibited without prior written authorisation from the owner, except as permitted by law or for private, non-commercial use with attribution of the source.",
        ],
      },
      {
        title: '5. Liability',
        paragraphs: [
          `${LEGAL_ENTITY} shall not be liable for damages arising from use of the website, inability to access it, the presence of computer viruses or technical incidents beyond its reasonable control.`,
          "The absence of errors in the contents is not guaranteed, although errors will be corrected as soon as they are detected. Links to third-party sites are provided for information purposes only; the owner does not control or accept responsibility for the contents or policies of external sites.",
        ],
      },
      {
        title: '6. Links',
        paragraphs: [
          "Establishing links to this website from external pages requires prior written authorisation, except for links that merely provide access to the home page.",
          "This site may contain links to social networks and other third-party websites. Use of such links is the sole responsibility of the user.",
        ],
      },
      {
        title: '7. Data protection and cookies',
        paragraphs: [
          "The processing of personal data is governed by this site's Privacy Policy. The use of cookies and similar technologies is described in the Cookie Policy.",
        ],
      },
      {
        title: '8. Applicable law and jurisdiction',
        paragraphs: [
          "These terms are governed by Spanish law and, where applicable, European Union law. For the resolution of any dispute, the parties submit to the courts of Elx/Elche, unless consumer protection rules provide otherwise.",
        ],
      },
    ],
  },
};

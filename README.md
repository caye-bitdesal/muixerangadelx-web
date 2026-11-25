# Muixeranga d'Elx — web pública

[![Deploy (Gandi SFTP)](https://github.com/caye-bitdesal/muixerangadelx-web/actions/workflows/deploy-gandi-sftp.yml/badge.svg)](https://github.com/caye-bitdesal/muixerangadelx-web/actions/workflows/deploy-gandi-sftp.yml)
![Astro](https://img.shields.io/badge/Astro-7-FF5D01?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwindcss&logoColor=white)
![Licencia: GPL v3](https://img.shields.io/badge/licencia-GPLv3-blue)

Código fuente de **[muixerangadelx.com](https://www.muixerangadelx.com)**, la web de la Muixeranga d'Elx.

> *Fem pinya com una tabala*

La Muixeranga d'Elx es una asociación cultural fundada en septiembre de 2022 para difundir la cultura, la lengua y las costumbres valencianas a través de la muixeranga. Tiene unos 50 socios, viste los colores de la bandera de Elx y es la muixeranga más al sur del País Valencià.

---

## Qué hay en la web

| Sección | Valencià (por defecto) | Castellano | English |
|---|---|---|---|
| Portada | `/` | `/es/` | `/en/` |
| Història | `/la-nostra-historia` | `/es/nuestra-historia` | `/en/our-history` |
| Agenda (assajos i actuacions) | `/activitats` | `/es/eventos` | `/en/events` |
| Blog / crónicas | `/blog` | `/es/blog` | `/en/blog` |
| Apunta't | `/apunta-t` | `/es/unete` | `/en/join-us` |
| Contacte | `/contacte` | `/es/contacte` | `/en/contacte` |
| Documentació | `/documentacio` | `/es/documentacio` | `/en/documentacio` |
| Legal | `/avis-legal`, `/politica-privacitat`, `/us-cookies` | `/es/...` | `/en/...` |

- **Portada**: hero, «Qui som?», vídeo del Correllengua 2025, próximas fechas de la agenda, últimas entradas del blog y llamada a «Vine a provar».
- **Agenda**: calendario y listado de eventos con página de detalle por evento. Cada evento tiene un tipo y un color:
  - `assaig` (ensayo): azul
  - `actuacio` (actuación): rojo
  - `altre` (otros): amarillo
- **Blog**: crónicas de actuaciones y actividades, con imágenes y vídeos de YouTube o publicaciones de Instagram incrustados.
- **Documentació**: PDFs públicos, como la autorización para menores, el vocabulario visual de la AVL y las entrevistas en prensa.
- **Redes**: Instagram, Facebook, X y YouTube.

## Stack

- [Astro 7](https://astro.build): sitio estático con i18n nativo (`va` por defecto y sin prefijo, `es`, `en`) y view transitions.
- [Tailwind CSS 4](https://tailwindcss.com) mediante `@tailwindcss/vite`.
- TypeScript.
- Eventos desde la API `listEvents` (Firebase Cloud Function).
- Formulario de contacto con [Formspree](https://formspree.io).
- Despliegue con GitHub Actions por SFTP en Gandi.

## Desarrollo

Requiere **Node ≥ 22.12**.

```bash
npm install
npm run dev        # servidor de desarrollo
npm run build      # genera dist/
npm run preview    # sirve dist/ en local
```

Scripts adicionales:

```bash
npm run docs:thumbnail   # genera la miniatura de un PDF de public/documents/ (scripts/pdf-thumbnail.sh)
```

### Variables de entorno

Copia `.env.example` a `.env`:

| Variable | Descripción |
|---|---|
| `PUBLIC_FORMSPREE_FORM_URL` | *(opcional)* Endpoint de Formspree. Por defecto: `https://formspree.io/f/xppwdkyv`. |

## Estructura

```
src/
├── components/      # Componentes Astro (Navbar, PhotoHero, ActivitiesCalendar, BlogApp…)
├── content/
│   ├── blog/        # Entradas del blog en Markdown (una por fichero, trilingües)
│   └── blog.template.md
├── i18n/            # Textos de la interfaz (ui.ts) y utilidades de idioma
├── layouts/         # BaseLayout
├── lib/             # Lógica: eventos, blog, SEO, documentos, textos legales…
├── pages/           # Rutas (va en la raíz, /es y /en)
└── styles/
public/
├── documents/       # PDFs de la sección Documentació
├── images/          # Imágenes (blog, heros, assajos…)
└── videos/
```

## Gestión de contenido

### Blog

Cada entrada es **un solo fichero** en `src/content/blog/` con el contenido en los tres idiomas. Parte de la plantilla `src/content/blog.template.md`:

```yaml
categories: { va: [...], es: [...], en: [...] }
title:       { va: "...", es: "...", en: "..." }
date: 2026-01-15
author: "Muixeranga d'Elx"
description: { va: "...", es: "...", en: "..." }
coverImage: /images/blog/portada.jpg
content:
  va:
    - type: text      # párrafos
    - type: images    # una o varias imágenes + caption opcional
    - type: embed     # platform: youtube | instagram + url
  es: [...]
  en: [...]
```

Las imágenes van en `public/images/blog/`. **No publiques caras de menores** (ver historial: se han sustituido imágenes por este motivo).

### Agenda

Los eventos no viven en este repo: se leen de la API `listEvents` (Firebase) y se tipan en `src/lib/events.ts`.

### Documentación

Sube el PDF a `public/documents/`, genera la miniatura con `npm run docs:thumbnail` y añade sus metadatos en `src/lib/docs.ts`.

### Textos legales

Están en `src/lib/legal/texts/` (avís legal, privacitat, cookies) en va/es/en. Los datos del titular están en `src/lib/legal/site-info.ts`.

## Trabajar con Claude Code

El repo incluye `CLAUDE.md` y `AGENTS.md` con las pautas para agentes: arrancar el servidor con `astro dev --background` y consultar la documentación de Astro antes de tocar rutas, contenido, estilos o i18n.

### Skills propias

| Skill | Qué hace |
|---|---|
| `create-blog-post` | Crea una entrada nueva del blog a partir de la crónica de una actuación o actividad. Copia la plantilla, rellena título, descripción y categorías, escribe el cuerpo en valencià, castellano e inglés, coloca las imágenes en `public/images/blog/` y añade los embeds de YouTube o Instagram. |

Ejemplo de uso:

```
/create-blog-post Correllengua 2026
```

> Las skills del proyecto van en `.claude/skills/<nombre>/SKILL.md` para que estén versionadas junto a la web.

## Despliegue

Cada push a `main` lanza `.github/workflows/deploy-gandi-sftp.yml`, que hace `npm ci`, `npm run build` y sube `dist/` por SFTP al hosting de Gandi. Si llegan dos pushes seguidos, se cancela el despliegue anterior y solo se publica el último.

Secretos necesarios en **Settings → Secrets and variables → Actions**:

| Secreto | Descripción |
|---|---|
| `SFTP_SERVER` | Host SFTP de Gandi (p. ej. `sftp.gandi.net`) |
| `SFTP_USERNAME` | Usuario SFTP |
| `SFTP_PASSWORD` | Contraseña SFTP |
| `SFTP_REMOTE_PATH` | Ruta remota (p. ej. `/lamp0/web/vhosts/www.muixerangadelx.com/htdocs/`) |
| `PUBLIC_FORMSPREE_FORM_URL` | *(opcional)* Endpoint de Formspree si difiere del valor por defecto |

## Convención de commits

- `feat:` para contenido o funcionalidad nueva (una página, una entrada, un documento).
- `care:` para mejoras, ajustes visuales, imágenes y rendimiento.

## Licencia y créditos

Código bajo licencia [GPL-3.0](LICENSE). Los textos, fotografías, vídeos y documentos son de la Muixeranga d'Elx o de sus autores, y no se rigen por esta licencia.

Diseño y desarrollo: [Bitdesal](https://bitdesal.com).
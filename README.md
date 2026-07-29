# Muixeranga d'Elx — web pública

Sitio web en [Astro](https://astro.build) con Tailwind CSS.

## Desarrollo

```bash
npm install
npm run dev
```

## Idiomas

- Valencià (por defecto): `/` — código `va`
- Castellano: `/es/...`
- English: `/en/...`

## Variables de entorno

Copia `.env.example` a `.env`:

- `PUBLIC_CONTACT_API_URL` — URL de la Cloud Function de contacto (opcional; sin ella el formulario valida pero no envía).

## Contenido

- Eventos: API `listEvents` (Firebase Cloud Function).
- Blog: Markdown en `src/content/blog/` (campos `title`/`excerpt` en va/es/en).
- Documentación: placeholders en `src/lib/docs.ts`.

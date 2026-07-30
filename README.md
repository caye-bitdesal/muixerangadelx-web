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

## Despliegue (Gandi)

Este repositorio se despliega automáticamente en el hosting de Gandi mediante **SFTP** con el workflow de GitHub Actions `.github/workflows/deploy-gandi-sftp.yml`.

- **Cuándo se ejecuta**: en cada push a la rama `main`
- **Qué hace**: instala dependencias, ejecuta `npm run build` y sube el contenido de `dist/`

### Hosting Python (WSGI)

Si el virtual host es **Python** (Apache + uWSGI), Gandi no sirve HTML suelto en la raíz: ejecuta `wsgi.py`. El archivo `public/wsgi.py` se copia a `dist/` en el build y sirve las páginas estáticas de Astro (sustituye el “It works!” por defecto).

Tras el primer deploy, si sigues viendo la página antigua, reinicia la app desde el panel de Gandi o revisa `/lamp0/var/log/www/uwsgi.log`.

### Secretos de GitHub

Configura estos secretos en **Settings → Secrets and variables → Actions** del repositorio:

| Secreto | Descripción |
|---------|-------------|
| `SFTP_SERVER` | Host SFTP de Gandi (p. ej. `sftp.gandi.net`) |
| `SFTP_USERNAME` | Usuario SFTP |
| `SFTP_PASSWORD` | Contraseña SFTP |
| `SFTP_REMOTE_PATH` | Ruta remota de la app Python (donde debe vivir `wsgi.py` junto a `index.html`) |
| `PUBLIC_CONTACT_API_URL` | *(opcional)* URL de la Cloud Function de contacto para producción |

## Contenido

- Eventos: API `listEvents` (Firebase Cloud Function).
- Blog: Markdown en `src/content/blog/` (campos `title`/`excerpt` en va/es/en).
- Documentación: placeholders en `src/lib/docs.ts`.

# Jardín de Bits

Web de [jardinbits.com](https://jardinbits.com), hecha con Astro y publicada en Cloudflare. Cada `git push` a `main` la despliega.

## Escribir un artículo

1. Copia `src/content/blog/_plantilla-articulo.mdx` con un nombre en minúsculas y con guiones, por ejemplo `cisco-ccst-paso-a-paso.mdx`. El nombre será la URL (`/blog/cisco-ccst-paso-a-paso/`).
2. Rellena la cabecera (título, descripción, categoría, madurez, fechas, `afiliado`). Si falta un campo obligatorio, `npm run build` falla: es a propósito.
3. Mientras escribes deja `borrador: true`: el archivo se sube al repositorio pero no se publica.
4. Antes de publicar: pasa el texto por Verificación (cifras, precios, comisiones y fechas) y pon su fecha en `revisado`.
5. Cambia a `borrador: false`.

Si el artículo lleva un enlace con comisión, pon `afiliado: true` (muestra el aviso) y añade `rel="sponsored"` al enlace.

## Abrir el blog

En `src/consts.ts`, `BLOG_ABIERTO = false` mantiene cerrado el blog: no se genera ningún artículo, `/blog/` muestra un aviso y `robots.txt` impide indexar todo el sitio. Al pasarlo a `true` (Puerta 1 del tablero) se publican los artículos que no sean borrador, se añaden al sitemap y `robots.txt` abre el sitio a los buscadores.

Otros interruptores en `src/consts.ts`: `ANUNCIOS_ACTIVOS` (Puerta 2, con gestor de consentimiento) y `CONTACT_EMAIL` (se muestra en /contacto/ cuando lo rellenes).

## Comandos

- `npm run dev`: servidor local en http://localhost:4321
- `npm run build`: genera `dist/` y valida los artículos
- `npm run preview`: sirve `dist/` en local

Requiere Node 22.22 o superior (`.node-version`).

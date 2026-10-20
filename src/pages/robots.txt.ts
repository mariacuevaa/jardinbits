import type { APIRoute } from 'astro';
import { BLOG_ABIERTO } from '../consts';

// Con el blog cerrado nada se indexa. Al abrirlo (BLOG_ABIERTO = true) el sitio se abre a buscadores
// y se anuncia el sitemap. Los borradores nunca se generan, así que no hay nada que ocultar.
export const GET: APIRoute = ({ site }) => {
	const cuerpo = BLOG_ABIERTO
		? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site)}\n`
		: 'User-agent: *\nDisallow: /\n';
	return new Response(cuerpo, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

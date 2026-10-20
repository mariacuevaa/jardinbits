import { getCollection } from 'astro:content';
import { BLOG_ABIERTO } from '../consts';

/** Artículos que se publican: ninguno con el blog cerrado; nunca los borradores. */
export async function getPublicados() {
	if (!BLOG_ABIERTO) return [];
	return getCollection('blog', ({ data }) => !data.borrador && data.idioma === 'es');
}

/** Minutos de lectura aproximados (200 palabras por minuto). */
export function minutosLectura(texto = '') {
	const palabras = texto.split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(palabras / 200));
}

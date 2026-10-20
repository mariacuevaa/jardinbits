import { getCollection } from 'astro:content';
import { BLOG_ABIERTO } from '../consts';

/**
 * Artículos que se publican: ninguno con el blog cerrado; nunca los borradores.
 * En local (`npm run dev`) se ven todos, borradores incluidos, para poder revisarlos antes de publicar.
 */
export async function getPublicados() {
	const enLocal = import.meta.env.DEV;
	if (!BLOG_ABIERTO && !enLocal) return [];
	return getCollection('blog', ({ data }) => data.idioma === 'es' && (enLocal || !data.borrador));
}

/** Minutos de lectura aproximados (200 palabras por minuto). */
export function minutosLectura(texto = '') {
	const palabras = texto.split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(palabras / 200));
}

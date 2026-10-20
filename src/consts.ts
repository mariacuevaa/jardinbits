// Datos globales del sitio.

export const SITE_TITLE = 'Jardín de Bits';
export const SITE_TAGLINE = 'Mi carrera en tecnología, creciendo bit a bit.';
export const SITE_DESCRIPTION =
	'Aprendo tecnología en voz alta: guías, herramientas y recursos probados por quien los usa, para empezar o cambiar de rumbo en IT.';

// Interruptores del proyecto (ver Tablero: Puerta 1 y Puerta 2).
// BLOG_ABIERTO: pasar a true solo al cumplir la Puerta 1. Mientras sea false no se generan artículos
// y la sección /blog/ muestra un aviso con noindex.
export const BLOG_ABIERTO = false;
// ANUNCIOS_ACTIVOS: pasar a true solo con el gestor de consentimiento instalado (Puerta 2).
export const ANUNCIOS_ACTIVOS = false;

// Correo público de contacto. Déjalo vacío hasta que esté confirmado; la página /contacto/ lo muestra solo si existe.
export const CONTACT_EMAIL = '';

export const CATEGORIAS = {
	'aprender-it': {
		nombre: 'Aprender IT',
		descripcion: 'ASIR, redes, cloud, certificaciones y rutas de estudio.',
	},
	'ia-y-herramientas': {
		nombre: 'IA y herramientas',
		descripcion: 'IA para estudiar y trabajar, software, hosting y setup.',
	},
	'carrera-en-tecnologia': {
		nombre: 'Carrera en tecnología',
		descripcion: 'CV, portfolio, entrevistas, empleo y vida profesional en España.',
	},
} as const;

export const MADUREZ = {
	semilla: { nombre: 'Semilla', descripcion: 'Una idea apuntada que he investigado, pero todavía no he puesto a prueba.' },
	brote: { nombre: 'Brote', descripcion: 'Lo estoy probando o lo he usado poco tiempo. Te cuento qué me ha funcionado hasta ahora.' },
	arbol: { nombre: 'Árbol', descripcion: 'Lo uso a menudo y lo he revisado varias veces. Es lo más fiable que publico.' },
} as const;

export type CategoriaId = keyof typeof CATEGORIAS;
export type MadurezId = keyof typeof MADUREZ;

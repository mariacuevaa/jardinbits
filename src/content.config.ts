import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			category: z.enum(['aprender-it', 'ia-y-herramientas', 'carrera-en-tecnologia']),
			madurez: z.enum(['semilla', 'brote', 'arbol']),
			pubDate: z.coerce.date(),
			revisado: z.coerce.date(),
			afiliado: z.boolean(),
			// Los borradores se pueden subir al repositorio sin que se publiquen.
			borrador: z.boolean().default(false),
			idioma: z.enum(['es', 'en']).default('es'),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

export const collections = { blog };
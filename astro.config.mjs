// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { BLOG_ABIERTO } from './src/consts.ts';

// https://astro.build/config
export default defineConfig({
	site: 'https://jardinbits.com',
	integrations: [
		mdx(),
		// Mientras el blog esté cerrado, ninguna URL de /blog/ entra en el sitemap.
		sitemap({ filter: (page) => BLOG_ABIERTO || !new URL(page).pathname.startsWith('/blog') }),
	],
});

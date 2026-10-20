import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { BLOG_ABIERTO, SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	// Con el blog cerrado el feed sale vacío.
	const posts = BLOG_ABIERTO ? await getCollection('blog') : [];
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: `/blog/${post.id}/`,
		})),
	});
}

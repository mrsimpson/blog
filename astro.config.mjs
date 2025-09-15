import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
    site: 'https://mrsimpson.github.io',
    integrations: [mdx()],
    markdown: {
        shikiConfig: {
            theme: 'github-dark',
            wrap: true
        }
    }
});
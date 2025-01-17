import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
    integrations: [mdx()],
    markdown: {
        shikiConfig: {
            theme: 'github-dark',
            wrap: true
        }
    }
});
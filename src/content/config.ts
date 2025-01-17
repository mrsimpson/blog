import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        // Add more fields as needed
    }),
});

export const collections = {
    'blog': blogCollection,
}; 
import { defineCollection, z } from 'astro:content';


const workCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.string(),
    role: z.string(),
    year: z.number(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    coverImage: z.string(),
    order: z.number().default(999),
  }),
});

const editGuideCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  work: workCollection,
  editGuide: editGuideCollection,
};

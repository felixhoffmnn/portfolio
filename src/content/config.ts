import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        description: z.string(),
        status: z.enum(["done", "progress", "planned"]),
        type: z.string(),
        pubDatetime: z.date(),
        year: z.number(),
        featured: z.boolean(),
        thumbnail: image(),
        githubUrl: z.string().optional(),
        liveUrl: z.string().optional(),
        docsUrl: z.string().optional(),
        draft: z.boolean().optional(),
        tags: z.array(z.string()).optional(),
      })
      .strict(),
});

export const collections = { projects };

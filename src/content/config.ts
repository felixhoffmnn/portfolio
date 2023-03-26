import { defineCollection } from "astro:content";
import { z } from "astro:content";

const projects = defineCollection({
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      pubDatetime: z.date(),
      featured: z.boolean(),
      thumbnail: z.string(),
      githubUrl: z.string().optional(),
      liveUrl: z.string().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).optional(),
    })
    .strict(),
});

export const collections = { projects };

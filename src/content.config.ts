import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
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
        thumbnailAttribution: z
          .object({
            author: z.string(),
            authorUrl: z.url(),
            source: z.string(),
            sourceUrl: z.url(),
            license: z
              .object({
                name: z.string(),
                url: z.url(),
              })
              .optional(),
          })
          .optional(),
        githubUrl: z.string().optional(),
        liveUrl: z.string().optional(),
        docsUrl: z.string().optional(),
        draft: z.boolean().optional(),
        tags: z.array(z.string()).optional(),
      })
      .strict(),
});

export const collections = { projects };

import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/case-studies" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    heroImage: z.string().optional(),
    showHeroOnPage: z.boolean().optional(),
    brandName: z.string().optional(),
    subtitle: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    canonical: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    heroImage: z.string().optional(),
    author: z.string().optional(),
    draft: z.boolean().optional(),
    canonical: z.string().optional(),
  }),
});

export const collections = {
  "case-studies": caseStudies,
  blog,
};
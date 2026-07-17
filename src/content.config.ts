import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';


const experienceSchema = z.object({
    title: z.string(),
    company: z.string(),
    companySite: z.string().optional(),
    pin: z.boolean().default(false),
    contract: z.string(),
    startDate: z.string(),
    endDate: z.string().optional()
    
  });

const experienceCollection = defineCollection({
  // Loaders fetch the files, replacing the old 'type' property
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: experienceSchema,
});


export type ExperienceData = z.infer<typeof experienceSchema>;

export const collections = {
  'experience': experienceCollection,
};


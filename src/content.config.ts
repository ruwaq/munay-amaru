import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Subesquemas
const audioSchema = z.object({
  src: z.string(),
  duration: z.string().optional(),
  format: z.string().default('audio/mpeg'),
  narrator: z.string().optional(),
});

const locationSchema = z.object({
  name: z.string(),
  city: z.string().optional(),
  country: z.string().optional(),
  coordinates: z.object({
    lat: z.number(),
    lng: z.number(),
  }).optional(),
  elevation: z.string().optional(),
  weather: z.string().optional(),
});

// 1. POEMAS
const poemas = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/poemas' }),
  schema: z.object({
    title: z.string().default('Sin título'),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    dedication: z.string().optional(),
    location: z.string().optional(),
    audio: audioSchema.optional(),
    tags: z.array(z.string()).default([]),
  }),
});

// 2. CUENTOS
const cuentos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/cuentos' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    summary: z.string().optional(),
    series: z.object({
      name: z.string(),
      chapter: z.number(),
      totalChapters: z.number().optional(),
    }).optional(),
    readingTime: z.number().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

// 3. PENSAMIENTOS
const pensamientos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pensamientos' }),
  schema: z.object({
    title: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    mood: z.string().optional(),
    weather: z.string().optional(),
    device: z.string().optional(),
    starred: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

// 4. MIRADAS (Polaroids)
const miradas = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/miradas' }),
  schema: z.object({
    title: z.string().optional(),
    date: z.coerce.date(),
    analogDate: z.string(),
    photo: z.object({
      src: z.string(),
      alt: z.string().default('Polaroid'),
    }),
    camera: z.object({
      model: z.string().optional(),
      film: z.string().optional(),
    }).optional(),
    footnote: z.string(),
    location: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

// 5. VIAJES
const viajes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/viajes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    journey: z.object({
      name: z.string(),
      day: z.number().optional(),
      stage: z.string().optional(),
    }).optional(),
    location: locationSchema,
    distanceCovered: z.string().optional(),
    ambientAudio: audioSchema.optional(),
    clippings: z.array(z.object({
      title: z.string(),
      type: z.string(),
      note: z.string().optional(),
    })).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

// 6. SONIDOS
const sonidos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/sonidos' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string().default('field_recording'),
    audio: audioSchema.extend({
      fileSize: z.string().optional(),
      bitrate: z.string().optional(),
    }),
    gear: z.string().optional(),
    location: locationSchema.optional(),
    transcript: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { poemas, cuentos, pensamientos, miradas, viajes, sonidos };

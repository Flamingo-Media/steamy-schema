import { z } from "zod";

export const characterSchema = z.object({
  id: z.string().uuid(),
  referenceImage: z.string().uuid().optional(),
  images: z.array(z.string().uuid()).optional(),
  ethnicity: z.string().max(100),
  age: z.number().int().optional(),
  eyeColour: z.string().max(100),
  bodyType: z.string().max(100),
  breastSize: z.string().max(100),
  breastPertness: z.string().max(100).optional(),
  assSize: z.string().max(100),
  hairStyle: z.string().max(100),
  hairColour: z.string().max(100),
  nippleColour: z.string().max(100).optional(),
  vaginaHair: z.string().max(100).optional(),
  vaginaSize: z.string().max(100).optional(),
  skinTone: z.string().max(100).optional(),
  outfit: z.string().max(100),
  name: z.string().max(255),
  personality: z.string().max(100),
  relationship: z.string().max(100),
  occupation: z.string().max(100),
  kinks: z.array(z.string()),
  voice: z.string().optional(),
  interests: z.array(z.string()).optional(),
  userId: z.string().uuid().optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const createCharacterSchema = characterSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type CharacterType = z.infer<typeof characterSchema>;
export type CreateCharacterType = z.infer<typeof createCharacterSchema>;
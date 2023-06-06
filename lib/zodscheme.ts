import { z } from "zod";

export const apiRequestValidator = z.object({
  title: z.string(),
  content: z.string(),
  published: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

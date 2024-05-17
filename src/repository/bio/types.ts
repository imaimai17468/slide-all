import { z } from "zod";

export const BioSchema = z.object({
	title: z.string().min(1),
	description: z.string().optional(),
	name: z.string().min(1),
	bio: z.string().optional(),
	xID: z.string().optional(),
	githubID: z.string().optional(),
});

export type Bio = z.infer<typeof BioSchema>;

export const isBio = (value: unknown): value is Bio =>
	BioSchema.safeParse(value).success;

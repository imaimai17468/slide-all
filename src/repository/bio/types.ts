import { z } from "zod";

export const BioSchema = z.object({
	title: z.string(),
	description: z.string().optional(),
	name: z.string(),
	bio: z.string().optional(),
	xID: z.string().optional(),
	githubID: z.string().optional(),
});

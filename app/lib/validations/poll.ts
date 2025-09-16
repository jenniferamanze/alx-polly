import { z } from "zod";

export const createPollSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .min(5, "Title must be at least 5 characters")
    .max(200, "Title must be less than 200 characters"),
  description: z
    .string()
    .max(1000, "Description must be less than 1000 characters")
    .optional(),
  category: z
    .string()
    .min(1, "Category is required"),
  duration: z
    .string()
    .min(1, "Duration is required"),
  options: z
    .array(z.string().min(1, "Option cannot be empty"))
    .min(2, "At least 2 options are required")
    .max(10, "Maximum 10 options allowed"),
});

export const voteSchema = z.object({
  pollId: z.string().min(1, "Poll ID is required"),
  optionId: z.string().min(1, "Option ID is required"),
});

export type CreatePollFormData = z.infer<typeof createPollSchema>;
export type VoteFormData = z.infer<typeof voteSchema>;

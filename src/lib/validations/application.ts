import { z } from "zod";
import { STATUS_VALUES } from "@/lib/constants";

export const applicationSchema = z
  .object({
    company: z.string().trim().min(1, "Company is required").max(100),
    role: z.string().trim().min(1, "Role is required").max(100),
    location: z.string().trim().max(100).optional(),
    jobUrl: z.union([z.literal(""), z.url("Enter a valid URL")]).optional(),
    salaryMin: z.number().int().nonnegative().optional(),
    salaryMax: z.number().int().nonnegative().optional(),
    status: z.enum(STATUS_VALUES),
    appliedAt: z
      .union([z.literal(""), z.iso.date("Enter a valid date")])
      .optional(),
    notes: z.string().trim().max(2000).optional(),
  })
  .refine(
    (data) =>
      data.salaryMin === undefined ||
      data.salaryMax === undefined ||
      data.salaryMax >= data.salaryMin,
    {
      message: "Max salary must be at least the minimum",
      path: ["salaryMax"],
    },
  );

export type ApplicationInput = z.infer<typeof applicationSchema>;

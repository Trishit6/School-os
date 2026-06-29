import { z } from "zod";

export const academicClassSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Class name is required")
    .max(100, "Class name cannot exceed 100 characters"),

  code: z
    .string()
    .trim()
    .min(2, "Class code is required")
    .max(20, "Class code cannot exceed 20 characters"),

  academic_standard_id: z
    .number()
    .int()
    .positive("Please select an Academic Standard"),

  capacity: z
    .number()
    .int()
    .min(1, "Capacity must be at least 1")
    .max(1000, "Capacity cannot exceed 1000"),

  status: z.boolean(),
});

export type AcademicClassSchema = z.infer<typeof academicClassSchema>;
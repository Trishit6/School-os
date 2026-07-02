import { z } from "zod";


export const academicSessionSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().trim().min(2, "Session name is required").max(100, "Session name cannot exceed 100 characters"),
    startDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid start date"}),
    endDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid end date"}),
  status: z.boolean(),
  isCurrent: z.boolean(),
})

export type AcademicSession = z.infer<typeof academicSessionSchema>
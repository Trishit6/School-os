import { z } from 'zod'

export const studentSessionSchema = z.object({
  studentId: z.coerce.number().min(1),
  academicSessionId: z.coerce.number().min(1),
  academicClassId: z.coerce.number().min(1),
  rollNo: z.coerce.number().int().min(1),
  status: z.boolean().default(true),
})

export type StudentSessionSchema = z.infer<typeof studentSessionSchema>
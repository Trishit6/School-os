import { academicClassSchema } from '#/features/academic-classes/schemas/academic-class.schema.ts';
import { academicSessionSchema } from '#/features/academic_sessions/data/schema.ts';
import { studentSchema } from '#/features/students/schemas/student.schema.ts';
import { z } from 'zod'

export const studentSessionSchema = z.object({
  studentId: z.coerce.number().min(1),
  academicSessionId: z.coerce.number().min(1),
  academicClassId: z.coerce.number().min(1),
  rollNo: z.coerce.number().int().min(1),
  status: z.boolean().default(true),
  student: studentSchema.optional(),
  academicSession: academicSessionSchema.optional(),
  academicClass: academicClassSchema.optional(),
})

export type StudentSessionSchema = z.infer<typeof studentSessionSchema>
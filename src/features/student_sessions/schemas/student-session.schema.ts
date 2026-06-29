import { z } from "zod";

export const studentSessionSchema = z.object({
  studentId: z.coerce.number({
    message: "Student is required",
  }),

  academicSessionId: z.coerce.number({
    message: "Academic session is required",
  }),

  academicClassId: z.coerce.number({
    message: "Academic class is required",
  }),

  rollNo: z
    .string()
    .min(1, "Roll number is required"),

  status: z
    .string()
    .min(1, "Status is required"),
});

export type StudentSessionSchema = z.infer<
  typeof studentSessionSchema
>;
import { z } from "zod";

export const studentSchema = z.object({
  admissionNo: z.string().min(1),

  firstName: z.string().min(2),
  lastName: z.string().min(2),

  email: z.email(),
  phone: z.string().min(10),

  gender: z.string(),

  guardianName: z.string().min(2),
  guardianPhone: z.string().min(10),

  dateOfBirth: z.string(),

  address: z.string().min(5),

  status: z.string(),
});

export type StudentFormSchema =
  z.infer<typeof studentSchema>;
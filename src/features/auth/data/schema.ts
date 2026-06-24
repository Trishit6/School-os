import { z } from "zod";

export const LoginSchema = z.object({
  email: z.email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  role: z.string(),
});

export const authRequestSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const authResponseSchema = z.object({
  token: z.string(),
  user: UserSchema,
});

export type LoginInput = z.infer<typeof LoginSchema>;
export type AuthRequest = z.infer<typeof authRequestSchema>;
export type AuthResponse = z.infer<typeof authResponseSchema>;
export type UserWithRole = z.infer<typeof UserSchema>;
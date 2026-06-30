import type { StudentSession } from "#/features/student_sessions/types";

export interface Student {
  id: number;

  name: string;

  dateOfBirth: string;

  guardianName: string;

  status: boolean;

  studentSessions?: StudentSession[];

  createdAt?: string;

  updatedAt?: string;
}

export interface StudentFormData {
  name: string;

  dateOfBirth: string;

  guardianName: string;

  status: boolean;
}
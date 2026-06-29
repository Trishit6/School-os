import api from "#/lib/api";

import type {
  StudentSession,
  StudentSessionFormData,
} from "../types";

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

export async function getStudentSessions(): Promise<StudentSession[]> {
  const response =
    await api.get<ApiResponse<StudentSession[]>>(
      "/student-sessions"
    );

  return response.data.data;
}

export async function getStudentSession(
  id: number
): Promise<StudentSession> {
  const response =
    await api.get<ApiResponse<StudentSession>>(
      `/student-sessions/${id}`
    );

  return response.data.data;
}

export async function createStudentSession(
  payload: StudentSessionFormData
): Promise<StudentSession> {
  const response =
    await api.post<ApiResponse<StudentSession>>(
      "/student-sessions",
      payload
    );

  return response.data.data;
}

export async function updateStudentSession(
  id: number,
  payload: StudentSessionFormData
): Promise<StudentSession> {
  const response =
    await api.put<ApiResponse<StudentSession>>(
      `/student-sessions/${id}`,
      payload
    );

  return response.data.data;
}

export async function deleteStudentSession(
  id: number
): Promise<void> {
  await api.delete(
    `/student-sessions/${id}`
  );
}
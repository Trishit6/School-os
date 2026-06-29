import api from "#/lib/api";
import type {
  Student,
  StudentFormData,
} from "../types";

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

export async function getStudents() {
  const response =
    await api.get<ApiResponse<Student[]>>(
      "/students"
    );

  return response.data.data;
}

export async function createStudent(
  payload: StudentFormData
) {
  const response =
    await api.post<ApiResponse<Student>>(
      "/students",
      payload
    );

  return response.data.data;
}

export async function updateStudent(
  id: string,
  payload: StudentFormData
) {
  const response =
    await api.put<ApiResponse<Student>>(
      `/students/${id}`,
      payload
    );

  return response.data.data;
}

export async function deleteStudent(
  id: string
) {
  await api.delete(`/students/${id}`);
}
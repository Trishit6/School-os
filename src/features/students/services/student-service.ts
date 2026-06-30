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

export async function getStudents(): Promise<Student[]> {
  const response = await api.get<ApiResponse<Student[]>>("/students");

  const data = response.data.data;

  if (Array.isArray(data)) {
    return data;
  }

  if (data && "data" in data) {
    return (data as any).data;
  }

  return [];
}

export async function getStudent(id: number): Promise<Student> {
  const response = await api.get<ApiResponse<Student>>(
    `/students/${id}`,
  );

  return response.data.data;
}

export async function createStudent(
  payload: StudentFormData,
): Promise<Student> {
  const response = await api.post<ApiResponse<Student>>(
    "/students",
    payload,
  );

  return response.data.data;
}

export async function updateStudent(
  id: number,
  payload: StudentFormData,
): Promise<Student> {
  const response = await api.put<ApiResponse<Student>>(
    `/students/${id}`,
    payload,
  );

  return response.data.data;
}

export async function deleteStudent(
  id: number,
): Promise<void> {
  await api.delete(`/students/${id}`);
}
import api from "#/lib/api.ts"

import type {
  AcademicClass,
  AcademicClassFormData,
  AcademicStandardOption,
} from "./types"

interface ApiResponse<T> {
  success: boolean
  message?: string
  data: T
}

export async function getAcademicClasses(): Promise<AcademicClass[]> {
  const response = await api.get<ApiResponse<AcademicClass[]>>(
    "/academic_classes",
  )

  return response.data.data
}

export async function getAcademicClass(
  id: number,
): Promise<AcademicClass> {
  const response = await api.get<ApiResponse<AcademicClass>>(
    `/academic_classes/${id}`,
  )

  return response.data.data
}

export async function createAcademicClass(
  payload: AcademicClassFormData,
): Promise<AcademicClass> {
  const response = await api.post<ApiResponse<AcademicClass>>(
    "/academic_classes",
    payload,
  )

  return response.data.data
}

export async function updateAcademicClass(
  id: number,
  payload: AcademicClassFormData,
): Promise<AcademicClass> {
  const response = await api.put<ApiResponse<AcademicClass>>(
    `/academic_classes/${id}`,
    payload,
  )

  return response.data.data
}

export async function deleteAcademicClass(
  id: number,
): Promise<void> {
  await api.delete(`/academic_classes/${id}`)
}

export async function getAcademicStandards(): Promise<
  AcademicStandardOption[]
> {
  const response = await api.get<
    ApiResponse<AcademicStandardOption[]>
  >("/academic_standards")

  return response.data.data
}
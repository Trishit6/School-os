
import api from "#/lib/api.ts";
import type {
  AcademicStandard,
  AcademicStandardFormData,
  AcademicStandardResponse,
  AcademicStandardsResponse,
} from "../types"


export const getAcademicStandards = async (): Promise<
  AcademicStandard[]
> => {
  const response =
    await api.get<AcademicStandardsResponse>(
      "/academic_standards"
    )

  return response.data.data
}


export const getAcademicStandard = async (
  id: number
): Promise<AcademicStandard> => {
  const response =
    await api.get<AcademicStandardResponse>(
      `/academic_standards/${id}`
    )

  return response.data.data
}



export const createAcademicStandard = async (
  payload: AcademicStandardFormData
): Promise<AcademicStandard> => {
  const response =
    await api.post<AcademicStandardResponse>(
      "/academic_standards",
      payload
    )

  return response.data.data
}



export const updateAcademicStandard = async (
  id: number,
  payload: AcademicStandardFormData
): Promise<AcademicStandard> => {
  const response =
    await api.put<AcademicStandardResponse>(
      `/academic_standards/${id}`,
      payload
    )

  return response.data.data
}



export const deleteAcademicStandard = async (
  id: number
): Promise<void> => {
  await api.delete(
    `/academic_standards/${id}`
  )
}
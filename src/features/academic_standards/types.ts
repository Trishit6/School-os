export interface AcademicStandard {
  id: number
  name: string
  code: string
  status: boolean
  createdAt: string
  updatedAt: string
}

export interface AcademicStandardFormData {
  name: string
  code: string
  status: boolean
}

export interface AcademicStandardResponse {
  success: boolean
  message?: string
  data: AcademicStandard
}

export interface AcademicStandardsResponse {
  success: boolean
  data: AcademicStandard[]
}
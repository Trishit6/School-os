export type AcademicSession = {
  id: number
  name: string
  startDate: string
  endDate: string
  isActive: boolean
  description?: string | null
  createdAt?: string
}

export type AcademicSessionPayload = {
  name: string
  startDate: string
  endDate: string
  isActive: boolean
}
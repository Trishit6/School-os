export type AcademicSession = {
  id: number
  name: string
  start_date: string
  end_date: string
  is_active: boolean
  description?: string | null
  created_at?: string
}

export type AcademicSessionPayload = {
  name: string
  start_date: string
  end_date: string
  is_active: boolean
}
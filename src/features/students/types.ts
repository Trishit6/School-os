import type { StudentSession } from '../student_sessions/types'

export type Student = {
  id: number
  name: string
  dateOfBirth: string
  guardianName: string
  status: boolean
  photo?: string | null
  studentSessions?: StudentSession[]
}

export type StudentFormData = {
  name: string
  dateOfBirth: string
  guardianName: string
  status: boolean
  photo?: string | null
}
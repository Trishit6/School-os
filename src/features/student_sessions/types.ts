export type StudentSession = {
  id: number
  studentId: number
  academicSessionId: number
  academicClassId: number
  rollNo: number
  status: boolean
  student?: {
    id: number
    name: string
    email?: string | null
    phone?: string | null
  }
  academicSession?: {
    id: number
    name: string
  }
  academicClass?: {
    id: number
    name?: string | null
    code?: string | null
  }
}
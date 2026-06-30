export type StudentSessionPayload = {
  student_id: number
  academic_session_id: number
  academic_class_id: number
  roll_no: number
  status: boolean
}

export type StudentSession = {
  id: number

  studentId: number
  academicSessionId: number
  academicClassId: number
  rollNo: number
  status: boolean

  createdAt?: string
  updatedAt?: string

  student?: {
    id: number
    name: string
  }

  academicSession?: {
    id: number
    name: string
  }

  academicClass?: {
    id: number
    name: string
    code?: string
    academicStandard?: {
      id: number
      name: string
    }
  }
}
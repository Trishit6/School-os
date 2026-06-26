export interface AcademicSessionOption {
  id: number
  name: string
}

export interface AcademicStandardOption {
  id: number
  name: string
}

export interface AcademicClass {
  id: number

  academicSessionId: number

  academicStandardId: number

  name: string

  capacity: number

  status: boolean

  academicSession: AcademicSessionOption

  academicStandard: AcademicStandardOption

  createdAt: string

  updatedAt: string
}

export interface AcademicClassFormData {
  academic_session_id: number

  academic_standard_id: number

  name: string

  capacity: number

  status: boolean
}
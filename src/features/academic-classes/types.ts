export interface AcademicStandardOption {
  id: number
  name: string
}

export interface AcademicClass {
  id: number

  name: string

  code: string

  capacity: number

  status: boolean

  academicStandardId: number

  academicStandard: AcademicStandardOption

  createdAt: string

  updatedAt: string
}

export interface AcademicClassFormData {
  name: string

  code: string

  academic_standard_id: number

  capacity: number

  status: boolean
}
export type Student = {
  id: string
  admissionNo: string

  firstName: string
  lastName: string

  email: string
  phone: string

  gender: "male" | "female" | "other"

  grade: string
  section: string

  guardianName: string
  guardianPhone: string

  attendance: number
  gpa: number

  status: "Active" | "On Leave" | "Inactive"
}
import api from '#/lib/api'
import type { StudentSession, StudentSessionPayload } from '../types'

type ApiResponse<T> = {
  success: boolean
  message?: string
  data: T
}

export async function getStudentSessions(): Promise<StudentSession[]> {
  const res = await api.get<ApiResponse<StudentSession[]>>('/student_sessions')
  console.log(res)
  return res.data.data ?? []
}

export async function getStudentSession(id: number) {
  const res = await api.get<ApiResponse<StudentSession>>(`/student_sessions/${id}`)
  return res.data.data
}

export async function createStudentSession(payload: StudentSessionPayload) {
  const res = await api.post<ApiResponse<StudentSession>>(
    '/student_sessions',
    payload,
  )
  return res.data.data
}

export async function updateStudentSession(
  id: number,
  payload: StudentSessionPayload,
) {
  const res = await api.put<ApiResponse<StudentSession>>(
    `/student_sessions/${id}`,
    payload,
  )
  return res.data.data
}

export async function deleteStudentSession(id: number) {
  await api.delete(`/student_sessions/${id}`)
}
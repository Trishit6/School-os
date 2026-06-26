import api from "@/lib/api"

import type {
  AcademicSession,
  AcademicSessionPayload,
} from "../types"

export const academicSessionService = {
  async getAll(): Promise<AcademicSession[]> {
    const response = await api.get(
      "/academic_sessions"
    )

    return response.data.data
  },

  async create(
    payload: AcademicSessionPayload
  ): Promise<AcademicSession> {
    const response = await api.post(
      "/academic_sessions",
      payload
    )

    return response.data.data
  },

  async update(
    id: number,
    payload: AcademicSessionPayload
  ): Promise<AcademicSession> {
    const response = await api.put(
      `/academic_sessions/${id}`,
      payload
    )

    return response.data.data
  },

  async delete(
    id: number
  ): Promise<void> {
    await api.delete(
      `/academic_sessions/${id}`
    )
  },
}
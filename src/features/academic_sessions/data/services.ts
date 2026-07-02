import api from '@/lib/api'

import type {
  AcademicSession,
  AcademicSessionPayload,
} from '../types'

type AcademicSessionApi = {
  id: number
  name: string
  startDate: string
  endDate: string
  isActive: boolean
  description?: string | null
  createdAt?: string
}

const MODULE_ROUTE = '/academic_sessions'

const mapAcademicSession = (item: AcademicSessionApi): AcademicSession => ({
  id: item.id,
  name: item.name,
  startDate: item.startDate,
  endDate: item.endDate,
  isActive: item.isActive,
  description: item.description ?? null,
  createdAt: item.createdAt,
})

const toApiPayload = (payload: AcademicSessionPayload) => ({
  name: payload.name,
  start_date: payload.startDate,
  end_date: payload.endDate,
  is_active: payload.isActive,
})

const extractList = (response: any): AcademicSessionApi[] => {
  if (Array.isArray(response?.data)) return response.data
  if (Array.isArray(response?.data?.data)) return response.data.data
  return []
}

const extractItem = (response: any): AcademicSessionApi => {
  return response?.data?.data ?? response?.data
}

export const academicSessionService = {
  async getAll(): Promise<AcademicSession[]> {
    const response = await api.get(MODULE_ROUTE)
    return extractList(response).map(mapAcademicSession)
  },

  async create(payload: AcademicSessionPayload): Promise<AcademicSession> {
    const response = await api.post(MODULE_ROUTE, toApiPayload(payload))
    return mapAcademicSession(extractItem(response))
  },

  async update(
    id: number,
    payload: AcademicSessionPayload,
  ): Promise<AcademicSession> {
    const response = await api.put(
      `${MODULE_ROUTE}/${id}`,
      toApiPayload(payload),
    )
    return mapAcademicSession(extractItem(response))
  },

  async delete(id: number): Promise<void> {
    await api.delete(`${MODULE_ROUTE}/${id}`)
  },

  async activate(id: number): Promise<void> {
    await api.patch(`${MODULE_ROUTE}/${id}/activate`)
  },
}
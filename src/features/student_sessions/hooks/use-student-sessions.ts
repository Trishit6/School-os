import { useQuery } from '@tanstack/react-query'
import { getStudentSessions } from '../services/student-session-service'

export function useStudentSessions() {
  return useQuery({
    queryKey: ['student-sessions'],
    queryFn: async () => {
      try {
        const res = await getStudentSessions()
        return Array.isArray(res) ? res : []
      } catch (err) {
        console.error('API Error:', err)
        return []
      }
    },
  })
}
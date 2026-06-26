import { useQuery } from "@tanstack/react-query"

import { academicSessionService } from "../services/academic-session.service"

export function useAcademicSessions() {
  return useQuery({
    queryKey: ["academic-sessions"],

    queryFn: () =>
      academicSessionService.getAll(),
  })
}
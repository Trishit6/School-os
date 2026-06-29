import { useQuery } from "@tanstack/react-query";

import { getStudentSessions } from "../services/student-session-service";

export function useStudentSessions() {
  return useQuery({
    queryKey: ["student-sessions"],
    queryFn: getStudentSessions,
  });
}
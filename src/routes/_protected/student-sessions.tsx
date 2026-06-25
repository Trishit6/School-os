import StudentSessionsComponent from '#/features/student_sessions/index.tsx'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/student-sessions')({
  component: StudentSessionsComponent,
})

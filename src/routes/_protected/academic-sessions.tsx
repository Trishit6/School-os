import AcademicSessionComponent from '#/features/academic_sessions/index.tsx'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/academic-sessions')({
  component: AcademicSessionComponent,
})

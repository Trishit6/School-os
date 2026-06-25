import AcademicStandardComponent from '#/features/academic_standards/index.tsx'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/academic-standards')({
  component: AcademicStandardComponent,
})

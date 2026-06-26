import AcademicClassComponent from '#/features/academic-classes/index.tsx'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/academic-classes')({
  component: AcademicClassComponent,
})

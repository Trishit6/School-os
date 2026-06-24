import TeachersComponent from '#/features/teachers/index.tsx';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/teachers')({
  component: TeachersComponent,
})


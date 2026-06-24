import ClassesComponent from '#/features/classes/index.tsx';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/classes')({
  component: ClassesComponent,
})


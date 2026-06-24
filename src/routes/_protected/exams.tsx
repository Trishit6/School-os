import ExamsComponent from '#/features/exams/index.tsx';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/exams')({
  component: ExamsComponent,
})

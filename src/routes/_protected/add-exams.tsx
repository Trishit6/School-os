import AddExamSchedulePage from '#/features/exams/components/add-exam-schedule.tsx';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/add-exams')({
  component: AddExamSchedulePage,
})
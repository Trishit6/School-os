import TimetableComponent from '#/features/timetable/index.tsx';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/timetable')({
  component: TimetableComponent,
})

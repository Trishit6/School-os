import AttendanceComponent from '#/features/attendance/index.tsx';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/attendance')({
  component: AttendanceComponent,
})


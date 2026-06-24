import { createFileRoute } from '@tanstack/react-router'
import StudentComponent from '../../features/students/index';

export const Route = createFileRoute('/_protected/students')({
  component: StudentComponent,
})


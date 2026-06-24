import { createFileRoute } from '@tanstack/react-router'
import GradesComponent from '../../features/grades';

export const Route = createFileRoute('/_protected/grades')({
  component: GradesComponent,
})

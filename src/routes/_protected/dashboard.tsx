import { createFileRoute } from '@tanstack/react-router'
import DashboardComponent from '#/features/dashboard';

export const Route = createFileRoute('/_protected/dashboard')({
  component: DashboardComponent,
})


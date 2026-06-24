import FeesComponent from '#/features/fees/index.tsx';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/fees')({
  component: FeesComponent,
})

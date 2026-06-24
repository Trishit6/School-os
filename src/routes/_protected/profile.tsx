import ProfileComponent from '#/features/auth/Profile/components/profile-page.tsx';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/profile')({
  component: ProfileComponent,
})


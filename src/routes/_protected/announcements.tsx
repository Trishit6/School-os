import AnnouncementsComponent from '#/features/announcements/index.tsx';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/announcements')({
  component: AnnouncementsComponent,
})

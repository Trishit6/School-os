import NewAnnouncementPage from '#/features/announcements/components/announcements-new.tsx';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/new-announcementpage')({
  component: NewAnnouncementPage,
})


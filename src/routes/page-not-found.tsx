import { createFileRoute } from '@tanstack/react-router'
import PageNotFoundComponent from '../features/page-not-found';

export const Route = createFileRoute('/page-not-found')({
  component: PageNotFoundComponent,
})


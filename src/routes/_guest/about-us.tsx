import { createFileRoute } from '@tanstack/react-router'
import AboutUsPage from '../../features/about-us';

export const Route = createFileRoute('/_guest/about-us')({
  component: AboutUsPage,
})

  

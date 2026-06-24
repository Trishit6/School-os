import { createFileRoute, redirect } from '@tanstack/react-router'

import LoginComponent from '@/features/auth/Login'

export const Route = createFileRoute('/_guest/login')({
  beforeLoad: ({ context }) => {
    if (!context?.auth) {
      return
    }

    if (context.auth.isLoading) {
      return
    }

    if (context.auth.isAuthenticated) {
      console.log('1')
      throw redirect({
        to: '/dashboard',
      })
    }
  },

  component: LoginComponent,
})

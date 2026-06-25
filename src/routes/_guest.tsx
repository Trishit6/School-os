import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_guest')({
  beforeLoad: ({ context }) => {
    if (!context.auth) {
      return
    }

    if (context.auth.isLoading) {
      return
    }

    if (context.auth.isAuthenticated) {
      throw redirect({
        to: '/dashboard',
      })
    }
  },

  component: GuestLayout,
})

function GuestLayout() {
  return <Outlet />
}

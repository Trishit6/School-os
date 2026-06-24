import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import type { QueryClient } from '@tanstack/react-query'
import type { UserWithRole } from '@/features/auth/data/schema'

export interface RouterContext {
  auth: {
    user: UserWithRole | null
    isLoading: boolean
    isAuthenticated: boolean
    login: (token: string, user?: UserWithRole) => Promise<void>
    logout: () => Promise<void>
  }
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
})

function RootLayout() {
  return <Outlet />
}

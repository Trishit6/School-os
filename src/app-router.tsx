import { RouterProvider } from '@tanstack/react-router'
import { useEffect, useMemo } from 'react'

import { getRouter } from './router'
import { useAuth } from './features/auth/contexts/auth-context'
import * as TanstackQuery from './integrations/tanstack-query/root-provider'

const router = getRouter()

export function AppRouter() {
  const auth = useAuth()

  const { queryClient } = TanstackQuery.getContext()

  const routerContext = useMemo(
    () => ({
      auth,
      queryClient,
    }),
    [auth, queryClient],
  )

  useEffect(() => {
    router.invalidate()
  }, [auth.isAuthenticated, auth.isLoading])

  if (auth.isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    )
  }

  return <RouterProvider router={router} context={routerContext} />
}

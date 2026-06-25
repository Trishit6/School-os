import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import Sidebar from '#/components/layout/sidebar.tsx'
import Topbar from '#/components/layout/topbar.tsx'

export const Route = createFileRoute('/_protected')({
  beforeLoad: ({ context }) => {
    if (!context.auth) {
      return
    }

    if (context.auth.isLoading) {
      return
    }

    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/login',
      })
    }
  },

  component: ProtectedLayout,
})

function ProtectedLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f6f7f9]">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto p-4 md:p-5">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

import { Outlet } from "@tanstack/react-router"

export default function GuestContent() {
  return (
    <main className="flex-1">
      <Outlet />
    </main>
  )
}
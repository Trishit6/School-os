import {
  createFileRoute,
  Outlet,
  redirect,
} from "@tanstack/react-router";

import Sidebar from "#/components/layout/sidebar.tsx";
import Topbar from "#/components/layout/topbar.tsx";

import { profileService }
from "@/features/auth/data/api";

export const Route =
  createFileRoute("/_protected")({
    beforeLoad: async () => {
      try {
        await profileService();
      } catch {
        throw redirect({
          to: "/login",
        });
      }
    },

    component: RouteComponent,
  });

function RouteComponent() {
  return (
    <div className="flex h-screen bg-[#f6f7f9] overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto p-4 md:p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
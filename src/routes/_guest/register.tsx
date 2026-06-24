import {
  createFileRoute,
  redirect,
} from "@tanstack/react-router";
import RegisterComponent from "@/features/auth/Register";

export const Route = createFileRoute("/_guest/register")({
  beforeLoad: ({ context }) => {
    if (context.auth.loading) return;

    if (context.auth.authenticated) {
      throw redirect({
        to: "/dashboard",
      });
    }
  },
  component: RegisterComponent,
});
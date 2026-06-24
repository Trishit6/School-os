import { createFileRoute } from "@tanstack/react-router";
import ForgotPasswordComponent from "@/features/auth/forgot-password";

export const Route = createFileRoute("/_guest/forgot-password")({
  component: ForgotPasswordComponent,
});
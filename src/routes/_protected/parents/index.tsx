import ParentsComponent from "#/features/parents";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/parents/")({
  component: ParentsComponent,
});
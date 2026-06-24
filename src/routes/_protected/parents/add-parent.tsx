import AddParentPage from "#/features/parents/add-parent";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/parents/add-parent")({
  component: AddParentPage,
});
import EditParentPage from "#/features/parents/$parentId/edit";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/parents/$parentId/edit")({
  component: EditParentPage,
});
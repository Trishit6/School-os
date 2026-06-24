import ParentDetailsPage from "#/features/parents/$parentId";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/parents/$parentId/")({
  component: ParentDetailsPage,
});
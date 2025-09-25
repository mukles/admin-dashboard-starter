import { AppLayout } from "@/app/layout";
import { createRootRoute } from "@tanstack/react-router";

export const rootRoute = createRootRoute({
  component: AppLayout,
});

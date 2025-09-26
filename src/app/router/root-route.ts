import { AppLayout } from "@/app/layout";
import { getSession } from "@/shared/services";
import { createRootRoute } from "@tanstack/react-router";

export const rootRoute = createRootRoute({
  component: AppLayout,
  context: () => ({
    auth: getSession(),
  }),
});

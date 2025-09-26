import { createRoute, redirect } from "@tanstack/react-router";
import { AuthGuard } from "../layout";
import { rootRoute } from "./root-route";

export const protectedRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "protected",
  component: AuthGuard,
  beforeLoad: (ctx) => {
    const { auth } = ctx.context;
    if (!auth) {
      throw redirect({ to: "/login" });
    }
  },
});

import { isAuthenticated } from "@/shared/services";
import { createRoute, redirect } from "@tanstack/react-router";
import { AuthGuard } from "../layout";
import { rootRoute } from "./root-route";

export const protectedRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "protected",
  component: AuthGuard,
  beforeLoad: () => {
    if (!isAuthenticated()) {
      throw redirect({ to: "/login" });
    }
  },
});
